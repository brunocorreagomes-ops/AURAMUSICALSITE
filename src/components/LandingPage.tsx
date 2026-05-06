import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Star, ChevronRight, CheckCircle2, Music, Heart, MemoryStick as Memory, MessageSquare, Sparkles, Zap, ShieldCheck, Clock, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import PersonaFilter from "./PersonaFilter";
import Quiz from "./Quiz";
import { Persona, contentMap } from "./data";
import BackToTop from "./BackToTop";
import DeliveryShorts from "./DeliveryShorts";

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
      <BackToTop />
      {/* Header */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-8 max-w-7xl mx-auto relative z-50 gap-6">
        <a href="#/" className="text-xl md:text-2xl font-serif italic font-black tracking-tight text-white flex items-center gap-2 md:gap-3">
          <img src="https://i.ibb.co/6cszB9X2/auralogo.png" alt="Aura Musical Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" referrerPolicy="no-referrer" />
          Aura Musical
        </a>
        
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto justify-center no-scrollbar">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-black hover:text-brand-accent transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Sobre Nós</a>
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Planos</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Suporte</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">FAQ</a>
          <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
            <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <button 
          onClick={handleStart}
          className="btn-gold px-6 py-2.5 text-[10px] md:text-xs animate-pulse-slow"
        >
          Criar Música
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-32 px-6 max-w-7xl mx-auto z-10">
        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 md:mb-16"
        >
          <PersonaFilter activePersona={persona} onSelect={setPersona} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            key={persona}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
              <Zap size={12} fill="currentColor" /> Produção Artesanal: Somente 11 vagas para esta semana
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-serif italic font-black text-white mb-8 leading-[1.05] tracking-tighter">
              {contentMap[persona].headline.split(' ').map((word, i) => (
                <span key={i} className={i % 3 === 2 ? "text-brand-accent" : ""}>{word} </span>
              ))}
            </h1>

            <p className="text-white/50 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl font-medium leading-relaxed mb-10 md:mb-12">
              {contentMap[persona].subheadline} <span className="text-white font-bold block mt-4">A trilha sonora da sua vida, produzida por artistas profissionais.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button 
                onClick={handleStart}
                className="w-full sm:w-auto bg-white text-black px-10 md:px-14 py-5 md:py-6 rounded-2xl text-lg md:text-xl font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)] uppercase tracking-tight"
              >
                CRIAR ESSA HOMENAGEM <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mt-8 text-[10px] uppercase font-black tracking-widest text-white/30 px-2">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-accent" /> Entrega Rápida</span>
              <span className="hidden sm:block opacity-20">|</span>
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-accent" /> Garantia de Emoção</span>
            </div>
          </motion.div>

          <div className="relative group perspective-1000">
            {!quizDone ? (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/20 to-purple-500/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Quiz onFinish={handleQuizFinish} />
                
                {/* Persona Preview Floating Card (SEO & Conversion boost) */}
                <motion.div 
                  key={`preview-${persona}`}
                  initial={{ opacity: 0, y: 20, rotateY: 20 }}
                  animate={{ opacity: 1, y: 0, rotateY: 10 }}
                  className="hidden xl:block absolute -right-20 top-20 w-64 glass p-6 rounded-3xl border-brand-accent/30 shadow-2xl z-20 pointer-events-none"
                >
                  <img 
                    src={contentMap[persona].image} 
                    className="w-full h-32 object-cover rounded-2xl mb-4 grayscale-[30%]" 
                    alt="Preview"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">Inspirado por você</p>
                  <p className="text-xs font-serif italic text-white/80 leading-snug">"{contentMap[persona].prova.slice(0, 80)}..."</p>
                </motion.div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative border border-white/10 group"
              >
                <img 
                  src={contentMap[persona].image} 
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

      {/* Audio Samples Section - Now "Nossas Entregas" */}
      <section className="py-20 md:py-32 px-6 relative border-t border-white/5 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic font-black mb-6 tracking-tighter">Ouvir nossas Entregas</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-black px-4 max-w-2xl mx-auto leading-relaxed">
              Ouça e sinta a qualidade das produções que já emocionaram centenas de pessoas como você.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-20 md:mb-32">
            {contentMap[persona].deliveries.map((id, idx) => (
              <DeliveryShorts 
                key={`${persona}-${idx}`} 
                videoId={id} 
                title={
                  persona === "namoro" ? "Uma história de amor real" :
                  persona === "amigo" ? "Amizade que virou música" :
                  persona === "familia" ? "Família reunida no refrão" :
                  "Uma produção exclusiva Aura"
                }
              />
            ))}
            {/* If there are fewer than 4 deliveries, fill with placeholders or general ones */}
            {contentMap[persona].deliveries.length < 4 && Array.from({ length: 4 - contentMap[persona].deliveries.length }).map((_, i) => (
              <DeliveryShorts 
                key={`empty-${i}`} 
                videoId="" 
                title="Sua música pode estar aqui" 
              />
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
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">ou em até 3x sem juros</p>
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
                    <div className="mt-6 flex flex-col gap-3">
                        <a href="https://hotm.io/NMUsbwmz" className="w-full btn-outline py-4 text-center text-xs shadow-none border hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                            Comprar Agora
                        </a>
                        <p className="text-[10px] text-center text-white/30 font-bold uppercase tracking-widest">
                            Pagamento seguro via Hotmart
                        </p>
                    </div>
                </div>

                {/* Start Plan 2 (Highlighted) */}
                <div className="glass p-8 md:p-10 border-brand-accent flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-brand-accent/5 rounded-3xl border-2">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-[0_0_20px_#D4AF3744]">
                        O Mais Escolhido
                    </div>

                    <div className="mb-8 flex-1">
                        <h3 className="text-2xl font-serif italic font-black mb-2 text-brand-light">PLANO AURA POPULAR</h3>
                        <p className="text-[10px] text-brand-accent uppercase tracking-widest font-black mb-4">Experiência Musical Intensa</p>
                        <p className="text-[10px] text-white/50 mb-6 leading-relaxed">Uma experiência musical mais intensa, emocional e refinada, ideal para quem deseja algo realmente marcante.</p>
                        
                        <div className="mb-8 font-sans">
                            <p className="text-sm text-brand-accent/40 line-through mb-1">De R$ 297,90</p>
                            <div className="text-4xl font-black text-brand-accent">
                                <span className="text-lg text-brand-accent font-medium align-top">por R$</span>197<span className="text-lg text-brand-accent font-medium">,90</span>
                            </div>
                            <p className="text-[10px] text-brand-accent/60 font-bold uppercase tracking-widest mt-1">ou em até 5x sem juros</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-xs text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>1 música personalizada premium</strong>, baseada no seu briefing</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span>Produção com <strong>abordagem cinematográfica</strong> (mais emoção e impacto)</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>Entrega prioritária</strong> em até 24 horas úteis</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>2 revisões inclusas</strong> para refinamento</span>
                            </li>
                            <li className="flex items-start gap-3 text-xs text-white/90">
                                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" /> 
                                <span><strong>Versão WhatsApp (Stories 9:16)</strong> com vídeo e letra</span>
                            </li>
                        </ul>
                        
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-[10px] text-white/40 leading-tight">
                            <strong className="text-brand-accent uppercase block mb-1 font-bold">Condições:</strong>
                            A produção inicia após confirmação de pagamento e envio do briefing. Revisões limitadas ao escopo original.
                        </div>
                    </div>
                    
                    {/* Link Hotmart 2 */}
                    <div className="mt-6 flex flex-col gap-3">
                        <a href="https://pay.hotmart.com/H105695281R?checkoutMode=2" className="w-full btn-gold py-4 text-center text-xs shadow-none hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hotmart-fb hotmart__button-checkout">
                            Comprar Agora
                        </a>
                        <p className="text-[10px] text-center text-brand-accent/50 font-black uppercase tracking-widest">
                            Processado e Garantido por Hotmart
                        </p>
                    </div>
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
                            <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mt-1">ou em até 10x sem juros</p>
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
                    <div className="mt-6 flex flex-col gap-3">
                        <a href="https://pay.hotmart.com/L105695305P?checkoutMode=2" className="w-full btn-outline py-4 text-center text-xs shadow-none border hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hotmart-fb hotmart__button-checkout">
                            Comprar Agora
                        </a>
                        <p className="text-[10px] text-center text-white/30 font-bold uppercase tracking-widest">
                            Pagamento 100% seguro via Hotmart
                        </p>
                    </div>
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
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">© 2026 Aura Musical</p>
          <p className="mb-8 opacity-50 font-normal uppercase tracking-widest text-[8px]">
            SITE DESENVOLVIDO E ADMINISTRADO POR <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold">ORVALIA STUDIO</a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mb-8">
            <a href="#/sobre-nos" className="hover:text-brand-accent transition-colors">Sobre Nós</a>
            <a href="#/termos-legais" className="hover:text-brand-accent transition-colors">Termos</a>
            <a href="#/privacidade" className="hover:text-brand-accent transition-colors">Privacidade</a>
            <a href="#/suporte" className="hover:text-brand-accent transition-colors">Suporte</a>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="max-w-xl mx-auto opacity-50 font-normal normal-case leading-relaxed">
            As músicas criadas pela Aura Musical destinam-se exclusivamente ao uso pessoal e não comercial. Para licenças comerciais ou corporativas, entre em contato através do e-mail auramusical@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
