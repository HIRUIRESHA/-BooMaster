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

  const stepData = {
    1: {
      title: "Step 1: Create Wallet",
      text: "Download and set up your phantom ghost wallet extension or app. Keep your recovery phrases completely safe and private."
    },
    2: {
      title: "Step 2: Add Funds",
      text: "Purchase SOL directly inside your wallet or deposit it from an exchange using your secure public wallet address address."
    },
    3: {
      title: "Step 3: Find Exchange",
      text: "Head over to Raydium or Jupiter decentralized exchange platfrom and safely connect your loaded phantom wallet."
    },
    4: {
      title: "Step 4: Set Price",
      text: "Paste the official token address into the search field, adjust your slippage settings to make sure your transaction goes through smoothly."
    },
    5: {
      title: "Step 5: Swap Tokens",
      text: "Enter the amount of SOL you wish to convert, review your transaction breakdown, and confirm the trade execution."
    },
    6: {
      title: "Step 6: Tokens Received",
      text: "Congratulations! Transaction complete. The $BOO tokens are now resting safely inside your decentralized ghost asset wallet."
    }
  };

  return (
    <div className="w-full bg-black flex flex-col overflow-visible select-none">
      <section className="relative w-full flex flex-col items-center bg-black py-12 md:py-20">
       <img src={bg4Img} alt="Night Scene Background" className="absolute inset-0 w-full h-full object-cover z-0" /> 
        

        <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] mx-auto border border-zinc-900 rounded-lg overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.15)]">
          <div className="mb-6 text-center z-20 px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-purple-500 tracking-wider font-mono">
            {stepData[currentSlide].title}
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-2 max-w-xl mx-auto min-h-[32px]">
            {stepData[currentSlide].text}
          </p>
        </div>
        

          <div className="absolute inset-0 z-10 w-full h-full">
            <div className="absolute bottom-[6%] left-[4%] w-[12%] flex items-end gap-1">
              <img src={bigPumpkinImg} alt="Big Pumpkin" className="w-[60%] h-auto" />
              <img src={smallPumpkinImg} alt="Small Pumpkin" className="w-[40%] h-auto" />
            </div>

            <img src={bigPumpkinImg} alt="Big Pumpkin" className="absolute bottom-[18%] left-[34%] w-[7%] h-auto" />
            <img src={smallPumpkinImg} alt="Small Pumpkin" className="absolute bottom-[16%] left-[41%] w-[4.5%] h-auto" />

            <div className="absolute bottom-[10%] right-[6%] w-[10%] flex items-end gap-0.5">
              <img src={smallPumpkinImg} alt="Small Pumpkin" className="w-[40%] h-auto" />
              <img src={bigPumpkinImg} alt="Big Pumpkin" className="w-[60%] h-auto" />
            </div>

            {currentSlide === 1 && (
              <div className="absolute bottom-[18%] left-[48%] -translate-x-1/2 w-[14%] h-auto animate-float-slow transition-all duration-700">
                <img src={ghostImg} alt="Ghost Asset" className="w-full h-auto" />
              </div>
            )}

            {currentSlide === 2 && (
              <div className="absolute bottom-[20%] left-[44%] -translate-x-1/2 w-[42%] h-auto flex items-center gap-2 transition-all duration-700 animate-float-mini">
                <img src={ghostImg} alt="Ghost Asset" className="w-[35%] h-auto" />
                <div className="relative w-[60%] aspect-square">
                  <img src={bigRoundImg} alt="Dialogue Round" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <p className="font-serif font-bold text-[8px] sm:text-[10px] md:text-xs text-amber-950">
                      Step 2: Funds loaded! Ready to search for exchanges.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentSlide === 3 && (
              <div className="absolute inset-0 w-full h-full transition-all duration-700">
                <div className="absolute bottom-[15%] left-[58%] w-[15%] h-auto animate-float-slow">
                  <img src={ghostImg} alt="Ghost Asset" className="w-full h-auto" />
                </div>
                <img src={smallRoundImg} alt="Bubble" className="absolute bottom-[26%] left-[30%] w-[8%] h-auto animate-bounce" />
                <img src={smallRoundImg} alt="Bubble" className="absolute bottom-[14%] left-[24%] w-[9%] h-auto" />
                <img src={bigRoundImg} alt="Bubble" className="absolute bottom-[8%] left-[40%] w-[12%] h-auto" />
              </div>
            )}

            {currentSlide === 4 && (
              <div className="absolute inset-0 w-full h-full transition-all duration-700">
                <div className="absolute bottom-[12%] right-[22%] w-[38%] h-auto flex items-center gap-1 animate-float-mini">
                  <div className="relative w-[45%] aspect-square">
                    <img src={smallRoundImg} alt="Bubble Texture" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                      <p className="font-serif font-bold text-[7px] sm:text-[9px] text-amber-950">Set Slippage</p>
                    </div>
                  </div>
                  <img src={ghostImg} alt="Ghost Asset" className="w-[50%] h-auto scale-x-[-1]" />
                </div>
              </div>
            )}

            {currentSlide === 5 && (
              <div className="absolute inset-0 w-full h-full transition-all duration-700">
                <div className="absolute bottom-[10%] left-[32%] w-[14%] h-auto animate-float-slow">
                  <img src={ghostImg} alt="Ghost Asset" className="w-full h-auto" />
                </div>
                <img src={smallRoundImg} alt="Bubble Track" className="absolute bottom-[28%] left-[48%] w-[8%] h-auto" />
                <img src={smallRoundImg} alt="Bubble Track" className="absolute bottom-[20%] left-[58%] w-[7%] h-auto" />
              </div>
            )}

            {currentSlide === 6 && (
              <div className="absolute bottom-[14%] left-[50%] -translate-x-1/2 w-[40%] h-auto flex flex-col items-center gap-1 transition-all duration-700 animate-float-slow">
                <div className="relative w-[45%] aspect-square">
                  <img src={bigRoundImg} alt="Success Badge" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
                    <p className="font-serif font-black text-[9px] sm:text-xs text-emerald-900">SUCCESS!</p>
                  </div>
                </div>
                <img src={ghostImg} alt="Ghost Asset" className="w-[45%] h-auto" />
              </div>
            )}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={`dot-b-${idx}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-5 bg-purple-500" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}