import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Mail, Instagram, ChevronDown, CheckCircle2 } from "lucide-react";
import BackToTop from "./BackToTop";

export default function SuportePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Como funciona o processo de criação da música?", a: "Após a confirmação do pagamento, você preenche o formulário de briefing com as informações sobre o homenageado. Nossa equipe criativa transforma os detalhes em letra e melodia profissional." },
    { q: "Em quanto tempo minha música fica pronta?", a: "Os prazos dependem do plano escolhido: Plano VIP (12 horas úteis), Plano Popular (24 horas úteis) e Plano Básico (48 horas úteis)." },
    { q: "Posso pedir ajustes na música?", a: "Sim! Cada pacote inclui um número de revisões para ajustes pontuais na letra ou arranjo, garantindo que o resultado seja exatamente o que você sonhou." },
    { q: "Posso usar a música em redes sociais?", a: "Sim! Você tem total liberdade para uso pessoal: stories, reels, festas e presentes. Para uso comercial em marcas, entre em contato para licença específica." },
    { q: "Como recebo minha música?", a: "A entrega é feita via e-mail e WhatsApp através de um link seguro para download e compartilhamento imediato." }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent selection:text-black">
      <BackToTop />
       {/* Navigation */}
       <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 gap-4">
        <a href="#/" className="font-serif italic font-black text-2xl tracking-tighter">
          Aura <span className="text-brand-accent">Musical</span>
        </a>
        <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Sobre Nós</a>
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Planos</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">Suporte</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">FAQ</a>
          <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
            <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
          <a href="#/" className="btn-gold px-5 py-2 text-[10px] ml-2">
            Criar Música
          </a>
        </div>
      </nav>

      <header className="pt-40 pb-20 px-6 bg-gradient-to-br from-black to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5 translate-x-1/4 translate-y-1/4 select-none">
            <span className="text-[20rem] font-serif">♪</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Atendimento</span>
          <h1 className="text-4xl md:text-7xl font-serif italic font-black text-white leading-tight tracking-tighter">Como podemos<br />te <span className="text-brand-accent">ajudar?</span></h1>
          <p className="mt-8 text-white/50 max-w-lg font-light leading-relaxed">
            Estamos aqui para garantir que sua experiência com a Aura Musical seja perfeita — do pedido à entrega da sua música.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {/* WhatsApp */}
          <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noreferrer" className="p-10 border border-white/5 rounded-[2.5rem] hover:border-brand-accent/50 transition-all group bg-white/[0.02]">
            <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">WhatsApp</h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed">Atendimento ágil para tirar dúvidas rápidas e acompanhar seu pedido em tempo real.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#22C55E]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" /> Disponível agora
            </div>
          </a>

          {/* Email */}
          <a href="mailto:auramusical@gmail.com" className="p-10 border border-white/5 rounded-[2.5rem] hover:border-brand-accent/50 transition-all group bg-white/[0.02]">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">E-mail</h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed">Ideal para revisões detalhadas, parcerias e questões comerciais.</p>
            <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent">
                Resposta em até 24h
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noreferrer" className="p-10 border border-white/5 rounded-[2.5rem] hover:border-brand-accent/50 transition-all group bg-white/[0.02]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white mb-6">
              <Instagram size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">Instagram</h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed">Acompanhe bastidores, depoimentos e envie DMs para suporte rápido.</p>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-brand-accent transition-colors">
                @auramusicalbr
            </div>
          </a>
        </div>

        {/* FAQ Section */}
        <section className="bg-white/[0.03] border border-white/5 rounded-[4rem] p-12 md:p-24 text-white">
          <div className="max-w-3xl">
            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-16">Perguntas e Respostas</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/5">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="font-serif italic text-lg md:text-xl font-medium">{faq.q}</span>
                    <ChevronDown className={`text-brand-accent transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-white/40 font-light leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <div className="mt-32">
            <div className="max-w-4xl mx-auto">
                <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block text-center">Acompanhe seu pedido</span>
                <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-16 text-center">Nossa produção passo a passo</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {[
                        { t: "Briefing", d: "Informações recebidas e analisadas.", p: "Imediato", done: true },
                        { t: "Composição", d: "Sua história vira poesia.", p: "Prazos abaixo:", done: false },
                        { t: "Produção", d: "Gravação profissional em estúdio.", p: "Voz e arranjo", done: false },
                        { t: "Entrega", d: "Música enviada via link seguro.", p: "E-mail & Whats", done: false }
                    ].map((step, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl relative">
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-6 ${step.done ? 'bg-brand-accent/20 border-brand-accent text-brand-accent' : 'bg-white/5 border-white/10 text-white/20'}`}>
                                {i + 1}
                            </div>
                            <h4 className="font-serif font-black text-xl mb-3">{step.t}</h4>
                            <p className="text-xs text-white/40 leading-relaxed mb-4">{step.d}</p>
                            <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent">{step.p}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-brand-accent/5 border border-brand-accent/20 rounded-3xl text-center">
                    <p className="text-sm font-medium text-brand-accent uppercase tracking-widest">Tempo de entrega por plano:</p>
                    <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs font-bold text-white/70">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> VIP: 12h Úteis</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Popular: 24h Úteis</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Básico: 48h Úteis</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <footer className="bg-brand-bg py-20 px-6 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">© 2026 Aura Musical</p>
          <p className="mb-8 opacity-50 font-normal uppercase tracking-widest text-[8px]">
            SITE DESENVOLVIDO E ADMINISTRADO POR <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold">ORVALIA STUDIO</a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
              <a href="#/sobre-nos" className="hover:text-brand-accent transition-colors">Sobre Nós</a>
              <a href="#/privacidade" className="hover:text-brand-accent transition-colors">Privacidade</a>
              <a href="#/termos-legais" className="hover:text-brand-accent transition-colors">Termos Legais</a>
              <a href="#/suporte" className="hover:text-brand-accent transition-colors">Suporte</a>
          </div>
          <div className="flex justify-center gap-6 mb-10">
            <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="max-w-xl mx-auto opacity-40 font-normal normal-case leading-relaxed">
            As músicas criadas pela Aura Musical destinam-se exclusivamente ao uso pessoal e não comercial. Para licenças comerciais ou corporativas, entre em contato através do e-mail auramusical@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
