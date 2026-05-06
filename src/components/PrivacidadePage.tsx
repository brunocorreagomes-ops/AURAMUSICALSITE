import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export default function PrivacidadePage() {
  const sections = [
    { id: "intro", title: "Introdução e Compromisso", icon: <Shield size={18} /> },
    { id: "dados", title: "Dados que Coletamos", icon: <Lock size={18} /> },
    { id: "uso", title: "Como usamos seus dados", icon: <Eye size={18} /> },
    { id: "direitos", title: "Seus direitos (LGPD)", icon: <FileText size={18} /> },
    { id: "contato", title: "Contato — DPO", icon: <Mail size={18} /> }
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
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Suporte</a>
        </div>
      </nav>

      <header className="pt-40 pb-20 px-6 bg-[#1A1209] border-b-4 border-[#C9A84C]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Documentos Legais</span>
          <h1 className="text-4xl md:text-6xl font-serif italic font-black text-[#FAF6EE] leading-tight tracking-tighter">Política de <span className="text-[#C9A84C]">Privacidade</span></h1>
          <div className="mt-8 text-[10px] uppercase tracking-widest text-[#FAF6EE]/40 font-bold">
            Última atualização: Janeiro de 2026 • Em conformidade com a LGPD
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-[280px_1fr] gap-20">
        <aside className="hidden md:block sticky top-32 h-fit">
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-[#8C7B6B] mb-8">Nesta Página</div>
          <nav className="space-y-2">
            {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 p-3 text-xs font-bold text-[#8C7B6B] hover:bg-[#C9A84C]/5 hover:text-[#1A1209] rounded-lg transition-all group">
                    <span className="text-[#C9A84C] group-hover:scale-110 transition-transform">{s.icon}</span>
                    {s.title}
                </a>
            ))}
          </nav>
        </aside>

        <main className="space-y-24">
          <section id="intro">
            <div className="text-[#C9A84C] font-serif italic text-4xl mb-6">01</div>
            <h2 className="text-3xl font-serif font-black mb-8">Introdução e compromisso</h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5C1A2E]/5 border border-[#5C1A2E]/20 text-[#5C1A2E] text-[10px] font-black uppercase tracking-widest mb-8">
                ✦ LGPD Compliant — Lei 13.709/2018
            </div>
            <div className="prose prose-stone prose-lg max-w-none text-[#3D3020] font-light leading-relaxed">
              <p className="mb-6">A <strong>Aura Musical</strong> está comprometida com a proteção da sua privacidade e dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece ao contratar nossos serviços de criação de músicas personalizadas.</p>
              <p className="mb-6">Esta política é aplicável a todos os visitantes e clientes do site <strong>auramusical.com.br</strong> e está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Código de Defesa do Consumidor.</p>
              <div className="p-8 bg-[#F3EDE2] border-l-4 border-[#C9A84C] italic font-serif text-xl">
                 "Ao utilizar nosso site ou contratar nossos serviços, você concorda com os termos desta política."
              </div>
            </div>
          </section>

          <section id="dados">
            <div className="text-[#C9A84C] font-serif italic text-4xl mb-6">02</div>
            <h2 className="text-3xl font-serif font-black mb-8">Dados que coletamos</h2>
            <p className="text-[#3D3020] font-light mb-8">Coletamos apenas os dados necessários para a prestação do serviço, em respeito ao princípio da minimização.</p>
            <div className="space-y-6">
                {[
                    "Nome completo e e-mail do solicitante",
                    "Número de WhatsApp para comunicação e suporte",
                    "Informações sobre o homenageado (história, memórias, preferências)",
                    "Dados de navegação anônimos (cookies e IP)"
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border-b border-[#C9A84C]/10">
                        <span className="text-[#C9A84C] mt-1">✦</span>
                        <span className="text-sm font-medium">{item}</span>
                    </div>
                ))}
            </div>
            <div className="mt-12 p-8 bg-[#1A1209] text-white rounded-[2rem]">
               <h4 className="text-[#C9A84C] uppercase text-[10px] font-black tracking-widest mb-4">Dados Sensíveis no Briefing</h4>
               <p className="text-white/60 text-sm font-light leading-relaxed">
                 As informações que você compartilha sobre o homenageado são tratadas com <strong>sigilo absoluto</strong> e utilizadas exclusivamente para a criação da música. Não são vendidas ou compartilhadas com terceiros estranhos à produção.
               </p>
            </div>
          </section>

          <section id="uso">
            <div className="text-[#C9A84C] font-serif italic text-4xl mb-6">03</div>
            <h2 className="text-3xl font-serif font-black mb-8">Como usamos seus dados</h2>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 border border-[#C9A84C]/20 rounded-2xl">
                    <h3 className="font-serif italic text-lg mb-4">Execução do Contrato</h3>
                    <p className="text-xs text-[#8C7B6B] leading-relaxed">Para criar, entregar e gerenciar a música personalizada contratada por você.</p>
                </div>
                <div className="p-8 border border-[#C9A84C]/20 rounded-2xl">
                    <h3 className="font-serif italic text-lg mb-4">Legítimo Interesse</h3>
                    <p className="text-xs text-[#8C7B6B] leading-relaxed">Para comunicações de suporte, atendimento pós-venda e melhoria contínua dos nossos serviços.</p>
                </div>
            </div>
          </section>

          <section id="direitos">
            <div className="text-[#C9A84C] font-serif italic text-4xl mb-6">04</div>
            <h2 className="text-3xl font-serif font-black mb-8">Seus direitos como titular (LGPD Art. 18)</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { t: "Acesso", d: "Confirmar a existência e acessar seus dados." },
                    { t: "Correção", d: "Solicitar correção de dados incompletos ou inexatos." },
                    { t: "Exclusão", d: "Solicitar eliminação de dados pessoais." },
                    { t: "Revogação", d: "Retirar consentimento a qualquer momento." }
                ].map((r, i) => (
                    <div key={i} className="p-6 bg-[#F3EDE2] rounded-xl hover:border-[#C9A84C] border border-transparent transition-colors">
                        <h4 className="font-black text-[10px] uppercase tracking-widest mb-2 text-[#5C1A2E]">{r.t}</h4>
                        <p className="text-xs text-[#3D3020]/70">{r.d}</p>
                    </div>
                ))}
            </div>
          </section>

          <section id="contato" className="bg-[#1A1209] p-12 rounded-[3rem] text-white">
            <div className="text-[#C9A84C] font-serif italic text-4xl mb-6">05</div>
            <h2 className="text-3xl font-serif font-black mb-6">Contato e DPO</h2>
            <p className="text-white/60 mb-10 font-light">Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
            <div className="space-y-6">
                <a href="mailto:auramusical@gmail.com" className="flex items-center gap-4 text-xl font-serif italic hover:text-[#C9A84C] transition-colors">
                    <Mail className="text-[#C9A84C]" /> auramusical@gmail.com
                </a>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-8">
                    Respondemos em até 15 dias úteis conforme exigido pela LGPD.
                </div>
            </div>
          </section>
        </main>
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
