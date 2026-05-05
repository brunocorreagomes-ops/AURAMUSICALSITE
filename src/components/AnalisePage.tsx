import { motion } from "motion/react";
import { Search, Hourglass } from "lucide-react";

export default function AnalisePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-light font-sans atmosphere-bg flex flex-col items-center justify-center py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[3px] border-white/10 border-t-brand-accent animate-spin" />
            <Search size={32} className="text-brand-accent" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif italic font-black mb-6">Pagamento em Análise</h1>
        
        <div className="glass p-8 rounded-3xl border border-white/10 mb-8 inline-block max-w-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-3">
            <Hourglass size={20} className="text-brand-accent" />
            Análise de Crédito
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            Seu pagamento está em análise pela equipe de segurança da Hotmart ou pela administradora do seu cartão de crédito.
          </p>
          <p className="text-white/60 font-light mt-4">
            Isso é um procedimento padrão para sua segurança e geralmente é concluído em poucos minutos.
          </p>
        </div>

        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
            Assim que aprovado, enviaremos o link do briefing para o seu e-mail.
        </p>
      </motion.div>
    </div>
  );
}
