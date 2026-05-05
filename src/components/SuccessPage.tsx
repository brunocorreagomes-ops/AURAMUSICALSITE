import { motion } from "motion/react";
import { CheckCircle2, Music, Download, Heart, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  const returnHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="w-24 h-24 rounded-full bg-brand-accent/20 mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
          <CheckCircle2 size={48} className="text-brand-accent animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif italic font-black mb-6">Pedido Confirmado!</h1>
        <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
          Sua <span className="text-white font-bold">Aura Musical</span> começará a ser produzida. 
          Nossos artistas já estão se preparando para transformar sua história em música.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Download size={40} />
            </div>
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2">Paso 1</p>
            <h3 className="text-xl font-serif italic font-bold mb-2">Fique de olho no e-mail</h3>
            <p className="text-sm text-white/50">Você receberá todos os detalhes e o link de acesso no e-mail cadastrado na hora da compra.</p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Music size={40} />
            </div>
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2">Paso 2</p>
            <h3 className="text-xl font-serif italic font-bold mb-2">Produção Artesanal</h3>
            <p className="text-sm text-white/50">O prazo de entrega já começou a contar. Deixe os arranjos e composições conosco!</p>
          </div>
        </div>

        <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 mb-12">
          <Heart className="text-brand-accent" size={20} fill="currentColor" />
          <span className="text-sm font-bold uppercase tracking-widest text-white/70">Obrigado por nos escolher</span>
        </div>

        <div>
          <button 
            onClick={returnHome}
            className="text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase tracking-[0.3em] flex items-center justify-center gap-2 mx-auto"
          >
            Voltar ao Início <ArrowRight size={12} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
