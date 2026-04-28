import { useState } from "react";
import { motion } from "motion/react";
import { Play, Star, ChevronRight, CheckCircle2, Music, Heart, MemoryStick as Memory, MessageSquare, Sparkles } from "lucide-react";
import PersonaFilter from "./PersonaFilter";
import DynamicContent from "./DynamicContent";
import Quiz from "./Quiz";
import { Persona } from "./data";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [persona, setPersona] = useState<Persona>("geral");
  const [quizDone, setQuizDone] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans overflow-x-hidden atmosphere-bg">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="text-2xl font-serif italic font-black tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
            <Music size={16} fill="white" />
          </div>
          Melodia Memorável
        </div>
        <button 
          onClick={onStart}
          className="glass hover:bg-white hover:text-black px-6 py-2 rounded-full font-medium transition-all text-sm uppercase tracking-widest"
        >
          Criar Música
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto z-10">
        {/* Persona Filter */}
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
              <Sparkles size={12} fill="currentColor" /> Restam apenas 7 pedidos para hoje
            </div>
            
            <DynamicContent persona={persona} />

            <div className="space-y-6 mt-16">
              <button 
                onClick={onStart}
                className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] uppercase tracking-tight"
              >
                CRIAR ESSA HOMENAGEM <ChevronRight size={24} />
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-[10px] uppercase font-black tracking-widest text-white/30 pl-2">
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent" /> Entrega em 24h</span>
                <span className="hidden sm:block opacity-20">|</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent" /> +25 mil famílias</span>
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            {!quizDone ? (
              <Quiz onFinish={() => setQuizDone(true)} />
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative border border-white/10 group"
              >
                <img 
                  src={persona === "namoro" ? "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2000&auto=format&fit=crop" : 
                       persona === "familia" ? "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop" :
                       "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=2000&auto=format&fit=crop"} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s] grayscale-[20%]"
                  alt="Emotional Connection"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent flex flex-col justify-end p-10">
                   <div className="glass p-8 rounded-3xl">
                      <p className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-2">Sugestão VIP</p>
                      <h4 className="text-2xl font-serif italic font-black text-white mb-4">Inicie sua composição em Estilo Acústico</h4>
                      <button onClick={onStart} className="w-full py-4 bg-brand-accent text-white rounded-2xl font-bold uppercase tracking-widest text-xs">Começar agora</button>
                   </div>
                </div>
              </motion.div>
            )}
            
            {/* Play Sample Floating */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 glass p-5 rounded-[2rem] flex items-center gap-4 border border-white/10 max-w-[220px] shadow-2xl z-20">
               <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center flex-shrink-0 animate-pulse shadow-lg">
                 <Play size={20} fill="currentColor" />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-1">Exemplo Real</p>
                 <p className="text-sm font-bold text-white truncate italic">Voz & Violão</p>
               </div>
            </div>
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
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Acústico Voz & Violão", desc: "Perfeito para momentos íntimos e delicados.", mood: "Emocionante" },
              { name: "MPB Contemporânea", desc: "Ritmo leve e poético para celebrar a vida.", mood: "Alegre" },
              { name: "Piano & Orquestra", desc: "Grandioso e épico para grandes homenagens.", mood: "Solene" }
            ].map((style, idx) => (
              <div key={idx} className="glass p-10 rounded-[3rem] hover:bg-white/10 transition-all group flex flex-col items-center text-center">
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
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif italic font-black mb-4 capitalize">Simples como um abraço</h2>
          <p className="text-white/30 uppercase tracking-widest text-xs font-bold">Três passos para a eternidade</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {[
            { icon: <MessageSquare />, step: "01", title: "Conte a história", desc: "Você preenche um formulário curto com memórias e o estilo musical." },
            { icon: <Music />, step: "02", title: "Nós compomos", desc: "Nossos artistas criam uma letra e melodia exclusiva para você." },
            { icon: <Heart />, step: "03", title: "Resgate a emoção", desc: "Em até 24h você recebe o link da 'Página de Presente' para resgate." }
          ].map((item, idx) => (
             <div key={idx} className="glass p-10 rounded-[2.5rem] relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full glass border border-white/20 -mt-20 flex items-center justify-center mb-8 text-brand-accent shadow-2xl">
                  {item.icon}
                </div>
                <h4 className="text-[10px] font-bold text-brand-accent mb-4 uppercase tracking-[0.3em]">PASSO {item.step}</h4>
                <h3 className="text-2xl font-serif italic font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 atmosphere-bg opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl lg:text-8xl font-serif italic font-black mb-10 tracking-tighter leading-tight italic">Eternize esse momento hoje.</h2>
          <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Não espere uma data especial para mostrar o quanto alguém é importante. O tempo passa, a música fica.</p>
          
          <div className="glass p-12 lg:p-20 rounded-[4rem] shadow-3xl max-w-2xl mx-auto transform hover:scale-[1.02] transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-8 py-2 rounded-bl-3xl uppercase tracking-widest">Oferta Exclusiva</div>
            <div className="flex flex-col items-center mb-12">
              <span className="text-white/30 line-through text-lg mb-2">R$ 297,00</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light text-white/60">R$</span>
                <span className="text-9xl font-serif italic font-black text-white">147</span>
                <span className="text-2xl font-bold text-brand-accent">,90</span>
              </div>
              <p className="text-sm text-white/30 mt-4 font-bold uppercase tracking-widest">Ou em 12x de R$ 14,80 no cartão</p>
            </div>
            
            <ul className="space-y-6 mb-16 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-4 text-sm text-white/60 font-light">
                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent"><CheckCircle2 size={14} /></div> 01 Canção Exclusiva (Voz + Instrumento)
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 font-light">
                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent"><CheckCircle2 size={14} /></div> Página de Presente Personalizada
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 font-light">
                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent"><CheckCircle2 size={14} /></div> Letra com suas memórias reais
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 font-light">
                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent"><CheckCircle2 size={14} /></div> Entrega em até 24h (Digital)
              </li>
            </ul>
            
            <button 
              onClick={onStart}
              className="w-full bg-white text-black py-7 rounded-[2rem] text-2xl font-black shadow-2xl hover:bg-brand-accent hover:text-white transition-all uppercase tracking-tight"
            >
              CRIAR MINHA MELODIA
            </button>
            <p className="text-[10px] text-white/20 mt-8 uppercase tracking-[0.2em] font-bold">🔒 Pagamento seguro via Hotmart</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-brand-bg text-white/20 text-[10px] text-center border-t border-white/5 uppercase tracking-[0.2em] font-bold">
        <p className="mb-6">© 2026 Melodia Memorável • CNPJ 00.000.000/0001-00</p>
        <div className="flex justify-center gap-12">
          <a href="#" className="hover:text-brand-accent transition-colors">Termos</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Suporte</a>
        </div>
      </footer>
    </div>
  );
}
