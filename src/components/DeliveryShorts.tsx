import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';

interface Props {
  videoId: string;
  title: string;
  label?: string;
  key?: string | number;
}

const Player = ReactPlayer as any;

export default function DeliveryShorts({ videoId, title, label }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isReady) return;
    setIsPlaying(!isPlaying);
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <div 
      className={`relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-[2rem] overflow-hidden bg-black border border-white/10 group ${isReady ? 'cursor-pointer' : ''}`}
      onClick={isReady ? togglePlay : undefined}
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
          <Player
            className={`react-player-shorts absolute top-0 left-0 pointer-events-none transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={isPlaying}
            controls={false}
            playsinline={true}
            loop={true}
            width="100%"
            height="100%"
            onReady={() => setIsReady(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            config={{
              youtube: {
                playerVars: { 
                  modestbranding: 1, 
                  rel: 0,
                  showinfo: 0,
                  iv_load_policy: 3
                }
              }
            } as any}
          />

          {/* Skeleton Loader while player is NOT ready */}
          {!isReady && (
            <div className="absolute inset-0 z-20 animate-pulse bg-black flex flex-col justify-end p-6">
              <img 
                 src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                 className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[30%] -z-10"
                 alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/20" />
              </div>
              <div className="h-3 w-1/3 bg-white/20 rounded mb-2 z-10" />
              <div className="h-4 w-3/4 bg-white/20 rounded z-10" />
            </div>
          )}

          {/* Custom Overlay when not yet started or paused */}
          {(isReady && (!hasStarted || !isPlaying)) && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                {!hasStarted && (
                   <img 
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%] -z-10"
                      alt={title}
                   />
                )}
             </div>
          )}

          {/* Central Play/Pause Button */}
          {isReady && (
            <div className="absolute transition-all duration-300 inset-0 flex items-center justify-center z-10 opacity-100 lg:opacity-0 group-hover:opacity-100">
              <div 
                 className={`w-16 h-16 rounded-full ${isPlaying ? 'bg-black/50 text-white border border-white/20' : 'bg-brand-accent text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]'} flex items-center justify-center transition-transform hover:scale-110`}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </div>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-start text-left z-10 pointer-events-none">
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">{label || "Entrega Real"}</p>
            <p className="text-xs font-serif italic text-white/90 drop-shadow-md">{title}</p>
          </div>
        </>
      )}
    </div>
  );
}
