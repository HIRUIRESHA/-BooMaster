import React from "react";

import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";
import icon8 from "../assets/icons/icon8.jpg";

export default function PartnerRibbon() {
  const partnerIcons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
  ];

  const marqueeIcons = [
    ...partnerIcons,
    ...partnerIcons,
    ...partnerIcons,
    ...partnerIcons,
  ];

  return (
    <div className="w-full bg-black/60 backdrop-blur-md overflow-hidden py-2">
      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-14 py-4">
        {marqueeIcons.map((icon, index) => (
          <div
            key={index}
            className="relative w-17 h-17 sm:w-21 sm:h-21 md:w-25 md:h-25 flex-shrink-0"
          >
            {/* Purple Glow Behind */}
<div className="absolute inset-[-3px] rounded-full border border-blue-900 opacity-20"></div>            <div
              className="
                relative
                w-full
                h-full
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                ring-2
                ring-purple-100/50
                shadow-[0_0_40px_rgba(168,85,247,0.5)]
                hover:scale-110
                transition-all
                duration-300
              "
            >
                
              <img
                src={icon}
                alt="partner"
                className={`w-full h-full object-contain ${
                    icon === icon7 || icon === icon8 ? "rounded-full" : ""
                }`}
                />
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}