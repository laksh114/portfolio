import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function AIOrb() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || webglError) return;

    let renderer;
    let animationFrameId;
    let observer;
    let handleMouseMove;
    let handleResize;
    let sphereGeo, sphereMat, particleGeo, particleMat;
    const ringsArray = [];

    try {
      // Track visibility to pause drawing loop when out of viewport
      let isVisible = true;
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      // Colors (Emerald, Mint, and Teal theme)
      const colorCyan = new THREE.Color('#34d399');
      const colorPurple = new THREE.Color('#10b981');
      const colorBlue = new THREE.Color('#14b8a6');

      // Scene & Camera
      const scene = new THREE.Scene();
      
      const width = canvasRef.current.clientWidth || 300;
      const height = canvasRef.current.clientHeight || 300;
      
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 6;

      // WebGL Renderer with try-catch verification
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);

      // 1. Glowing Wireframe Sphere
      sphereGeo = new THREE.SphereGeometry(1.6, 24, 24);
      sphereMat = new THREE.MeshBasicMaterial({
        color: colorPurple,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphere);

      // 2. Inner Dot Cloud
      const particleCount = 600;
      particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 1.35 * Math.cbrt(Math.random());

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const lerpColor = colorCyan.clone().lerp(colorPurple, Math.random());
        colors[i * 3] = lerpColor.r;
        colors[i * 3 + 1] = lerpColor.g;
        colors[i * 3 + 2] = lerpColor.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const createCircleTexture = () => {
        const size = 16;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
        return new THREE.CanvasTexture(canvas);
      };

      particleMat = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        map: createCircleTexture(),
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // 3. Orbiting Rings
      const ringGroup = new THREE.Group();
      scene.add(ringGroup);

      const ringCount = 3;
      for (let i = 0; i < ringCount; i++) {
        const radius = 2.0 + i * 0.25;
        const torusGeo = new THREE.TorusGeometry(radius, 0.012, 8, 80);
        const torusMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? colorCyan : (i === 1 ? colorPurple : colorBlue),
          transparent: true,
          opacity: 0.35 - i * 0.05,
          blending: THREE.AdditiveBlending
        });
        const ring = new THREE.Mesh(torusGeo, torusMat);
        
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        
        ringGroup.add(ring);
        ringsArray.push({
          mesh: ring,
          rotSpeedX: (Math.random() - 0.5) * 0.008,
          rotSpeedY: (Math.random() - 0.5) * 0.008,
          rotSpeedZ: (Math.random() - 0.5) * 0.008
        });
      }

      handleMouseMove = (e) => {
        if (!renderer || !renderer.domElement) return;
        const rect = renderer.domElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseRef.current.targetX = ((x / rect.width) * 2 - 1) * 0.6;
        mouseRef.current.targetY = -((y / rect.height) * 2 - 1) * 0.6;
      };

      window.addEventListener('mousemove', handleMouseMove);

      handleResize = () => {
        if (!canvasRef.current || !canvasRef.current.parentElement) return;
        const w = canvasRef.current.parentElement.clientWidth;
        const h = canvasRef.current.parentElement.clientHeight || w;
        
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      const clock = new THREE.Clock();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (!isVisible || !renderer) return;

        const elapsedTime = clock.getElapsedTime();

        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

        sphere.rotation.y = elapsedTime * 0.15 + mouseRef.current.x * 0.8;
        sphere.rotation.x = elapsedTime * 0.08 + mouseRef.current.y * 0.8;

        particles.rotation.y = -elapsedTime * 0.1 + mouseRef.current.x * 0.5;
        particles.rotation.x = -elapsedTime * 0.05 + mouseRef.current.y * 0.5;

        ringsArray.forEach(ring => {
          ring.mesh.rotation.x += ring.rotSpeedX;
          ring.mesh.rotation.y += ring.rotSpeedY;
          ring.mesh.rotation.z += ring.rotSpeedZ;
        });

        ringGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.05;
        renderer.render(scene, camera);
      };

      animate();

    } catch (e) {
      console.warn("WebGL Renderer initialization failed. Using CSS fallback orb.", e);
      setWebglError(true);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      
      // Cleanup geometries & materials
      if (sphereGeo) sphereGeo.dispose();
      if (sphereMat) sphereMat.dispose();
      if (particleGeo) particleGeo.dispose();
      if (particleMat) particleMat.dispose();
      
      ringsArray.forEach(ring => {
        ring.mesh.geometry.dispose();
        ring.mesh.material.dispose();
      });
      
      if (renderer) renderer.dispose();
    };
  }, [webglError]);

  if (webglError) {
    // Fallback UI: An animated, premium, futuristic CSS-only orb
    return (
      <div ref={containerRef} className="w-full h-full relative flex items-center justify-center min-h-[350px] md:min-h-[450px] select-none">
        <div className="absolute w-[240px] h-[240px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-glow" />
        <div className="absolute w-[240px] h-[240px] rounded-full bg-purple-600/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        
        {/* CSS Orb meshes */}
        <div className="relative w-48 h-48 rounded-full border border-purple-500/30 flex items-center justify-center animate-spin-slow shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          <div className="w-40 h-40 rounded-full border border-cyan-500/30 flex items-center justify-center animate-float shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            <div className="w-32 h-32 rounded-full border border-indigo-500/20 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.2)]" />
          </div>
          {/* Glowing center */}
          <div className="absolute w-8 h-8 rounded-full bg-cyan-400 blur-sm animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center min-h-[350px] md:min-h-[450px]">
      <div className="absolute w-[240px] h-[240px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-glow" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-purple-600/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing max-w-[500px] max-h-[500px]"
      />
    </div>
  );
}
