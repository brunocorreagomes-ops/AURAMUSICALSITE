import { useState } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, ShieldCheck, Clock, Zap, Check, Lock, ChevronRight, Music, FileText, Mic2, Star } from "lucide-react";
import { SongRequest } from "../types";

interface CheckoutProps {
  songRequest: Partial<SongRequest>;
  onPaid: () => void;
  onBack: () => void;
}

export default function Checkout({ songRequest, onPaid, onBack }: CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'creditCard'>('pix');
  const [email, setEmail] = useState('');
  
  const [upsells, setUpsells] = useState<SongRequest['upsells']>({
    expressDelivery: false,
    instrumental: false,
    extended: false,
    pdfLyrics: false,
    spokenMessage: false,
    coverArt: false
  });

  const planPrices = {
    basic: 147.90,
    popular: 197.90,
    vip: 347.90
  };

  const upsellPrices = {
    expressDelivery: 29.90,
    instrumental: 47.00,
    extended: 57.00,
    pdfLyrics: 19.90,
    spokenMessage: 37.00,
    coverArt: 24.90
  };

  const basePrice = planPrices[songRequest.planId!] || 197.90;
  const currentUpsellsTotal = Object.entries(upsells).reduce((acc, [key, active]) => {
    return active ? acc + upsellPrices[key as keyof typeof upsellPrices] : acc;
  }, 0);

  const subtotal = basePrice + currentUpsellsTotal;
  // O Desconto só é aplicado se a forma de pagamento for Pix
  const discount = paymentMethod === 'pix' ? 50.00 : 0.00; 
  const total = subtotal - discount;

  const toggleUpsell = (key: keyof SongRequest['upsells']) => {
    setUpsells(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckout = () => {
    if (!email || !email.includes('@')) {
      alert("Por favor, informe um e-mail válido para receber a música.");
      return;
    }

    /**
     * CONFIGURAÇÃO HOTMART 
     * 1. ID do seu produto principal na Hotmart
     */
    const HOTMART_PRODUCT_ID = "SEUPRODUTO123";

    /**
     * 2. IDs de Oferta ("off=").
     * Você deve criar essas ofertas lá no painel da Hotmart com os exatos preços 
     * listados (O de Pix configurado com os R$ 50 de desconto)
     */
    const HOTMART_OFFERS = {
      basic: { pix: "BASIC_PIX", creditCard: "BASIC_CC" },
      popular: { pix: "POPULAR_PIX", creditCard: "POPULAR_CC" },
      vip: { pix: "VIP_PIX", creditCard: "VIP_CC" }
    };

    // Pega a oferta correta baseada no plano e método
    const plan = songRequest.planId || 'popular';
    const selectedOffer = HOTMART_OFFERS[plan][paymentMethod];

    // Constrói a URL
    const hotmartUrl = new URL(`https://pay.hotmart.com/${HOTMART_PRODUCT_ID}`);
    
    // Parâmetros obrigatórios e de atalho
    hotmartUrl.searchParams.append('off', selectedOffer);
    hotmartUrl.searchParams.append('email', email);

    // RastreaUpsells: passamos via `src` para seu controle ou via Order Bump
    // Se você cadastrar os upsells como Order Bumps na Hotmart, você passaria os IDs deles aqui
    const selectedUpsellsStr = Object.entries(upsells)
      .filter(([_, active]) => active)
      .map(([name]) => name)
      .join(',');
    
    if (selectedUpsellsStr) {
      hotmartUrl.searchParams.append('src', `upsells_${selectedUpsellsStr}`);
    }

    // Pré-seleciona visualmente na tela da Hotmart o método
    if (paymentMethod === 'pix') {
      hotmartUrl.searchParams.append('payment_type', 'pix'); // Tenta abrir focado em pix
    } else {
      hotmartUrl.searchParams.append('payment_type', 'creditCard');
    }

    // ---- AÇÃO DE REDIRECIONAMENTO ----
    
    console.log("Redirecionando para Checkout Oficial Hotmart:", hotmartUrl.toString());
    
    // Para rodar a aplicação em preview, usaremos um alerta.
    // Em produção, você removerá o comentário da linha abaixo:
    // window.location.href = hotmartUrl.toString();
    
    alert(`Redirecionamento para Hotmart configurado!\nURL: ${hotmartUrl.toString()}`);
    
    // Prossegue para a página de entrega para fins de demonstração (no mundo real
    //  o usuário iria pra Hotmart e só receberia a "Entrega" no e-mail após a confirmação do pagamento)
    onPaid();
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full grid lg:grid-cols-5 gap-6 lg:gap-10">
        
        {/* Left: Payment & Upsells */}
        <div className="lg:col-span-3 space-y-6 lg:space-y-8">
          <div className="glass p-6 md:p-10 rounded-3xl md:rounded-[4rem] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-4">
              <h2 className="text-2xl md:text-3xl font-serif italic font-black uppercase tracking-tight">Finalizar</h2>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                 <Lock size={14} className="text-brand-accent" />
                 <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Checkout Seguro</span>
              </div>
            </div>

            {/* Upsell Options Container */}
            <div className="mb-12">
               <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                 <Zap size={14} className="text-brand-accent" /> Turbine sua homenagem
               </p>
               <div className="space-y-3">
                 <UpsellToggle 
                   id="expressDelivery" 
                   title="Entrega Expressa" 
                   desc="Fura-fila na produção" 
                   price={upsellPrices.expressDelivery} 
                   active={upsells.expressDelivery} 
                   onToggle={() => toggleUpsell('expressDelivery')} 
                   icon={<Clock size={18} />}
                 />
                 <UpsellToggle 
                   id="instrumental" 
                   title="Versão Instrumental" 
                   desc="Play-back da sua canção" 
                   price={upsellPrices.instrumental} 
                   active={upsells.instrumental} 
                   onToggle={() => toggleUpsell('instrumental')} 
                   icon={<Music size={18} />}
                 />
                 <UpsellToggle 
                   id="pdfLyrics" 
                   title="Letra Estilizada (PDF)" 
                   desc="Arte digital para imprimir" 
                   price={upsellPrices.pdfLyrics} 
                   active={upsells.pdfLyrics} 
                   onToggle={() => toggleUpsell('pdfLyrics')} 
                   icon={<FileText size={18} />}
                 />
               </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-12">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 block">Forma de Pagamento</label>
              
              {/* PIX Option */}
              <div 
                onClick={() => setPaymentMethod('pix')}
                className={`p-6 rounded-3xl border-2 flex items-center gap-6 cursor-pointer relative overflow-hidden group transition-all ${
                  paymentMethod === 'pix' 
                  ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_40px_rgba(255,78,0,0.1)]' 
                  : 'border-white/10 glass hover:bg-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-4 flex-shrink-0 flex items-center justify-center transition-colors ${
                  paymentMethod === 'pix' ? 'border-brand-accent' : 'border-white/20'
                }`}>
                   <div className={`w-3 h-3 rounded-full transition-transform ${
                     paymentMethod === 'pix' ? 'bg-brand-accent scale-125' : 'bg-transparent'
                   }`} />
                </div>
                <div className="flex-1">
                  <div className="font-serif italic font-black text-2xl flex items-center gap-3">
                    Pix <span className="text-brand-accent text-[10px] bg-white px-3 py-1 rounded-full shadow-sm animate-pulse">(-R$ 50,00 OFF)</span>
                  </div>
                </div>
                <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className={`h-6 brightness-0 invert transition-opacity ${paymentMethod === 'pix' ? 'opacity-100' : 'opacity-50'}`} referrerPolicy="no-referrer" />
              </div>

              {/* Credit Card Option */}
              <div 
                onClick={() => setPaymentMethod('creditCard')}
                className={`p-6 rounded-3xl border-2 flex items-center gap-6 cursor-pointer transition-colors group ${
                  paymentMethod === 'creditCard'
                  ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_40px_rgba(255,78,0,0.1)]'
                  : 'border-white/10 glass hover:bg-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-4 flex-shrink-0 flex items-center justify-center transition-colors ${
                  paymentMethod === 'creditCard' ? 'border-brand-accent' : 'border-white/20'
                }`}>
                   <div className={`w-3 h-3 rounded-full transition-transform ${
                     paymentMethod === 'creditCard' ? 'bg-brand-accent scale-125' : 'bg-transparent'
                   }`} />
                </div>
                <div className="flex-1">
                  <div className="font-serif italic font-bold text-xl">Cartão de Crédito</div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Até 12x Sem Juros</div>
                </div>
                <CreditCard className={`transition-colors ${paymentMethod === 'creditCard' ? 'text-white' : 'text-white/20'}`} size={24} />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-6">
               <div>
                  <label className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-3 ml-2 block">E-mail para receber a música</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@melhoremail.com" 
                    className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-brand-accent outline-none font-serif italic text-xl transition-all" 
                  />
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-brand-accent/5 p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-brand-accent/10 text-center sm:text-left">
             <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
               <ShieldCheck className="text-brand-accent" size={24} />
             </div>
             <p className="text-sm text-white/60 leading-relaxed font-light">
               <span className="font-black text-white block uppercase tracking-widest text-xs mb-1">Garantia Reação ou Reembolso:</span>
               Se quem ganhar não se emocionar com a homenagem, devolvemos seu dinheiro integralmente.
             </p>
          </div>
        </div>

        {/* Right: Order Summary & Order Bump */}
        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
          <div className="glass p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-white/10 sticky top-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/30">Seu Pedido</h3>
            
            <div className="space-y-6 pb-8 border-b border-white/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-serif italic font-black uppercase tracking-tight">{songRequest.planId === 'vip' ? 'Combo VIP Real' : songRequest.planId === 'popular' ? 'Melodia Popular' : 'Música Básico'}</p>
                  <p className="text-[10px] text-brand-accent font-black uppercase tracking-[0.2em]">{songRequest.style}</p>
                </div>
                <span className="font-black text-white/60 text-lg">R$ {basePrice.toFixed(2)}</span>
              </div>

              {Object.entries(upsells).map(([key, active]) => active && key !== 'coverArt' && (
                <div key={key} className="flex justify-between items-center animate-in fade-in slide-in-from-right-2">
                  <span className="text-xs text-white/40 font-bold uppercase tracking-widest">{key === 'expressDelivery' ? 'Entrega Expressa' : key === 'instrumental' ? 'Versão Instrumental' : key === 'extended' ? 'Música Mais Longa' : key === 'pdfLyrics' ? 'Letra Estilizada (PDF)' : key === 'spokenMessage' ? 'Intro Falada' : 'Arte Dig. PDF'}</span>
                  <span className="text-xs font-black text-white/50">+ R$ {upsellPrices[key as keyof typeof upsellPrices].toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="py-8 space-y-3">
               <div className="flex justify-between text-xs font-bold text-white/20 uppercase tracking-widest">
                 <span>Subtotal</span>
                 <span>R$ {subtotal.toFixed(2)}</span>
               </div>
               
               {/* Só exibe os 50 off se de fato for Pix */}
               {paymentMethod === 'pix' ? (
                 <div className="flex justify-between text-xs font-black text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-lg">
                   <span>Bônus: PIX OFF</span>
                   <span>- R$ {discount.toFixed(2)}</span>
                 </div>
               ) : (
                 <div className="flex justify-between text-xs font-bold text-white/20 uppercase tracking-widest">
                   <span>Desconto Pix</span>
                   <span>--</span>
                 </div>
               )}

               <div className="flex justify-between items-baseline pt-4">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Total</span>
                 <span className="text-5xl font-serif italic font-black tracking-tighter text-white">R$ {total.toFixed(2)}</span>
               </div>
            </div>

            {/* ORDER BUMP (Capa Spotify) */}
            {!upsells.coverArt && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-3xl bg-brand-accent shadow-[0_0_40px_rgba(212,175,55,0.3)] border border-white/20 mb-8 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <Star size={60} fill="white" />
                </div>
                <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] mb-2 font-mono italic">OFERTA ÚNICA (Só agora)</p>
                <h4 className="text-xl font-serif italic font-black text-white mb-2 leading-tight">Transforme em presente completo!</h4>
                <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest mb-4 leading-relaxed">Adicione uma capa personalizada estilo Spotify para sua canção.</p>
                <button 
                  onClick={() => toggleUpsell('coverArt')}
                  className="w-full py-4 bg-white text-brand-accent rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  ADICIONAR POR R$ {upsellPrices.coverArt.toFixed(2)}
                </button>
              </motion.div>
            )}

            {upsells.coverArt && (
              <div className="p-4 rounded-2xl bg-white/5 border border-brand-accent flex items-center justify-between mb-8 animate-pulse text-brand-accent">
                 <div className="flex items-center gap-2">
                    <Check size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Capa Estilo Spotify inclusa</span>
                 </div>
                 <button onClick={() => toggleUpsell('coverArt')} className="text-[10px] underline opacity-50">Remover</button>
              </div>
            )}

            <button 
              onClick={handleCheckout}
              className="w-full bg-white text-black py-8 rounded-[2.5rem] text-xl font-black shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:bg-brand-accent hover:text-white hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              GARANTIR MINHA MÚSICA <ChevronRight size={24} />
            </button>

            <button 
              onClick={onBack}
              className="w-full py-4 mt-6 text-[10px] font-black text-white/20 hover:text-brand-accent transition-colors uppercase tracking-[0.3em]"
            >
              Alterar Plano
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpsellToggle({ icon, title, desc, price, active, onToggle }: any) {
  return (
    <div 
      onClick={onToggle}
      className={`p-5 rounded-[2.5rem] border-2 transition-all cursor-pointer flex items-center gap-5 group ${
        active 
        ? 'border-brand-accent bg-brand-accent/5' 
        : 'border-white/5 bg-white/5 hover:border-white/10'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
        active ? 'bg-brand-accent text-white shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-white/10 text-white/30 group-hover:text-white/60'
      }`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-serif italic font-bold text-lg leading-tight">{title}</p>
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-black leading-tight mt-1">{desc}</p>
      </div>
      <div className={`text-right transition-colors ${active ? 'text-brand-accent' : 'text-white/30'}`}>
        <p className="text-sm font-black tracking-tighter">+ R$ {price.toFixed(2).replace('.', ',')}</p>
        {active && <Check size={14} className="ml-auto mt-1" />}
      </div>
    </div>
  );
}


