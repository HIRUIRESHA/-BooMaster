import React from "react";

// Asset Imports matching your project paths exactly
import rGhostImg from "../assets/ghosts/r_ghost.png";
import bigGhostImg from "../assets/ghosts/ghost.png";
import centerPumpkinImg from "../assets/s_pum.png";
import footerPlankImg from "../assets/end.png";
import icon9Img from "../assets/icons/icon9.png";
import twitterImg from "../assets/icons/twitter.png";

export default function Tokenomics() {
  // Hardcoded distribution data mapping exactly to the figma breakdown
  const tokenomicsData = [
    { label: "Presale", percentage: "30%", color: "#06b6d4" }, // Cyan
    { label: "Burned", percentage: "50%", color: "#1e3a8a" },  // Dark Blue
    { label: "Liquidity", percentage: "5%", color: "#94a3b8" }, // Light Silver/Gray
    { label: "Cex", percentage: "15%", color: "#6366f1" },       // Indigo/Purple
  ];

  return (
    <div className="w-full bg-black flex flex-col overflow-hidden select-none">
      
      {/* =========================================================================
          SECTION 1: TOKENOMICS CANVAS
          ========================================================================= */}
      <section className="relative w-full flex flex-col items-center bg-black pt-16 pb-8 px-4">
        
        {/* Sub-headline Text Hook */}
        <p className="max-w-3xl text-center font-serif text-white text-xs sm:text-sm md:text-base leading-relaxed tracking-wide mb-12">
          Boo isn’t just a token—it’s a spooky, fun-filled adventure! Designed for stability, growth, and 
          rewards, Boo ensures an engaging and sustainable ecosystem. Here’s how the magic is distributed!
        </p>

        {/* Core Allocation Matrix Wrapper (Matches the 485px x 468px Figma aspect block) */}
        <div className="relative w-full max-w-[500px] aspect-[485/468] mx-auto flex items-center justify-center">
          
          {/* CENTERPIECE: Custom SVG Multi-Segment Donut Chart */}
          <svg className="w-[65%] h-[65%] transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.15)]" viewBox="0 0 100 100">
            {/* Segment 1: Burned (50%) -> Dasharray: 50, Gap: 50 -> Offset: 0 */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#191d49" 
              strokeWidth="12"
              strokeDasharray="50 50" 
              pathLength="100"
              strokeDashoffset="0"
            />
            {/* Segment 2: Cex (15%) -> Dasharray: 15, Gap: 85 -> Offset: -50 */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#5856d6"
              strokeWidth="12"
              strokeDasharray="15 85"
              pathLength="100"
              strokeDashoffset="-50"
            />
            {/* Segment 3: Liquidity (5%) -> Dasharray: 5, Gap: 95 -> Offset: -65 */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#c7c7cc"
              strokeWidth="12"
              strokeDasharray="5 95"
              pathLength="100"
              strokeDashoffset="-65"
            />
            {/* Segment 4: Presale (30%) -> Dasharray: 30, Gap: 70 -> Offset: -70 */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#00c7e2"
              strokeWidth="12"
              strokeDasharray="30 70"
              pathLength="100"
              strokeDashoffset="-70"
            />
          </svg>

          {/* Core Central Pumpkin Anchor */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src={centerPumpkinImg} 
              alt="Center Hub Pumpkin" 
              className="w-[14%] h-auto filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
            />
          </div>

          {/* =========================================================================
              DYNAMIC DATA CALLOUT POINTER LABELS ( r_ghost + Text )
              ========================================================================= */}
          
          {/* Top Left Callout: PRESALE (30%) */}
          <div className="absolute top-[20%] left-0 flex flex-col items-center text-center w-[28%] animate-float-slow">
            <span className="font-serif italic font-bold text-white text-xs sm:text-sm">Presale</span>
            <span className="font-sans font-black text-cyan-400 text-sm sm:text-base -mt-0.5">30%</span>
            <img src={rGhostImg} alt="Presale Ghost" className="w-[45%] h-auto mt-1" />
          </div>

          {/* Bottom Left Callout: BURNED (50%) */}
          <div className="absolute bottom-[20%] left-[2%] flex flex-col items-center text-center w-[28%] animate-float-mini">
            <span className="font-serif italic font-bold text-white text-xs sm:text-sm">Burned</span>
            <span className="font-sans font-black text-blue-800 text-sm sm:text-base -mt-0.5">50%</span>
            <img src={rGhostImg} alt="Burned Ghost" className="w-[45%] h-auto mt-1 transform -scale-x-100" />
          </div>

          {/* Top Right Callout: LIQUIDITY (5%) */}
          <div className="absolute top-[14%] right-[4%] flex flex-col items-center text-center w-[28%] animate-float-slow">
            <img src={rGhostImg} alt="Liquidity Ghost" className="w-[45%] h-auto mb-1" />
            <span className="font-serif italic font-bold text-white text-xs sm:text-sm leading-none">Liquidity</span>
            <span className="font-sans font-black text-zinc-400 text-sm sm:text-base mt-0.5">5%</span>
          </div>

          {/* Mid Right Callout: CEX (15%) */}
          <div className="absolute top-[48%] right-[-2%] flex flex-col items-center text-center w-[28%] animate-float-mini">
            <img src={rGhostImg} alt="Cex Ghost" className="w-[45%] h-auto mb-1 transform -scale-x-100" />
            <span className="font-serif italic font-bold text-white text-xs sm:text-sm leading-none">Cex</span>
            <span className="font-sans font-black text-indigo-500 text-sm sm:text-base mt-0.5">15%</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SPOOKY WOODEN FOOTER SIGNBOARD
          ========================================================================= */}
      <footer className="relative w-full bg-black pb-12 pt-4 px-4 flex flex-col items-center">
        
        {/* The Primary Environment Signboard Track */}
        <div className="relative w-full max-w-4xl aspect-[1100/320] flex items-center justify-center">
          
          {/* Base Layer Wooden Asset Frame */}
          <img 
            src={footerPlankImg} 
            alt="Wooden Signboard Base" 
            className="absolute inset-0 w-full h-full object-contain z-0 filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)]" 
          />

          {/* Left Corner Interactive Companions */}
          <div className="absolute left-[3%] bottom-[12%] w-[12%] aspect-square z-20 flex items-end justify-center pointer-events-none">
            <svg className="w-full h-full opacity-90 text-amber-950/20" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20,90 C20,60 40,40 50,70 C55,50 75,50 80,90 Z" />
              <circle cx="35" cy="45" r="10" />
              <circle cx="65" cy="40" r="12" />
            </svg>
          </div>

          {/* Right Corner: Large Story Ghost and Resting Pumpkins Group */}
          <div className="absolute right-[2%] bottom-[6%] w-[26%] h-[90%] z-20 flex items-end justify-start pointer-events-none">
            {/* Layered Floating Master Character */}
            <div className="absolute right-[5%] top-[-5%] w-[68%] animate-float-slow filter drop-shadow-[0_10px_15px_rgba(255,255,255,0.05)]">
              <img src={bigGhostImg} alt="Master Ghost" className="w-full h-auto object-contain" />
            </div>
            {/* Dual Foreground Pumpkins sitting next to the ghost tail */}
            <div className="absolute right-[10%] bottom-[8%] w-[55%] flex items-end gap-1">
              <img src={centerPumpkinImg} alt="Environment Pumpkin" className="w-[60%] h-auto transform rotate-6" />
              <img src={centerPumpkinImg} alt="Environment Pumpkin" className="w-[45%] h-auto -ml-2" />
            </div>
          </div>

          {/* =========================================================================
              FOREGROUND INTERACTIVE TEXT & COMMUNITY LINKS BLOCK
              ========================================================================= */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-12 pb-[4%] pt-[2%] text-center">
            
            {/* Call to Action Title */}
            <h2 className="font-serif font-black text-amber-950 text-xl sm:text-3xl md:text-4xl tracking-wide">
              Following Us
            </h2>

            {/* Social Grid Container (Matches 29px x 29px bounds on Figma grid) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              
              {/* Telegram Handle Icon */}
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <img src={icon9Img} alt="Telegram Room Connect" className="w-[55%] h-[55%] object-contain" />
              </a>

              {/* Twitter Profile Handle Icon */}
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <img src={twitterImg} alt="Twitter X Grid Connect" className="w-[50%] h-[50%] object-contain" />
              </a>

              {/* Dex Screener Platform Link */}
              <a 
                href="#dex" 
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <div className="w-[50%] h-[50%] rounded-sm bg-white/80 transform rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#111649] rounded-full" />
                </div>
              </a>

              {/* DEXTools Tracker Platform Link */}
              <a 
                href="#dextools" 
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <div className="w-[55%] h-[55%] flex flex-col justify-between p-0.5">
                  <div className="h-1 w-full bg-cyan-400 rounded-sm" />
                  <div className="h-1 w-[75%] bg-white rounded-sm" />
                  <div className="h-1 w-[50%] bg-white rounded-sm" />
                </div>
              </a>

            </div>

            {/* Copyright Legal String Footer Note */}
            <p className="font-serif font-bold text-[9px] sm:text-xs text-amber-950/80 tracking-wider mt-3 sm:mt-5">
              © Copyright {new Date().getFullYear()} all right reserved by BooMaster
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}