import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacidadePage() {
  const sections = [
    { id: "intro", title: "Introdução e Compromisso", icon: <Shield size={18} /> },
    { id: "dados", title: "Dados que Coletamos", icon: <Lock size={18} /> },
    { id: "uso", title: "Como usamos seus dados", icon: <Eye size={18} /> },
    { id: "direitos", title: "Seus direitos (LGPD)", icon: <FileText size={18} /> },
    { id: "contato", title: "Contato — DPO", icon: <Mail size={18} /> }
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent selection:text-black">
      <BackToTop />
      <Navbar />

      <header className="pt-40 pb-20 px-6 bg-black border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Documentos Legais</span>
          <h1 className="text-4xl md:text-6xl font-serif italic font-black text-white leading-tight tracking-tighter">Política de <span className="text-brand-accent">Privacidade</span></h1>
          <div className="mt-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            Última atualização: Maio de 2026 • Em conformidade com a LGPD
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-[280px_1fr] gap-20">
        <aside className="hidden md:block sticky top-32 h-fit">
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8">Nesta Página</div>
          <nav className="space-y-2">
            {sections.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => scrollToId(s.id)} 
                  className="w-full flex items-center gap-3 p-3 text-xs font-bold text-white/40 hover:bg-white/[0.05] hover:text-brand-accent rounded-lg transition-all group text-left cursor-pointer"
                >
                    <span className="text-brand-accent group-hover:scale-110 transition-transform">{s.icon}</span>
                    {s.title}
                </button>
            ))}
          </nav>
        </aside>

        <main className="space-y-24">
          <section id="intro">
            <div className="text-brand-accent font-serif italic text-4xl mb-6">01</div>
            <h2 className="text-3xl font-serif font-black mb-8">Introdução e compromisso</h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest mb-8">
                ✦ LGPD Compliant — Lei 13.709/2018
            </div>
            <div className="prose prose-invert prose-lg max-w-none text-white/60 font-light leading-relaxed">
              <p className="mb-6">A <strong>Aura Musical</strong> está comprometida com a proteção da sua privacidade e dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece ao contratar nossos serviços de criação de músicas personalizadas.</p>
              <p className="mb-6">Esta política é aplicável a todos os visitantes e clientes do site <strong>auramusical.com.br</strong> e está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Código de Defesa do Consumidor.</p>
              <div className="p-8 bg-white/[0.03] border-l-4 border-brand-accent italic font-serif text-xl text-white">
                 "Ao utilizar nosso site ou contratar nossos serviços, você concorda com os termos desta política."
              </div>
            </div>
          </section>

          <section id="dados">
            <div className="text-brand-accent font-serif italic text-4xl mb-6">02</div>
            <h2 className="text-3xl font-serif font-black mb-8">Dados que coletamos</h2>
            <p className="text-white/60 font-light mb-8">Coletamos apenas os dados necessários para a prestação do serviço, em respeito ao princípio da minimização.</p>
            <div className="space-y-6">
                {[
                    "Nome completo e e-mail do solicitante",
                    "Número de WhatsApp para comunicação e suporte",
                    "Informações sobre o homenageado (história, memórias, preferências)",
                    "Dados de navegação anônimos (cookies e IP)"
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border-b border-white/5">
                        <span className="text-brand-accent mt-1">✦</span>
                        <span className="text-sm font-medium text-white/80">{item}</span>
                    </div>
                ))}
            </div>
            <div className="mt-12 p-8 bg-white/[0.03] border border-white/5 text-white rounded-[2rem]">
               <h4 className="text-brand-accent uppercase text-[10px] font-black tracking-widest mb-4">Dados Sensíveis no Briefing</h4>
               <p className="text-white/40 text-sm font-light leading-relaxed">
                 As informações que você compartilha sobre o homenageado são tratadas com <strong>sigilo absoluto</strong> e utilizadas exclusivamente para a criação da música. Não são vendidas ou compartilhadas com terceiros estranhos à produção.
               </p>
            </div>
          </section>

          <section id="uso">
            <div className="text-brand-accent font-serif italic text-4xl mb-6">03</div>
            <h2 className="text-3xl font-serif font-black mb-8">Como usamos seus dados</h2>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                    <h3 className="font-serif italic text-lg mb-4 text-white">Execução do Contrato</h3>
                    <p className="text-xs text-white/40 leading-relaxed">Para criar, entregar e gerenciar a música personalizada contratada por você.</p>
                </div>
                <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                    <h3 className="font-serif italic text-lg mb-4 text-white">Legítimo Interesse</h3>
                    <p className="text-xs text-white/40 leading-relaxed">Para comunicações de suporte, atendimento pós-venda e melhoria contínua dos nossos serviços.</p>
                </div>
            </div>
          </section>

          <section id="direitos">
            <div className="text-brand-accent font-serif italic text-4xl mb-6">04</div>
            <h2 className="text-3xl font-serif font-black mb-8">Seus direitos como titular (LGPD Art. 18)</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { t: "Acesso", d: "Confirmar a existência e acessar seus dados." },
                    { t: "Correção", d: "Solicitar correção de dados incompletos ou inexatos." },
                    { t: "Exclusão", d: "Solicitar eliminação de dados pessoais." },
                    { t: "Revogação", d: "Retirar consentimento a qualquer momento." }
                ].map((r, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-brand-accent transition-colors group">
                        <h4 className="font-black text-[10px] uppercase tracking-widest mb-2 text-brand-accent">{r.t}</h4>
                        <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">{r.d}</p>
                    </div>
                ))}
            </div>
          </section>

          <section id="contato" className="bg-white/[0.03] border border-white/5 p-12 rounded-[3rem] text-white">
            <div className="text-brand-accent font-serif italic text-4xl mb-6">05</div>
            <h2 className="text-3xl font-serif font-black mb-6">Contato e DPO</h2>
            <p className="text-white/40 mb-10 font-light">Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
            <div className="space-y-6">
                <a href="mailto:auramusical@gmail.com" className="flex items-center gap-4 text-xl font-serif italic hover:text-brand-accent transition-colors">
                    <Mail className="text-brand-accent" /> auramusical@gmail.com
                </a>
                <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-8">
                    Respondemos em até 15 dias úteis conforme exigido pela LGPD.
                </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
