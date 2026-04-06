import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const MONOGRAM = "B&S";
const HASHTAG = "#BhargavSriVaishnavi";
const GROOM = "Bhargav Raj";
const BRIDE = "Sri Vaishnavi";
const LIVE_STREAM_URL = "#";

interface HeroProps {
  lang: "en" | "te";
  onLangChange: (l: "en" | "te") => void;
}

const HeroSection = ({ lang, onLangChange }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Language toggle */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-0 rounded-full border border-border overflow-hidden z-10">
        <button
          onClick={() => onLangChange("en")}
          className={`px-4 py-1.5 text-xs font-sans tracking-wide transition-all duration-300 ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-card text-foreground"}`}
        >
          English
        </button>
        <button
          onClick={() => onLangChange("te")}
          className={`px-4 py-1.5 text-xs font-sans tracking-wide transition-all duration-300 ${lang === "te" ? "bg-primary text-primary-foreground" : "bg-card text-foreground"}`}
        >
          తెలుగు
        </button>
      </div>

      {/* Monogram */}
      <div
        className={`transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        <span className="font-calligraphy text-7xl md:text-8xl text-foreground select-none">
          {MONOGRAM}
        </span>
      </div>

      {/* Hashtag */}
      <p
        className={`mt-6 text-sm font-sans tracking-[0.3em] uppercase text-primary transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {HASHTAG}
      </p>

      {/* Couple Names */}
      <div className="mt-4 space-y-0">
        <h1
          className={`font-calligraphy text-5xl md:text-7xl font-light text-foreground transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {GROOM}
        </h1>
        <p
          className={`font-calligraphy text-3xl md:text-4xl italic text-primary transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          &amp;
        </p>
        <h1
          className={`font-calligraphy text-5xl md:text-7xl font-light text-foreground transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {BRIDE}
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className={`mt-6 font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground transition-all duration-700 delay-[1100ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {lang === "en" ? "Wedding Invitation" : "వివాహ ఆహ్వానం"}
      </p>

      {/* CTA */}
      <div
        className={`mt-8 transition-all duration-700 delay-[1300ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <a href={LIVE_STREAM_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="wedding" size="lg" className="gap-2">
            <span>📹</span> {lang === "en" ? "Watch Live Stream" : "ప్రత్యక్ష ప్రసారం"}
          </Button>
        </a>
      </div>

      {/* Decorative dots */}
      <div className={`mt-10 flex items-center gap-2 text-primary transition-all duration-700 delay-[1500ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <span className="text-xs">✦</span>
        <span className="text-xs">❋</span>
        <span className="text-xs">✦</span>
      </div>
    </section>
  );
};

export default HeroSection;
