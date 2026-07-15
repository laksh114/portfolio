import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Mouse positioning caches
  const mouseRef = useRef({ x: -100, y: -100 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile / touch capabilities
    const checkDevice = () => {
      const mobileWidth = window.innerWidth < 1024;
      const touchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(mobileWidth || touchCapable);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Update target positions cache
      mouseRef.current = { x: clientX, y: clientY };
      
      // Set CSS variables for radial mouse glow backdrops
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
      
      // Defensive check to find closest interactive ancestor
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const isInteractive = (
          target.closest('a') || 
          target.closest('button') || 
          target.closest('input') || 
          target.closest('textarea') || 
          target.closest('select') ||
          target.closest('[role="button"]')
        );
        setIsHovered(!!isInteractive);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Performance-optimized LERP loop running in requestAnimationFrame
  useEffect(() => {
    if (isMobile) return;
    
    let reqId;

    const tick = () => {
      // Direct position for the center dot
      setCursorPos({ x: mouseRef.current.x, y: mouseRef.current.y });

      // Lerped position for the outer delay ring
      setRingPos(prev => {
        const dx = mouseRef.current.x - prev.x;
        const dy = mouseRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });

      reqId = requestAnimationFrame(tick);
    };

    reqId = requestAnimationFrame(tick);
    
    return () => cancelAnimationFrame(reqId);
  }, [isMobile]);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className={`min-h-screen bg-[#060913] text-white flex flex-col justify-between relative ${!isMobile ? 'desktop-custom-cursor' : ''}`}>
          
          {/* Background Mouse Glow Aura */}
          <div className="mouse-glow" />

          {/* Custom Cursor elements (shown on Desktop only) */}
          {!isMobile && (
            <div className={isHovered ? 'cursor-hover' : ''}>
              <div 
                className="custom-cursor" 
                style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
              />
              <div 
                className="custom-cursor-ring" 
                style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
              />
            </div>
          )}

          {/* Header Sticky Navbar */}
          <Navbar />

          {/* Content Pages Router */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<ProjectDetails />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

        </div>
      )}
    </Router>
  );
}
