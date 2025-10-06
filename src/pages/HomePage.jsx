import React, { useEffect } from "react";
import HeroSection from "../components/Hero"; // ✅ adjust path if needed
import { initAnimations, initFAQToggle } from "../scripts/animations"; // ✅ correct path
import HowItWorks from "../components/HowItWorks";
import FAQSection from "../components/FAQ";
import Benefits from "../components/Benefits";
import TestimonialSection from "../components/Tetimonials";
import LogoSlider from "../components/Client";

export default function HomePage() {
  useEffect(() => {
    initAnimations();
    initFAQToggle();
  }, []);

  return (
    <div>
      <HeroSection />
<LogoSlider/>
      <HowItWorks />
      <Benefits />
      <TestimonialSection />
      <FAQSection />
     
    </div>
  );
}
