import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionLabel } from '../components/shared';

const REUNIOES_DATA = [
  {
    nomeOrdem: "Cavaleiros Templários",
    cor: { border: "#DC2626", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_templarios.svg",
    foto: "assets/fotos/reuniao_templario.jpeg",
    titulo: "Reunião do Preceptório de Cavaleiros Templários",
    local: "Crato — CE",
    data: "15 Abr. 2026",
  },
  {
    nomeOrdem: "Mestres da Marca",
    cor: { border: "#1E40AF", text: "#93C5FD" },
    emblema: "assets/insignias_ordens/Ordem_marca.svg",
    foto: "assets/fotos/reuniao_marca.jpeg",
    titulo: "Reunião da Loja de Mestres Maçons da Marca",
    local: "Juazeiro do Norte — CE",
    data: "10 Mar. 2026",
  },
  {
    nomeOrdem: "Nautas da Arca Real",
    cor: { border: "#15803D", text: "#86EFAC" },
    emblema: "assets/insignias_ordens/Ordem_nauta.svg",
    foto: "assets/fotos/reuniao_nauta.jpeg",
    titulo: "Reunião da Loja dos Nautas da Arca Real",
    local: "Juazeiro do Norte — CE",
    data: "18 Fev. 2026",
  },
  {
    nomeOrdem: "Cavaleiros de Malta",
    cor: { border: "#9CA3AF", text: "#E5E7EB" },
    emblema: "assets/insignias_ordens/Ordem_malta.svg",
    foto: "assets/fotos/reuniao_malta.jpeg",
    titulo: "Reunião do Priorado dos Cavaleiros de Malta",
    local: "Juazeiro do Norte — CE",
    data: "22 Jan. 2026",
  },
  {
    nomeOrdem: "Sagrado Arco Real",
    cor: { border: "#991B1B", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_sar.svg",
    foto: "assets/fotos/reuniao_01.jpeg",
    titulo: "Reunião do Capítulo do Sagrado Arco Real",
    local: "Juazeiro do Norte — CE",
    data: "20 Mai. 2026",
  },
  {
    nomeOrdem: "Sacerdotes Templários (KTP)",
    cor: { border: "#92400E", text: "#FCD34D" },
    emblema: "assets/insignias_ordens/Ordem_ktp.svg",
    foto: "assets/fotos/reuniao_06.jpg",
    titulo: "Encampamento dos Sacerdotes Cavaleiros Templários",
    local: "Crato — CE",
    data: "11 Dez. 2025",
  },
];

function Indicators({ total, current, go, slide }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          aria-label={`Ir para sessão ${i + 1}`}
          style={{
            height: "4px",
            width: i === current ? "28px" : "4px",
            borderRadius: "2px",
            backgroundColor: i === current ? slide.cor.border : "rgba(230,191,82,0.22)",
            transition: "all 0.35s ease",
          }}
        />
      ))}
    </div>
  );
}

export default function Reunioes() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const total = REUNIOES_DATA.length;

  const go = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => go((current - 1 + total) % total);
  const next = () => go((current + 1) % total);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setTouchStartX(null);
  };

  const slide = REUNIOES_DATA[current];

  return (
    <section id="reunioes" className="relative py-16 sm:py-20 lg:py-36 bg-ardosia-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_preto.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.28 }} />

      <div className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(10,10,12,0.85) 0%, transparent 55%)" }} />

      {/* Cabeçalho */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 lg:px-10 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Memórias do Templo</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-6 leading-tight">
          Sessões realizadas,
          <br />laços fortalecidos
        </h2>
      </motion.div>

      {/* ── MOBILE: cartão vertical ─────────────────────────────── */}
      <div
        className="sm:hidden relative mx-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Barra colorida topo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-bar-m'}
            className="absolute top-0 left-0 right-0 h-0.5 z-10"
            style={{ backgroundColor: slide.cor.border }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        {/* Foto */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current + '-foto-m'}
              src={slide.foto}
              alt={slide.titulo}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onError={e => { e.target.style.display = "none"; }}
            />
          </AnimatePresence>

          {/* Emblema marca d'água */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current + '-wm-m'}
              src={slide.emblema}
              aria-hidden="true"
              className="absolute inset-0 m-auto w-36 h-36 object-contain pointer-events-none"
              style={{ opacity: 0.08, filter: "brightness(3) saturate(0)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onError={e => { e.target.style.display = "none"; }}
            />
          </AnimatePresence>

          {/* Gradiente inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-ardosia-950/85 via-ardosia-950/20 to-transparent pointer-events-none" />

          {/* Contador */}
          <div className="absolute top-3 right-4 font-display text-[9px] tracking-[0.4em] text-amber-50/50">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          {/* Setas sobre a foto */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-ouro-500/35 bg-ardosia-950/75 text-ouro-300 backdrop-blur-sm font-display"
            aria-label="Slide anterior"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-ouro-500/35 bg-ardosia-950/75 text-ouro-300 backdrop-blur-sm font-display"
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>

        {/* Bloco de conteúdo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-content-m'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-4 px-5 py-5"
            style={{
              background: "rgba(11,11,12,0.96)",
              borderLeft: `2px solid ${slide.cor.border}60`,
            }}
          >
            {/* Emblema */}
            <img
              src={slide.emblema}
              alt={slide.nomeOrdem}
              className="w-12 h-12 shrink-0 object-contain mt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              onError={e => { e.target.style.display = "none"; }}
            />

            <div className="min-w-0 flex-1">
              <span
                className="font-display text-[9px] tracking-[0.4em] uppercase block mb-2"
                style={{ color: slide.cor.text, opacity: 0.85 }}
              >
                {slide.nomeOrdem}
              </span>
              <h3 className="font-display text-[15px] leading-snug text-amber-50/95 mb-2.5">
                {slide.titulo}
              </h3>
              <p className="font-body text-sm text-amber-50/45">
                {slide.local} · {slide.data}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <Indicators total={total} current={current} go={go} slide={slide} />
      </div>

      {/* ── DESKTOP: slide panorâmico ───────────────────────────── */}
      <div
        className="hidden sm:block relative max-w-7xl mx-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: "16 / 7" }}>

            {/* Background dinâmico */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-bg'}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ background: `linear-gradient(135deg, ${slide.cor.border}22 0%, rgba(7,7,8,0.98) 100%)` }}
              />
            </AnimatePresence>

            {/* Emblema central marca d'água */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current + '-emblema-bg'}
                  src={slide.emblema}
                  alt=""
                  aria-hidden="true"
                  className="w-72 h-72 object-contain"
                  style={{ opacity: 0.06, filter: "brightness(3) saturate(0)" }}
                  initial={{ opacity: 0, scale: 1.3 }}
                  animate={{ opacity: 0.06, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.8 }}
                  onError={e => { e.target.style.display = "none"; }}
                />
              </AnimatePresence>
            </div>

            {/* Foto */}
            <AnimatePresence mode="wait">
              <motion.img
                key={current + '-foto'}
                src={slide.foto}
                alt={slide.titulo}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                onError={e => { e.target.style.display = "none"; }}
              />
            </AnimatePresence>

            {/* Gradientes de sobreposição */}
            <div className="absolute inset-0 bg-gradient-to-t from-ardosia-950 via-ardosia-950/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-ardosia-950/80 via-ardosia-950/25 to-transparent pointer-events-none" />

            {/* Conteúdo do slide */}
            <div className="absolute bottom-0 left-0 right-0 px-10 pb-10 flex items-end gap-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current + '-emblema'}
                  src={slide.emblema}
                  alt={slide.nomeOrdem}
                  className="w-20 h-20 shrink-0 object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  onError={e => { e.target.style.display = "none"; }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current + '-text'}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="font-display text-[9px] tracking-[0.45em] uppercase block mb-2"
                    style={{ color: slide.cor.text, opacity: 0.8 }}
                  >
                    {slide.nomeOrdem}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-amber-50/95 leading-tight mb-2.5"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
                    {slide.titulo}
                  </h3>
                  <p className="font-body text-base text-amber-50/60">
                    {slide.local} · {slide.data}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Contador */}
            <div className="absolute top-8 right-8 font-display text-[10px] tracking-[0.4em] text-amber-50/40">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>

            {/* Barra colorida topo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-bar'}
                className="absolute top-0 left-0 h-0.5"
                style={{ backgroundColor: slide.cor.border }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                exit={{ width: '0%', opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Setas — desktop */}
        <button
          onClick={prev}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-ouro-500/40 bg-ardosia-950/85 hover:bg-ardosia-900 hover:border-ouro-400 text-ouro-300 hover:text-ouro-400 transition-all backdrop-blur-sm font-display text-lg"
          aria-label="Slide anterior"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-ouro-500/40 bg-ardosia-950/85 hover:bg-ardosia-900 hover:border-ouro-400 text-ouro-300 hover:text-ouro-400 transition-all backdrop-blur-sm font-display text-lg"
          aria-label="Próximo slide"
        >
          →
        </button>

        <Indicators total={total} current={current} go={go} slide={slide} />
      </div>

    </section>
  );
}
