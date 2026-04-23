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
        <div className="py-8 md:py-12">
          <div className="flex justify-center">
            <a
              href="https://hdlivestream.in/bhargavrajwithsrivaishnavi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background border border-ink/10 rounded-[3rem] hover:bg-ink/5 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-poppins font-medium text-lg md:text-xl text-ink/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Watch Live Stream
            </a>
          </div>
        </div>
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
