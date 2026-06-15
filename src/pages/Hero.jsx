import React, { useState, useEffect } from "react";
import bgImg from "../assets/home_bg.png";
import middleGhostImg from "../assets/ghosts/ghost.png";
import textBooImg from "../assets/boo.png";
import slideGhostImg from "../assets/ghosts/ghost1.png";

export default function Hero() {
  const [ghostGrown, setGhostGrown] = useState(false);
  const [showBooText, setShowBooText] = useState(false);

  useEffect(() => {
    // Phase 1: Scale up the central ghost
    const growTimer = setTimeout(() => {
      setGhostGrown(true);
    }, 100);

    // Phase 2: Smoothly fade in "Boo!" text once scaling settles
    const textTimer = setTimeout(() => {
      setShowBooText(true);
    }, 2100);

    return () => {
      clearTimeout(growTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Canvas Environment */}
      <div className="absolute inset-0 select-none">
        <img
          src={bgImg}
          alt="Village Night Backgound"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground Interactive Arena */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
        
        {/* Dynamic Title Stacking context */}
        <div className="relative flex items-center justify-center w-full max-w-4xl min-h-[350px] md:min-h-[500px]">
          
          {/* Animated "Boo!" Layer */}
          <div 
            className={`absolute z-10 max-w-xl md:max-w-3xl px-6 transition-all duration-[1500ms] ease-out ${
              showBooText 
                ? "opacity-100 scale-100 filter drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]" 
                : "opacity-0 scale-95"
            }`}
          >
            <img 
              src={textBooImg} 
              alt="Boo Title Typography" 
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Core Kinetic Growing Ghost */}
          <div
            className={`relative z-20 transition-all duration-[2000ms] ease-out transform ${
              ghostGrown 
                ? "scale-100 opacity-100 translate-y-0" 
                : "scale-[0.15] opacity-30 translate-y-24"
            }`}
          >
            <img
              src={middleGhostImg}
              alt="Central Guardian Ghost"
              className={`w-36 sm:w-56 md:w-80 h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.2)] ${
                ghostGrown ? "animate-float-slow" : ""
              }`}
            />
          </div>

        </div>

        {/* Side Character Anchoring the Call-To-Action Link Button */}
        <div className="absolute bottom-28 right-4 sm:right-8 md:right-16 z-30">
          <button className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none">
            
            <div className="animate-float-mini">
              <img 
                src={slideGhostImg} 
                alt="Action Ghost Holder" 
                className="w-32 sm:w-40 md:w-48 h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Pill Style Buy Action Label Box */}
            <div className="absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1.5 md:px-5 md:py-2 rounded-md shadow-2xl flex items-center gap-1.5 border border-purple-900/10 min-w-[120px] md:min-w-[155px] justify-center group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow">
              <span className="font-sans font-black text-[10px] md:text-xs uppercase tracking-wide text-zinc-900 whitespace-nowrap">
                Buy BooMaster
              </span>
              <span className="text-[10px] md:text-xs text-purple-700 font-bold animate-pulse">
                ▶
              </span>
            </div>

          </button>
        </div>

      </div>

      {/* Frame Trim Outlines */}
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-900/20 to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-900/20 to-transparent z-10" />
    </section>
  );
}