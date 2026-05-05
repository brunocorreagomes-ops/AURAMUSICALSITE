import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Music, 
  Heart, 
  Check, 
  Sparkles, 
  Star, 
  Mic, 
  Send,
  Gift,
  Smile,
  Users,
  Wind,
  Target,
  Clock,
  Zap
} from "lucide-react";
import { SongRequest } from "../types";

interface PersonalizationFormProps {
  initialData?: Partial<SongRequest>;
  onSubmit: (data: Partial<SongRequest>) => void;
  onBack: () => void;
}

export default function PersonalizationForm({ initialData, onSubmit, onBack }: PersonalizationFormProps) {
  const [step, setStep] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const totalSteps = 6;

  const [formData, setFormData] = useState<Partial<SongRequest>>({
    style: initialData?.style || "Acústico Voz & Violão",
    occasion: initialData?.occasion || "Namoro / Amor",
    emotion: initialData?.emotion || "Romântica",
    targetName: initialData?.targetName || "",
    targetPhrase: initialData?.targetPhrase || "",
    habit: initialData?.habit || "",
    memory: initialData?.memory || "",
    voiceType: initialData?.voiceType || "feminina",
  });

  const [customStyle, setCustomStyle] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Iniciando composição...");

  const nextStep = () => {
    if (step === totalSteps) {
      startFinalLoading();
    } else {
      setStep(s => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const startFinalLoading = () => {
    setIsDone(true);
    const messages = [
      "Nossos artistas estão lendo sua história...",
      "Ajustando os acordes mais emocionantes...",
      "Sintonizando as memórias descritas...",
      "Preparando a poesia perfeita para você...",
      "Quase pronto para a surpresa..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLoadingMessage(messages[i]);
        i++;
      } else {
        clearInterval(interval);
        const finalData = {
          ...formData,
          style: formData.style === "Outro" ? customStyle : formData.style
        };
        onSubmit(finalData);
      }
    }, 1500);
  };

  const occasions = [
    { name: "Namoro / Amor", icon: <Heart size={20} /> },
    { name: "Amizade", icon: <Users size={20} /> },
    { name: "Família", icon: <Star size={20} /> },
    { name: "Aniversário", icon: <Gift size={20} /> },
    { name: "Outro", icon: <Check size={20} /> },
  ];

  const styles = [
    { name: "Acústico Voz & Violão", icon: <Mic size={20} />, description: "Intimista e emocionante" },
    { name: "Sertanejo", icon: <Music size={20} />, description: "O tom do coração do Brasil" },
    { name: "Piano & Orquestra", icon: <Heart size={20} />, description: "Épico e inesquecível" },
    { name: "Pop / Moderno", icon: <Sparkles size={20} />, description: "Suave e atual" },
    { name: "Outro", icon: <Send size={20} />, description: "Descreva seu próprio estilo" },
  ];

  const emotions = [
    { name: "Romântica", icon: <Heart size={20} />, description: "Doce e apaixonada" },
    { name: "Engraçada", icon: <Smile size={20} />, description: "Leve e divertida" },
    { name: "Nostálgica", icon: <Wind size={20} />, description: "Saudade e memórias" },
    { name: "Intensa", icon: <Zap size={20} />, description: "Forte e marcante" },
  ];

  if (isDone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 atmosphere-bg text-center">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="w-24 h-24 rounded-full border-t-2 border-brand-accent mb-8 shadow-[0_0_30px_#D4AF37]"
         />
         <motion.h2 
           key={loadingMessage}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-3xl font-serif italic font-black mb-4 text-white"
         >
           {loadingMessage}
         </motion.h2>
         <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Criando uma conexão única</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center pt-8 pb-12 px-6">
      <div className="max-w-xl w-full flex flex-col h-full min-h-[80vh]">
        
        {/* Top Info */}
        <div className="flex items-center justify-between mb-8 px-4 opacity-50">
           <div className="flex items-center gap-2">
              <Clock size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Leva menos de 2 minutos</span>
           </div>
           <span className="text-[10px] font-black">{step} / {totalSteps}</span>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1.5 mb-12 px-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${i + 1 <= step ? 'bg-brand-accent shadow-[0_0_10px_#D4AF37]' : 'bg-white/10'}`} 
            />
          ))}
        </div>

        <motion.div
           layout
           className="flex-1 glass p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden flex flex-col"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              {/* Step 1: Occasion */}
              {step === 1 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">Qual a ocasião?</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Isso ajuda a dar o tom certo</p>
                  </div>
                  <div className="grid gap-3">
                    {occasions.map((occ) => (
                      <button
                        key={occ.name}
                        onClick={() => { setFormData({ ...formData, occasion: occ.name }); nextStep(); }}
                        className={`w-full p-6 rounded-2xl border transition-all text-left flex items-center gap-4 group ${
                          formData.occasion === occ.name 
                          ? 'border-brand-accent bg-brand-accent/10' 
                          : 'border-white/5 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formData.occasion === occ.name ? 'bg-brand-accent text-white' : 'bg-white/10 text-white/40'}`}>
                          {occ.icon}
                        </div>
                        <span className="text-lg font-serif italic font-bold">{occ.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Style */}
              {step === 2 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">Estilo Musical</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">O ritmo da sua história</p>
                  </div>
                  <div className="grid gap-4">
                    {styles.map((style) => (
                      <div key={style.name} className="space-y-3">
                        <button
                          onClick={() => setFormData({ ...formData, style: style.name })}
                          className={`w-full p-5 rounded-3xl border-2 transition-all text-left flex items-center gap-5 group ${
                            formData.style === style.name 
                            ? 'border-brand-accent bg-brand-accent/10' 
                            : 'border-white/5 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            formData.style === style.name ? 'bg-brand-accent text-white' : 'bg-white/10 text-white/50 group-hover:text-white'
                          }`}>
                            {style.icon}
                          </div>
                          <div>
                            <div className="font-serif italic font-bold text-lg">{style.name}</div>
                            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{style.description}</div>
                          </div>
                        </button>
                        
                        {style.name === "Outro" && formData.style === "Outro" && (
                          <motion.input
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            type="text"
                            placeholder="Ex: Rock dos anos 80, Jazz..."
                            className="w-full p-5 rounded-2xl bg-white/5 border border-brand-accent/30 focus:border-brand-accent outline-none font-serif italic text-lg ml-2"
                            value={customStyle}
                            onChange={(e) => setCustomStyle(e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Emotion */}
              {step === 3 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">Qual a emoção?</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Para arrepiar quem ouve</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {emotions.map((emo) => (
                      <button
                        key={emo.name}
                        onClick={() => { setFormData({ ...formData, emotion: emo.name }); nextStep(); }}
                        className={`p-6 rounded-[2.5rem] border transition-all text-center flex flex-col items-center gap-4 group ${
                          formData.emotion === emo.name 
                          ? 'border-brand-accent bg-brand-accent/10' 
                          : 'border-white/5 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                          formData.emotion === emo.name ? 'bg-brand-accent text-white shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-white/10 text-white/40'
                        }`}>
                          {emo.icon}
                        </div>
                        <div>
                          <div className="font-serif italic font-bold text-lg">{emo.name}</div>
                          <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">{emo.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Name */}
              {step === 4 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">O nome dela(e)?</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Ou o apelido carinhoso</p>
                  </div>
                  <div className="space-y-6 pt-8">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Ex: Minha Rainha, Leo, Pequena..."
                      className="w-full p-8 rounded-[2.5rem] bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all text-2xl font-serif italic text-center placeholder:text-white/10 shadow-inner"
                      value={formData.targetName}
                      onChange={(e) => setFormData({ ...formData, targetName: e.target.value })}
                    />
                    <div className="flex items-center gap-3 justify-center text-brand-accent/50">
                       <Check size={14} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Será citado na letra</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Story */}
              {step === 5 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">Conte sua história</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Um momento ou detalhe inesquecível</p>
                  </div>
                  <div className="relative">
                    <textarea
                      autoFocus
                      placeholder="Ex: Lembro como se fosse hoje daquela viagem, o sol se pondo e você dizendo que aquele era o dia mais feliz da sua vida..."
                      className="w-full h-64 p-8 rounded-[3.5rem] bg-white/5 border border-white/10 focus:border-brand-accent outline-none transition-all resize-none text-xl font-serif italic leading-relaxed placeholder:text-white/10"
                      value={formData.memory}
                      onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                    />
                    <div className="absolute bottom-6 right-8 text-white/20 text-[10px] font-black uppercase tracking-widest">
                       {formData.memory?.length || 0} caracteres
                    </div>
                  </div>
                  <p className="text-center text-[10px] text-white/30 italic font-medium px-8 leading-relaxed uppercase tracking-widest">
                    Não se preocupe em rimar. <span className="text-brand-accent">Nossos artistas</span> cuidam de toda a poesia.
                  </p>
                </div>
              )}

              {/* Step 6: Voice Type */}
              {step === 6 && (
                <div className="space-y-8 flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif italic font-black mb-3">Quem vai cantar?</h2>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Escolha o timbre ideal</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-12">
                    <button
                      onClick={() => setFormData({ ...formData, voiceType: 'feminina' })}
                      className={`p-10 rounded-[3rem] border transition-all flex flex-col items-center gap-6 group relative overflow-hidden ${
                        formData.voiceType === 'feminina' 
                        ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_40px_rgba(212,175,55,0.1)]' 
                        : 'border-white/5 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {formData.voiceType === 'feminina' && <motion.div layoutId="voice" className="absolute inset-0 bg-brand-accent/5" />}
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-colors ${formData.voiceType === 'feminina' ? 'bg-brand-accent text-white shadow-xl' : 'bg-white/10 text-white/20'}`}>
                        <Mic size={32} />
                      </div>
                      <span className="text-xl font-serif italic font-black relative z-10">Feminina</span>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, voiceType: 'masculina' })}
                      className={`p-10 rounded-[3rem] border transition-all flex flex-col items-center gap-6 group relative overflow-hidden ${
                        formData.voiceType === 'masculina' 
                        ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_40px_rgba(212,175,55,0.1)]' 
                        : 'border-white/5 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {formData.voiceType === 'masculina' && <motion.div layoutId="voice" className="absolute inset-0 bg-brand-accent/5" />}
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-colors ${formData.voiceType === 'masculina' ? 'bg-brand-accent text-white shadow-xl' : 'bg-white/10 text-white/20'}`}>
                        <Mic size={32} />
                      </div>
                      <span className="text-xl font-serif italic font-black relative z-10">Masculina</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-white/5 relative z-10">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="flex-1 glass text-white py-6 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/5"
              >
                <ChevronLeft size={14} /> Voltar
              </button>
            ) : (
              <button 
                onClick={onBack}
                className="flex-1 glass text-white py-6 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/5"
              >
                Cancelar
              </button>
            )}
            <button 
              onClick={nextStep}
              disabled={
                (step === 2 && formData.style === "Outro" && !customStyle.trim()) ||
                (step === 4 && !formData.targetName?.trim()) ||
                (step === 5 && !formData.memory?.trim())
              }
              className="flex-[2] py-6 rounded-[2rem] text-sm font-black flex items-center justify-center gap-3 bg-white text-black hover:bg-brand-accent hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 transition-all uppercase tracking-widest disabled:opacity-30 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {step === totalSteps ? (
                <>GERAR MINHA MÚSICA <Check size={20} /> </>
              ) : (
                <>CONTINUAR <ChevronRight size={20} /> </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
