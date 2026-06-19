import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Roadmap from "./pages/Roadmap";
import HowToBuy from "./pages/HowToBuy";
import Tokenomics from "./pages/Tokenomics";

import PartnerRibbon from "./components/PartnerRibbon";
import GhostRibbon from "./components/GhostRibbon";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Hero />
      <PartnerRibbon />
      <About />
      
      {/* FAQ block */}
<FAQ />


<div className="relative w-full h-0 z-30 -mt-10 md:-mt-20">
        <GhostRibbon />
      </div>

      {/* Roadmap Section */}
      <Roadmap />

      {/* Ribbon bridging Roadmap and HowToBuy */}
      <div className="relative w-full h-0 z-30 -mt-5 md:-mt-2">
        <GhostRibbon />
      </div>


<HowToBuy />
      <Tokenomics />
    </div>
  );
}