import { motion } from "motion/react"
import { Check, Star, Zap, Crown, ShieldCheck, ArrowRight } from "lucide-react"

export type PlanId = 'basic' | 'popular' | 'vip'

interface Plan {
  id: PlanId
  name: string
  price: number
  originalPrice: number
  recommended?: boolean
  features: string[]
  icon: any
}

interface PricingGridProps {
  onSelect: (planId: PlanId) => void
  onBack: () => void
}

export default function PricingGrid({ onSelect, onBack }: PricingGridProps) {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Básico',
      price: 147.90,
      originalPrice: 197.90,
      icon: <Star className="text-white/40" size={24} />,
      features: [
        'Música personalizada',
        'Criação sob medida',
        '1 Revisão inclusa',
        'Áudio Alta Qualidade'
      ]
    },
    {
      id: 'popular',
      name: 'Popular',
      price: 197.90,
      originalPrice: 297.90,
      recommended: true,
      icon: <Zap className="text-brand-accent" size={24} />,
      features: [
        'Música Premium elaborada',
        'Produção cinematográfica',
        '2 Revisões inclusas',
        'Entrega Prioritária',
        'Versão para WhatsApp'
      ]
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 347.90,
      originalPrice: 497.90,
      icon: <Crown className="text-yellow-400" size={24} />,
      features: [
        'Versão Principal + Instrumental',
        'Fura-fila (Entrega Expressa)',
        'Revisões Ilimitadas',
        'Letra em PDF Estilizado',
        'Mensagem Narrada Bônus'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-12 px-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6"
           >
             <ShieldCheck size={12} fill="currentColor" /> Garantia de Reação ou Reembolso
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-serif italic font-black mb-6">Escolha o nível da sua homenagem</h2>
           <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">
             Não é só uma música. É uma memória eterna capturada em notas musicais.
           </p>
        </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-3xl md:rounded-[3.5rem] p-6 sm:p-8 md:p-10 flex flex-col border-2 transition-all duration-500 ${
                plan.recommended 
                ? 'border-brand-accent shadow-[0_40px_80px_rgba(212,175,55,0.15)] bg-brand-accent/5' 
                : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_30px_#D4AF3744]">
                  O Mais Escolhido
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                  {plan.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-white/30 truncate uppercase tracking-widest line-through">R$ {plan.originalPrice.toFixed(2).replace('.', ',')}</p>
                  <p className="text-3xl font-serif italic font-black text-white">R$ {plan.price.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif italic font-black mb-10">{plan.name}</h3>

              <div className="space-y-4 flex-1 mb-12">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex gap-4 items-start text-sm">
                    <Check className={plan.recommended ? "text-brand-accent" : "text-white/20"} size={18} />
                    <span className="font-medium text-white/70">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onSelect(plan.id)}
                className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 ${
                  plan.recommended 
                  ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                  : 'glass text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                Selecionar Plano <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={onBack}
          className="text-[10px] font-black text-white/20 hover:text-brand-accent transition-colors uppercase tracking-[0.3em]"
        >
          Voltar e ajustar história
        </button>
      </div>
    </div>
  )
}
