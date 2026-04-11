import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: Most browsers block autoplay. User interaction is required.
    // Wedding music file
    audioRef.current = new Audio("/music.mp3.mpeg");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <div className="relative">
          <Music2 className="w-5 h-5 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full animate-ping"></span>
        </div>
      ) : (
        <Music className="w-5 h-5 opacity-60" />
      )}
    </button>
  );
};

export default MusicToggle;
