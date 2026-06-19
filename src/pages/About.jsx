import React from "react";

// Asset imports mapping down perfectly into assets folder structure
import bg2Img         from "../assets/bg2.png";
import scrollGhostImg from "../assets/ghosts/ghostwletter.png"; // Updated path to ghost2.png
import joinButtonGhostImg from "../assets/ghosts/ghost1.png";
import letterImg      from "../assets/letter.png";
import g7             from "../assets/ghosts/g7.png";
import g1             from "../assets/ghosts/g1.png";
import g2             from "../assets/ghosts/g2.png";
import g3             from "../assets/ghosts/g3.png";
import g4             from "../assets/ghosts/g4.png";
import g5             from "../assets/ghosts/g5.png";
import g6             from "../assets/ghosts/g6.png";
import eyeImg from "../assets/ghosts/eye.png";

export default function About() {
  const ghostCards = [g1, g2, g3, g4, g5, g6];

  // Exact fanned-out rotation mechanics matching your updated layout spec
  const cardTilts = [
    "-rotate-12 translate-y-10",
    "-rotate-6 translate-y-2",
    "rotate-0 translate-y-0",
    "rotate-6 translate-y-2",
    "rotate-12 translate-y-8",
    "rotate-16 translate-y-12",
  ];

  return (
    <div className="w-full bg-black flex flex-col overflow-hidden">
      {/* Reduced vertical margins for tighter spacing layout */}
      <section className="relative z-20 w-full bg-black pt-10 pb-8 overflow-visible">

        {/* Introduction Row Container Structure */}
        <div className="relative w-full px-8 md:px-14 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">

          {/* Left Text Block Info Column */}
          <div className="w-full md:w-[60%] z-10 pt-4">
            <p className="text-purple-200 text-lg md:text-[22px] leading-relaxed text-justify font-medium">
                Meet Boo, the friendly <span className="italic">and</span> playful ghost token!&nbsp;
                Boo isn't just about transactions—it's about fun, community, and a touch of mystery.
                Join us on a whimsical adventure where excitement and surprises await.
                Embrace the friendly, spooky side of life with Boo, the token that brings smiles
                and a little ghostly charm to the digital world.
            </p>

            {/* Floating Portal Join Button */}
            <div className="mt-0 ml-0 md:ml-60 relative inline-flex items-center justify-center group cursor-pointer select-none">
              <div
  className="relative z-10"
  style={{ animation: "floatMini 2.5s ease-in-out infinite" }}
>
  {/* Ghost */}
  <img
    src={joinButtonGhostImg}
    alt="Join Banner Character Link"
    className="w-40 sm:w-48 md:w-64 h-auto object-contain drop-shadow-[0_8px_20px_rgba(168,85,247,0.4)] transition-transform group-hover:scale-105"
  />

  {/* Eye */}
  <img
  src={eyeImg}
  alt="Eye"
  className="
    absolute
    top-[16%]
    left-[50%]
    w-[26%]
    h-auto
    z-[100]
    -translate-x-1/2
    -translate-y-1/2
    pointer-events-none
  "
/>
</div>
<div className="absolute z-[200] top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-zinc-900 px-4 py-1.5 rounded-md shadow-2xl flex items-center gap-1.5 whitespace-nowrap group-hover:shadow-[0_0_22px_rgba(147,51,234,0.55)] transition-all duration-200">                <span className="font-black text-[10px] md:text-xs uppercase tracking-wider">
                  Join BooMaster
                </span>
                <span className="text-purple-700 font-bold text-xs">▶</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Ghost overlapping the Parchment Letter Scroll */}
          <div className="w-full md:w-[650px] flex justify-start overflow-visible mt-4 md:mt-0 -ml-12">
            <div
                className="relative w-[650px] h-[420px]"
                style={{ animation: "floatSlow 4s ease-in-out infinite" }}
            >
                

                {/* Smaller Ghost */}
                <img
                src={scrollGhostImg}
                alt="Story Ghost"
                className="
                    absolute
                    left-5
                    top-16
                    md:top-40
                    w-[540px]
                    md:w-[590px]
                    object-contain
                    z-10

                "
                />
            </div>
            </div>
        </div>

       <div className="relative w-full h-[500px] mt-10 overflow-visible">

  <div className="relative w-full h-[420px] mt-10 overflow-visible flex items-center justify-center">

  







 <div className="relative w-screen h-[520px] overflow-visible flex items-center justify-center">

  {/* Perspective container */}
  <div
    className="relative w-full h-full flex items-center justify-center"
    style={{ perspective: "1200px" }}
  >

    {/* ================= FORWARD DIAGONAL (TOP LEFT → BOTTOM RIGHT) ================= */}
    <div className="absolute flex justify-between w-full px-0 md:px-10">

      {ghostCards.map((src, idx) => (
        <div
          key={`front-${idx}`}
          className="w-50 h-60 overflow-hidden"
          style={{
            transformOrigin: "center center",
            transformStyle: "preserve-3d",

            /* SAME SIZE + FORWARD Z-DEPTH */
            transform: `
              translateX(${idx * 10}px)
              translateY(${idx * 14}px)
              rotate(${idx * 2}deg)
              translateZ(80px)
            `,
            zIndex: idx
          }}
        >
          <img
            src={src}
            className="w-full h-full object-cover object-center rounded-xl shadow-lg"
          />
        </div>
      ))}

    </div>

    {/* BACKWARD DIAGONAL (BOTTOM LEFT → TOP RIGHT)*/}
    <div className="absolute flex justify-between w-full px-6 md:px-16">

      {[...ghostCards].reverse().map((src, idx) => (
        <div
          key={`back-${idx}`}
          className="w-50 h-60 overflow-hidden"
          style={{
            transformOrigin: "center 50%",
            transformStyle: "preserve-3d",

            /* SAME SIZE + BACKWARD + FLIP */
            transform: `
              translateX(${-idx * 10}px)
              translateY(${150 - idx * 14}px)
              rotate(${-idx * 2}deg)
              rotateX(180deg)
              translateZ(-80px)
            `,
            zIndex: ghostCards.length - idx
          }}
        >
          <img
            src={src}
            className="w-full h-full object-cover object-center rounded-xl shadow-xl"
          />
        </div>
      ))}

    </div>

  </div>
</div>

</div>

</div>

        
      </section>

      {/* Core Kinetic Motion Frame Styling Animations */}
      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes floatMini {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}