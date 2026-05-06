import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Mail, Instagram, ChevronDown, CheckCircle2 } from "lucide-react";

export default function SuportePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Como funciona o processo de criação da música?", a: "Após a confirmação do pagamento, você preenche o formulário de briefing com as informações sobre o homenageado. Nossa equipe criativa transforma os detalhes em letra e melodia profissional." },
    { q: "Em quanto tempo minha música fica pronta?", a: "Os prazos variam de 24h úteis (Plano Aura Popular) até 7 dias úteis (Plano Básico), dependendo da sua escolha no momento da compra." },
    { q: "Posso pedir ajustes na música?", a: "Sim! Cada pacote inclui um número de revisões para ajustes pontuais na letra ou arranjo, garantindo que o resultado seja exatamente o que você sonhou." },
    { q: "Posso usar a música em redes sociais?", a: "Sim! Você tem total liberdade para uso pessoal: stories, reels, festas e presentes. Para uso comercial em marcas, entre em contato para licença específica." },
    { q: "Como recebo minha música?", a: "A entrega é feita via e-mail e WhatsApp através de um link seguro para download e compartilhamento imediato." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1A1209] font-sans selection:bg-[#C9A84C] selection:text-white">
       {/* Navigation */}
       <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#C9A84C]/10">
        <a href="#/" className="font-serif italic font-black text-2xl tracking-tighter">
          Aura <span className="text-[#C9A84C]">Musical</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Sobre Nós</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C9A84C]">Suporte</a>
        </div>
      </nav>

      <header className="pt-40 pb-20 px-6 bg-gradient-to-br from-[#1A1209] to-[#2E1A0E] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 select-none">
            <span className="text-[20rem] font-serif">♪</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Atendimento</span>
          <h1 className="text-4xl md:text-7xl font-serif italic font-black text-[#FAF6EE] leading-tight tracking-tighter">Como podemos<br />te <span className="text-[#C9A84C]">ajudar?</span></h1>
          <p className="mt-8 text-white/50 max-w-lg font-light leading-relaxed">
            Estamos aqui para garantir que sua experiência com a Aura Musical seja perfeita — do pedido à entrega da sua música.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {/* WhatsApp */}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="p-10 border border-[#C9A84C]/20 rounded-[2.5rem] hover:border-[#C9A84C] transition-all group hover:bg-[#F3EDE2]">
            <div className="w-12 h-12 rounded-2xl bg-[#075E54] flex items-center justify-center text-white mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">WhatsApp</h3>
            <p className="text-sm text-[#8C7B6B] mb-8 leading-relaxed">Atendimento ágil para tirar dúvidas rápidas e acompanhar seu pedido em tempo real.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#075E54]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" /> Disponível agora
            </div>
          </a>

          {/* Email */}
          <a href="mailto:auramusical@gmail.com" className="p-10 border border-[#C9A84C]/20 rounded-[2.5rem] hover:border-[#C9A84C] transition-all group hover:bg-[#F3EDE2]">
            <div className="w-12 h-12 rounded-2xl bg-[#5C1A2E] flex items-center justify-center text-white mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">E-mail</h3>
            <p className="text-sm text-[#8C7B6B] mb-8 leading-relaxed">Ideal para revisões detalhadas, parcerias e questões comerciais.</p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#5C1A2E]">
                Resposta em até 24h
            </div>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/auramusical" target="_blank" rel="noreferrer" className="p-10 border border-[#C9A84C]/20 rounded-[2.5rem] hover:border-[#C9A84C] transition-all group hover:bg-[#F3EDE2]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white mb-6">
              <Instagram size={24} />
            </div>
            <h3 className="font-serif italic text-2xl font-black mb-4">Instagram</h3>
            <p className="text-sm text-[#8C7B6B] mb-8 leading-relaxed">Acompanhe bastidores, depoimentos e envie DMs para suporte rápido.</p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#8C7B6B]">
                @auramusical
            </div>
          </a>
        </div>

        {/* FAQ Section */}
        <section className="bg-[#1A1209] rounded-[4rem] p-12 md:p-24 text-white">
          <div className="max-w-3xl">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-16">Perguntas e Respostas</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="font-serif italic text-lg md:text-xl font-medium">{faq.q}</span>
                    <ChevronDown className={`text-[#C9A84C] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-white/50 font-light leading-relaxed">{faq.a}</p>
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
            <div className="grid md:grid-cols-2 gap-20 items-start">
                <div>
                    <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Acompanhe seu pedido</span>
                    <h2 className="text-4xl font-serif italic font-black mb-12">Nossa produção passo a passo</h2>
                    
                    <div className="space-y-12 relative">
                        <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-[#C9A84C]/20" />
                        {[
                            { t: "Pedido Confirmado", d: "Briefing recebido e analisado.", p: "Imediato", done: true },
                            { t: "Criação Literária", d: "Transformando fatos em poesia.", p: "Dias 1-2", done: false },
                            { t: "Produção Musical", d: "Voz, instrumentos e emoção.", p: "Dias 2-4", done: false },
                            { t: "Entrega Final", d: "Link enviado por e-mail e WhatsApp.", p: "Prazo acordado", done: false }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-8 relative z-10">
                                <div className={`w-6 h-6 rounded-full border-2 shrink-0 bg-[#FAF6EE] flex items-center justify-center ${step.done ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-[#C9A84C]/30'}`}>
                                    {step.done && <CheckCircle2 size={14} className="text-white" />}
                                </div>
                                <div>
                                    <h4 className="font-serif font-black text-xl mb-1">{step.t}</h4>
                                    <p className="text-sm text-[#8C7B6B] leading-relaxed mb-1">{step.d}</p>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">{step.p}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#F3EDE2] p-10 md:p-16 rounded-[3rem] border border-[#C9A84C]/10">
                    <h3 className="font-serif italic text-3xl font-black mb-4">Envie uma mensagem</h3>
                    <p className="text-sm text-[#8C7B6B] mb-10 leading-relaxed font-light">Tem um pedido em andamento? Preencha abaixo e retornamos em até 24h.</p>
                    
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-[#1A1209]/40">Seu Nome</label>
                            <input type="text" className="w-full bg-[#FAF6EE] border border-[#C9A84C]/20 px-6 py-4 rounded-full outline-none focus:border-[#C9A84C] transition-colors" placeholder="Ex: João Silva" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-[#1A1209]/40">Seu E-mail</label>
                            <input type="email" className="w-full bg-[#FAF6EE] border border-[#C9A84C]/20 px-6 py-4 rounded-full outline-none focus:border-[#C9A84C] transition-colors" placeholder="seu@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-[#1A1209]/40">Assunto</label>
                            <select className="w-full bg-[#FAF6EE] border border-[#C9A84C]/20 px-6 py-4 rounded-full outline-none focus:border-[#C9A84C] transition-colors appearance-none">
                                <option>Acompanhar Pedido</option>
                                <option>Solicitar Revisão</option>
                                <option>Dúvida sobre Planos</option>
                                <option>Suporte Técnico</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-black text-[#1A1209]/40">Sua Mensagem</label>
                            <textarea rows={4} className="w-full bg-[#FAF6EE] border border-[#C9A84C]/20 px-6 py-6 rounded-3xl outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder="Conte como podemos te ajudar..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#1A1209] text-white py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#5C1A2E] transition-colors shadow-xl shadow-[#1A1209]/20">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <footer className="bg-[#1A1209] py-20 px-6 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">© 2026 Aura Musical</p>
          <p className="mb-8 opacity-40 font-normal normal-case tracking-normal">
            Site desenvolvido e administrado por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold">Orvalia Studio</a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
              <a href="#/sobre-nos" className="hover:text-[#C9A84C] transition-colors">Sobre Nós</a>
              <a href="#/privacidade" className="hover:text-[#C9A84C] transition-colors">Privacidade</a>
              <a href="#/termos-legais" className="hover:text-[#C9A84C] transition-colors">Termos Legais</a>
              <a href="#/suporte" className="hover:text-[#C9A84C] transition-colors">Suporte</a>
          </div>
          <p className="max-w-xl mx-auto opacity-40 font-normal normal-case leading-relaxed">
            As músicas criadas pela Aura Musical destinam-se exclusivamente ao uso pessoal e não comercial. Para licenças comerciais ou corporativas, entre em contato através do e-mail auramusical@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
