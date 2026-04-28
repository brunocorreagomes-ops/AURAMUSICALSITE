import { contentMap, Persona } from "./data"
import { Star, Play, Quote } from "lucide-react"

type Props = {
  persona: Persona
}

export default function DynamicContent({ persona }: Props) {
  const data = contentMap[persona]

  return (
    <div className="space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl lg:text-8xl font-serif italic font-black leading-[0.85] mb-8 tracking-tighter mix-blend-lighten">
          {data.headline.split(" ").slice(0, -2).join(" ")} <br />
          <span className="text-brand-accent">{data.headline.split(" ").slice(-2).join(" ")}</span>
        </h1>
      </div>

      {data.exemplos.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.exemplos.map((ex, i) => (
            <div key={i} className="glass p-8 rounded-[3rem] border border-white/5 group hover:bg-white/5 transition-all">
              <div className="flex items-center justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Play size={16} fill="currentColor" />
                 </div>
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Exemplo Real</span>
              </div>
              <h3 className="text-xl font-serif italic font-black mb-2">{ex.nome}</h3>
              <p className="text-sm text-white/40 italic font-light">"{ex.trecho}"</p>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <div className="glass p-10 rounded-[3rem] border border-brand-accent/20 relative">
          <Quote className="absolute -top-6 -left-6 text-brand-accent opacity-20" size={60} />
          <div className="flex gap-1 text-brand-accent mb-4">
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
          </div>
          <p className="text-xl lg:text-2xl font-serif italic leading-snug mb-4 tracking-tight text-white/80">
            "{data.prova}"
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">— Relato de Cliente</p>
        </div>
      </div>
    </div>
  )
}
