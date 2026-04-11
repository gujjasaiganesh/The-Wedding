import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Wedding music file
    audioRef.current = new Audio("/music.mp3.mpeg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;
    
    // Try to autoplay when website opens
    const playMusic = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked - user interaction required");
      }
    };
    
    // Attempt autoplay immediately
    playMusic();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-ink/90 to-ink/80 backdrop-blur-md border-2 border-gold/30 shadow-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-gold/60 hover:shadow-2xl group"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <div className="relative">
          <div className="flex items-center gap-1">
            <div className="w-1 h-4 bg-gold rounded-full animate-pulse"></div>
            <div className="w-1 h-6 bg-gold rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse delay-150"></div>
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping"></span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <div className="w-1 h-4 bg-ink/40 rounded-full"></div>
          <div className="w-1 h-6 bg-ink/40 rounded-full"></div>
          <div className="w-1 h-3 bg-ink/40 rounded-full"></div>
        </div>
      )}
      <span className="absolute inset-0 rounded-full border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

export default MusicToggle;
