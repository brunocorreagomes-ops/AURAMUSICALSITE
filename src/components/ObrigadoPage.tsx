import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Music, HelpCircle, ChevronDown } from "lucide-react";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group transition-colors"
      >
        <span className="text-sm font-bold text-white/80 group-hover:text-brand-accent transition-colors">{question}</span>
        <ChevronDown size={18} className={`text-white/20 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-xs text-white/40 leading-relaxed max-w-2xl">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function ObrigadoPage() {
  const [step, setStep] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleNext = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-8 md:py-12 px-4 sm:px-6">
      <BackToTop />
      
      <Navbar />

      <div className="max-w-3xl w-full mt-10 md:mt-16">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8 md:mb-12 max-w-sm mx-auto">
          {[1, 2].map((s) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border transition-all ${step >= s ? 'bg-brand-accent border-brand-accent text-black scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-white/5 border-white/10 text-white/20'}`}>
                  {s === 1 && step > 1 ? <CheckCircle2 size={16} /> : s}
                </div>
                <span className={`text-[8px] uppercase tracking-widest font-bold ${step >= s ? 'text-brand-accent' : 'text-white/20'}`}>
                  {s === 1 ? 'Confirmação' : 'Briefing Oficial'}
                </span>
              </div>
              {s < 2 && <div className={`flex-1 h-[1px] mb-4 transition-colors ${step > s ? 'bg-brand-accent' : 'bg-white/5'}`} />}
            </React.Fragment>
          ))}
        </div>
        
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-accent/20 mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <CheckCircle2 size={40} className="text-brand-accent animate-pulse md:w-12 md:h-12" />
            </div>
            
            <h1 className="text-3xl md:text-6xl font-serif italic font-black text-white mb-6 leading-tight">Pagamento Confirmado!</h1>
            <p className="text-base md:text-lg text-white/60 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Seu pedido já está confirmado. Agora precisamos das informações para criar sua música personalizada através do nosso formulário oficial.
              <span className="block mt-2 text-brand-accent/80 text-sm font-medium">Leva menos de 2 minutos e é essencial para um resultado incrível.</span>
            </p>

            <div className="glass p-8 md:p-12 rounded-[3rem] border border-brand-accent/20 relative overflow-hidden text-left shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Music size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-accent text-black flex items-center justify-center text-sm font-black">1</span>
                Preencha o Formulário
              </h2>
              <p className="text-white/60 mb-8 max-w-xl">
                O prazo de entrega da sua música só começará a contar <strong>após o preenchimento deste formulário</strong>. Preencha agora para garantir sua prioridade.
              </p>
              <button 
                onClick={handleNext}
                className="btn-gold px-10 py-5 text-sm md:text-base w-full sm:w-auto uppercase tracking-widest font-black"
              >
                Começar Briefing <ChevronRight size={20} className="inline-block ml-2" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-serif italic font-black text-brand-light mb-2">Formulário de Briefing</h2>
              <p className="text-brand-accent text-[10px] md:text-xs uppercase tracking-widest font-bold">Por favor, responda todas as questões abaixo</p>
            </div>
            
            <div className="glass w-full rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden bg-white/5 relative shadow-2xl">
              {/* Contâiner para o Iframe */}
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeWIvipFfTqNN19Ty1NE0XDOERubANrt1xv-hq29vm00dn7XA/viewform?embedded=true" 
                  width="100%" 
                  height="2200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="bg-transparent"
                >
                  Carregando…
                </iframe>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/40 text-xs italic">
                Após clicar em "Enviar" no formulário acima, sua história estará em nossas mãos!
              </p>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 border-t border-white/5 pt-12 md:max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent border border-white/10">
              <HelpCircle size={20} />
            </div>
            <div>
              <h3 className="text-xl font-serif italic font-black text-white/90">Dúvidas Frequentes</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">O que você precisa saber</p>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10">
            {[
              {
                question: "Quanto tempo leva para minha música ficar pronta?",
                answer: "O prazo de entrega varia conforme o plano escolhido: Plano VIP (12 horas úteis), Plano Popular (24 horas úteis) e Plano Básico (48 horas úteis). O prazo começa a contar após o preenchimento do formulário."
              },
              {
                question: "Como receberei a música finalizada?",
                answer: "Você receberá um e-mail com o link para download dos arquivos em alta fidelidade e via WhatsApp se informado no formulário. Fique atento também à sua caixa de spam."
              },
              {
                question: "Posso pedir alterações se eu não gostar da letra?",
                answer: "Sim! Sua satisfação é nossa prioridade. Oferecemos suporte para revisões técnicas e de letra após a entrega, garantindo que a canção transmita exatamente o que você deseja."
              },
              {
                question: "A música é realmente feita sob medida para mim?",
                answer: "Com certeza. Cada composição é tratada de forma individual por nossa equipe de artistas e produtores, que transformam seus detalhes em uma obra musical exclusiva."
              },
              {
                question: "Tive um problema no pagamento ou no formulário, o que fazer?",
                answer: "Não se preocupe. Entre em contato conosco pelo Instagram @auramusicalbr ou pelo e-mail oficial. Responderemos o mais rápido possível para ajudar."
              }
            ].map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question} 
                answer={item.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
