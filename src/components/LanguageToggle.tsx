interface LanguageToggleProps {
  lang: "en" | "te";
  onLangChange: (l: "en" | "te") => void;
}

const LanguageToggle = ({ lang, onLangChange }: LanguageToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/10 shadow-sm transition-all duration-500 hover:bg-white/90">
      <button
        onClick={() => onLangChange("en")}
        className={`text-[10px] md:text-xs font-sans tracking-[0.1em] uppercase transition-all duration-300 px-3 py-1 rounded-full ${
          lang === "en" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLangChange("te")}
        className={`text-[10px] md:text-xs font-sans tracking-[0.1em] uppercase transition-all duration-300 px-3 py-1 rounded-full ${
          lang === "te" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TE
      </button>
    </div>
  );
};

export default LanguageToggle;
