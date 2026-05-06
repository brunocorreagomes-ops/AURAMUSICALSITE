import React, { useState } from "react";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  onCtaClick?: () => void;
  isTransparent?: boolean;
}

export default function Navbar({ onCtaClick, isTransparent = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCta = () => {
    setIsOpen(false);
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

  const menuLinks = [
    { label: "Início", href: "#/" },
    { label: "Sobre Nós", href: "#/sobre-nos" },
    { label: "Suporte", href: "#/suporte" },
    { label: "FAQ", href: "#/suporte" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-white/5 ${isTransparent && !isOpen ? 'bg-transparent' : 'glass backdrop-blur-2xl'}`}>
      <div className="flex items-center">
        <a href="#/" className="hover:scale-110 transition-transform duration-500 z-50">
          <img 
            src="https://i.ibb.co/6cszB9X2/auralogo.png" 
            className="w-14 h-14 md:w-20 md:h-20 object-contain" 
            alt="Aura Musical Logo" 
            referrerPolicy="no-referrer" 
          />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        {menuLinks.map((link, idx) => (
          <a 
            key={idx}
            href={link.href} 
            className={`text-[10px] uppercase tracking-[0.2em] font-black hover:text-brand-accent transition-colors ${idx === 0 ? 'text-white' : 'text-white/40'}`}
          >
            {link.label}
          </a>
        ))}
        <button onClick={handleCta} className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-brand-accent transition-colors cursor-pointer">Planos</button>
        
        <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-6">
          <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      {/* Actions & Mobile Toggle */}
      <div className="flex items-center gap-4 z-50">
        <div className="hidden sm:flex lg:hidden items-center gap-3 mr-2">
            <a href="https://wa.me/5511978959567?text=Olá!%20Vim%20pelo%20site%20da%20Aura%20Musical%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white/40">
              <MessageCircle size={20} />
            </a>
        </div>
        
        <button 
          onClick={handleCta}
          className="btn-gold px-5 md:px-8 py-2.5 md:py-3.5 text-[9px] md:text-xs animate-pulse-slow hidden xs:block"
        >
          Criar Música
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-accent transition-colors p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-bg/95 backdrop-blur-xl z-40 flex flex-col pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif italic text-white hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button 
                onClick={handleCta} 
                className="text-left text-2xl font-serif italic text-white hover:text-brand-accent transition-colors"
              >
                Planos
              </button>
            </div>

            <div className="mt-auto pb-20 space-y-8">
              <div className="flex gap-6">
                <a href="https://www.instagram.com/auramusicalbr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-accent hover:border-brand-accent/30 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5511978959567" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-accent hover:border-brand-accent/30 transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
              <button 
                onClick={handleCta}
                className="w-full btn-gold py-5 text-sm uppercase tracking-widest font-black"
              >
                Começar agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
