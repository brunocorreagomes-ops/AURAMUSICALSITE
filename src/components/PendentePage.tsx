import { motion } from "motion/react";
import { AlertCircle, CreditCard, ShieldCheck, HelpCircle, MessageCircle, Instagram } from "lucide-react";
import BackToTop from "./BackToTop";

export default function PendentePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <BackToTop />
      {/* Header - Added for consistency */}
      <nav className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-8 max-w-7xl mx-auto relative z-50 gap-6 mb-12">
        <a href="#/" className="text-xl md:text-2xl font-serif italic font-black tracking-tight text-white flex items-center gap-2 md:gap-3">
          <img src="https://i.ibb.co/6cszB9X2/auralogo.png" alt="Aura Musical Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" referrerPolicy="no-referrer" />
          Aura Musical
        </a>
        
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto justify-center no-scrollbar">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-black hover:text-brand-accent transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Sobre Nós</a>
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Planos</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Suporte</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">FAQ</a>
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

      <div className="max-w-2xl w-full text-center">
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
