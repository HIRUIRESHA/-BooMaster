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
      {/* Container maintains crisp aspect ratios across Mobile, Tab, and Desktop screens */}
      <section className="relative w-full h-[56.25vw] min-h-[320px] max-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Scene */}
        <img 
          src={bg4Img} 
          alt="Night Scene Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        /> 
        
        {/* Active Elements Canvas */}
        <div className="absolute inset-0 z-10 w-full h-full text-[1vmin]">

          {/* =========================================================
              1️⃣ LEFT FRONT COUPLE (Active on Slide 6)
             ========================================================= */}
          <div className="absolute bottom-[4%] left-[3%] w-[15%] aspect-[4/3] z-30">
            {/* Wooden Signs Layer */}
            {currentSlide === 6 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                {/* Big Board behind Big Pumpkin */}
                <div className="absolute top-[-45%] left-[-25%] w-[95%] aspect-square rotate-[345deg]">
                  <img src={bigRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[22%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.75vw] text-amber-950 leading-tight tracking-tight break-words px-0.5">
                      Buy BooMaster
                    </p>
                  </div>
                </div>
                {/* Small Board behind Small Pumpkin */}
                <div className="absolute top-[-25%] right-[-25%] w-[82%] aspect-square rotate-[15deg]">
                  <img src={smallRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[22%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.65vw] text-amber-950 leading-tight tracking-tight break-words px-0.5">
                      Buy BooMaster
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Pumpkins Layer */}
            <div className="absolute inset-0 flex items-end z-10">
              <img src={bigPumpkinImg} className="absolute left-0 bottom-0 w-[65%] h-auto z-10" alt="Big Pumpkin" />
              <img src={smallPumpkinImg} className="absolute right-[5%] bottom-0 w-[45%] h-auto z-20" alt="Small Pumpkin" />
            </div>
          </div>


          {/* =========================================================
              2️⃣ LEFT BACK COUPLE (Active on Slide 4)
             ========================================================= */}
          <div className="absolute bottom-[16%] left-[26%] w-[11%] aspect-[4/3] z-20">
            {/* Wooden Signs Layer */}
            {currentSlide === 4 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-50%] left-[-15%] w-[98%] aspect-square rotate-[345deg]">
                  <img src={bigRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.75vw] text-amber-950 leading-tight tracking-tight break-words">
                      Fund your wallet with eth/ usdt
                    </p>
                  </div>
                </div>
                <div className="absolute top-[-30%] right-[-25%] w-[85%] aspect-square rotate-[15deg]">
                  <img src={smallRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.65vw] text-amber-950 leading-tight tracking-tight break-words">
                      Fund your wallet with eth/usdt
                    </p>
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
              3️⃣ RIGHT BACK COUPLE (Active on Slide\ 3)
             ========================================================= */}
          <div className="absolute bottom-[14%] right-[44%] w-[11%] aspect-[4/3] z-10">
            {/* Wooden Signs Layer */}
            {currentSlide === 3 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-50%] left-[-15%] w-[98%] aspect-square">
                  <img src={bigRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.75vw] text-amber-950 leading-tight tracking-tight break-words">
                      Create a crypto wallet
                    </p>
                  </div>
                </div>
                <div className="absolute top-[-30%] right-[-25%] w-[85%] aspect-square rotate-[15deg]">
                  <img src={smallRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.65vw] text-amber-950 leading-tight tracking-tight break-words">
                      Create a crypto wallet
                    </p>
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
              4️⃣ RIGHT FRONT COUPLE (Active on Slide 5)
             ========================================================= */}
          <div className="absolute bottom-[6%] right-[5%] w-[14%] aspect-[4/3] z-30">
            {/* Wooden Signs Layer */}
            {currentSlide === 5 && (
              <div className="absolute inset-0 z-0 pointer-events-none animate-float-mini">
                <div className="absolute top-[-45%] left-[-15%] w-[95%] aspect-square rotate-[15deg]">
                  <img src={bigRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.75vw] text-amber-950 leading-tight tracking-tight break-words">
                      Connect to the BooMaster
                    </p>
                  </div>
                </div>
                <div className="absolute top-[-25%] right-[-25%] w-[82%] aspect-square rotate-[15deg]">
                  <img src={smallRoundImg} className="w-full h-full object-contain" alt="Signboard" />
                  <div className="absolute inset-[12%] flex items-start pt-[12%] justify-center px-[10%] text-center">
                    <p className="font-serif font-bold text-[0.65vw] text-amber-950 leading-tight tracking-tight break-words">
                      Connect to the BooMaster
                    </p>
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
              DYNAMIC RESPONSIVE GHOST ROUTING ENGINE
             ========================================================= */}
          
          {/* Slide 1: Welcome/Intro Ghost - Far down the road pathway */}
          {currentSlide === 1 && (
            <div className="absolute bottom-[40%] right-[45%] w-[2%] h-auto scale-x-[-1] animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Path Start" className="w-full h-auto opacity-90" />
            </div>
          )}

          {/* Slide 2: Ghost drifts intermediate/closer on the path */}
          {currentSlide === 2 && (
            <div className="absolute bottom-[38%] right-[55%] w-[3%] h-auto animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Coming Forward" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 3: Ghost meets Right Back Couple */}
          {currentSlide === 3 && (
            <div className="absolute bottom-[13%] left-[37%] w-[7.5%] h-auto scale-x-[-1] animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Meeting Right Back" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 4: Ghost floating with Left Back Couple */}
          {currentSlide === 4 && (
            <div className="absolute bottom-[11%] left-[36%] w-[7.5%] h-auto animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Meeting Left Back" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 5: Ghost interacting with Right Front Couple */}
          {currentSlide === 5 && (
            <div className="absolute bottom-[5%] right-[18%] w-[9%] h-auto scale-x-[-1] animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Meeting Right Front" className="w-full h-auto" />
            </div>
          )}

          {/* Slide 6: Ghost interacting with Left Front Couple */}
          {currentSlide === 6 && (
            <div className="absolute bottom-[3%] left-[17%] w-[9%] h-auto animate-float-slow transition-all duration-700 z-[999]">
              <img src={ghostImg} alt="Ghost Meeting Left Front" className="w-full h-auto" />
            </div>
          )}

        </div>

        {/* Carousel Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={`nav-dot-${idx}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-5 bg-orange-500" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}