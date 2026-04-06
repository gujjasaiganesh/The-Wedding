import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VENUE_NAME = "SYR Convention Hall";
const VENUE_ADDRESS = "Hyderabad, Telangana";
const MAPS_LINK = "https://maps.google.com";
const QR_API = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

interface VenueSectionProps {
  lang: "en" | "te";
}

const VenueSection = ({ lang }: VenueSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 px-4 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <h2
          className={`font-calligraphy text-4xl md:text-5xl text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          📍 {lang === "en" ? "Wedding Venue" : "వివాహ వేదిక"}
        </h2>

        <p
          className={`font-sans text-sm font-semibold tracking-wide text-primary transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {VENUE_NAME}
        </p>

        <p
          className={`font-sans text-sm text-muted-foreground whitespace-pre-line leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {VENUE_ADDRESS}
        </p>

        {/* QR Code */}
        <div
          className={`flex justify-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <div className="animate-pulse-soft">
            <img
              src={`${QR_API}${encodeURIComponent(MAPS_LINK)}`}
              alt="QR code for directions"
              className="w-40 h-40 rounded-lg shadow-md"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
        </div>

        <p className={`font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {lang === "en" ? "Scan for Directions" : "దిశల కోసం స్కాన్ చేయండి"}
        </p>

        <div className={`transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="wedding" size="default">
              {lang === "en" ? "Take me there" : "అక్కడికి తీసుకెళ్ళు"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
