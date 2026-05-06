import { Instagram, MessageCircle } from "lucide-react";

interface Props {
  onCtaClick?: () => void;
  isTransparent?: boolean;
}

export default function Navbar({ onCtaClick, isTransparent = false }: Props) {
  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const plansSection = document.getElementById('planos');
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#planos';
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-white/5 ${isTransparent ? 'bg-transparent' : 'glass backdrop-blur-2xl'}`}>
      <div className="flex items-center">
        <a href="#/" className="hover:scale-110 transition-transform duration-500">
          <img 
            src="https://i.ibb.co/6cszB9X2/auralogo.png" 
            className="w-20 h-20 md:w-28 md:h-28 object-contain" 
            alt="Aura Musical Logo" 
            referrerPolicy="no-referrer" 
          />
        </a>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-black hover:text-brand-accent transition-colors">Início</a>
        <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Sobre Nós</a>
        <button onClick={handleCta} className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors cursor-pointer">Planos</button>
        <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">Suporte</a>
        <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors">FAQ</a>
        
        <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-6">
          <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex lg:hidden items-center gap-3 mr-2">
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40">
              <MessageCircle size={20} />
            </a>
        </div>
        
        <button 
          onClick={handleCta}
          className="btn-gold px-5 md:px-8 py-2.5 md:py-3.5 text-[9px] md:text-xs animate-pulse-slow"
        >
          Criar Música
        </button>
      </div>
    </nav>
  );
}
