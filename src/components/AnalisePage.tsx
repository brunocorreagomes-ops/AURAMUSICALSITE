import { motion } from "motion/react";
import { Clock, CheckCircle2, Music, Heart, MessageSquare } from "lucide-react";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

export default function AnalisePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <BackToTop />
      <Navbar />
      
      <div className="max-w-3xl w-full text-center mt-32 md:mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="w-24 h-24 rounded-full bg-brand-accent/20 mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <Clock size={48} className="text-brand-accent animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif italic font-black text-white mb-6 leading-tight">
            Briefing em Análise!
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Recebemos suas informações. Nossa equipe criativa já está mergulhando na sua história para compor algo verdadeiramente <span className="text-brand-accent italic">inesquecível</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <Music className="text-brand-accent mb-4 mx-auto" size={24} />
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">Composição</h3>
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">Transformando fatos em poesia e melodia.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-3xl border border-brand-accent/20 bg-brand-accent/5 shadow-lg shadow-brand-accent/5"
          >
            <Clock className="text-brand-accent mb-4 mx-auto" size={24} />
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">Produção</h3>
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">Ajustando cada arranjo para máxima emoção.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <CheckCircle2 className="text-brand-accent mb-4 mx-auto" size={24} />
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">Entrega</h3>
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">Você receberá o link por e-mail e WhatsApp.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl -mr-16 -mt-16 rounded-full" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-left relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Heart className="text-brand-accent" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-serif italic font-bold mb-2">O que acontece agora?</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                O prazo de entrega do seu plano começou a contar! <b>VIP (12h úteis)</b>, <b>Popular (24h úteis)</b> ou <b>Básico (48h úteis)</b>. Fique de olho no seu e-mail e WhatsApp. Se tiver qualquer dúvida, nosso suporte está à disposição.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-6">
           <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">Aura Musical • Memórias em Melodia</p>
           <a 
             href="#/"
             className="text-brand-accent text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8"
           >
             Voltar para o Início
           </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-20 px-6 bg-brand-bg text-white/20 text-[10px] text-center border-t border-white/5 uppercase tracking-[0.2em] font-bold mt-20">
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
