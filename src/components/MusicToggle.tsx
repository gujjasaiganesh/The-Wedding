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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-sm border border-gold/40 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-gold/70 hover:shadow-lg group"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <div className="relative">
          <Music2 className="w-6 h-6 text-gold animate-spin" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gold/60 rounded-full"></span>
        </div>
      ) : (
        <Music className="w-6 h-6 text-ink/60" />
      )}
    </button>
  );
};

export default MusicToggle;
