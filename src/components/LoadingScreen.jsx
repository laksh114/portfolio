import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: LJ, 1: Laksh Jangid, 2: Fade Out

  useEffect(() => {
    // Stage 1: Transition "LJ" to "Laksh Jangid" after 1.2s
    const timer1 = setTimeout(() => {
      setPhase(1);
    }, 1200);

    // Stage 2: Slide and Fade out the overlay container after 2.8s
    const timer2 = setTimeout(() => {
      setPhase(2);
    }, 2800);

    // Stage 3: Notify parent component that loading is done after 3.5s
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#060913] select-none transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 2 ? 'opacity-0 -translate-y-24 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Glow backgrounds */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-emerald-600/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-teal-600/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative flex flex-col items-center overflow-hidden px-6">
        <div className="h-24 flex items-center justify-center">
          {phase === 0 ? (
            <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-400 font-space drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse">
              LJ
            </h1>
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 font-space drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-700 ease-out transform scale-100 animate-fade-in">
              Laksh Jangid
            </h1>
          )}
        </div>

        {/* Loading Progress Bar */}
        <div className="w-[180px] md:w-[260px] h-[2px] bg-white/5 mt-8 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 bottom-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 shadow-[0_0_10px_#10b981] transition-all duration-[3200ms] ease-out"
            style={{
              left: phase === 0 ? '-100%' : '100%',
              width: '60%'
            }}
          />
        </div>

        {/* Status text */}
        <p className="text-[10px] tracking-[0.25em] text-gray-500 font-mono mt-4 uppercase select-none opacity-40">
          Initializing Digital Space
        </p>
      </div>
    </div>
  );
}
