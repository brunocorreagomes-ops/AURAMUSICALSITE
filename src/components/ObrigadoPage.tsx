import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Music, Clock } from "lucide-react";

export default function ObrigadoPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    forWho: "",
    occasion: "",
    musicStyle: "",
    namesInMusic: "",
    mainMessage: "",
    mood: "",
    references: "",
    observations: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending data or moving to next internal step
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans atmosphere-bg flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="max-w-3xl w-full">
        
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-brand-accent/20 mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <CheckCircle2 size={48} className="text-brand-accent animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif italic font-black text-white mb-6">Pagamento Confirmado!</h1>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Seu pedido já está confirmado. Agora precisamos de algumas informações para criar sua música.
            </p>

            <div className="glass p-8 md:p-12 rounded-[3rem] border border-brand-accent/20 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Music size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-accent text-black flex items-center justify-center text-sm font-black">1</span>
                Preencha o Briefing
              </h2>
              <p className="text-white/60 mb-8 max-w-xl">
                O prazo de entrega da sua música só começará a contar <strong>após o envio completo deste formulário</strong>. Preencha agora para garantir sua prioridade na nossa fila de produção.
              </p>
              <button 
                onClick={handleNext}
                className="btn-gold px-10 py-5 text-sm md:text-base w-full sm:w-auto"
              >
                Preencher briefing da sua música <ChevronRight size={20} className="inline-block ml-2" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10"
          >
            <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-2xl font-serif italic font-black text-brand-light">Briefing da Música</h2>
                <p className="text-brand-accent text-xs uppercase tracking-widest font-bold mt-1">Passo 2 de 2</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/40 text-xs px-4 py-2 rounded-full border border-white/5 bg-white/5">
                <Clock size={14} /> Prazo inicia após o envio
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Seu Nome</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Como podemos te chamar?" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Gatilho (E-mail da compra)</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Email usado na Hotmart" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Para quem é a música?</label>
                  <input required name="forWho" value={formData.forWho} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: Minha esposa Laura" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Ocasião</label>
                  <select required name="occasion" value={formData.occasion} onChange={handleChange} className="w-full bg-[#111111] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                    <option value="">Selecione uma ocasião...</option>
                    <option value="Aniversário">Aniversário</option>
                    <option value="Casamento">Casamento</option>
                    <option value="Pedido de Namoro">Pedido de Namoro / Noivado</option>
                    <option value="Dia das Mães/Pais">Dia das Mães / Pais</option>
                    <option value="Homenagem">Homenagem Especial</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Estilo Musical</label>
                  <select required name="musicStyle" value={formData.musicStyle} onChange={handleChange} className="w-full bg-[#111111] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                    <option value="">Selecione um estilo...</option>
                    <option value="Acústico (Voz e Violão)">Acústico (Voz e Violão)</option>
                    <option value="Pop/Animada">Pop / Animada</option>
                    <option value="Sertanejo Romântico">Sertanejo Romântico</option>
                    <option value="MPB">MPB</option>
                    <option value="Piano e Voz">Piano e Voz</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Tom da Música</label>
                  <select required name="mood" value={formData.mood} onChange={handleChange} className="w-full bg-[#111111] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                    <option value="">Selecione o tom...</option>
                    <option value="Emocionante/Lágrimas">Emocionante (Para arrancar lágrimas)</option>
                    <option value="Animada/Alegre">Animada / Para cima</option>
                    <option value="Divertida/Engraçada">Divertida / Com piadas internas</option>
                    <option value="Nostálgica">Nostálgica / Relembrando bons momentos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Nome(s) que devem aparecer na letra</label>
                <input required name="namesInMusic" value={formData.namesInMusic} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: João, Maria, e o cachorro Rex" />
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Mensagem Principal / História</label>
                <textarea required name="mainMessage" value={formData.mainMessage} onChange={handleChange} rows={5} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Conte a história de vocês, o que você mais ama na pessoa, memórias engraçadas, apelidos, ou a mensagem principal que a música deve passar. Quanto mais detalhes, melhor!"></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Referências de Músicas Curtidas (Opcional)</label>
                <input name="references" value={formData.references} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Põe o link de uma música do YouTube ou Spotify" />
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/60 font-bold ml-4">Observações Adicionais (Opcional)</label>
                <textarea name="observations" value={formData.observations} onChange={handleChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Qualquer outro detalhe que os compositores precisem saber."></textarea>
              </div>

              <div className="text-[10px] text-white/30 text-center px-4">
                * Este é um serviço de produto digital personalizado. Ao enviar este formulário, você concorda com o início imediato da produção da sua obra customizada, em conformidade com as diretrizes do Código de Defesa do Consumidor.
              </div>

              <button type="submit" className="w-full btn-gold py-6 text-xl tracking-widest">
                ENVIAR BRIEFING PARA PRODUÇÃO
              </button>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-brand-accent/20 mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <CheckCircle2 size={48} className="text-brand-accent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif italic font-black text-white mb-6">Briefing Recebido!</h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Nossos compositores e produtores já estão analisando sua história para criar a canção perfeita.
            </p>

            <div className="glass p-8 rounded-[2rem] border border-brand-accent/20 inline-block text-left">
               <h3 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">Próximos Passos:</h3>
               <ul className="space-y-4 text-sm text-white/70 font-light">
                 <li className="flex items-start gap-3"><span className="text-brand-accent">1.</span> Produção do arranjo e letra.</li>
                 <li className="flex items-start gap-3"><span className="text-brand-accent">2.</span> Gravação em estúdio com os artistas.</li>
                 <li className="flex items-start gap-3"><span className="text-brand-accent">3.</span> Mixagem e masterização de alta qualidade.</li>
                 <li className="flex items-start gap-3"><span className="text-brand-accent">4.</span> Entrega no seu e-mail dentro do prazo contratado.</li>
               </ul>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
