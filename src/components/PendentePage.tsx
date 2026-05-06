import { motion } from "motion/react";
import { AlertCircle, CreditCard, ShieldCheck, HelpCircle, MessageCircle, Instagram } from "lucide-react";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PendentePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <BackToTop />
      <Navbar />
      
      <div className="max-w-2xl w-full text-center mt-32 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="w-20 h-20 rounded-full bg-brand-accent/10 mx-auto flex items-center justify-center mb-8 border border-brand-accent/20">
            <AlertCircle size={40} className="text-brand-accent" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif italic font-black text-white mb-6 leading-tight">
            Pagamento em Processamento
          </h1>
          <p className="text-lg text-white/60 mb-10 font-light leading-relaxed">
            Seu pedido está aguardando a confirmação do pagamento pela Hotmart. Assim que for aprovado, você receberá o link para enviar seu briefing e começarmos a produção.
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 text-left">
            <CreditCard className="text-brand-accent shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Boleto ou Pix?</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Pagamentos via Pix são aprovados em minutos. Boletos podem levar até 3 dias úteis para compensação bancária.
              </p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 text-left">
            <ShieldCheck className="text-brand-accent shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Tudo Seguro</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Sua transação é processada em ambiente seguro pela Hotmart. Você receberá um e-mail de confirmação assim que o status mudar.
              </p>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border border-brand-accent/20 bg-brand-accent/5">
          <HelpCircle className="text-brand-accent mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-serif italic font-bold mb-4 text-white">Precisa de Ajuda?</h2>
          <p className="text-sm text-white/50 mb-8 font-light">
            Se você já realizou o pagamento e ele está demorando mais do que o esperado, ou se teve qualquer problema no checkout, fale com nosso suporte agora mesmo.
          </p>
          <a 
            href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações."
            className="inline-flex items-center gap-3 bg-brand-accent text-black px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
          >
            <MessageCircle size={20} /> Suporte no WhatsApp
          </a>
        </div>

        <div className="mt-16">
           <a 
             href="#/"
             className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-accent transition-colors"
           >
             Retornar à página principal
           </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
