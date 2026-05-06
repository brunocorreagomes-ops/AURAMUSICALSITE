import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Music, Clock, User, Heart, Mic2, Star, Send } from "lucide-react";

export default function ObrigadoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orderNumber: "",
    receiverType: "outra_pessoa", // "mim" | "outra_pessoa"
    receiverName: "",
    relationship: "",
    context: "",
    emotion: "",
    emotionOther: "",
    musicStyle: "",
    musicStyleOther: "",
    references: "",
    specificDetails: "",
    namesInMusic: "",
    tone: "",
    isExpress: "", // "sim" | "nao" | "nao_tenho_certeza"
    finalConfirmation: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleNext = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.finalConfirmation) {
      alert("Por favor, confirme que as informações estão corretas.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ENVIANDO PARA O BACKEND
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(3);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("Falha ao enviar briefing");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar seu briefing. Por favor, tente novamente ou entre em contato com o suporte.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const emotionOptions = ["Amor", "Saudade", "Gratidão", "Superação", "Alegria", "Outro"];
  const styleOptions = ["Romântico", "Pop", "Acústico", "Sertanejo", "Gospel", "Outro"];

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
              Seu pedido já está confirmado. Agora precisamos de algumas informações para criar sua música personalizada. 
              <span className="block mt-2 text-brand-accent/80 text-sm font-medium">Leva menos de 2 minutos e é essencial para um resultado incrível.</span>
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
                Começar Briefing <ChevronRight size={20} className="inline-block ml-2" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-2xl font-serif italic font-black text-brand-light">Briefing Musical</h2>
                <p className="text-brand-accent text-[10px] uppercase tracking-widest font-bold mt-1">Transformando sua história em arte</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 bg-white/5">
                <Clock size={12} /> Prazo inicia após o envio
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Identificação */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <User size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-black">1. Identificação</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Nome Completo</label>
                    <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">E-mail (usado na compra)</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="email@exemplo.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Número do Pedido (Opcional)</label>
                  <input name="orderNumber" value={formData.orderNumber} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: HP123456789" />
                </div>
              </div>

              {/* Section 2: Sobre quem é a música */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <Heart size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-black">2. Destinatário</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-white/80 ml-2">Para quem essa música será criada?</p>
                  <div className="flex flex-wrap gap-4">
                    <button type="button" onClick={() => setFormData({...formData, receiverType: 'mim'})} className={`px-8 py-3 rounded-full text-xs font-bold transition-all border ${formData.receiverType === 'mim' ? 'bg-brand-accent text-black border-brand-accent' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}>
                      Para mim
                    </button>
                    <button type="button" onClick={() => setFormData({...formData, receiverType: 'outra_pessoa'})} className={`px-8 py-3 rounded-full text-xs font-bold transition-all border ${formData.receiverType === 'outra_pessoa' ? 'bg-brand-accent text-black border-brand-accent' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}>
                      Para outra pessoa
                    </button>
                  </div>
                </div>

                {formData.receiverType === 'outra_pessoa' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Nome da Pessoa</label>
                      <input required name="receiverName" value={formData.receiverName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: Laura" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Relação com você</label>
                      <input required name="relationship" value={formData.relationship} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: Namorado, mãe, amigo" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Section 3: Contexto e Emoção */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <Mic2 size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-black">3. A História e o Sentimento</h3>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Qual é a história ou momento que quer transformar em música?</label>
                  <p className="text-[10px] text-brand-accent/60 italic ml-4 mb-2">Dica: Conte detalhes, momentos marcantes, sentimentos e qualquer informação importante.</p>
                  <textarea required name="context" value={formData.context} onChange={handleChange} rows={6} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Conte aqui sua história..."></textarea>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Qual sentimento a música deve transmitir?</label>
                  <div className="flex flex-wrap gap-2">
                    {emotionOptions.map((opt) => (
                      <button key={opt} type="button" onClick={() => setFormData({...formData, emotion: opt})} className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all border ${formData.emotion === opt ? 'bg-white/20 border-brand-accent text-brand-accent' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  {formData.emotion === "Outro" && (
                    <input name="emotionOther" value={formData.emotionOther} onChange={handleChange} className="w-full bg-white/5 border border-brand-accent/30 rounded-full px-6 py-3 text-xs text-white focus:outline-none focus:border-brand-accent mt-2" placeholder="Descreva o sentimento..." />
                  )}
                </div>
              </div>

              {/* Section 4: Estilo e Preferências */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <Star size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-black">4. Estilo e Preferências</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Estilo Musical</label>
                    <div className="flex flex-wrap gap-2">
                      {styleOptions.map((opt) => (
                        <button key={opt} type="button" onClick={() => setFormData({...formData, musicStyle: opt})} className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all border ${formData.musicStyle === opt ? 'bg-white/20 border-brand-accent text-brand-accent' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    {formData.musicStyle === "Outro" && (
                      <input name="musicStyleOther" value={formData.musicStyleOther} onChange={handleChange} className="w-full bg-white/5 border border-brand-accent/30 rounded-full px-6 py-3 text-xs text-white focus:outline-none focus:border-brand-accent mt-2" placeholder="Qual estilo?" />
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Tom da Música</label>
                    <div className="flex flex-col gap-2">
                      {["Mais animada", "Mais emocional", "Equilibrada"].map((opt) => (
                        <button key={opt} type="button" onClick={() => setFormData({...formData, tone: opt})} className={`px-4 py-3 rounded-full text-[10px] font-bold transition-all border text-left ${formData.tone === opt ? 'bg-white/20 border-brand-accent text-brand-accent' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Referências (Opcional)</label>
                  <input name="references" value={formData.references} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-xs text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Link do YouTube ou Spotify (música que você gosta)" />
                </div>
              </div>

              {/* Section 5: Detalhes Finais */}
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-brand-accent mb-2">
                  <Send size={18} />
                  <h3 className="text-sm uppercase tracking-[0.2em] font-black">5. Detalhes Técnicos</h3>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Frases ou palavras obrigatórias</label>
                  <input name="specificDetails" value={formData.specificDetails} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: Citar a gata 'Nina' ou a frase 'Até a lua'" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Nomes que devem aparecer citados</label>
                  <input name="namesInMusic" value={formData.namesInMusic} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ex: Cláudio, Maria Eduarda..." />
                </div>

                <div className="space-y-4 pt-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-4">Você adquiriu entrega expressa (24h)?</label>
                  <div className="flex flex-wrap gap-4">
                    {["Sim", "Não", "Não tenho certeza"].map((opt) => (
                      <button key={opt} type="button" onClick={() => setFormData({...formData, isExpress: opt})} className={`px-6 py-3 rounded-full text-[10px] font-bold transition-all border ${formData.isExpress === opt ? 'bg-brand-accent text-black border-brand-accent' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-brand-accent/5 rounded-[2rem] border border-brand-accent/20 flex items-start gap-4 cursor-pointer hover:bg-brand-accent/10 transition-colors" onClick={() => setFormData({...formData, finalConfirmation: !formData.finalConfirmation})}>
                  <div className={`w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.finalConfirmation ? 'bg-brand-accent border-brand-accent' : 'border-white/20'}`}>
                    {formData.finalConfirmation && <CheckCircle2 size={16} className="text-black" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white mb-1">Confirma que todas as informações acima estão corretas?</p>
                    <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">A produção será baseada exatamente nestas informações enviadas.</p>
                  </div>
                  <input type="checkbox" name="finalConfirmation" checked={formData.finalConfirmation} onChange={handleChange} className="hidden" />
                </div>
              </div>

              <div className="text-[9px] text-white/20 text-center uppercase tracking-widest px-4 leading-loose">
                * Ao enviar este formulário, você confirma que leu e aceita as condições de produção personalizada. 
                Alterações de contexto após o início da produção podem gerar custos adicionais.
              </div>

              <button 
                type="submit" 
                disabled={!formData.finalConfirmation || isSubmitting} 
                className={`w-full py-6 rounded-full text-lg font-black tracking-widest transition-all flex items-center justify-center gap-3 ${
                  formData.finalConfirmation && !isSubmitting 
                    ? 'btn-gold shadow-[0_0_50px_rgba(212,175,55,0.4)]' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/20 border-t-brand-accent rounded-full"
                    />
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    ENVIAR MEU BRIEFING <ChevronRight size={20} />
                  </>
                )}
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
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Nossos compositores e produtores já estão analisando sua história para criar a canção perfeita.
            </p>

            <div className="glass p-8 md:p-12 rounded-[3rem] border border-brand-accent/20 max-w-lg mx-auto text-left relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 opacity-5">
                 <Music size={150} />
               </div>
               <h3 className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 border-b border-brand-accent/20 pb-4">Próximos Passos:</h3>
               <ul className="space-y-5 text-xs text-white/70 font-light uppercase tracking-widest">
                 <li className="flex items-start gap-4">
                   <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-[10px] font-black shrink-0">1</span> 
                   <span>Produção da letra e melodia</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-[10px] font-black shrink-0">2</span> 
                   <span>Gravação em estúdio profissional</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-[10px] font-black shrink-0">3</span> 
                   <span>Mixagem e masterização Premium</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-[10px] font-black shrink-0">4</span> 
                   <span>Entrega no seu e-mail cadastrado</span>
                 </li>
               </ul>
               
               <div className="mt-8 pt-6 border-t border-white/5">
                 <p className="text-[10px] text-white/30 text-center">Fique atento ao seu e-mail (inclusive spam). <br/>Obrigado por nos deixar fazer parte da sua história!</p>
               </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
