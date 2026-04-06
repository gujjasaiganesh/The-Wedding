import coupleImg from "@/assets/couple-illustration.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { invitation, t } from "@/config/invitation";

interface CoupleSectionProps {
  lang: "en" | "te";
}

const CoupleSection = ({ lang }: CoupleSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { couple, families, event } = invitation;

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <div
          className={`w-full md:w-5/12 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={coupleImg}
              alt="Couple illustration"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={768}
              height={960}
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-7/12 text-center md:text-left space-y-5">
          <p
            className={`font-sans text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {lang === "en"
              ? "Srirasthu ✦ Shubhamasthu ✦ Avighnamasthu"
              : "శ్రీరస్తు ✦ శుభమస్తు ✦ అవిఘ్నమస్తు"}
          </p>

          <p
            className={`font-sfpro text-sm leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {lang === "en"
              ? "We solicit your gracious presence with family and friends on the auspicious occasion of our marriage."
              : "మా కుమారుడి వివాహ శుభ సందర్భంలో మీ సకుటుంబ సపరివార సాన్నిధ్యాన్ని ప్రార్థిస్తున్నాము."}
          </p>

          {/* Groom */}
          <h2
            className={`font-calligraphy text-3xl md:text-4xl text-foreground transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {couple.groom.formalEn}
          </h2>

          {/* Parents */}
          <p
            className={`font-sfpro text-xs text-muted-foreground transition-all duration-700 delay-550 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {families.groomParentsEn}
          </p>

          <p
            className={`font-sans text-xs tracking-[0.2em] uppercase text-primary transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            WITH
          </p>

          {/* Bride */}
          <h2
            className={`font-calligraphy text-3xl md:text-4xl text-foreground transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {couple.bride.formalEn}
          </h2>

          <p
            className={`font-sfpro text-xs text-muted-foreground transition-all duration-700 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {families.brideParentsEn}
          </p>

          {/* Decorative star */}
          <div className={`flex justify-center md:justify-start transition-all duration-700 delay-[900ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <span className="text-primary text-sm">✦</span>
          </div>

          {/* Muhurtham Card */}
          <div
            className={`inline-block border border-border rounded-xl p-5 shadow-sm bg-card/60 backdrop-blur-sm transition-all duration-700 delay-[1000ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-2">
              {t(event.sumuhurthamLabel, lang)}
            </p>
            <p className="font-serif text-sm text-foreground">
              {event.sumuhurthamEn}
            </p>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              {event.sumuhurthamNoteEn}
            </p>
          </div>

          <p
            className={`font-calligraphy text-sm italic text-muted-foreground transition-all duration-700 delay-[1100ms] ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            With Best Compliments from Near &amp; Dear
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
