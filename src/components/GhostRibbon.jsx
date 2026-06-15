import React from "react";
import repeatingGhostImg from "../assets/ghosts/r_ghost.png";

export default function GhostRibbon({ flip }) {
  const COUNT = 40;

  return (
    <div className="w-full h-40 md:h-60 flex items-center overflow-hidden pointer-events-none select-none bg-transparent">

      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marqueeReverse 40s linear infinite" }}
      >

        {Array.from({ length: COUNT * 2 }).map((_, i) => (
          <div
            key={`ribbon-ghost-${i}`}
            className="flex-none w-28 h-40 md:w-36 md:h-60"
          >
            <img
              src={repeatingGhostImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
}