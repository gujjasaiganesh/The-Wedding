import { useState } from "react";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";
import MusicToggle from "@/components/MusicToggle";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const [lang, setLang] = useState<"en" | "te">("en");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Background Theme Image */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("/background-theme.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <FloatingElements />
      <LanguageToggle lang={lang} onLangChange={setLang} />
      <MusicToggle />
      <div className="relative z-10">
        <HeroSection lang={lang} />
        <EventsSection lang={lang} />
        <VenueSection lang={lang} />
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Index;
