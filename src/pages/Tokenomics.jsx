import React from "react";

// Asset Imports matching your project paths exactly
import rGhostImg from "../assets/ghosts/r_ghost.png";
import bigGhostImg from "../assets/ghosts/ghost.png";
import centerPumpkinImg from "../assets/s_pum.png";
import footerPlankImg from "../assets/end.png";
import icon9Img from "../assets/icons/icon9.png";
import twitterImg from "../assets/icons/twitter.png";

export default function Tokenomics() {
  return (
    <div className="w-full bg-black flex flex-col overflow-hidden select-none">
      {/* =========================================================================
          SECTION 1: TOKENOMICS DONUT CHART
          ========================================================================= */}
      <section className="relative w-full flex flex-col items-center bg-black pt-16 pb-12 px-4">

        {/* Sub-headline Text Hook */}
        <p className="max-w-3xl text-center font-serif text-white text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
          Boo isn’t just a token—it’s a spooky, fun-filled adventure! Designed for stability, growth, and
          rewards, Boo ensures an engaging and sustainable ecosystem. Here’s how the magic is distributed!
        </p>

        {/* Chart + Callouts Stage */}
        <div className="relative w-full max-w-5xl mx-auto mt-10 h-[380px] sm:h-[440px] md:h-[480px]">

          {/* ===== CONNECTOR LINES (drawn behind everything else) ===== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
          >
            {/* Presale -> donut (left side) */}
            <line x1="260" y1="95" x2="400" y2="170" stroke="#06b6d4" strokeWidth="2" />
            <circle cx="400" cy="170" r="6" fill="#06b6d4" />

            {/* Burned -> donut (bottom) */}
            <line x1="270" y1="370" x2="430" y2="320" stroke="#1e3a8a" strokeWidth="2" />
            <circle cx="430" cy="320" r="6" fill="#1e3a8a" />

            {/* Liquidity -> donut (top) */}
            <line x1="730" y1="55" x2="530" y2="100" stroke="#c7c7cc" strokeWidth="2" />
            <circle cx="530" cy="100" r="6" fill="#c7c7cc" />

            {/* Cex -> donut (right side) */}
            <line x1="730" y1="220" x2="615" y2="215" stroke="#6366f1" strokeWidth="2" />
            <circle cx="615" cy="215" r="6" fill="#6366f1" />
          </svg>

          {/* ===== CENTER DONUT CHART ===== */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] sm:w-[270px] md:w-[300px] aspect-square">

            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Liquidity 5% - light gray */}
              <circle
                cx="50" cy="50" r="40" fill="transparent"
                stroke="#c7c7cc" strokeWidth="12"
                strokeDasharray="5 95" pathLength="100" strokeDashoffset="0"
              />
              {/* Cex 15% - indigo */}
              <circle
                cx="50" cy="50" r="40" fill="transparent"
                stroke="#6366f1" strokeWidth="12"
                strokeDasharray="15 85" pathLength="100" strokeDashoffset="-5"
              />
              {/* Burned 50% - dark navy */}
              <circle
                cx="50" cy="50" r="40" fill="transparent"
                stroke="#1e3a8a" strokeWidth="12"
                strokeDasharray="50 50" pathLength="100" strokeDashoffset="-20"
              />
              {/* Presale 30% - cyan */}
              <circle
                cx="50" cy="50" r="40" fill="transparent"
                stroke="#06b6d4" strokeWidth="12"
                strokeDasharray="30 70" pathLength="100" strokeDashoffset="-70"
              />
            </svg>

            {/* White center disc + pumpkin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[62%] h-[62%] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                <img
                  src={centerPumpkinImg}
                  alt="Center Hub Pumpkin"
                  className="w-[60%] h-auto"
                />
              </div>
            </div>
          </div>

          {/* =========================================================================
              DATA CALLOUT LABELS ( r_ghost + Text )
              ========================================================================= */}

          {/* Top Left Callout: PRESALE (30%) */}
          <div className="absolute left-[2%] top-[8%] flex items-center gap-2">
            <div className="text-left whitespace-nowrap">
              <p className="font-serif italic font-bold text-white text-sm sm:text-base leading-tight">Presale</p>
              <p className="font-sans font-black text-cyan-400 text-base sm:text-lg leading-tight">30%</p>
            </div>
            <img src={rGhostImg} alt="Presale Ghost" className="w-12 sm:w-16 h-auto animate-float-slow" />
          </div>

          {/* Bottom Left Callout: BURNED (50%) */}
          <div className="absolute left-[3%] bottom-[10%] flex items-center gap-2">
            <div className="text-left whitespace-nowrap">
              <p className="font-serif italic font-bold text-white text-sm sm:text-base leading-tight">Burned</p>
              <p className="font-sans font-black text-blue-900 text-base sm:text-lg leading-tight">50%</p>
            </div>
            <img src={rGhostImg} alt="Burned Ghost" className="w-12 sm:w-16 h-auto transform -scale-x-100 animate-float-mini" />
          </div>

          {/* Top Right Callout: LIQUIDITY (5%) */}
          <div className="absolute right-[4%] top-[2%] flex items-center gap-2">
            <img src={rGhostImg} alt="Liquidity Ghost" className="w-12 sm:w-16 h-auto transform -scale-x-100 animate-float-slow" />
            <div className="text-left whitespace-nowrap">
              <p className="font-serif italic font-bold text-white text-sm sm:text-base leading-tight">Liquidity</p>
              <p className="font-sans font-black text-zinc-400 text-base sm:text-lg leading-tight">5%</p>
            </div>
          </div>

          {/* Mid Right Callout: CEX (15%) */}
          <div className="absolute right-[1%] top-[40%] flex items-center gap-2">
            <img src={rGhostImg} alt="Cex Ghost" className="w-12 sm:w-16 h-auto animate-float-mini" />
            <div className="text-left whitespace-nowrap">
              <p className="font-serif italic font-bold text-white text-sm sm:text-base leading-tight">Cex</p>
              <p className="font-sans font-black text-indigo-400 text-base sm:text-lg leading-tight">15%</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SPOOKY WOODEN FOOTER SIGNBOARD
          ========================================================================= */}
      <footer className="relative w-full bg-black pb-12 pt-4 px-4 flex flex-col items-center">

        <div className="relative w-full max-w-4xl aspect-[1100/320] flex items-center justify-center">

          {/* Base Layer Wooden Asset Frame */}
          <img
            src={footerPlankImg}
            alt="Wooden Signboard Base"
            className="absolute inset-0 w-full h-full object-contain z-0 filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)]"
          />

          {/* Left Corner: small companion silhouette */}
          <div className="absolute left-[2%] bottom-[2%] w-[16%] aspect-square z-20 flex items-end justify-center pointer-events-none">
            <svg className="w-full h-full opacity-90 text-zinc-700" viewBox="0 0 100 100" fill="currentColor">
              <path d="M15,90 C15,60 35,35 50,65 C58,40 80,45 85,90 Z" />
              <circle cx="32" cy="42" r="9" />
              <circle cx="62" cy="38" r="11" />
            </svg>
          </div>

          {/* Right Corner: Large Story Ghost and Resting Pumpkins Group */}
          <div className="absolute right-[1%] bottom-[0%] w-[24%] h-[95%] z-20 flex items-end justify-start pointer-events-none">
            <div className="absolute right-[5%] top-[-8%] w-[70%] animate-float-slow filter drop-shadow-[0_10px_15px_rgba(255,255,255,0.05)]">
              <img src={bigGhostImg} alt="Master Ghost" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute right-[8%] bottom-[6%] w-[55%] flex items-end gap-1">
              <img src={centerPumpkinImg} alt="Environment Pumpkin" className="w-[60%] h-auto transform rotate-6" />
              <img src={centerPumpkinImg} alt="Environment Pumpkin" className="w-[45%] h-auto -ml-2" />
            </div>
          </div>

          {/* =========================================================================
              FOREGROUND INTERACTIVE TEXT & COMMUNITY LINKS BLOCK
              ========================================================================= */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-12 pb-[4%] pt-[2%] text-center">

            <h2 className="font-serif font-black text-amber-950 text-xl sm:text-3xl md:text-4xl tracking-wide">
              Following Us
            </h2>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">

              {/* Telegram */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <img src={icon9Img} alt="Telegram" className="w-[55%] h-[55%] object-contain" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <img src={twitterImg} alt="Twitter X" className="w-[50%] h-[50%] object-contain" />
              </a>

              {/* DexScreener */}
              <a
                href="#dex"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#111649] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md border border-white/5"
              >
                <div className="w-[50%] h-[50%] rounded-sm bg-white/80 transform rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#111649] rounded-full" />
                </div>
              </a>

              {/* DEXTools */}
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

            <p className="font-serif font-bold text-[9px] sm:text-xs text-amber-950/80 tracking-wider mt-3 sm:mt-5">
              © Copyright {new Date().getFullYear()} all right reserved by BooMaster
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}