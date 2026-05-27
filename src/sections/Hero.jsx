import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Emblema, OrnamentalDivider } from '../components/shared';

const STAT_MACONS = 202;

/* CountUp só dispara quando entra na viewport */
function CountUp({ to, duration = 1800, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setVal(Math.round((to * step) / steps));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* Variantes de animação */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-carmesim-950">

      {/* ── Fundo multicamadas ── */}
      {/* Gradiente principal — núcleo mais quente e profundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 28%, #8a1a27 0%, #4e1016 38%, #220608 68%, #0e0102 100%)",
        }}
      />
      {/* fundo_vermelho.svg — textura e formas decorativas carmesim */}
      <img
        src="assets/fundo_vermelho.svg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.34 }}
      />
      {/* Raios laterais de luz quente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 8% 50%, rgba(140,26,40,0.32) 0%, transparent 105%), " +
            "radial-gradient(ellipse 55% 80% at 92% 50%, rgba(110,18,28,0.28) 0%, transparent 65%)",
        }}
      />
      {/* Grain — textura de nobreza */}
      <div className="bg-grain absolute inset-0 pointer-events-none" />
      {/* Vinheta de bordas — profundidade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 160px 60px rgba(6,0,1,0.8)" }}
      />

      {/* ── Ornamento geométrico girante ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          viewBox="0 0 600 600"
          className="w-[min(92vmin,700px)] h-[min(92vmin,700px)] opacity-[0.048]"
          fill="none"
          stroke="rgba(230,191,82,1)"
          strokeWidth="0.55"
          animate={{ rotate: 360 }}
          transition={{ duration: 130, ease: "linear", repeat: Infinity }}
        >
          <circle cx="300" cy="300" r="278" />
          <circle cx="300" cy="300" r="238" strokeDasharray="2 16" />
          <circle cx="300" cy="300" r="198" />
          <circle cx="300" cy="300" r="148" strokeDasharray="5 9" />
          <circle cx="300" cy="300" r="90" />
          {/* Raios radiais */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={300 + Math.cos(a) * 90} y1={300 + Math.sin(a) * 90}
                x2={300 + Math.cos(a) * 278} y2={300 + Math.sin(a) * 278}
              />
            );
          })}
          {/* Hexagrama interno */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a1 = (i / 6) * Math.PI * 2;
            const a2 = ((i + 2) / 6) * Math.PI * 2;
            return (
              <line
                key={`h${i}`}
                x1={300 + Math.cos(a1) * 198} y1={300 + Math.sin(a1) * 198}
                x2={300 + Math.cos(a2) * 198} y2={300 + Math.sin(a2) * 198}
                opacity={0.4}
              />
            );
          })}
        </motion.svg>
      </div>

      {/* Fade para a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-carmesim-950 to-transparent pointer-events-none" />

      {/* ── Conteúdo principal ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8 sm:px-6 max-w-4xl mx-auto pt-28 pb-20 sm:pt-32 md:py-36"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Eyebrow tag */}
        <motion.div className="flex items-center gap-4 mb-9" variants={item}>
          <span className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-ouro-400/50" />
          <span className="font-display tracking-[0.5em] text-[9px] sm:text-[10px] uppercase text-ouro-300/75">
            2026
          </span>
          <span className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-ouro-400/50" />
        </motion.div>

        {/* Emblema com halos pulsantes */}
        <motion.div
          className="relative mb-11 sm:mb-14 flex items-center justify-center"
          style={{ width: 214, height: 214 }}
          variants={item}
        >
          {/* Anel interno */}
          <div className="absolute inset-0 rounded-full border border-ouro-400/20" />
          {/* Anel externo tracejado */}
          <div
            className="absolute rounded-full border border-ouro-400/10"
            style={{ inset: "-20px", borderStyle: "dashed" }}
          />
          {/* Pulso de luz */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 90px 24px rgba(230,191,82,0.07)" }}
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.97, 1.03, 0.97] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          />
          <Emblema size={170} ring={false} glow={true} />
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display text-[clamp(1.65rem,7.5vw,5.4rem)] leading-[1.08] sm:leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-ouro-300 via-ouro-400 to-ouro-600 mb-5 sm:mb-7"
          style={{ filter: "drop-shadow(0 4px 40px rgba(230,191,82,0.16))" }}
          variants={item}
        >
          Ordens de<br />Aperfeiçoamento<br />no Cariri
        </motion.h1>

        {/* Classificação */}
        <motion.p
          className="font-display tracking-[0.42em] sm:tracking-[0.55em] uppercase text-[10px] sm:text-[11px] text-ouro-300/55 mb-9 sm:mb-10"
          variants={item}
        >
          Região do Cariri Cearense
        </motion.p>

        {/* Divisor ornamental */}
        <motion.div className="w-full max-w-[260px] mb-9 sm:mb-10" variants={item}>
          <OrnamentalDivider />
        </motion.div>

        {/* Citação */}
        <motion.blockquote
          className="font-serif italic text-lg md:text-xl text-amber-50/65 max-w-[38rem] leading-relaxed mb-12 sm:mb-16"
          variants={item}
        >
          "Onde a pedra bruta encontra o cinzel, e o homem encontra a si mesmo —
          sob a luz que vem do alto, no silêncio do templo."
        </motion.blockquote>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-16 sm:mb-20"
          variants={item}
        >
          {/* CTA primário — ouro sólido com shimmer */}
          <a
            href="#conhecer"
            className="group relative inline-flex items-center gap-3 overflow-hidden px-9 py-[15px] font-display text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-carmesim-950 font-semibold transition-transform duration-200 hover:-translate-y-px active:translate-y-0 select-none"
            style={{
              background: "linear-gradient(150deg, #f5d77a 0%, #e6bf52 48%, #c9a23a 100%)",
              boxShadow:
                "0 6px 32px -8px rgba(230,191,82,0.55), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            {/* Shimmer sweep no hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
              }}
            />
            <span className="relative z-10">Conhecer as Ordens</span>
            <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* CTA secundário — ghost com linha animada */}
          <a
            href="#sobre"
            className="group inline-flex items-center gap-3 font-display text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-amber-50/50 hover:text-ouro-300 transition-colors duration-300 select-none"
          >
            <span className="block h-px w-5 bg-current opacity-60 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
            O que somos
          </a>
        </motion.div>

        {/* Barra de estatísticas */}
        <motion.div
          className="pt-9 border-t border-ouro-500/20 flex flex-wrap items-center justify-center gap-10 sm:gap-24 w-full"
          variants={item}
        >
          <div className="text-center">
            <p
              className="font-display text-5xl sm:text-[3.5rem] leading-none tabular-nums mb-3"
              style={{ color: "rgba(245,215,122,0.92)" }}
            >
              <CountUp to={6} />
            </p>
            <p className="font-display text-[9px] tracking-[0.5em] uppercase text-amber-50/35">
              Ordens Ativas
            </p>
          </div>

          {/* Separador decorativo */}
          <div className="hidden sm:flex flex-col items-center gap-1.5">
            <span className="w-px h-7 bg-ouro-500/20" />
            <span
              className="w-1.5 h-1.5 rounded-sm bg-ouro-400/30"
              style={{ transform: "rotate(45deg)" }}
            />
            <span className="w-px h-7 bg-ouro-500/20" />
          </div>

          <div className="text-center">
            <p
              className="font-display text-5xl sm:text-[3.5rem] leading-none tabular-nums mb-3"
              style={{ color: "rgba(245,215,122,0.92)" }}
            >
              <CountUp to={STAT_MACONS} suffix="+" />
            </p>
            <p className="font-display text-[9px] tracking-[0.5em] uppercase text-amber-50/35">
              Maçons Praticantes
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Indicador de scroll ── */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-ouro-300/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
        >
          <span className="font-display text-[8px] tracking-[0.65em] uppercase">Descer</span>
          <span className="w-px h-9 bg-gradient-to-b from-ouro-400/55 to-transparent" />
        </motion.div>
      </motion.div>

    </section>
  );
}
