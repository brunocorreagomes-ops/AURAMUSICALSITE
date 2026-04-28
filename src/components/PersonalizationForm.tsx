import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Music, Heart, MessageSquare, Check, Sparkles, Star, Mic, Send } from "lucide-react";
import { SongRequest } from "../types";

interface PersonalizationFormProps {
  onSubmit: (data: Partial<SongRequest>) => void;
  onBack: () => void;
}

export default function PersonalizationForm({ onSubmit, onBack }: PersonalizationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SongRequest>>({
    style: "Acústico Voz & Violão",
    targetName: "",
    targetPhrase: "",
    habit: "",
    memory: "",
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const styles = [
    { name: "Acústico Voz & Violão", icon: <Mic size={20} />, description: "Intimista e emocionante" },
    { name: "MPB Leve", icon: <Music size={20} />, description: "Poético e brasileiro" },
    { name: "Piano & Orquestra", icon: <Heart size={20} />, description: "Épico e inesquecível" },
    { name: "Pop Romântico", icon: <Sparkles size={20} />, description: "Moderno e suave" },
  ];

  const handleComplete = () => {
    if (formData.targetName && formData.habit && formData.memory) {
      onSubmit(formData);
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-12 px-6">
      <div className="max-w-2xl w-full">
        {/* Progress bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-brand-accent shadow-[0_0_10px_#ff4e00]' : 'bg-white/10'}`} 
            />
          ))}
        </div>

        <motion.div
           key={step}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="glass p-10 md:p-16 rounded-[4rem] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-10"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6 text-brand-accent">
                    <Music size={32} />
                  </div>
                  <h2 className="text-4xl font-serif italic font-black mb-4 tracking-tight">Como soa o sentimento?</h2>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Escolha a atmosfera da canção</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {styles.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setFormData({ ...formData, style: style.name })}
                      className={`p-8 rounded-3xl border-2 transition-all text-left flex items-center gap-6 group ${
                        formData.style === style.name 
                        ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_30px_rgba(255,78,0,0.1)]' 
                        : 'border-white/5 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        formData.style === style.name ? 'bg-brand-accent text-white' : 'bg-white/10 text-white/50 group-hover:text-white'
                      }`}>
                        {style.icon}
                      </div>
                      <div>
                        <div className="font-serif italic font-bold text-xl">{style.name}</div>
                        <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">{style.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6 text-brand-accent">
                    <Star size={32} />
                  </div>
                  <h2 className="text-4xl font-serif italic font-black mb-4 uppercase tracking-tighter">Quem é a estrela?</h2>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Pequenos detalhes tornam a música real.</p>
                </div>
                <div className="space-y-8">
                  <div>
                    <label className="block text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-3 ml-2">Como você chama essa pessoa?</label>
                    <input
                      type="text"
                      placeholder="Ex: Minha Rainha, Meu Amor, Pequeno..."
                      className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all text-xl font-serif italic placeholder:text-white/20"
                      value={formData.targetName}
                      onChange={(e) => setFormData({ ...formData, targetName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-3 ml-2">Um detalhe especial (Hábito / Mania)</label>
                    <input
                      type="text"
                      placeholder="Ex: O jeito que ela ri, como ele assobia..."
                      className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all text-xl font-serif italic placeholder:text-white/20"
                      value={formData.habit}
                      onChange={(e) => setFormData({ ...formData, habit: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-3 ml-2">A frase que é "marca registrada"</label>
                    <input
                      type="text"
                      placeholder="Ex: 'Leva um casaco!', 'Bora ser feliz'..."
                      className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all text-xl font-serif italic placeholder:text-white/20"
                      value={formData.targetPhrase}
                      onChange={(e) => setFormData({ ...formData, targetPhrase: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6 text-brand-accent">
                    <Heart size={32} />
                  </div>
                  <h2 className="text-4xl font-serif italic font-black mb-4 uppercase tracking-tighter">A história que cantaremos</h2>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Conte um momento marcante. Não precisa ser poeta.</p>
                </div>
                <div className="space-y-6">
                  <textarea
                    placeholder="Ex: Naquela viagem de 2019, quando ficamos olhando o mar em silêncio e eu soube que você era a pessoa da minha vida..."
                    className="w-full h-64 p-8 rounded-[3rem] bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all resize-none text-xl font-serif italic leading-relaxed placeholder:text-white/20"
                    value={formData.memory}
                    onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                  />
                  <div className="flex items-center gap-4 justify-center py-6 px-4 bg-brand-accent/10 rounded-[2rem] border border-brand-accent/20">
                     <Sparkles size={20} className="text-brand-accent animate-pulse" />
                     <p className="text-[11px] font-black text-brand-accent uppercase tracking-[0.2em] italic">
                       Fique tranquilo: Nossos poetas vão lapidar a sua história.
                     </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 mt-16 relative z-10">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="flex-1 glass text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={16} /> Voltar
              </button>
            ) : (
              <button 
                onClick={onBack}
                className="flex-1 glass text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
              >
                Cancelar
              </button>
            )}
            <button 
              onClick={step === 3 ? handleComplete : nextStep}
              className="flex-[2] py-6 rounded-3xl text-xl font-black flex items-center justify-center gap-3 bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 transition-all uppercase tracking-tight"
            >
              {step === 3 ? (
                <>GERAR MINHA MÚSICA <Send size={24} /> </>
              ) : (
                <>PRÓXIMO PASSO <ChevronRight size={24} /> </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
