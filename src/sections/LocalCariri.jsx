import { motion } from 'framer-motion';
import { Emblema, SectionLabel } from '../components/shared';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const CIDADES = [
  "Juazeiro do Norte",
  "Crato",
  "Barbalha",
  "Missão Velha",
  "Jardim",
  "Brejo Santo",
];

export default function LocalCariri() {
  return (
    <section id="vale" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-900 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.20 }} />

      {/* Gradiente radial dourado direita */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(230,191,82,0.07) 0%, transparent 55%)" }} />

      {/* Gradiente carmesim esquerda */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 10% 60%, rgba(122,18,22,0.5) 0%, transparent 50%)" }} />

      {/* Linha decorativa vertical esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(230,191,82,0.2) 30%, rgba(230,191,82,0.2) 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Coluna de texto */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>O Vale</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 mb-8 leading-tight"
          >
            Sob a Chapada,
            <br />a luz se ergue
          </motion.h2>

          <div className="space-y-5 font-body text-amber-50/75 text-lg leading-relaxed">
            <motion.p variants={fadeUp}>
              O Vale do Cariri, ao sul do Ceará, é solo de fé antiga e de
              caminhantes — terra onde Padre Cícero deixou pegadas, onde a
              romaria se mistura ao cangaço e a poesia popular ao latim das
              capelas.
            </motion.p>

            <motion.p variants={fadeUp}>
              Entre <span className="text-ouro-300 font-medium">Juazeiro do Norte</span> e o{" "}
              <span className="text-ouro-300 font-medium">Crato</span>, a Chapada do Araripe
              guarda fósseis de mares esquecidos. Nossas Ordens, igualmente,
              guardam mistérios depositados em câmaras secretas — para serem
              redescobertos por aqueles que se elevam.
            </motion.p>

            <motion.p variants={fadeUp} className="font-serif italic text-amber-50/55">
              Aqui o sertão é templo. A pedra sobre a qual edificamos.
            </motion.p>
          </div>

          {/* Badges das cidades */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            variants={stagger}
          >
            {CIDADES.map((c, i) => (
              <motion.span
                key={c}
                variants={fadeUp}
                custom={i}
                className="font-display text-[10px] tracking-[0.3em] uppercase text-ouro-300/80 border border-ouro-500/35 hover:border-ouro-400 hover:text-ouro-300 px-4 py-2.5 transition-all duration-300 cursor-default hover:bg-ouro-500/5"
                style={{
                  boxShadow: "inset 0 0 0 0 rgba(230,191,82,0)",
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>

          {/* Coordenadas estilizadas */}
          <motion.div
            variants={fadeUp}
            className="mt-8 font-display text-[9px] tracking-[0.4em] text-amber-50/30 uppercase"
          >
            7°12′S · 39°18′W · Cariri — Ceará
          </motion.div>
        </motion.div>

        {/* Coluna do emblema */}
        <motion.div
          className="relative flex items-center justify-center py-8"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Anel externo girando lentamente */}
          <div
            className="absolute rounded-full border border-ouro-500/20 anim-spin-cw-90"
            style={{ inset: '-15%' }}
          >
            {/* Marcadores cardinais nos 4 pontos */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-1.5 h-1.5 rounded-full bg-ouro-500/50"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateY(-50%) translateX(-50%) translateY(calc(-50% - 8px))`,
                }}
              />
            ))}
          </div>

          {/* Anel médio girando ao contrário */}
          <div
            className="absolute rounded-full border border-ouro-500/[0.12] anim-spin-ccw-140"
            style={{ inset: '-5%', borderStyle: 'dashed' }}
          />

          {/* Anel interno estático */}
          <div
            className="absolute inset-0 rounded-full border border-ouro-500/20"
          />

          {/* Emblema central com glow pulsante */}
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none anim-emblem-pulse"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(230,191,82,0.12) 0%, transparent 65%)' }}
            />

            <Emblema size={220} ring={false} glow={true} />

            {/* Texto circular ao redor */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="absolute w-full h-full opacity-20">
                <defs>
                  <path id="circle-text" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text className="font-display" fontSize="6.5" letterSpacing="4" fill="rgb(230,191,82)">
                  <textPath href="#circle-text">
                    ORDENS DE APERFEIÇOAMENTO · CARIRI · CEARÁ · YORK RITE ·&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Número de lojas — rodapé do emblema */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
            <div className="w-12 h-px bg-ouro-500/30" />
            <span className="font-display text-[8px] tracking-[0.45em] uppercase text-ouro-400/50 mt-1">
              6 municípios
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
