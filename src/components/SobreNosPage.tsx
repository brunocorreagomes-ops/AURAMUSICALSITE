import { motion } from "motion/react";
import { Music, MessageSquare, Heart } from "lucide-react";

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1A1209] font-sans selection:bg-[#C9A84C] selection:text-white">
      {/* Navigation - Floating style for consistency */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#C9A84C]/10">
        <a href="#/" className="font-serif italic font-black text-2xl tracking-tighter">
          Aura <span className="text-[#C9A84C]">Musical</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C9A84C]">Sobre Nós</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Suporte</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-[#1A1209] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-radial-[at_30%_60%] from-[#5C1A2E] to-transparent" />
            <div className="absolute inset-0 bg-radial-[at_80%_20%] from-[#C9A84C]/20 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Nossa História</span>
            <h1 className="text-5xl md:text-8xl font-serif italic font-black text-[#FAF6EE] leading-[0.9] tracking-tighter mb-8">
              Cada pessoa<br />merece uma <span className="text-[#C9A84C] italic">música só sua</span>
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
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Nossa Origem</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-6 leading-tight">Uma ideia que nasceu de <span className="text-[#5C1A2E]">um presente</span></h2>
            <p className="text-[#3D3020] text-lg leading-relaxed mb-6 font-light">
              A Aura Musical surgiu de um momento simples e poderoso: a vontade de oferecer um presente que nenhuma loja poderia vender. Uma música feita para uma pessoa — com o nome dela, a história dela, as memórias que só ela guarda.
            </p>
            <p className="text-[#3D3020] text-lg leading-relaxed font-light">
              O que começou como um gesto de afeto se tornou um serviço que já emocionou centenas de famílias, casais e amigos em todo o Brasil. Porque quando a música encontra a história certa, algo extraordinário acontece.
            </p>
          </motion.div>
          <div className="bg-[#1A1209] p-12 aspect-square flex flex-col items-center justify-center text-center relative rounded-[3rem]">
            <Music size={120} className="text-[#C9A84C] opacity-10 absolute scale-150" />
            <blockquote className="text-[#FAF6EE] font-serif italic text-2xl md:text-3xl leading-relaxed relative z-10">
              "A música dá forma ao que as palavras não conseguem dizer."
            </blockquote>
            <cite className="text-[#C9A84C] text-[10px] uppercase tracking-[0.2em] font-black mt-6 block not-italic">Fundadores da Aura Musical</cite>
          </div>
        </div>

        {/* Valores */}
        <section className="bg-[#1A1209] rounded-[4rem] p-12 md:p-24 text-[#FAF6EE] relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">O que nos move</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-black mb-12">Nossos Valores</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-[#C9A84C] opacity-30">01</span>
                <h3 className="text-xl font-serif font-black">Autenticidade</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">Cada música é criada do zero, exclusivamente para você. Nenhuma melodia se repete.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-[#C9A84C] opacity-30">02</span>
                <h3 className="text-xl font-serif font-black">Emoção com Propósito</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">Trabalhamos para que cada entrega gere uma experiência genuína e marcante.</p>
              </div>
              <div className="space-y-4">
                <span className="text-5xl font-serif italic text-[#C9A84C] opacity-30">03</span>
                <h3 className="text-xl font-serif font-black">Transparência</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">Você sabe exatamente o que está comprando, com confiança e seriedade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5C1A2E]/5 border border-[#5C1A2E]/10 mb-8">
                <Heart className="text-[#5C1A2E]" fill="currentColor" />
            </div>
            <p className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed text-[#3D3020]">
                Acreditamos que a maior forma de dizer <span className="font-bold text-[#5C1A2E]">"eu me importo"</span> é dedicar tempo, cuidado e arte a alguém. Em um mundo de presentes genéricos, uma música personalizada é o único presente que conta a história de quem você ama.
            </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-[#C9A84C]/10">
          <div className="text-center">
            <div className="text-5xl font-serif italic font-black text-[#5C1A2E] mb-2">500+</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-[#8C7B6B]">Músicas Entregues</div>
          </div>
          <div className="text-center border-y md:border-y-0 md:border-x border-[#C9A84C]/10 py-8 md:py-0">
            <div className="text-5xl font-serif italic font-black text-[#5C1A2E] mb-2">98%</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-[#8C7B6B]">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif italic font-black text-[#5C1A2E] mb-2">12+</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-[#8C7B6B]">Estilos Musicais</div>
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
