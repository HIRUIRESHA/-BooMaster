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
  2: "This is a short explanation. make it short and clear to keep students attentive.",
  3: "This is a short explanation. make it short and clear to keep students attentive.",
  4: "This is a short explanation. make it short and clear to keep students attentive.",
  5: "This is a short explanation. make it short and clear to keep students attentive.",
};

const boardPosition = {
  
  2: { top: "17%", left: "13.5%" },
  3: { top: "28%", left: "13.5%" },
  4: { top: "38.5%", left: "13.5%" },
  5: { top: "51.4%", left: "13.5%" },
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

  const isTreeCenterView = currentSlide <= 3;

  const ghostPosition = isTreeCenterView
    ? "bottom-[18%] left-[42%]"
    : "bottom-[7%] left-[56%]";

  const animal1Position = isTreeCenterView
    ? "bottom-[10%] left-[64%]"
    : "bottom-[6%] left-[74%]";

  const animal2RightPosition = isTreeCenterView
    ? "bottom-[10%] left-[62%]"
    : "bottom-[10%] left-[70%]";

  const animal2LeftPosition = isTreeCenterView
    ? "bottom-[10%] left-[28%]"
    : "bottom-[10%] left-[25%]";

  return (
      <div className="relative w-full bg-black overflow-hidden select-none z-10">
<section className="relative w-full pt-16 pb-32 flex flex-col items-center justify-center overflow-hidden">        {/* Fullscreen Base Layer Background Canvas */}
        <img
          src={bg3Img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-0"
        />

        {/* STAGE VIEWPORT CONTAINER (Keeps all components relative & matching scaled aspect)*/}
        <div className="relative w-full max-w-5xl h-full mx-auto flex items-center justify-center z-10">
          
          {/* Central Signpost Asset Tree Container */}
          <div className="relative w-[90%] xs:w-[75%] sm:w-[60%] md:w-[51%] aspect-[3/4] flex items-center justify-center mb-[5vh]">
            <img
              src={rmTreeImg}
              alt="Wooden signpost"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* STABLE LABELS GRAPHICS (Relative to signpost structural layers)*/}
            <div className="absolute top-[18%] left-[18%] z-20">
              <p className="font-serif font-black text-white text-[9px] xs:text-xs sm:text-sm md:text-base tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                PHASE 1
              </p>
            </div>

            <div className="absolute top-[28%] right-[22%] z-20">
              <p className="font-serif font-black text-white text-[9px] xs:text-xs sm:text-sm md:text-base tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                PHASE 2
              </p>
            </div>

            <div className="absolute top-[40.5%] right-[22%] z-20">
              <p className="font-serif font-black text-white text-[9px] xs:text-xs sm:text-sm md:text-base tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                PHASE 3
              </p>
            </div>

            <div className="absolute top-[52%] left-[18%] z-20">
              <p className="font-serif font-black text-white text-[9px] xs:text-xs sm:text-sm md:text-base tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                PHASE 4
              </p>
            </div>

            {/* Dynamic Active Description Overlay Card */}
            {currentSlide !== 1 && (
  <div
    key={currentSlide}
        className="absolute z-30
w-[66%]
aspect-square"
    style={{
      top: boardPosition[currentSlide].top,
      left: boardPosition[currentSlide].left,
      transform: "translateX(-50%)",
      animation: "floatMini 3s ease-in-out infinite",
    }}
  >
    <img
      src={phaseRoundImg}
      alt="Phase board"
      className="absolute inset-0 w-full h-full object-contain z-0 filter drop-shadow-[0_6px_8px_rgba(0,0,0,0.5)]"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-[20%]">
  <div className="w-[45%] h-[60%] flex items-center justify-center">
    <p className="font-serif font-bold text-center leading-snug text-white text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] break-words">
      {phaseContent[currentSlide]}
    </p>
  </div>
</div>
  </div>
)}

          </div>

          {/*ENVIRONMENTAL CHARACTERS LAYER*/}
          
          {/* Animal 1 Asset */}
          <div className={`absolute ${animal1Position} w-[9%] transition-all duration-700 ease-in-out z-50 pointer-events-none`}>
            <img src={animal1} alt="Animal 1" className="w-full h-auto object-contain" />
          </div>

          {/* Companion Floating Ghost Asset */}
          <div
            className={`absolute ${ghostPosition} w-[15%] transition-all duration-700 ease-in-out z-50 pointer-events-none`}
            style={{ animation: "floatSlow 4.5s ease-in-out infinite" }}
          >
            <img src={centerGhostImg} alt="Ghost" className="w-full h-auto object-contain" />
          </div>

          {/* Animal 2 Graphic (Right side position) */}
          <div className={`absolute ${animal2RightPosition} w-[13%] transition-all duration-700 ease-in-out z-30 pointer-events-none`}>
            <img src={animal2} alt="Animal 2 Side Right" className="w-full h-auto object-contain" />
          </div>

          {/* Animal 2 Graphic (Left side flipped position) */}
          <div className={`absolute ${animal2LeftPosition} w-[13%] transition-all duration-700 ease-in-out z-30 pointer-events-none`}>
            <img
              src={animal2}
              alt="Animal 2 Side Left"
              className="w-full h-auto object-contain transform -scale-x-100"
            />
          </div>

          {/* Animal 3 Companion Overlay graphic */}
          <div className={`absolute ${animal2LeftPosition} w-[10%] transition-all duration-700 ease-in-out z-30 pointer-events-none`}>
            <img src={animal3} alt="Animal 3" className="w-full h-auto object-contain" />
          </div>

          {/* PAGINATION CAROUSEL CONTROLLER */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-50">
            {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  currentSlide === n
                    ? "w-7 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to phase stage ${n}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Embedded Global Keyframe Fluid Animation Configurations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatMini {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}