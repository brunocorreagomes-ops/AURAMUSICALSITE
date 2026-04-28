import { motion } from "motion/react"
import { CheckCircle2, Zap } from "lucide-react"
import { useState } from "react"

type Props = {
  onFinish: (result: any) => void
}

export default function Quiz({ onFinish }: Props) {
  const [step, setStep] = useState(0)
  const [showOther, setShowOther] = useState(false)
  const [customValue, setCustomValue] = useState("")
  
  const questions = [
    {
      id: "vibe",
      q: "Qual a vibe principal da história?",
      options: ["Romântica", "Engraçada", "Nostálgica", "Outro"]
    },
    {
      id: "estilo",
      q: "Qual estilo musical mais agrada?",
      options: ["Acústico", "Pop", "Sertanejo"]
    }
  ]

  const handleOptionClick = (opt: string) => {
    if (step === 0 && opt === "Outro") {
      setShowOther(true)
    } else {
      proceed()
    }
  }

  const proceed = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
      setShowOther(false)
    } else {
      onFinish({ vibe: customValue || "romantica", estilo: "pop" })
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-[2.5rem] border border-brand-accent/20 max-w-md mx-auto text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <Zap size={16} className="text-brand-accent" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Quiz Rápido</span>
      </div>
      
      <h3 className="text-2xl font-serif italic font-black mb-8 text-white">
        {questions[step].q}
      </h3>

      {showOther ? (
        <div className="space-y-4 mb-8">
          <input 
            type="text" 
            autoFocus
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            placeholder="Ex: Melancólica e intensa..."
            className="w-full p-5 rounded-2xl glass border border-brand-accent/30 focus:border-brand-accent outline-none font-serif italic text-lg"
          />
          <button
            onClick={proceed}
            disabled={!customValue.trim()}
            className="w-full py-4 rounded-xl bg-brand-accent text-white font-black uppercase tracking-widest text-xs shadow-lg disabled:opacity-50"
          >
            Confirmar Vibe
          </button>
          <button 
            onClick={() => setShowOther(false)}
            className="text-[10px] uppercase font-black text-white/30 tracking-widest hover:text-white transition-colors"
          >
            Voltar para opções
          </button>
        </div>
      ) : (
        <div className="grid gap-3 mb-8">
          {questions[step].options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="w-full py-4 rounded-2xl glass hover:bg-white/10 text-sm font-bold transition-all border border-white/5"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-center gap-1">
        {questions.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all ${i === step ? 'w-8 bg-brand-accent' : 'w-2 bg-white/10'}`} 
          />
        ))}
      </div>
    </motion.div>
  )
}
