import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import ReactPlayer from 'react-player';

interface Props {
  videoId: string;
  title: string;
  label?: string;
  key?: string | number;
}

export default function DeliveryShorts({ videoId, title, label }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group">
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
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={isPlaying}
            controls={true}
            playsinline={true}
            loop={true}
            width="100%"
            height="100%"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            config={{
              youtube: {
                playerVars: { modestbranding: 1, rel: 0 }
              }
            }}
          />
          
          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%] -z-10"
                  alt={title}
                />
                <div className="w-16 h-16 rounded-full bg-brand-accent text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">{label || "Entrega Real"}</p>
                  <p className="text-xs font-serif italic text-white/90">{title}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
