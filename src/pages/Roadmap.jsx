import React, { useState, useEffect } from "react";
import bg3Img from "../assets/bg3.png";
import rmTreeImg from "../assets/rm.png";
import phaseRoundImg from "../assets/phase.png";
import centerGhostImg from "../assets/ghosts/ghost.png";
import animal1 from "../assets/animal1.png";
import animal2 from "../assets/animal2.png";
import animal3 from "../assets/animal3.png";

const TOTAL_SLIDES = 5;

const phaseContent = {
  2: "Phase 1: Launching our digital presence, completing smart contracts, and establishing our core ghost community.",
  3: "Phase 2: Driving marketing campaigns, strategic launch collaborations, and initial decentralised exchange listings.",
  4: "Phase 3: Releasing interactive community features, specialised item drops, and ecosystem reward models.",
  5: "Phase 4: Scaling cross-network expansions, long-term token partnerships, and unlocking mysterious future upgrades.",
};

const boardPosition = {
  2: { top: "16%", left: "39.7%" },
  3: { top: "27%", left: "39.8%" },
  4: { top: "37%", left: "39.7%" },
  5: { top: "48.4%", left: "39.8%" },
};

export default function Roadmap() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s === TOTAL_SLIDES ? 1 : s + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (n) => {
    setPaused(true);
    setCurrentSlide(n);
    const t = setTimeout(() => setPaused(false), 12000);
    return () => clearTimeout(t);
  };

  return (
    <div className="w-full bg-black flex flex-col overflow-visible">
      <section className="relative w-full bg-black overflow-visible">
  <div className="relative w-full min-h-screen overflow-visible">
    <img
  src={bg3Img}
  alt=""
  className="absolute inset-0 w-full h-full object-cover object-bottom"
/>

          <div className="absolute z-10 w-full h-full flex items-start justify-center">
            <img
              src={rmTreeImg}
              alt="Wooden signpost"
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[45%] sm:w-[38%] md:w-[34%] h-auto object-contain"
            />

            {currentSlide > 1 && (
              <div
                key={currentSlide}
                className="absolute z-20 w-[22%] sm:w-[20%] md:w-[18%] aspect-square"
                style={{
                  top: boardPosition[currentSlide].top,
                  left: boardPosition[currentSlide].left,
                  transform: "translateX(-50%)",
                  animation: "floatMini 2.8s ease-in-out infinite",
                }}
              >
                <img src={phaseRoundImg} alt="Phase board" className="absolute inset-0 w-full h-full object-contain" />
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                  <p className="font-serif font-bold text-center leading-tight text-amber-950 text-[7px] sm:text-[9px] md:text-[11px]">
                    {phaseContent[currentSlide]}
                  </p>
                </div>
              </div>
            )}

            
          </div>

          <div className="absolute bottom-[12%] left-[63%] w-[9%] z-40 pointer-events-none">
            <img src={animal1} alt="Animal 1" className="w-full h-auto" />
          </div>

          <div className="absolute bottom-[7%] left-[52%] w-[11%] z-20 pointer-events-none" style={{ animation: "floatSlow 4s ease-in-out infinite" }}>
            <img src={centerGhostImg} alt="Ghost" className="w-full h-auto" />
          </div>

        {/* Animal 2 */}
<div className="absolute bottom-[17%] left-[60%] w-[11%] z-20 pointer-events-none">
  <img src={animal2} alt="Animal 2" className="w-full h-auto" />
</div>

{/* Animal 3 (flipped version) */}
<div className="absolute bottom-[17%] left-[28%] w-[11%] z-20 pointer-events-none">
  <img
    src={animal2}
    alt="Animal 2 flipped"
    className="w-full h-auto scale-x-[-1]"
  />
</div>

          

          <div className="absolute bottom-[8%] left-[28%] w-[7%] z-20 pointer-events-none">
            <img src={animal3} alt="Animal 3" className="w-full h-auto" />
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  currentSlide === n
                    ? "w-6 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${n}`}
              />
            ))}
          </div>
        </div>

      </section>

      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes floatMini {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}