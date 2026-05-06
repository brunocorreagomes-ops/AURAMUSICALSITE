import { motion } from "motion/react";
import { Gavel, ScrollText, AlertTriangle, Scale, HelpCircle } from "lucide-react";

export default function TermosLegaisPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1A1209] font-sans selection:bg-[#C9A84C] selection:text-white">
       {/* Navigation */}
       <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#C9A84C]/10">
        <a href="#/" className="font-serif italic font-black text-2xl tracking-tighter">
          Aura <span className="text-[#C9A84C]">Musical</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Início</a>
          <a href="#/sobre-nos" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Sobre Nós</a>
          <a href="#/suporte" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B6B] hover:text-[#C9A84C] transition-colors">Suporte</a>
        </div>
      </nav>

      <header className="pt-40 pb-20 px-6 bg-[#5C1A2E] border-b-4 border-[#C9A84C]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Aura Musical — Aspectos Legais</span>
          <h1 className="text-4xl md:text-7xl font-serif italic font-black text-[#FAF6EE] leading-[1] tracking-tighter">Termos de Uso e <br className="hidden md:block" /> <span className="text-[#C9A84C]">Garantias</span></h1>
          <p className="mt-8 text-white/70 max-w-2xl font-light leading-relaxed">
            Transparência, segurança jurídica e respeito aos seus direitos como consumidor, em total conformidade com a legislação brasileira.
          </p>
        </div>
      </header>

      {/* CDC Banner */}
      <div className="bg-[#C9A84C] py-4 px-6 text-center text-[#1A1209] text-[10px] sm:text-xs font-black uppercase tracking-widest">
        ⚖️ Em conformidade com: CDC — Lei 8.078/1990 • LGPD — Lei 13.709/2018 • Lei do E-commerce
      </div>

      <div className="max-w-4xl mx-auto py-24 px-6 space-y-24">
        {/* Parte 1 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
              <ScrollText size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Partes e Objeto</h2>
          </div>
          <div className="prose prose-stone max-w-none text-[#3D3020] font-light leading-relaxed">
            <p>O objeto deste contrato é a <strong>prestação de serviço de criação de músicas personalizadas</strong>, conforme especificações e pacotes descritos no site, mediante pagamento de remuneração previamente acordada.</p>
            <div className="p-6 bg-[#F3EDE2] rounded-xl border border-[#C9A84C]/20 mt-8">
                <p className="text-sm">A relação entre as partes é de consumo, regida pelo <strong>CDC (Código de Defesa do Consumidor)</strong>, aplicando-se todos os direitos e garantias ali previstos.</p>
            </div>
          </div>
        </section>

        {/* Uso Pessoal - CRITICAL */}
        <section className="bg-[#1A1209] p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <AlertTriangle size={120} />
            </div>
            <h2 className="text-3xl font-serif italic font-black text-[#C9A84C] mb-8">Uso Pessoal vs. Comercial</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
                A música adquirida é destinada exclusivamente para <strong>uso pessoal e não comercial</strong>. 
            </p>
            <div className="space-y-4 text-white/60 text-sm font-light">
                <p>✓ <strong>Você PODE:</strong> Compartilhar em redes sociais, presentear em eventos, usar em celebrações familiares e guardar como recordação permanente.</p>
                <p>✗ <strong>Você NÃO PODE:</strong> Utilizar em publicidade paga, monetizar no YouTube, usar como trilha sonora de marcas ou revender a obra.</p>
            </div>
            <p className="mt-12 text-[#C9A84C] text-[10px] uppercase font-black tracking-widest border-t border-white/10 pt-8">
                O uso comercial sem licença prévia configura violação de direitos autorais.
            </p>
        </section>

        {/* Arrependimento */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#5C1A2E]/10 flex items-center justify-center text-[#5C1A2E]">
              <Scale size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Direito de Arrependimento</h2>
          </div>
          <div className="p-10 border-2 border-[#5C1A2E]/20 rounded-3xl bg-[#5C1A2E]/5">
            <h3 className="font-serif italic text-2xl text-[#5C1A2E] mb-4">Artigo 49 do CDC</h3>
            <p className="text-[#3D3020] font-light leading-relaxed mb-6">Você tem o direito de se arrepender da compra dentro de <strong>7 dias corridos</strong> a partir da data do pedido. O reembolso será integral caso a produção ainda não tenha sido finalizada.</p>
            <p className="text-sm font-bold text-[#5C1A2E] uppercase tracking-widest">Para solicitar, basta enviar um e-mail para auramusical@gmail.com</p>
          </div>
        </section>

        {/* Prazos */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
              <Gavel size={20} />
            </div>
            <h2 className="text-3xl font-serif font-black">Vícios e Garantias</h2>
          </div>
          <p className="text-[#3D3020] font-light leading-relaxed mb-8">Caso a música apresente erros de pronúncia, ausência de elementos obrigatórios do briefing ou problemas técnicos de áudio, realizaremos o sementador integral do vício sem custo adicional, conforme Art. 20 do CDC.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#C9A84C]/10 rounded-2xl hover:bg-[#F3EDE2] transition-colors">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-[#8C7B6B] mb-2">Revisões</h4>
                <p className="text-xs text-[#3D3020]/70">Cada pacote inclui um número de revisões para ajustes pontuais na letra ou arranjo.</p>
            </div>
            <div className="p-8 border border-[#C9A84C]/10 rounded-2xl hover:bg-[#F3EDE2] transition-colors">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-[#8C7B6B] mb-2">Prazos</h4>
                <p className="text-xs text-[#3D3020]/70">Os prazos iniciam após a confirmação do pagamento e recebimento do briefing completo.</p>
            </div>
          </div>
        </section>

        {/* Ajuda */}
        <section className="text-center pt-12">
            <HelpCircle size={40} className="mx-auto text-[#C9A84C] mb-6" />
            <h2 className="text-3xl font-serif italic font-black mb-4">Dúvidas Jurídicas?</h2>
            <p className="text-[#8C7B6B] mb-8 font-light">Nossa equipe está à disposição para esclarecer qualquer ponto destes termos.</p>
            <a href="mailto:auramusical@gmail.com" className="text-xl font-serif italic text-[#1A1209] border-b-2 border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors">
                auramusical@gmail.com
            </a>
        </section>
      </div>

      <footer className="bg-[#1A1209] py-20 px-6 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">© 2026 Aura Musical</p>
          <p className="mb-8 opacity-40 font-normal normal-case tracking-normal">
            Site desenvolvido e administrado por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold">Orvalia Studio</a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
              <a href="#/sobre-nos" className="hover:text-[#C9A84C] transition-colors">Sobre Nós</a>
              <a href="#/privacidade" className="hover:text-[#C9A84C] transition-colors">Privacidade</a>
              <a href="#/termos-legais" className="hover:text-[#C9A84C] transition-colors">Termos Legais</a>
              <a href="#/suporte" className="hover:text-[#C9A84C] transition-colors">Suporte</a>
          </div>
          <p className="max-w-xl mx-auto opacity-40 font-normal normal-case leading-relaxed">
            As músicas criadas pela Aura Musical destinam-se exclusivamente ao uso pessoal e não comercial. Para licenças comerciais ou corporativas, entre em contato através do e-mail auramusical@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
