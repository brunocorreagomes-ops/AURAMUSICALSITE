import { useState } from "react";
import { motion } from "motion/react";
import { Play, Star, ChevronRight, CheckCircle2, Music, Heart, MemoryStick as Memory, MessageSquare, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";
import PersonaFilter from "./PersonaFilter";
import DynamicContent from "./DynamicContent";
import Quiz from "./Quiz";
import { Persona } from "./data";

interface LandingPageProps {
  onStart: (initialData?: any) => void;
}

function Testimonial({ name, text, role, highlight }: { name: string; text: string; role: string; highlight?: boolean }) {
  return (
    <div className={`p-6 md:p-10 rounded-3xl md:rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${highlight ? 'bg-brand-accent/10 border-brand-accent shadow-[0_20px_50px_rgba(212,175,55,0.1)]' : 'glass border-white/5'}`}>
       <div className="flex gap-1 mb-6 text-brand-accent">
         {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
       </div>
       <p className="text-lg font-serif italic font-medium leading-relaxed mb-8">"{text}"</p>
       <div>
         <p className="font-black text-white text-xs uppercase tracking-widest">{name}</p>
         <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mt-1">{role}</p>
       </div>
    </div>
  );
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [persona, setPersona] = useState<Persona>("geral");
  const [quizDone, setQuizDone] = useState(false);
  const [quizResults, setQuizResults] = useState<any>(null);

  const handleStart = () => {
    onStart(quizResults);
  };

  const handleQuizFinish = (results: any) => {
    setQuizResults(results);
    if (results.persona) {
      setPersona(results.persona as Persona);
    }
    setQuizDone(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans overflow-x-hidden atmosphere-bg">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="text-2xl font-serif italic font-black tracking-tight text-white flex items-center gap-3">
          <img src="https://i.ibb.co/6cszB9X2/auralogo.png" alt="Aura Musical Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
          Aura Musical
        </div>
        <button 
          onClick={handleStart}
          className="glass hover:bg-white hover:text-black px-6 py-2 rounded-full font-medium transition-all text-sm uppercase tracking-widest"
        >
          Criar Música
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto z-10">
        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-12"
        >
          <PersonaFilter activePersona={persona} onSelect={setPersona} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            key={persona}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8 animate-pulse">
              <Zap size={12} fill="currentColor" /> Produção Artesanal: Somente 5 vagas para esta semana
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif italic font-black text-white mb-10 leading-[0.9]">
              Não é só uma música.<br />É uma <span className="text-brand-accent italic underline decoration-brand-accent/30">memória eterna</span>.
            </h1>

            <p className="text-white/40 max-w-xl text-lg md:text-xl font-medium leading-relaxed mb-12">
              Transformamos sua história, apelidos e detalhes únicos em uma canção profissional digna de rádio. <span className="text-white">O presente que arranca lágrimas e dura para sempre.</span>
            </p>

            <div className="space-y-6 mt-16">
              <button 
                onClick={handleStart}
                className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] uppercase tracking-tight"
              >
                CRIAR ESSA HOMENAGEM <ChevronRight size={24} />
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-[10px] uppercase font-black tracking-widest text-white/30 pl-2">
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent" /> Entrega Rápida</span>
                <span className="hidden sm:block opacity-20">|</span>
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-accent" /> Garantia de Emoção</span>
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            {!quizDone ? (
              <Quiz onFinish={handleQuizFinish} />
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative border border-white/10 group"
              >
                <img 
                  src={persona === "namoro" ? "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2000&auto=format&fit=crop" : 
                       persona === "familia" ? "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop" :
                       "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop"} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s] grayscale-[20%]"
                  alt="Personalized Recommendation"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent flex flex-col justify-end p-10">
                   <div className="glass p-8 rounded-3xl">
                      <p className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-2">Recomendação Personalizada</p>
                      <h4 className="text-2xl font-serif italic font-black text-white mb-4">
                        Uma composição {quizResults?.vibe === 'romantica' ? 'romântica' : quizResults?.vibe === 'engracada' ? 'divertida' : 'única'} em estilo {quizResults?.estilo === 'acustico' ? 'Acústico' : quizResults?.estilo === 'piano' ? 'Piano & Orquestra' : quizResults?.estilo === 'pop' ? 'Pop' : 'Sertanejo'}.
                      </h4>
                      <button onClick={handleStart} className="w-full py-4 bg-brand-accent text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-[0_0_20px_#D4AF3744] transition-all">Começar agora</button>
                   </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Audio Samples Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-serif italic font-black mb-6">Qual será o seu tom?</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">Ouça o que nossos artistas podem criar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-32">
            {[
              { name: "Acústico Voz & Violão", desc: "Perfeito para momentos íntimos e delicados.", mood: "Emocionante" },
              { name: "MPB Contemporânea", desc: "Ritmo leve e poético para celebrar a vida.", mood: "Alegre" },
              { name: "Piano & Orquestra", desc: "Grandioso e épico para grandes homenagens.", mood: "Solene" }
            ].map((style, idx) => (
              <div key={idx} className="glass p-6 md:p-10 rounded-3xl md:rounded-[3rem] hover:bg-white/10 transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-brand-accent group-hover:scale-110 transition-transform">
                  <Music size={32} />
                </div>
                <h3 className="text-2xl font-serif italic font-bold mb-4">{style.name}</h3>
                <p className="text-white/50 mb-8 text-sm leading-relaxed font-light">{style.desc}</p>
                <div className="flex flex-col items-center gap-6 mt-auto">
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] px-4 py-1.5 bg-brand-accent/10 rounded-full border border-brand-accent/20">{style.mood}</span>
                  <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-12 border-t border-white/5 pt-20 md:pt-32">
             <Testimonial 
               name="Juliana S."
               text="Dei a música para meu marido no nosso casamento e não houve quem não chorasse. É a nossa história ali, em cada verso."
               role="Casamento"
             />
             <Testimonial 
               name="Marcos V."
               text="Minha mãe ouve a música que fiz pra ela todo santo dia. Diz que foi o melhor presente que já recebeu na vida."
               role="Dia das Mães"
               highlight
             />
             <Testimonial 
               name="Beatriz L."
               text="Superou todas as minhas expectativas. A voz, a letra, a produção... tudo impecável e muito profissional."
               role="Amizade"
             />
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 atmosphere-bg opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl lg:text-8xl font-serif italic font-black mb-10 tracking-tighter leading-tight italic">Eternize esse momento hoje.</h2>
          
          <div className="flex justify-center gap-4 mb-16">
             <div className="glass px-6 py-3 rounded-full flex items-center gap-2 border border-brand-accent/30 text-brand-accent text-xs font-black uppercase tracking-widest">
               <ShieldCheck size={14} /> Garantia de Emoção
             </div>
             <div className="glass px-6 py-3 rounded-full flex items-center gap-2 border border-white/10 text-white/50 text-xs font-black uppercase tracking-widest">
               <Clock size={14} /> Somente 5 vagas
             </div>
          </div>

          <button 
            onClick={handleStart}
            className="w-full sm:w-auto group bg-white text-black px-8 sm:px-16 py-6 md:py-8 rounded-full md:rounded-[2.5rem] text-xl sm:text-3xl font-black shadow-[0_0_80px_rgba(255,255,255,0.2)] hover:bg-brand-accent hover:text-white hover:shadow-[0_0_80px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-4 md:gap-6 uppercase tracking-tighter mx-auto"
          >
            QUERO ESSA HOMENAGEM <ChevronRight size={24} className="sm:hidden" /><ChevronRight size={32} className="hidden sm:block" />
          </button>
          
          <p className="mt-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Produção Artesanal Limitada</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-brand-bg text-white/20 text-[10px] text-center border-t border-white/5 uppercase tracking-[0.2em] font-bold">
        <p className="mb-6">© 2026 Aura Musical • CNPJ 00.000.000/0001-00</p>
        <div className="flex justify-center gap-12">
          <a href="#" className="hover:text-brand-accent transition-colors">Sobre Nós</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Termos</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Suporte</a>
        </div>
      </footer>
    </div>
  );
}
