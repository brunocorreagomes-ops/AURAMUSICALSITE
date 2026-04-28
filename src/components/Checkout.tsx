import { motion } from "motion/react";
import { CreditCard, ShieldCheck, Clock, Zap, Check, Lock, ChevronRight } from "lucide-react";
import { SongRequest } from "../types";

interface CheckoutProps {
  songRequest: Partial<SongRequest>;
  onPaid: () => void;
  onBack: () => void;
}

export default function Checkout({ songRequest, onPaid, onBack }: CheckoutProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl w-full space-y-8">
        <div className="glass p-10 md:p-16 rounded-[4rem] relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif italic font-black uppercase tracking-tight">Finalizar Pedido</h2>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
               <Lock size={14} className="text-brand-accent" />
               <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Checkout Seguro</span>
            </div>
          </div>

          <div className="flex gap-6 mb-12 pb-8 border-b border-white/5">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-accent shadow-xl flex-shrink-0">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-serif italic font-black uppercase tracking-tight">Sua Melodia Memorável</p>
              <p className="text-[10px] text-brand-accent font-black uppercase tracking-[0.2em]">{songRequest.style}</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4 mb-12">
            <div className="p-6 rounded-3xl border-2 border-brand-accent bg-brand-accent/10 flex items-center gap-6 cursor-pointer relative overflow-hidden group shadow-[0_0_40px_rgba(255,78,0,0.1)]">
              <div className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
                MELHOR PREÇO
              </div>
              <div className="w-8 h-8 rounded-full border-4 border-brand-accent flex-shrink-0 flex items-center justify-center">
                 <div className="w-3 h-3 rounded-full bg-brand-accent transition-transform group-hover:scale-125" />
              </div>
              <div className="flex-1">
                <div className="font-serif italic font-black text-2xl flex items-center gap-3">
                  Pagar com Pix <span className="text-brand-accent text-[10px] bg-white px-3 py-1 rounded-full shadow-sm animate-pulse">(-R$ 50,00 OFF)</span>
                </div>
              </div>
              <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-6 brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>

            <div className="p-6 rounded-3xl border border-white/10 glass flex items-center gap-6 cursor-pointer hover:bg-white/10 transition-colors group">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-serif italic font-bold text-xl">Cartão de Crédito</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Até 12x de R$ 14,80</div>
              </div>
              <CreditCard className="text-white/20 group-hover:text-white transition-colors" size={24} />
            </div>
          </div>

          {/* Forms simplified */}
          <div className="space-y-6">
             <div>
                <label className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-3 ml-2 block">Onde você quer receber a música?</label>
                <input type="email" placeholder="seu@email.com" className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-brand-accent outline-none font-serif italic text-xl transition-all" />
             </div>
          </div>
          
          {/* Detailed Order Summary Section */}
          <div className="mt-12 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={80} className="text-brand-accent" />
            </div>
            
            <h3 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
              <Check size={14} /> Resumo do Pedido
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start pb-4 border-b border-white/5">
                <div>
                  <p className="text-lg font-serif italic font-black uppercase tracking-tight">Composição Personalizada</p>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Estilo: {songRequest.style}</p>
                </div>
                <span className="font-black text-white/60">R$ 147,90</span>
              </div>

              <div className="space-y-2 pt-2">
                 <div className="flex justify-between text-xs font-bold text-white/30 uppercase tracking-widest">
                   <span>Valor original</span>
                   <span>R$ 147,90</span>
                 </div>
                 <div className="flex justify-between text-xs font-black text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-lg">
                   <span>Cupom aplicado: MELODIA50</span>
                   <span>- R$ 50,00</span>
                 </div>
              </div>

              <div className="flex justify-between items-baseline pt-6 mt-4 border-t border-white/10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Total Final</span>
                <div className="text-right">
                  <span className="text-5xl font-serif italic font-black tracking-tighter text-white">R$ 97,90</span>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Já com desconto incluso</p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={onPaid}
            className="w-full bg-white text-black py-8 rounded-[2.5rem] text-2xl font-black mt-8 shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:bg-brand-accent hover:text-white hover:shadow-[0_0_50px_rgba(255,78,0,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-tighter"
          >
            GARANTIR MINHA MÚSICA <ChevronRight size={32} />
          </button>

          <button 
            onClick={onBack}
            className="w-full py-4 mt-6 text-[10px] font-black text-white/20 hover:text-brand-accent transition-colors uppercase tracking-[0.3em]"
          >
            Voltar e Alterar Detalhes
          </button>
        </div>

        <div className="flex items-center gap-6 bg-brand-accent/5 p-8 rounded-[3rem] border border-brand-accent/10">
           <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
             <ShieldCheck className="text-brand-accent" size={32} />
           </div>
           <p className="text-sm text-white/60 leading-relaxed font-light">
             <span className="font-black text-white block uppercase tracking-widest text-xs mb-1">Pagamento 100% Protegido:</span>
             Sua compra é processada com segurança de nível bancário. Você receberá o acesso imediatamente após a confirmação.
           </p>
        </div>
      </div>

    </div>
  );
}
