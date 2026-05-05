import { motion, AnimatePresence } from "motion/react"
import { CheckCircle2, Zap, Heart, Music, Users, Sparkles, ArrowRight, MessageSquare } from "lucide-react"
import { useState } from "react"

type Props = {
  onFinish: (result: any) => void
}

export default function Quiz({ onFinish }: Props) {
  const [step, setStep] = useState(0)
  const [showOther, setShowOther] = useState(false)
  const [customValue, setCustomValue] = useState("")
  const [answers, setAnswers] = useState<Record<string, string>>({})
  
  const questions = [
    {
      id: "persona",
      q: "Quem é a pessoa especial?",
      icon: <Users size={18} className="text-brand-accent" />,
      options: [
        { label: "Meu Amor", value: "namoro" },
        { label: "Melhor Amigo(a)", value: "amigo" },
        { label: "Mãe / Pai", value: "familia" },
        { label: "Filho(a)", value: "familia" }
      ]
    },
    {
      id: "vibe",
      q: "Qual a vibe da história de vocês?",
      icon: <Heart size={18} className="text-brand-accent" />,
      options: [
        { label: "Romântica", value: "romantica" },
        { label: "Engraçada", value: "engracada" },
        { label: "Nostálgica", value: "nostalgica" },
        { label: "Outro", value: "outro" }
      ]
    },
    {
      id: "estilo",
      q: "Qual som mais combina com ela(e)?",
      icon: <Music size={18} className="text-brand-accent" />,
      options: [
        { label: "Voz & Violão", value: "acustico" },
        { label: "Pop Solar", value: "pop" },
        { label: "Piano Dramático", value: "piano" },
        { label: "Sertanejo", value: "sertanejo" }
      ]
    }
  ]

  const handleOptionClick = (value: string) => {
    const currentQ = questions[step]
    const updatedAnswers = { ...answers, [currentQ.id]: value }
    setAnswers(updatedAnswers)

    if (currentQ.id === "vibe" && value === "outro") {
      setShowOther(true)
    } else {
      proceed(updatedAnswers)
    }
  }

  const proceed = (currentAnswers: Record<string, string>) => {
    if (step < questions.length - 1) {
      setStep(step + 1)
      setShowOther(false)
    } else {
      onFinish(currentAnswers)
    }
  }

  const handleCustomSubmit = () => {
    if (!customValue.trim()) return
    const updatedAnswers = { ...answers, vibe: customValue }
    setAnswers(updatedAnswers)
    proceed(updatedAnswers)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass p-8 md:p-10 rounded-[3rem] border border-brand-accent/20 max-w-md mx-auto text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
          className="h-full bg-brand-accent shadow-[0_0_15px_#D4AF37]"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step + (showOther ? "-other" : "")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-4"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Etapa {step + 1} de {questions.length}
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            {questions[step].icon}
            <h3 className="text-2xl font-serif italic font-black text-white">
              {questions[step].q}
            </h3>
          </div>

          {showOther ? (
            <div className="space-y-4 mb-8 mt-6">
              <div className="relative">
                <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" 
                  autoFocus
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  placeholder="Descreva com poucas palavras..."
                  className="w-full p-5 pl-14 rounded-2xl bg-white/5 border border-brand-accent/30 focus:border-brand-accent outline-none font-serif italic text-lg transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                />
              </div>
              <button
                onClick={handleCustomSubmit}
                disabled={!customValue.trim()}
                className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Continuar <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => setShowOther(false)}
                className="text-[10px] uppercase font-black text-white/20 tracking-widest hover:text-white transition-colors"
              >
                Voltar para opções
              </button>
            </div>
          ) : (
            <div className="grid gap-3 mb-8 mt-6">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleOptionClick(opt.value)}
                  className="w-full py-5 rounded-2xl glass hover:bg-white/10 hover:border-white/20 text-sm font-bold transition-all border border-white/5 group flex items-center justify-between px-8"
                >
                  <span>{opt.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-brand-accent transition-colors" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 text-white/20">
         <Sparkles size={12} />
         <span className="text-[9px] font-bold uppercase tracking-[0.2em]">IA Personalizada Melodia</span>
      </div>
    </motion.div>
  )
}
