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

<div
  className="relative z-[9999]"
  style={{
    marginTop: "-120px",
    marginBottom: "-120px",
  }}
>
  <GhostRibbon />
</div>

<Roadmap />

<div
  className="relative z-[9999]"
  style={{
    marginTop: "-120px",
    marginBottom: "-120px",
  }}
>
  <GhostRibbon />
</div>

<HowToBuy />
      <Tokenomics />
    </div>
  );
}