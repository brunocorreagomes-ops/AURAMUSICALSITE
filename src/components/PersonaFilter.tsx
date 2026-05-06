import { Persona } from "./data"
import { Heart, Users, Home, Sparkles } from "lucide-react"

type Props = {
  activePersona: Persona
  onSelect: (persona: Persona) => void
}

export default function PersonaFilter({ activePersona, onSelect }: Props) {
  const options: { id: Persona; label: string; icon: any }[] = [
    { id: "namoro", label: "Namorado / Companheiro(a)", icon: <Heart size={16} /> },
    { id: "amigo", label: "Amigo(a)", icon: <Users size={16} /> },
    { id: "familia", label: "Família", icon: <Home size={16} /> },
    { id: "geral", label: "Outro", icon: <Sparkles size={16} /> },
  ]

  return (
    <div className="flex gap-3 flex-wrap justify-center mb-12">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
            activePersona === opt.id
              ? "bg-brand-accent text-white shadow-[0_0_20px_#D4AF3744]"
              : "glass text-white/40 hover:text-white"
          }`}
        >
          {opt.icon}
          {opt.label}
        </button>
      ))}
    </div>
  )
}
