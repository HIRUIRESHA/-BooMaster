import React, { useState, useEffect } from "react";

// Asset Environment Imports
import bg2Img from "../assets/bg2.png";
import ghostTop from "../assets/ghosts/ghost.png";
import ghostMid from "../assets/ghosts/g7.png";
import questionBarImg from "../assets/q.png"; // Dialog background box

export default function FAQ() {
  const [currentSlide, setCurrentSlide] = useState(1);
  // Controls internal toggle: true = Left ghost asking, false = Right ghost answering
  const [isQuestionPhase, setIsQuestionPhase] = useState(true);

  useEffect(() => {
    // 1. Initial phase: Left ghost asks the question
    setIsQuestionPhase(true);

    // 2. Mid-way point (after 3.5 seconds): Switch to Right ghost answering
    const answerTimer = setTimeout(() => {
      setIsQuestionPhase(false);
    }, 3500);

    // 3. Complete Slide cycle (every 7 seconds): Progress to next question node
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 5 ? 1 : prev + 1));
    }, 7000);

    return () => {
      clearTimeout(answerTimer);
      clearInterval(slideTimer);
    };
  }, [currentSlide]);

  // Clean, production-ready dataset with your 5 core project FAQs
  const faqData = {
    1: {
      question: "How much liquidity does your token have?",
      answer: "50% of the maximum token supply is permanently dedicated to the liquidity pool."
    },
    2: {
      question: "What is the official trading tax protocol?",
      answer: "$BOO features a completely optimized 0% buy tax and 0% sell tax environment."
    },
    3: {
      question: "Which decentralized applications can I use?",
      answer: "Any standard Solana web3 wallet like Phantom or Solflare connects seamlessly."
    },
    4: {
      question: "Where is the initial liquidity pool held?",
      answer: "The LP tokens are burned completely, making the ecosystem safe from adjustments."
    },
    5: {
      question: "How can we check live tracking charts safely?",
      answer: "Real-time updates and metrics are available instantly via Dexscreener or DEXTools."
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center select-none overflow-hidden py-24">
      {/* Absolute Structural Wrapper Context */}
      <div className="relative w-full max-w-[1500px] px-4">
        
        {/* FIX: Top Feature Accent Ghost placed BEHIND the core screen layer */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-21 w-[130px] h-[130px] z-0 pointer-events-none overflow-hidden">
          <img
            src={ghostTop}
            alt=""
            className="w-full h-auto ]"
          />
        </div>

        {/* Core Screen Landscape Area (1808 x 908 Aspect Ratio Profile) */}
        {/* Changed z-index to z-10 so it sits firmly on top of the emerging ghost background */}
        <div className="relative z-10 h-[580px] md:h-[650px] rounded-2xl overflow-hidden border border-zinc-900 shadow-[0_0_50px_rgba(147,51,234,0.1)]">
          
          {/* Layer 1: Environmental Art Canvas Backing */}
          <img
            src={bg2Img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Layer 2: Atmospheric Dark Vignette Mask */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Layer 3: Subtle floating ghost centered inside the upper canvas frame */}
          {/* <img
            src={ghostMid}
            alt=""
            className="absolute top-6 left-1/2 -translate-x-1/2 w-[85px] z-20 opacity-90 animate-subtle-float"
          /> */}

          {/* Layer 4: Interactive Interactive Dynamic Characters & Dialogue Box */}
          <div className="absolute inset-0 w-full h-full flex items-end justify-center pb-20 md:pb-24 z-20 px-6 md:px-12">
            <div className="w-full max-w-5xl flex items-end justify-between relative gap-10">
              
              {/* LEFT CHARACTER: Asking the Question */}
              <div 
                className={`w-[18%] max-w-[150px] transition-all duration-500 transform ${
                  isQuestionPhase 
                    ? "animate-ghost-bounce scale-105 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
                    : "opacity-75 scale-95"
                }`}
              >
                <img
                  src={ghostMid}
                  alt="Question Ghost"
                  className="w-full h-auto"
                />
              </div>

              {/* CENTER COMPONENT: Dialogue Text Container Box */}
<div
  className={`w-[60%] relative aspect-[716/172] flex items-center justify-center px-6 md:px-12 transition-all duration-700 transform ${
    isQuestionPhase ? "-translate-x-16" : "translate-x-16"
  }`}
>                {/* Stone Text Frame Panel Image asset */}
                <img 
                  src={questionBarImg} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-stretch drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]" 
                />
                
                {/* Dynamically Interchanging Text Node */}
                <div className="relative z-10 text-center w-full px-2 md:px-4">
                  <p className="font-serif font-bold text-[10px] sm:text-xs md:text-base lg:text-lg text-zinc-900 tracking-wide leading-tight transition-all duration-300">
                    {isQuestionPhase 
                      ? faqData[currentSlide].question 
                      : faqData[currentSlide].answer
                    }
                  </p>
                </div>
              </div>

              {/* RIGHT CHARACTER: Replying with the Answer */}
              <div 
                className={`w-[18%] max-w-[150px] transition-all duration-500 transform scale-x-[-1] ${
                  !isQuestionPhase 
                    ? "animate-ghost-bounce scale-105 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
                    : "opacity-75 scale-95"
                }`}
              >
                <img src={ghostMid} alt="Answer Ghost" className="w-full h-auto" />
              </div>

            </div>
          </div>

          {/* Layer 5: Pagination Bullet Array Navigator Grid */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/50 px-4 py-2 rounded-full border border-zinc-800/40 backdrop-blur-xs">
            {[1, 2, 3, 4, 5].map((idx) => (
              <button
                key={`faq-node-${idx}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 outline-none ${
                  currentSlide === idx
                    ? "w-6 bg-purple-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Show slide ${idx}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Embedded High-Fidelity CSS Motion Configurations */}
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translate(-50%, 0px); }
          50%      { transform: translate(-50%, -8px); }
        }
        @keyframes ghostBounce {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-15px); }
        }
        .animate-subtle-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
        .animate-ghost-bounce {
          animation: ghostBounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}