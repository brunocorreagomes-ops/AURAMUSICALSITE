import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Star, ChevronRight, CheckCircle2, Music, Heart, MemoryStick as Memory, MessageSquare, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";
import PersonaFilter from "./PersonaFilter";
import DynamicContent from "./DynamicContent";
import Quiz from "./Quiz";
import { Persona } from "./data";

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

export default function LandingPage() {
  const [persona, setPersona] = useState<Persona>("geral");
  const [quizDone, setQuizDone] = useState(false);
  const [quizResults, setQuizResults] = useState<any>(null);

  useEffect(() => {
    // Load Hotmart Widget
    const script = document.createElement('script');
    script.src = 'https://static.hotmart.com/checkout/widget.min.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
    document.head.appendChild(link);

    return () => {
      // Clean up if necessary, though scripts usually stay
    };
  }, []);

  const handleStart = () => {
    // scroll to pricing section
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Pricing / Checkout Hotmart Section */}
      <section id="planos" className="py-20 md:py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-6xl font-serif italic font-black text-brand-light mb-6">Escolha a sua Experiência</h2>
                <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                  Selecione o pacote perfeito. O pagamento é 100% seguro e processado diretamente pela Hotmart.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Start Plan 1 */}
                <div className="glass p-8 md:p-10 rounded-3xl flex flex-col group hover:border-brand-accent/30 transition-colors border border-white/10">
                    <div className="mb-8 flex-1">
                        <h3 className="text-2xl font-serif italic font-black mb-2 text-brand-light">AURA MUSICAL BASICO</h3>
                        <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                            Ideal para quem deseja uma música personalizada de forma rápida, acessível e com excelente qualidade.
                        </p>
                        
                        <div className="mb-8 font-sans">
                            <p className="text-sm text-white/40 line-through mb-1">De R$ 147,90</p>
                            <div className="text-4xl font-black text-brand-light">
                                <span className="text-lg text-white/40 font-medium align-top">por R$</span>97<span className="text-lg text-white/40 font-medium">,90</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>1 música personalizada exclusiva</strong>, criada com base nas suas informações. Produção sob medida (letra + estrutura musical personalizada)</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> Entrega em até 48 horas úteis
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 1 revisão inclusa para ajustes pontuais
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> Arquivo em alta qualidade (MP3 ou WAV) para download
                            </li>
                        </ul>

                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-[10px] text-white/40 leading-tight">
                            <strong className="text-brand-accent uppercase block mb-1">Importante:</strong>
                            A produção é iniciada após a confirmação do pagamento e envio completo do briefing. Revisões não incluem alterações completas de tema ou estilo.
                        </div>
                    </div>
                    
                    {/* Link Hotmart 1 */}
                    <a href="https://pay.hotmart.com/P105694163K?off=gmocbhyn&checkoutMode=10" className="w-full btn-outline py-4 text-center text-xs shadow-none border hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] mt-6">
                        Comprar Agora
                    </a>
                </div>

                {/* Start Plan 2 (Highlighted) */}
                <div className="glass p-8 md:p-10 border-brand-accent flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-brand-accent/5 rounded-3xl border-2">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-[0_0_20px_#D4AF3744]">
                        Mais Escolhido
                    </div>

                    <div className="mb-8 flex-1">
                        <h3 className="text-2xl font-serif italic font-black mb-2 text-brand-light">AURA MUSICAL POPULAR</h3>
                        <p className="text-[10px] text-brand-accent uppercase tracking-widest font-black mb-6">Arranjo Completo</p>
                        
                        <div className="text-4xl font-black text-brand-accent mb-8 font-sans">
                            <span className="text-lg text-brand-accent font-medium align-top">R$</span>197<span className="text-lg text-brand-accent font-medium">,90</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> Produção Cinematográfica completa
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> Entrega Prioritária
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> Letra em PDF Estilizado
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> Versão exclusiva para WhatsApp
                            </li>
                        </ul>
                    </div>
                    
                    {/* Link Hotmart 2 */}
                    <a href="https://pay.hotmart.com/H105695281R?checkoutMode=2" className="w-full btn-gold py-4 text-center text-xs shadow-none hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hotmart-fb hotmart__button-checkout">
                        Comprar Agora
                    </a>
                </div>

                {/* Start Plan 3 */}
                <div className="glass p-8 md:p-10 rounded-3xl flex flex-col group hover:border-brand-accent/30 transition-colors border border-white/10">
                    <div className="mb-8 flex-1">
                        <h3 className="text-2xl font-serif italic font-black mb-2 text-brand-light">AURA MUSICAL VIP</h3>
                        <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                            Uma criação musical exclusiva, com máxima personalização, recursos premium e entrega prioritária.
                        </p>
                        
                        <div className="mb-8 font-sans">
                            <p className="text-sm text-white/40 line-through mb-1">De R$ 497,90</p>
                            <div className="text-4xl font-black text-brand-light">
                                <span className="text-lg text-white/40 font-medium align-top">por R$</span>347<span className="text-lg text-white/40 font-medium">,90</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>01 Música personalizada com nível avançado de produção</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>01 versão instrumental (playback) da música personalizada</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>01 Letra em PDF estilizado (ideal para presente)</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>01 Mensagem narrada bônus personalizada.</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>01 Vídeo com Música e Letra (lyric video) sincronizada (9:16)</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>Prioridade máxima:</strong> entrega em até 12 horas úteis</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/80">
                                <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>Revisões ampliadas e parcelamento em até 10x no cartão</span>
                            </li>
                        </ul>

                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-[10px] text-white/40 leading-tight space-y-2">
                            <div>
                                <strong className="text-brand-accent uppercase block mb-1">Diferencial:</strong>
                                Experiência completa e versátil, ideal para ocasiões especiais e presentes premium.
                            </div>
                            <div>
                                <strong className="text-brand-accent uppercase block mb-1">Condições:</strong>
                                Produção iniciada após confirmação de pagamento e envio completo do briefing.
                            </div>
                        </div>
                    </div>
                    
                    {/* Link Hotmart 3 */}
                    <a href="https://pay.hotmart.com/L105695305P?checkoutMode=2" className="w-full btn-outline py-4 text-center text-xs shadow-none border hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] mt-6 hotmart-fb hotmart__button-checkout">
                        Comprar Agora
                    </a>
                </div>
            </div>
            
            <div className="mt-12 text-center bg-brand-bg/50 rounded-2xl p-4 max-w-sm mx-auto border border-white/5 flex items-center justify-center gap-4">
                <ShieldCheck size={24} className="text-white/40" />
                <div className="text-left">
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Pagamento 100% Seguro</p>
                    <p className="text-xs text-white/20">Ambiente protegido pela Hotmart</p>
                </div>
            </div>
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
