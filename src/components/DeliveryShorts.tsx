import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface Props {
  videoId: string;
  title: string;
  key?: string | number;
}

export default function DeliveryShorts({ videoId, title }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 768) {
            setIsPlaying(true);
          } else if (!entry.isIntersecting && window.innerWidth < 768) {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsHovered(true);
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsHovered(false);
      setIsPlaying(false);
    }
  };

  // YouTube Shorts embed URL
  // We use the embed endpoint with autoplay and mute
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3`;

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!videoId ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/[0.02]">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/10">
            <Play size={32} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Em breve</p>
          <p className="text-xs text-white/10 mt-2 italic">Nova entrega sendo finalizada</p>
        </div>
      ) : (
        <>
          <iframe
            src={embedUrl}
            className={`w-full h-full pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-40 grayscale-[50%]'}`}
            allow="autoplay; encrypted-media"
            title={title}
          />
          
          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
              >
                <div className="w-16 h-16 rounded-full bg-brand-accent text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">Entrega Real</p>
            <p className="text-xs font-serif italic text-white/90">{title}</p>
          </div>

          {isPlaying && (
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
              <VolumeX size={12} className="text-white/60" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
