import { useState } from "react";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [lang, setLang] = useState<"en" | "te">("en");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <HeroSection lang={lang} onLangChange={setLang} />
        <CoupleSection lang={lang} />
        <VenueSection lang={lang} />
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Index;
