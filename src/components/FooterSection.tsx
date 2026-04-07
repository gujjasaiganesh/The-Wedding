import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FooterSectionProps {
  lang: "en" | "te";
}

const FooterSection = ({ lang }: FooterSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="py-20 px-4 text-center space-y-6">
      {/* Divider */}
      <div className={`flex items-center justify-center gap-3 text-primary transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <span className="text-xs">✦</span>
        <div className="w-12 h-px bg-border" />
        <span className="text-xs">✦</span>
      </div>

      <p
        className={`font-calligraphy text-2xl md:text-3xl italic text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {lang === "en" ? "We can't wait to celebrate with you!" : "మీతో కలిసి జరుపుకోవడానికి మేము ఎదురుచూస్తున్నాము!"}
      </p>

      <h3
        className={`font-calligraphy text-4xl md:text-5xl text-foreground transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Bhargav Raj <span className="text-primary">❤</span> Sri Vaishnavi
      </h3>

      <p
        className={`font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        April 29th, 2026
      </p>

      <div className={`transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <span className="inline-block border border-border rounded-full px-5 py-2 font-sans text-xs tracking-widest text-primary">
          #BhargaVaishu
        </span>
      </div>

      {/* Subtle icon */}
      <div className={`text-primary text-lg transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        ❋
      </div>

      {/* Footer line */}
      <div className="pt-8 border-t border-border">
        <p className="font-sans text-[10px] text-muted-foreground tracking-wide">
          Made with ❤️ for our special day
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
