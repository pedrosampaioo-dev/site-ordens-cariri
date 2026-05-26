import { motion } from 'framer-motion';
import { SectionLabel, OrnamentalDivider } from '../components/shared';

const ORGANIZACOES = [
  {
    id: "marca",
    emblema: "assets/lojas/Emblema_loja_marca.svg",
    nome: "Loja de Mestres Maçons da Marca Jacques de Molay n.º 66",
    tipo: "Grau Capitular · Rito de York",
    num: "I",
    cor: { glow: "rgba(30,64,175,0.4)", ring: "#3B82F6", text: "#93C5FD", accent: "#1E3A8A" },
  },
  {
    id: "nautas",
    emblema: "assets/lojas/Emblema_loja_nautas.svg",
    nome: "Loja de Nautas da Arca Real Jacques de Molay n.º 66",
    tipo: "Ordem Anexa · Rito de York",
    num: "II",
    cor: { glow: "rgba(21,128,61,0.4)", ring: "#22C55E", text: "#86EFAC", accent: "#14532D" },
  },
  {
    id: "sar",
    emblema: "assets/lojas/Emblema_loja_sar.svg",
    nome: "Capítulo Jacques de Molay n.º 140 do Sagrado Arco Real de Jerusalém",
    tipo: "Grau Capitular · Coroamento da Mestria",
    num: "III",
    cor: { glow: "rgba(153,27,27,0.45)", ring: "#EF4444", text: "#FCA5A5", accent: "#7F1D1D" },
  },
  {
    id: "malta",
    emblema: "assets/lojas/Emblema_loja_malta.svg",
    nome: "Priorado Jacques de Molay n.º 96 de Cavaleiros de Malta",
    tipo: "Ordem Cavaleiresca · Rito de York",
    num: "IV",
    cor: { glow: "rgba(148,163,184,0.28)", ring: "#94A3B8", text: "#E2E8F0", accent: "#475569" },
  },
  {
    id: "templarios",
    emblema: "assets/lojas/Emblema_loja_templarios.svg",
    nome: "Preceptório Jacques de Molay n.º 96 de Cavaleiros Templários",
    tipo: "Ordem Cavaleiresca · Cume do Rito de York",
    num: "V",
    cor: { glow: "rgba(220,38,38,0.45)", ring: "#F87171", text: "#FCA5A5", accent: "#991B1B" },
  },
  {
    id: "ktp",
    emblema: "assets/lojas/Emblema_loja_ktp.svg",
    nome: "Sacerdotes Cavaleiros Templários",
    tipo: "Ordem Sacerdotal · Cume do Rito de York",
    num: "VI",
    cor: { glow: "rgba(180,83,9,0.45)", ring: "#F59E0B", text: "#FCD34D", accent: "#78350F" },
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 28 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function NossasOrganizacoes() {
  return (
    <section id="organizacoes" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-900 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.18 }} />

      {/* Marca d'água central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img src="assets/lojas/Ordens_cariri.svg" aria-hidden="true"
          className="w-[700px] h-[700px] object-contain"
          style={{ opacity: 0.03, filter: "brightness(3) saturate(0)" }} />
      </div>

      {/* Gradiente radial topo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(122,18,22,0.45) 0%, transparent 60%)" }} />

      {/* Gradiente radial base */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(122,18,22,0.3) 0%, transparent 55%)" }} />

      {/* Linha decorativa topo */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(230,191,82,0.25) 30%, rgba(230,191,82,0.25) 70%, transparent)" }} />

      {/* Linha decorativa base */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(230,191,82,0.15) 30%, rgba(230,191,82,0.15) 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <SectionLabel>Nossas Organizações</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 mb-6 leading-tight">
            Seis Selos,<br />Uma Tradição
          </h2>

          <p className="font-serif text-lg md:text-xl text-amber-50/70 italic max-w-2xl mx-auto leading-relaxed">
            Cada organização porta seu emblema — insígnia de um percurso
            iniciático que se ergue do Capítulo ao Grande Conclave,
            radicado no solo sagrado do Cariri.
          </p>

          <OrnamentalDivider className="mt-10 max-w-xs mx-auto" />
        </motion.div>

        {/* Grade de emblemas */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ORGANIZACOES.map((org, i) => (
            <motion.article
              key={org.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative flex flex-col items-center text-center overflow-hidden cursor-default"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Fundo do card */}
              <div className="absolute inset-0 border border-ouro-500/10 group-hover:border-ouro-500/22 transition-colors duration-500"
                style={{ background: "linear-gradient(180deg, rgba(43,7,9,0.75) 0%, rgba(26,5,7,0.92) 100%)" }} />

              {/* Glow colorido no hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at 50% 15%, ${org.cor.glow} 0%, transparent 65%)` }} />

              {/* Cantos ornamentais */}
              <div className="absolute top-0 left-0 w-5 h-5 sm:w-7 sm:h-7 border-t border-l pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
                style={{ borderColor: org.cor.ring }} />
              <div className="absolute top-0 right-0 w-5 h-5 sm:w-7 sm:h-7 border-t border-r pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
                style={{ borderColor: org.cor.ring }} />
              <div className="absolute bottom-0 left-0 w-5 h-5 sm:w-7 sm:h-7 border-b border-l pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
                style={{ borderColor: org.cor.ring }} />
              <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-7 sm:h-7 border-b border-r pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
                style={{ borderColor: org.cor.ring }} />

              {/* Numeral romano — marca d'água do card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-display text-[90px] sm:text-[110px] leading-none"
                  style={{ color: org.cor.text, opacity: 0.035 }}>
                  {org.num}
                </span>
              </div>

              {/* Conteúdo principal */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col items-center w-full">

                {/* Medallhão do emblema */}
                <div className="relative mb-6 sm:mb-8">

                  {/* Anel externo — aparece no hover */}
                  <div className="absolute rounded-full border opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ inset: '-20px', borderColor: org.cor.ring }} />

                  {/* Anel médio — sempre visível, fraco */}
                  <div className="absolute rounded-full border"
                    style={{ inset: '-10px', borderColor: org.cor.ring + "30" }} />

                  {/* Glow pulsante por trás do emblema */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 50%, ${org.cor.glow} 0%, transparent 70%)` }}
                    animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.92, 1.08, 0.92] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  />

                  {/* Emblema */}
                  <div className="relative w-[96px] h-[96px] sm:w-[128px] sm:h-[128px] lg:w-[148px] lg:h-[148px] flex items-center justify-center">
                    <img
                      src={org.emblema}
                      alt={`Emblema — ${org.nome}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: "drop-shadow(0 4px 28px rgba(0,0,0,0.75))" }}
                      onError={e => { e.target.style.display = "none"; }}
                    />
                  </div>
                </div>

                {/* Divisor ornamental por cor da ordem */}
                <div className="flex items-center gap-2 mb-5 w-full max-w-[100px]">
                  <div className="h-px flex-1"
                    style={{ background: `linear-gradient(to right, transparent, ${org.cor.ring}55)` }} />
                  <div className="w-1.5 h-1.5 rotate-45 border shrink-0"
                    style={{ borderColor: org.cor.ring + "70" }} />
                  <div className="h-px flex-1"
                    style={{ background: `linear-gradient(to left, transparent, ${org.cor.ring}55)` }} />
                </div>

                {/* Nome da organização */}
                <h3 className="font-display text-[13px] sm:text-sm lg:text-[15px] leading-snug mb-2.5 transition-colors duration-300"
                  style={{ color: org.cor.text }}>
                  {org.nome}
                </h3>

                {/* Classificação */}
                <p className="font-display text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-amber-50/32 leading-relaxed">
                  {org.tipo}
                </p>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Rodapé da seção */}
        <motion.div
          className="text-center mt-14 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <OrnamentalDivider className="max-w-xs mx-auto mb-5" />
          <p className="font-display text-[9px] tracking-[0.5em] uppercase text-ouro-400/45">
            Rito de York · Cariri · Ceará · Anno Lucis MMXXVI
          </p>
        </motion.div>

      </div>
    </section>
  );
}
