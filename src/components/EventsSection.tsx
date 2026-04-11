import { useScrollReveal } from "@/hooks/useScrollReveal";
import { invitation, t } from "@/config/invitation";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface EventsSectionProps {
  lang: "en" | "te";
}

const EventsSection = ({ lang }: EventsSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.05);
  const { event } = invitation;

  return (
    <section ref={ref} className="py-16 md:py-40 px-4 md:px-6 bg-background relative overflow-hidden" lang={lang}>
      {/* Archival Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="archival-grid" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#archival-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-20 md:mb-40 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex justify-center mb-6">
            <span className="text-ink/60 text-4xl md:text-5xl font-script tracking-widest">The Wedding</span>
          </div>
          <h2 className="font-cinzel text-xl md:text-4xl text-ink/90 mb-6 tracking-[0.2em] md:tracking-[0.3em] uppercase font-light text-balance px-4">Celebration</h2>
          <div className="h-[0.5px] w-24 bg-ink/30 mx-auto mb-8"></div>
        </div>

        <div className="space-y-32 md:space-y-72">
          {/* Wedding Image */}
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 relative group px-2 md:px-0">
              {/* Sketch Frame Border */}
              <div className="absolute -inset-4 md:-inset-8 border-[0.5px] border-ink/20 rounded-[2rem] md:rounded-[3rem] pointer-events-none transition-all duration-1000 group-hover:inset-[-2rem] group-hover:border-ink/30"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-accent/30 shadow-sm transition-all duration-[2000ms]">
                {/* Soft Archival Blending */}
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(244,241,234,1)]"></div>
                
                <img
                  src="/wedding.png"
                  alt="The Wedding"
                  className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-105 filter grayscale-[0.2] sepia-[0.1] contrast-[0.9] brightness-[1.05]"
                />
                
                {/* Ink Wash Overlay */}
                <div className="absolute inset-0 bg-ink/5 mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>

          {event.events?.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-40 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Journal Illustration - Hand-drawn feel */}
              <div className="w-full md:w-1/2 relative group px-2 md:px-0">
                {/* Sketch Frame Border */}
                <div className="absolute -inset-4 md:-inset-8 border-[0.5px] border-ink/20 rounded-[2rem] md:rounded-[3rem] pointer-events-none transition-all duration-1000 group-hover:inset-[-2rem] group-hover:border-ink/30"></div>
                
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-accent/30 shadow-sm transition-all duration-[2000ms]">
                  {/* Soft Archival Blending */}
                  <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(244,241,234,1)]"></div>
                  
                  <img
                    src={item.illustration}
                    alt={t(item.title, lang)}
                    className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-105 filter grayscale-[0.2] sepia-[0.1] contrast-[0.9] brightness-[1.05]"
                  />
                  
                  {/* Ink Wash Overlay */}
                  <div className="absolute inset-0 bg-ink/5 mix-blend-multiply pointer-events-none"></div>
                </div>
              </div>

              {/* Event Details - Airy Spacing */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-8 md:space-y-12 px-4 md:px-0">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2 md:mb-4">
                    <p className={`font-cinzel text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-ink/80`}>
                      {item.date}
                    </p>
                    <div className="h-[0.5px] flex-grow bg-ink/20 hidden md:block"></div>
                  </div>
                  <h3 className="font-script text-6xl md:text-9xl text-ink leading-[0.8] opacity-90 transition-all duration-500 hover:opacity-100 text-balance">
                    {t(item.title, lang)}
                  </h3>
                </div>

                <div className="space-y-6 md:space-y-8 text-ink/80 font-playfair text-base md:text-xl leading-relaxed max-w-md mx-auto md:mx-0 font-light italic">
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 group/item">
                    <span className="text-lg md:text-xl opacity-50 italic font-serif">at</span>
                    <p className="tracking-wide font-light">{item.time}</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 group/item">
                    <span className="text-lg md:text-xl opacity-50 italic font-handwritten">in</span>
                    <p className="tracking-wide font-light underline underline-offset-8 decoration-ink/20 text-balance">{item.location}</p>
                  </div>
                  
                  {/* Attire Guide Section - Multi-font refine */}
                  {item.attire && (
                    <div className="pt-6 md:pt-8 space-y-4 md:space-y-6">
                      <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="h-[0.5px] w-8 bg-ink/30"></div>
                        <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-cinzel text-ink/60">
                          {t(item.attire.label, lang)}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <p className="text-ink font-handwritten text-3xl md:text-4xl opacity-80 leading-none">{t(item.attire.description, lang)}</p>
                        <div className="flex gap-4 md:gap-3">
                          {item.attire.colors.map((color, idx) => (
                            <div 
                              key={idx} 
                              className="w-8 h-8 md:w-6 md:h-6 rounded-full border border-ink/10 shadow-sm transition-all duration-500 hover:scale-125 hover:rotate-12"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-8 md:pt-12 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {"mapsLink" in item && item.mapsLink && (
                    <a href={item.mapsLink as string} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <Button variant="outline" className="w-full md:w-auto rounded-full border border-ink/20 text-ink/60 hover:bg-ink/5 px-10 md:px-12 py-6 md:py-7 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-cinzel transition-all duration-700 hover:shadow-sm">
                        <MapPin className="w-4 h-4 mr-3 opacity-40" />
                        {lang === "en" ? "Take me there" : "అక్కడికి తీసుకెళ్ళు"}
                      </Button>
                    </a>
                  )}
                  
                  <div className="inline-flex items-center gap-4 opacity-40">
                    <div className="h-[0.5px] w-8 bg-ink/40"></div>
                    <span className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase font-cinzel text-ink">
                      {lang === "en" ? "Blessings" : "దీవెనలు"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
