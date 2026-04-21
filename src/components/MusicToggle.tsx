import { useState, useEffect } from "react";
import { Music, Music2 } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-3 bg-background/80 backdrop-blur-sm border border-ink/10 rounded-full hover:bg-background/90 transition-all duration-300 group"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Music2 className="w-5 h-5 text-ink/70 group-hover:text-ink" />
      ) : (
        <Music className="w-5 h-5 text-ink/70 group-hover:text-ink" />
      )}
    </button>
  );
};

export default MusicToggle;
