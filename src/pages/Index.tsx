import { useState } from "react";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";
import LanguageToggle from "@/components/LanguageToggle";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  const [lang, setLang] = useState<"en" | "te">("en");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <FloatingElements />
      <LanguageToggle lang={lang} onLangChange={setLang} />
      <div className="relative z-10">
        <HeroSection lang={lang} />
        <div className="py-16 md:py-24">
          <CountdownTimer />
        </div>
        <EventsSection lang={lang} />
        <VenueSection lang={lang} />
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Index;
