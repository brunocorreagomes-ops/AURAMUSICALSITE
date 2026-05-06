import { motion } from "motion/react";
import { Clock, RefreshCcw } from "lucide-react";

export default function PendentePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-light font-sans atmosphere-bg flex flex-col items-center justify-center py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="w-24 h-24 rounded-full bg-brand-accent/10 border border-brand-accent/30 mx-auto flex items-center justify-center mb-8">
          <Clock size={40} className="text-brand-accent" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif italic font-black mb-6">Aguardando seu pagamento</h1>
        
        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 mb-8 inline-block text-left w-full max-w-lg">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
            Seu pedido foi gerado com sucesso! Estamos apenas aguardando a confirmação do pagamento.
          </p>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <span className="text-brand-accent font-black mt-0.5">•</span> 
              Para pagamentos via <strong>Pix</strong> ou <strong>Cartão de Crédito</strong>, a confirmação geralmente ocorre de forma imediata ou em poucos minutos.
            </li>
          </ul>
        </div>

        <p className="text-sm font-bold text-brand-accent/80 uppercase tracking-widest bg-brand-accent/10 py-4 px-6 rounded-full inline-flex items-center gap-3">
          <RefreshCcw size={16} className="animate-spin-slow" />
          Após a confirmação, você será direcionado para o Briefing da música
        </p>
      </motion.div>
    </div>
  );
}
