import React, { useState, useEffect } from "react";
import bg4Img from "../assets/bg4.png";
import bigPumpkinImg from "../assets/b_pum.png";
import smallPumpkinImg from "../assets/s_pum.png";
import ghostImg from "../assets/ghosts/ghost.png";
import smallRoundImg from "../assets/s_round.png";
import bigRoundImg from "../assets/b_round.png";

export default function HowToBuy() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 6 ? 1 : prev + 1));
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black flex flex-col overflow-visible select-none">
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Scene */}
        <img src={bg4Img} alt="Night Scene Background" className="absolute inset-0 w-full h-full object-cover z-0" /> 
        
        {/* Active Elements Canvas */}
        <div className="absolute inset-0 z-10 w-full h-full">

          {/* =========================================================
              1️⃣ LEFT FRONT COUPLE (Active on Slide 6)
             ========================================================= */}
          <div className="absolute bottom-[4%] left-[3%] w-[15%] aspect-[4/3] z-30">
            {/* Wooden Signs Layer (Rendered underneath pumpkins) */}
            {currentSlide === 6 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                {/* Big Board behind Big Pumpkin */}
                <div className="absolute top-[-35%] left-[5%] w-[45%] aspect-square">
                  <img src={bigRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                    <p className="font-serif font-bold text-[7px] sm:text-[9px] text-amber-950 leading-tight">Connect to the BooMaster</p>
                  </div>
                </div>
                {/* Small Board behind Small Pumpkin */}
                <div className="absolute top-[-20%] right-[10%] w-[35%] aspect-square">
                  <img src={smallRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[6px] sm:text-[8px] text-amber-950 leading-tight">Connect to the BooMaster</p>
                  </div>
                </div>
              </div>
            )}
            {/* Pumpkins Layer with Small overlapping Right of Big */}
            <div className="absolute inset-0 flex items-end z-10">
              <img src={bigPumpkinImg} className="absolute left-0 bottom-0 w-[65%] h-auto z-10" alt="Big Pumpkin" />
              <img src={smallPumpkinImg} className="absolute right-[5%] bottom-0 w-[45%] h-auto z-20" alt="Small Pumpkin" />
            </div>
          </div>


          {/* =========================================================
              2️⃣ LEFT BACK COUPLE (Active on Slide 4)
             ========================================================= */}
          <div className="absolute bottom-[16%] left-[28%] w-[11%] aspect-[4/3] z-20">
            {/* Wooden Signs Layer */}
            {currentSlide === 4 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-35%] left-[5%] w-[45%] aspect-square">
                  <img src={bigRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[5px] sm:text-[7px] text-amber-950 leading-tight">Fund your wallet with ether</p>
                  </div>
                </div>
                <div className="absolute top-[-20%] right-[10%] w-[35%] aspect-square">
                  <img src={smallRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[4px] sm:text-[6px] text-amber-950 leading-tight">Fund your wallet with ether</p>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-end z-10">
              <img src={bigPumpkinImg} className="absolute left-0 bottom-0 w-[65%] h-auto z-10" alt="Big Pumpkin" />
              <img src={smallPumpkinImg} className="absolute right-[5%] bottom-0 w-[45%] h-auto z-20" alt="Small Pumpkin" />
            </div>
          </div>


          {/* =========================================================
              3️⃣ RIGHT BACK COUPLE (Active on Slide 2)
             ========================================================= */}
          <div className="absolute bottom-[14%] right-[44%] w-[11%] aspect-[4/3] z-10">
            {/* Wooden Signs Layer */}
            {currentSlide === 3 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-35%] left-[5%] w-[45%] aspect-square">
                  <img src={bigRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[5px] sm:text-[7px] text-amber-950 leading-tight">Create a crypto wallet</p>
                  </div>
                </div>
                <div className="absolute top-[-20%] right-[10%] w-[35%] aspect-square">
                  <img src={smallRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[4px] sm:text-[6px] text-amber-950 leading-tight">Create a crypto wallet</p>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-end z-10">
              <img src={bigPumpkinImg} className="absolute left-60 bottom-0 w-[65%] h-auto z-10" alt="Big Pumpkin" />
              <img src={smallPumpkinImg} className="absolute left-75 bottom-0 w-[45%] h-auto z-20" alt="Small Pumpkin" />
            </div>
          </div>


          {/* =========================================================
              4️⃣ RIGHT FRONT COUPLE (Active on Slide 5)
             ========================================================= */}
          <div className="absolute bottom-[6%] right-[5%] w-[14%] aspect-[4/3] z-30">
            {/* Wooden Signs Layer */}
            {currentSlide === 5 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-35%] left-[5%] w-[45%] aspect-square">
                  <img src={bigRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                    <p className="font-serif font-bold text-[7px] sm:text-[9px] text-amber-950 leading-tight">Swap ETH for $BOO</p>
                  </div>
                </div>
                <div className="absolute top-[-20%] right-[10%] w-[35%] aspect-square">
                  <img src={smallRoundImg} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-1 text-center">
                    <p className="font-serif font-bold text-[6px] sm:text-[8px] text-amber-950 leading-tight">Swap ETH for $BOO</p>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-end z-10">
              <img src={bigPumpkinImg} className="absolute left-0 bottom-0 w-[65%] h-auto z-10" alt="Big Pumpkin" />
              <img src={smallPumpkinImg} className="absolute right-[5%] bottom-0 w-[45%] h-auto z-20" alt="Small Pumpkin" />
            </div>
          </div>


          {/* =========================================================
              DYNAMIC GHOST ROUTING ENGINE
             ========================================================= */}
          
          {/* Slide 1: General Welcome/Intro Ghost */}
          {currentSlide === 1 && (
            <div className="absolute bottom-[36%] left-[66%] -translate-x-1/2 w-[5%] h-auto animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 2: Ghost interacts with Right Back Couple */}
          {currentSlide === 2 && (
            <div className="absolute bottom-[18%] left-[45%] w-[8%] h-auto scale-x-[-1] animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
            
          )}

          {/* Slide 3: Ghost on Road Middle */}
          {currentSlide === 3 && (
            <div className="absolute bottom-[16%] right-[56%] w-[8%] h-auto animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 4: Ghost interacts with Left Back Couple */}
          {currentSlide === 4 && (
            <div className="absolute bottom-[14%] left-[40%] w-[8%] h-auto animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 5: Ghost interacts with Right Front Couple */}
          {currentSlide === 5 && (
            <div className="absolute bottom-[7%] right-[20%] w-[9%] h-auto scale-x-[-1] animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 6: Ghost interacts with Left Front Couple */}
          {currentSlide === 6 && (
            <div className="absolute bottom-[5%] left-[18%] w-[9%] h-auto animate-float-slow transition-all duration-700">
              <img src={ghostImg} alt="Ghost" className="w-full h-auto" />
            </div>
          )}

        </div>

        {/* Carousel Progress Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={`nav-dot-${idx}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-6 bg-orange-500" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}