import { useEffect, useState } from "react";
import { invitation, t } from "@/config/invitation";

const { couple, event } = invitation;

interface HeroProps {
  lang: "en" | "te";
}

const HeroSection = ({ lang }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-32 bg-background overflow-hidden" lang={lang}>
      {/* Archival Paper Texture & Ink Sketches */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Hand-drawn line motifs */}
          <path d="M100 100 Q150 50 200 100 T300 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-pulse" />
          <path d="M800 800 Q850 850 900 800 T950 800" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-pulse" />
          
          {/* Faint Sketch Frame */}
          <rect x="50" y="50" width="900" height="900" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="5 10" />
        </svg>
      </div>

      {/* Top Logo Monogram - Ink Style */}
      <div 
        className={`relative z-10 mb-12 md:mb-16 transition-all duration-1000 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <img 
          src="/logo.png"
          alt="B&V Logo"
          className="w-20 h-20 md:w-32 md:h-32 object-contain opacity-90 mix-blend-multiply"
        />
      </div>

      {/* Srirasthu Heading - Classic Cinzel */}
      <div 
        className={`relative z-10 mb-8 md:mb-10 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h2 className="text-ink font-cinzel text-base md:text-xl tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-80 text-balance px-4">
          {t(event.blessing, lang)}
        </h2>
      </div>

      {/* Message - Classic Playfair Italic */}
      <div 
        className={`relative z-10 max-w-2xl mb-12 md:mb-16 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <p className="text-ink/80 font-playfair italic text-base md:text-xl leading-relaxed tracking-wider px-4 text-balance">
          {t(event.message, lang)}
        </p>
      </div>

      {/* Couple Names - Refined Script Contrast */}
      <div className="relative z-10 mb-12 md:mb-16 space-y-4 px-2">
        <h1 
          className={`font-script text-6xl md:text-9xl text-ink transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {t(couple.groom, lang)}
        </h1>
        <div 
          className={`flex items-center justify-center gap-4 md:gap-6 transition-all duration-1000 delay-900 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        >
          <div className="h-[0.5px] w-8 md:w-24 bg-ink/30"></div>
          <span className="font-handwritten text-2xl md:text-4xl text-ink/60 tracking-widest leading-none">&amp;</span>
          <div className="h-[0.5px] w-8 md:w-24 bg-ink/30"></div>
        </div>
        <h1 
          className={`font-script text-6xl md:text-9xl text-ink transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {t(couple.bride, lang)}
        </h1>
      </div>

      {/* Family Details - Classic Serif Structure */}
      <div 
        className={`relative z-10 mb-16 md:mb-20 space-y-3 transition-all duration-1000 delay-&lsqb;1200ms&rsqb; ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-ink/70 font-serif text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase font-light px-4">
          {invitation.families.groomParentsEn}
        </p>
        <p className="text-ink/70 font-serif text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase font-light px-4">
          {invitation.families.brideParentsEn}
        </p>
      </div>

      {/* Sumuhurtham Block - Sketchbook Card */}
      <div 
        className={`relative z-10 transition-all duration-1000 delay-&lsqb;1400ms&rsqb; ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="relative p-8 md:p-24 bg-background border border-ink/10 rounded-[3rem] md:rounded-[4rem] shadow-sm max-w-2xl mx-auto overflow-hidden group">
          <div className="absolute inset-4 border border-ink/5 rounded-[3.5rem] pointer-events-none"></div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-ink/60 font-cinzel text-2xl md:text-3xl tracking-[0.4em] uppercase">
              {t(event.sumuhurthamLabel, lang)}
            </h3>
            <div className="h-[0.5px] w-20 bg-ink/20 mx-auto"></div>
            <p className="text-ink font-playfair text-xl md:text-2xl font-light tracking-wide leading-relaxed italic">
              {event.sumuhurthamEn}
            </p>
            <p className="text-ink font-handwritten text-5xl md:text-6xl opacity-80 leading-none">
              {event.sumuhurthamNoteEn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
