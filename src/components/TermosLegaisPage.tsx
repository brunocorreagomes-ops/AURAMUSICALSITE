import { motion } from "motion/react";
import { Gavel, ScrollText, AlertTriangle, Scale, HelpCircle } from "lucide-react";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

import Footer from "./Footer";

export default function TermosLegaisPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-accent selection:text-black">
      <BackToTop />
      <Navbar />

      <header className="pt-40 pb-20 px-6 bg-[#2a0d16] border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Aspectos Legais</span>
          <h1 className="text-4xl md:text-7xl font-serif italic font-black text-white leading-[1] tracking-tighter">Termos de Uso e <br className="hidden md:block" /> <span className="text-brand-accent">Garantias</span></h1>
          <p className="mt-8 text-white/70 max-w-2xl font-light leading-relaxed">
            Transparência, segurança jurídica e respeito aos seus direitos como consumidor, em total conformidade com a legislação brasileira.
          </p>
        </div>
      </header>

      {/* CDC Banner */}
      <div className="bg-brand-accent py-4 px-6 text-center text-black text-[10px] sm:text-xs font-black uppercase tracking-widest">
        ⚖️ Em conformidade com: CDC — Lei 8.078/1990 • LGPD — Lei 13.709/2018 • Lei do E-commerce
      </div>

      <div className="max-w-4xl mx-auto py-24 px-6 space-y-24">
        {/* Parte 1 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <ScrollText size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Partes e Objeto</h2>
          </div>
          <div className="prose prose-invert max-w-none text-white/60 font-light leading-relaxed">
            <p>O objeto deste contrato é a <strong>prestação de serviço de criação de músicas personalizadas</strong>, conforme especificações e pacotes descritos no site, mediante pagamento de remuneração previamente acordada.</p>
            <div className="p-6 bg-white/[0.03] rounded-xl border border-white/5 mt-8">
                <p className="text-sm text-white/80">A relation entre as partes é de consumo, regida pelo <strong>CDC (Código de Defesa do Consumidor)</strong>, aplicando-se todos os direitos e garantias ali previstos.</p>
            </div>
          </div>
        </section>

        {/* Uso Pessoal - CRITICAL */}
        <section className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <AlertTriangle size={120} />
            </div>
            <h2 className="text-3xl font-serif italic font-black text-brand-accent mb-8">Uso Pessoal vs. Comercial</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
                A música adquirida é destinada exclusivamente para <strong>uso pessoal e não comercial</strong>. 
            </p>
            <div className="space-y-4 text-white/40 text-sm font-light">
                <p>✓ <strong>Você PODE:</strong> Compartilhar em redes sociais, presentear em eventos, usar em celebrações familiares e guardar como recordação permanente.</p>
                <p>✗ <strong>Você NÃO PODE:</strong> Utilizar em publicidade paga, monetizar no YouTube, usar como trilha sonora de marcas ou revender a obra.</p>
            </div>
            <p className="mt-12 text-brand-accent text-[10px] uppercase font-black tracking-widest border-t border-white/5 pt-8">
                O uso comercial sem licença prévia configura violação de direitos autorais.
            </p>
        </section>

        {/* Arrependimento */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#5C1A2E]/20 flex items-center justify-center text-red-400">
              <Scale size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Direito de Arrependimento</h2>
          </div>
          <div className="p-10 border-2 border-[#5C1A2E]/30 rounded-3xl bg-[#5C1A2E]/10">
            <h3 className="font-serif italic text-2xl text-red-400 mb-4">Artigo 49 do CDC</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6">Você tem o direito de se arrepender da compra dentro de <strong>7 dias corridos</strong> a partir da data do pedido. O reembolso será integral caso a produção ainda não tenha sido finalizada.</p>
            <p className="text-sm font-bold text-red-400 uppercase tracking-widest">Para solicitar, basta enviar um e-mail para auramusical@gmail.com</p>
          </div>
        </section>

        {/* Prazos */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <Gavel size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Vícios e Garantias</h2>
          </div>
          <p className="text-white/60 font-light leading-relaxed mb-8">Caso a música apresente erros de pronúncia, ausência de elementos obrigatórios do briefing ou problemas técnicos de áudio, realizaremos o saneamento integral do vício sem custo adicional, conforme Art. 20 do CDC.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-colors">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-brand-accent mb-2">Revisões</h4>
                <p className="text-xs text-white/40">Cada pacote inclui um número de revisões para ajustes pontuais na letra ou arranjo.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-colors">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-brand-accent mb-2">Prazos</h4>
                <p className="text-xs text-white/40">Os prazos iniciam após a confirmação do pagamento e recebimento do briefing completo.</p>
            </div>
          </div>
        </section>

        {/* Ajuda */}
        <section className="text-center pt-12">
            <HelpCircle size={40} className="mx-auto text-brand-accent mb-6" />
            <h2 className="text-3xl font-serif italic font-black mb-4">Dúvidas Jurídicas?</h2>
            <p className="text-white/40 mb-8 font-light">Nossa equipe está à disposição para esclarecer qualquer ponto destes termos.</p>
            <a href="mailto:auramusical@gmail.com" className="text-xl font-serif italic text-white border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
                auramusical@gmail.com
            </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
