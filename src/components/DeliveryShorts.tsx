import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface Props {
  videoId: string;
  title: string;
  label?: string;
  key?: string | number;
}

export default function DeliveryShorts({ videoId, title, label }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We removed auto-play on mobile to avoid browser blocks on sound
  }, []);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  // YouTube Shorts embed URL
  // We use the embed endpoint with autoplay=1 and mute=0 when playing
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1`;

  return (
    <div 
      className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group cursor-pointer"
      onClick={handleTogglePlay}
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
          {isPlaying ? (
            <iframe
              src={embedUrl}
              className="w-full h-full pointer-events-none transition-opacity duration-500 opacity-100"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title={title}
            />
          ) : (
            <div className="w-full h-full bg-black/20 flex items-center justify-center">
               <img 
                 src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                 className="w-full h-full object-cover opacity-60 grayscale-[30%]"
                 alt={title}
               />
            </div>
          )}
          
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
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">{label || "Entrega Real"}</p>
            <p className="text-xs font-serif italic text-white/90">{title}</p>
          </div>

          {isPlaying && (
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
              <Volume2 size={12} className="text-white/60" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
