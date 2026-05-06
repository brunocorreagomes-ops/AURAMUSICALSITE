import { motion } from "motion/react";
import { Music, MessageSquare, Heart, Instagram, MessageCircle } from "lucide-react";
import BackToTop from "./BackToTop";

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent selection:text-black">
      <BackToTop />
      {/* Navigation - Improved for clarity and consistency */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5 gap-4">
        <a href="#/" className="font-serif italic font-black text-2xl tracking-tighter">
          Aura <span className="text-brand-accent">Musical</span>
        </a>
        <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">Sobre Nós</a>
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Planos</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-brand-accent transition-colors">Suporte</a>
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-radial-[at_30%_60%] from-brand-accent/20 to-transparent" />
            <div className="absolute inset-0 bg-radial-[at_80%_20%] from-brand-accent/10 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Nossa História</span>
            <h1 className="text-5xl md:text-8xl font-serif italic font-black text-white leading-[0.9] tracking-tighter mb-8">
              Cada pessoa<br />merece uma <span className="text-brand-accent italic">música só sua</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Nascemos da crença de que a música é a linguagem mais profunda do coração — e que nenhuma história deveria ficar sem a sua canção.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto py-24 px-6 space-y-32">
        {/* Origem */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Nossa Origem</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-6 leading-tight text-white">Uma ideia que nasceu de <span className="text-brand-accent">um presente</span></h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
              A Aura Musical surgiu de um momento simples e poderoso: a vontade de oferecer um presente que nenhuma loja poderia vender. Uma música feita para uma pessoa — com o nome dela, a história dela, as memórias que só ela guarda.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              O que começou como um gesto de afeto se tornou um serviço que já emocionou centenas de famílias, casais e amigos em todo o Brasil. Porque quando a música encontra a história certa, algo extraordinário acontece.
            </p>
          </motion.div>
          <div className="bg-white/[0.02] border border-white/5 p-12 aspect-square flex flex-col items-center justify-center text-center relative rounded-[3rem]">
            <Music size={120} className="text-brand-accent opacity-5 absolute scale-150" />
            <blockquote className="text-white font-serif italic text-2xl md:text-3xl leading-relaxed relative z-10">
              "A música dá forma ao que as palavras não conseguem dizer."
            </blockquote>
            <cite className="text-brand-accent text-[10px] uppercase tracking-[0.2em] font-black mt-6 block not-italic">Fundadores da Aura Musical</cite>
          </div>
        </div>

        {/* Valores */}
        <section className="bg-white/[0.03] border border-white/5 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">O que nos move</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-12">Nossos Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-brand-accent opacity-20">01</span>
                <h3 className="text-xl font-serif font-black">Autenticidade</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">Cada música é criada do zero, exclusivamente para você. Nenhuma melodia se repete.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-brand-accent opacity-20">02</span>
                <h3 className="text-xl font-serif font-black">Emoção com Propósito</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">Trabalhamos para que cada entrega gere uma experiência genuína e marcante.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-brand-accent opacity-20">03</span>
                <h3 className="text-xl font-serif font-black">Transparência</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">Você sabe exatamente o que está comprando, com confiança e seriedade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/5 border border-brand-accent/20 mb-8">
                <Heart className="text-brand-accent" fill="currentColor" />
            </div>
            <p className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed text-white/80">
                Acreditamos que a maior forma de dizer <span className="font-bold text-brand-accent">"eu me importo"</span> é dedicar tempo, cuidado e arte a alguém. Em um mundo de presentes genéricos, uma música personalizada é o único presente que conta a história de quem você ama.
            </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
          <div className="text-center">
            <div className="text-5xl font-serif italic font-black text-brand-accent mb-2">50+</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-white/40">Músicas Entregues</div>
          </div>
          <div className="text-center border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0">
            <div className="text-5xl font-serif italic font-black text-brand-accent mb-2">98%</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-white/40">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif italic font-black text-brand-accent mb-2">12+</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-white/40">Estilos Musicais</div>
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
