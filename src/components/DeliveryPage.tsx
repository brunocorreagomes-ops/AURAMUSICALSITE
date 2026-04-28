import { motion } from "motion/react";
import { Music, Share2, Download, Heart, Play, Pause, Volume2, Star, Sparkles, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SongRequest } from "../types";

interface DeliveryPageProps {
  songRequest: Partial<SongRequest>;
}

export default function DeliveryPage({ songRequest }: DeliveryPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // COLOQUE O ID DO SEU VÍDEO DO YOUTUBE AQUI
  const youtubeVideoId = "dQw4w9WgXcQ"; 
  
  // Se não houver música gerada (ex: demo), usamos os mock lyrics
  const displayLyrics = songRequest.lyrics ? songRequest.lyrics.split("\n").filter(l => l.trim()) : [
    `Para ${songRequest.targetName || "você"}...`,
    `A vida corre, mas eu lembro bem...`,
    `Daquele momento em que a gente ${songRequest.memory?.toLowerCase().substring(0, 40) || "viveu algo especial"}...`,
    `É a sua mania de ${songRequest.habit?.toLowerCase() || "fazer tudo com carinho"} que me ganha.`,
    `E como você sempre diz: "${songRequest.targetPhrase || "Tudo vai dar certo"}"`,
    `Essa música é para eternizar o nosso amor.`
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent relative overflow-hidden atmosphere-bg">
      {/* Audio Element Hidden */}
      <audio 
        ref={audioRef} 
        src={songRequest.audioUrl || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"} 
        onEnded={() => setIsPlaying(false)}
      />

      {/* Main Experience */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center min-h-screen">
        
        {/* Header Branding */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 mb-20 text-center"
        >
          <div className="flex items-center gap-3 text-white/40 mb-2">
            <Music size={18} className="text-brand-accent animate-pulse" />
            <span className="text-[10px] lg:text-[12px] uppercase font-black tracking-[0.4em]">Melodia Memorável</span>
          </div>
          <div className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent">Exclusivo para você</h2>
            <p className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none mix-blend-lighten">Cada nota, <br/>uma lembrança.</p>
          </div>
        </motion.div>

        {/* The Gift Cover */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="w-full relative mb-12 group"
        >
          <div className="aspect-square w-full max-w-[450px] mx-auto rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[8s] grayscale-[20%]"
              alt="Song cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-12 left-0 right-0 text-center px-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-6xl font-serif font-black mb-4 italic leading-tight"
              >
                Para {songRequest.targetName || "Você"}
              </motion.h1>
              <div className="w-16 h-1 bg-brand-accent mx-auto mb-5 rounded-full" />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] uppercase tracking-[0.6em] text-white/50 font-black"
              >
                Letra e Música Exclusivas
              </motion.p>
            </div>
          </div>
          
          {/* Audio Floating Elements */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6">
             <button className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-brand-accent transition-colors group shadow-3xl">
               <Heart size={28} className="group-hover:fill-current" />
             </button>
             <button className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-3xl">
               <Share2 size={28} />
             </button>
          </div>
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full max-w-4xl mx-auto mb-20 relative px-4"
        >
           <div className="relative aspect-video w-full rounded-[3rem] overflow-hidden glass border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />
              <iframe 
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&modestbranding=1`}
                title="Sua Música Exclusiva"
                className="w-full h-full relative z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all" />
           </div>
           
           <div className="flex items-center justify-center gap-3 mt-6 text-white/30">
              <Sparkles size={14} className="text-brand-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Experiência Visual Completa</span>
              <Sparkles size={14} className="text-brand-accent animate-pulse" />
           </div>
        </motion.div>

        {/* Message Dedication */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-24 max-w-sm px-4"
        >
          <div className="w-10 h-1 bg-white/10 mx-auto mb-8" />
          <p className="text-white/60 italic text-xl lg:text-2xl font-serif leading-relaxed font-light">
            "Esta música foi criada para transformar nossas memórias em um presente que você possa ouvir sempre que quiser me sentir por perto."
          </p>
        </motion.div>

        {/* Player Controls */}
        <div className="w-full max-w-[450px] space-y-12 mb-32 glass p-10 rounded-[3.5rem] border border-white/10 shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex justify-between items-end">
               <div>
                 <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2">Tocando Agora</p>
                 <h4 className="text-2xl font-serif italic font-black">{songRequest.style || "Homenagem Especial"}</h4>
               </div>
               <Music size={24} className="text-white/20" />
            </div>
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer group/progress">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-brand-accent shadow-[0_0_20px_#ff4e00]" 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover/progress:opacity-20 transition-opacity" />
            </div>
            <div className="flex justify-between text-[11px] font-mono font-black text-white/30 uppercase tracking-widest">
               <span>01:12</span>
               <span>03:45</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-16 relative z-10">
               <button className="text-white/20 hover:text-white transition-all transform hover:scale-125"><Download size={26} /></button>
               <button 
                onClick={togglePlay}
                className="w-28 h-28 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,255,255,0.2)] group"
               >
                 {isPlaying ? <Pause size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" className="ml-2" />}
               </button>
               <button className="text-white/20 hover:text-white transition-all transform hover:scale-125"><Volume2 size={26} /></button>
          </div>
        </div>

        {/* Lyrics Experience */}
        <div className="w-full space-y-12 mb-32 px-4">
           <div className="flex items-center gap-4 justify-center mb-16">
             <div className="h-px w-8 bg-white/10" />
             <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Letra da Canção</h3>
             <div className="h-px w-8 bg-white/10" />
           </div>
           
           <div className="space-y-10 text-center max-w-lg mx-auto lyric-viewport">
              {displayLyrics.map((line, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: i === 2 ? 1 : 0.2, y: 0, scale: i === 2 ? 1.1 : 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                  className={`text-2xl lg:text-3xl font-serif leading-tight italic transition-all duration-700 ${i === 2 ? 'text-white' : 'text-white/20'}`}
                >
                  {line}
                </motion.p>
              ))}
           </div>
        </div>

        {/* CTA to get more */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full p-12 lg:p-20 rounded-[4rem] glass border border-brand-accent/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-accent/5" />
          <div className="relative z-10">
            <div className="inline-block p-4 rounded-full bg-brand-accent mb-10 shadow-2xl animate-bounce">
              <Heart size={32} fill="white" />
            </div>
            <h4 className="text-3xl lg:text-4xl font-serif italic font-black mb-4 capitalize">Gostou desse presente?</h4>
            <p className="text-base text-white/40 mb-12 max-w-sm mx-auto font-light leading-relaxed">Crie agora uma canção exclusiva para quem você ama também e eternize uma história.</p>
            <button className="w-full bg-white text-black py-7 rounded-[2rem] font-black text-xl hover:bg-brand-accent hover:text-white transition-all flex items-center justify-center gap-3 uppercase tracking-tighter">
              CRIAR MINHA MELODIA <Sparkles size={24} />
            </button>
          </div>
        </motion.div>

        {/* Reviews Footer */}
        <div className="mt-32 pt-20 border-t border-white/5 w-full text-center">
            <div className="flex justify-center gap-2 text-brand-accent mb-8 opacity-40">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] leading-loose max-w-sm mx-auto">
              "Um presente eterno. Transformou o aniversário da minha mãe em lágrimas de alegria e música."
            </p>
        </div>

      </main>
    </div>
  );
}
