import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-brand-bg text-white/20 text-[10px] text-center border-t border-white/5 uppercase tracking-[0.2em] font-bold">
      <div className="max-w-4xl mx-auto">
        <p className="mb-2">© 2026 Aura Musical</p>
        <p className="mb-8 opacity-50 font-normal uppercase tracking-widest text-[8px]">
          SITE DESENVOLVIDO E ADMINISTRADO POR <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold lowercase">orvalia studio</a>
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
  );
}
