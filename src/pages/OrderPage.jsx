import { motion, useReducedMotion } from 'framer-motion';
import { Navbar, Emblema, OrnamentalDivider, SectionLabel, Footer, Icon } from '../components/shared';

// Cada Ordem mantém a mesma família visual (fundos profundos + acento de assinatura),
// trocando apenas o matiz do fundo e a cor-selo que identifica a Ordem.
// `seal` é a cor de sinalização da Ordem (molduras de foto, cantos, brilhos).
const THEMES = {
  carmesim: {
    bg950: "bg-carmesim-950",
    bg900: "bg-carmesim-900",
    heroGradient: "radial-gradient(ellipse at 50% 35%, #57121a 0%, #2b0709 45%, #1a0507 85%)",
    glowB: "radial-gradient(ellipse at 20% 0%, rgba(230,191,82,0.06) 0%, transparent 60%)",
    glowD: "radial-gradient(ellipse at 80% 100%, rgba(122,18,22,0.6) 0%, transparent 60%)",
    ctaPanel: "bg-gradient-to-b from-carmesim-900 via-carmesim-950 to-carmesim-900",
    texture: null,
    seal: "#8c1519",
    sealText: "#FCA5A5",
  },
  azul: {
    bg950: "bg-azul-950",
    bg900: "bg-azul-900",
    heroGradient: "radial-gradient(ellipse at 50% 35%, #1c3f9e 0%, #0d2a60 45%, #050e2a 85%)",
    glowB: "radial-gradient(ellipse at 20% 0%, rgba(230,191,82,0.06) 0%, transparent 60%)",
    glowD: "radial-gradient(ellipse at 80% 100%, rgba(28,63,158,0.55) 0%, transparent 60%)",
    ctaPanel: "bg-gradient-to-b from-azul-900 via-azul-950 to-azul-900",
    texture: "assets/fundo_azul.svg",
    seal: "#3B82F6",
    sealText: "#93C5FD",
  },
  verde: {
    bg950: "bg-floresta-950",
    bg900: "bg-floresta-900",
    heroGradient: "radial-gradient(ellipse at 50% 35%, #13662080 0%, #082f10 45%, #051d0a 85%)",
    glowB: "radial-gradient(ellipse at 20% 0%, rgba(230,191,82,0.06) 0%, transparent 60%)",
    glowD: "radial-gradient(ellipse at 80% 100%, rgba(13,69,24,0.6) 0%, transparent 60%)",
    ctaPanel: "bg-gradient-to-b from-floresta-900 via-floresta-950 to-floresta-900",
    texture: "assets/fundo_verde.svg",
    seal: "#22C55E",
    sealText: "#86EFAC",
  },
  preto: {
    bg950: "bg-ardosia-950",
    bg900: "bg-ardosia-900",
    heroGradient: "radial-gradient(ellipse at 50% 35%, #26262b 0%, #141415 45%, #070708 85%)",
    glowB: "radial-gradient(ellipse at 20% 0%, rgba(226,232,240,0.05) 0%, transparent 60%)",
    glowD: "radial-gradient(ellipse at 80% 100%, rgba(148,163,184,0.22) 0%, transparent 60%)",
    ctaPanel: "bg-gradient-to-b from-ardosia-900 via-ardosia-950 to-ardosia-900",
    texture: "assets/fundo_preto.svg",
    seal: "#94A3B8",
    sealText: "#E5E7EB",
  },
  vermelho: {
    bg950: "bg-carmesim-950",
    bg900: "bg-carmesim-900",
    heroGradient: "radial-gradient(ellipse at 50% 35%, #7a1219 0%, #4a0e14 45%, #220608 85%)",
    glowB: "radial-gradient(ellipse at 20% 0%, rgba(230,191,82,0.06) 0%, transparent 60%)",
    glowD: "radial-gradient(ellipse at 80% 100%, rgba(220,38,38,0.45) 0%, transparent 60%)",
    ctaPanel: "bg-gradient-to-b from-carmesim-900 via-carmesim-950 to-carmesim-900",
    texture: "assets/fundo_vermelho.svg",
    seal: "#EF4444",
    sealText: "#FCA5A5",
  },
};

// Acento tipográfico da página: Ouro Velho (padrão) ou Prata (como "Nossa História").
// Decidido por página (data.ink), não pelo tema — pois Ordens de mesmo fundo podem diferir.
const INK = {
  ouro: {
    rgb: "230,191,82",
    head: "text-ouro-300",
    head4: "text-ouro-400",
    dropcap: "first-letter:text-ouro-400",
    icon: "text-ouro-300",
    iconHover: "group-hover:text-ouro-400",
    link: "text-ouro-300 hover:text-ouro-400",
    eyebrow: "text-ouro-300/80",
    label: "text-ouro-500/80",
    labelDim: "text-ouro-500/70",
    quoteIcon: "text-ouro-400/40",
    numBig: "text-ouro-400/30",
    cardBorder: "border-ouro-500/20",
    cardBorderHover: "hover:border-ouro-400/60",
    corner: "border-ouro-500/40",
    cornerHover: "group-hover:border-ouro-400",
    ring: "border-ouro-500/60",
    ringHover: "group-hover:border-ouro-400",
    checkRing: "border-ouro-400/70",
    checkBg: "bg-ouro-500/5",
    rule: "border-ouro-500/15",
    quoteBar: "border-ouro-400",
    frame70: "border-ouro-400/70",
    frame60: "border-ouro-400/60",
    frame30: "border-ouro-400/30",
    ctaCorner: "text-ouro-400",
    ctaPanelBorder: "border-ouro-400/60",
    titleClass: "text-transparent bg-clip-text bg-gradient-to-b from-ouro-300 via-ouro-400 to-ouro-600",
    btn: "from-ouro-300 via-ouro-400 to-ouro-600 hover:from-ouro-400 hover:to-ouro-500 text-carmesim-950",
  },
  prata: {
    rgb: "203,213,225",
    head: "text-prata-300",
    head4: "text-prata-200",
    dropcap: "first-letter:text-prata-200",
    icon: "text-prata-300",
    iconHover: "group-hover:text-prata-200",
    link: "text-prata-300 hover:text-prata-200",
    eyebrow: "text-prata-300/80",
    label: "text-prata-400/90",
    labelDim: "text-prata-400/80",
    quoteIcon: "text-prata-400/50",
    numBig: "text-prata-400/30",
    cardBorder: "border-prata-500/30",
    cardBorderHover: "hover:border-prata-300/70",
    corner: "border-prata-500/50",
    cornerHover: "group-hover:border-prata-300",
    ring: "border-prata-400/60",
    ringHover: "group-hover:border-prata-300",
    checkRing: "border-prata-400/70",
    checkBg: "bg-prata-400/10",
    rule: "border-prata-500/25",
    quoteBar: "border-prata-400",
    frame70: "border-prata-400/70",
    frame60: "border-prata-400/60",
    frame30: "border-prata-400/40",
    ctaCorner: "text-prata-300",
    ctaPanelBorder: "border-prata-400/60",
    titleClass: "text-prata-300",
    btn: "from-prata-200 via-prata-300 to-prata-400 hover:from-prata-300 hover:to-prata-400 text-slate-900",
  },
};

function SectionTexture({ src, opacity = 0.22, eager = false }) {
  if (!src) return null;
  return (
    <img
      src={src}
      aria-hidden="true"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      style={{ opacity }}
    />
  );
}

/* --- Item da galeria: foto emoldurada ou espaço reservado para o cliente --- */
function GaleriaItem({ item, index, theme, reduceMotion }) {
  const hasFoto = Boolean(item.src);
  return (
    <motion.figure
      className="relative group"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cantos ornamentais na cor-selo da Ordem */}
      <div
        className="absolute -top-2 -left-2 w-9 h-9 border-t border-l z-20 pointer-events-none transition-colors duration-500 group-hover:opacity-100 opacity-70"
        style={{ borderColor: theme.seal }}
      />
      <div
        className="absolute -bottom-2 -right-2 w-9 h-9 border-b border-r z-20 pointer-events-none transition-colors duration-500 group-hover:opacity-100 opacity-70"
        style={{ borderColor: theme.seal }}
      />

      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        {hasFoto ? (
          <>
            <img
              src={item.src}
              alt={item.alt || item.legenda || ""}
              loading="lazy"
              className={`absolute inset-0 w-full h-full transition-transform duration-[1400ms] ease-out group-hover:scale-105 ${
                item.fit === "contain" ? "object-contain p-5" : "object-cover"
              }`}
              onError={e => { e.target.style.opacity = "0.12"; }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.08) 48%, transparent 100%)" }}
            />
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ boxShadow: `inset 0 0 44px ${theme.seal}1A` }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-5"
            style={{
              background: `linear-gradient(160deg, ${theme.seal}0D 0%, rgba(0,0,0,0.4) 100%)`,
              border: `1px solid ${theme.seal}26`,
            }}
          >
            <Emblema size={42} ring glow={false} className="opacity-30" />
            <span className="font-display text-[9px] tracking-[0.4em] uppercase text-amber-50/45">
              Espaço reservado
            </span>
          </div>
        )}

        {/* Etiqueta de categoria */}
        {item.categoria && (
          <span
            className="absolute top-3 left-3 z-20 font-display text-[8px] sm:text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 backdrop-blur-sm"
            style={{ color: theme.sealText, background: "rgba(0,0,0,0.5)", border: `1px solid ${theme.seal}40` }}
          >
            {item.categoria}
          </span>
        )}

        {/* Legenda sobre a foto */}
        {hasFoto && item.legenda && (
          <figcaption className="absolute bottom-0 inset-x-0 z-20 p-4 font-serif italic text-sm sm:text-base text-amber-50/90 leading-snug">
            {item.legenda}
          </figcaption>
        )}
      </div>

      {/* Legenda do espaço reservado, abaixo do quadro */}
      {!hasFoto && item.legenda && (
        <figcaption className="mt-3 font-serif italic text-sm text-amber-50/60 leading-snug text-center px-2">
          {item.legenda}
        </figcaption>
      )}
    </motion.figure>
  );
}

/* --- Seção padrão de Memória Visual (mobile-first) --- */
function GaleriaSection({ galeria, theme, ink, bg, reduceMotion }) {
  return (
    <section className={`relative py-20 sm:py-24 lg:py-32 ${bg} overflow-hidden`}>
      <SectionTexture src={theme.texture} />
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: theme.glowD }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <SectionLabel>{galeria.rotulo || "Memória Visual"}</SectionLabel>
          <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 leading-tight`}>
            {galeria.titulo}
          </h2>
          {galeria.intro && (
            <p className="font-serif italic text-amber-50/65 mt-5 max-w-2xl mx-auto leading-relaxed">
              {galeria.intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 max-w-5xl mx-auto">
          {galeria.itens.map((it, i) => (
            <GaleriaItem key={i} item={it} index={i} theme={theme} reduceMotion={reduceMotion} />
          ))}
        </div>

        {galeria.nota && (
          <p className="mt-12 text-center font-display text-[9px] tracking-[0.35em] uppercase text-amber-50/35">
            {galeria.nota}
          </p>
        )}
      </div>
    </section>
  );
}

/* --- Homem de prata: figura-charme recorrente (representa o grau operativo) --- */
function HomemPrata({ src, className = "", flip = false, float = true, reduceMotion, delay = 0 }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className={!reduceMotion && float ? "anim-bounce-y" : ""}>
        <motion.img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain"
          style={{
            transform: flip ? "scaleX(-1)" : undefined,
            filter: "drop-shadow(0 8px 28px rgba(148,163,184,0.30))",
          }}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* --- A Pedra: foto histórica em destaque + explicação abaixo --- */
function PedraSection({ pedra, theme, ink, charme, reduceMotion }) {
  return (
    <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg900} overflow-hidden`}>
      <SectionTexture src={theme.texture} />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: theme.glowB }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <SectionLabel>{pedra.rotulo}</SectionLabel>
          <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 leading-tight text-balance`}>
            {pedra.titulo}
          </h2>
        </div>

        {/* Prancha em destaque */}
        <motion.figure
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 ${ink.frame70} z-20 pointer-events-none`} />
          <div className={`absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 ${ink.frame70} z-20 pointer-events-none`} />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r z-20 pointer-events-none" style={{ borderColor: `${theme.seal}80` }} />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l z-20 pointer-events-none" style={{ borderColor: `${theme.seal}80` }} />

          <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
            <motion.img
              src={pedra.src}
              alt={pedra.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 60%" }}
              initial={reduceMotion ? false : { scale: 1.1 }}
              whileInView={{ scale: 1.02 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              onError={e => { e.target.style.opacity = "0.12"; }}
            />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 130px 36px rgba(6,0,1,0.5)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(6,0,1,0.6) 0%, transparent 38%)" }} />
            <span className="absolute bottom-3 left-4 z-10 font-display text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-amber-50/70">
              {pedra.selo}
            </span>
          </div>
        </motion.figure>

        {pedra.legenda && (
          <figcaption className="mt-5 text-center font-serif italic text-amber-50/60 text-sm sm:text-base">
            {pedra.legenda}
          </figcaption>
        )}

        {/* O obreiro de prata, ao lado da pedra que talhou */}
        {charme && (
          <div className="flex flex-col items-center my-10 sm:my-12">
            <HomemPrata src={charme.src} className="w-24 sm:w-28" reduceMotion={reduceMotion} />
            <p className="font-serif italic text-amber-50/60 text-center mt-4 max-w-xs leading-relaxed">
              {charme.legenda || "A mesma mão que talha a pedra grava nela o seu nome."}
            </p>
          </div>
        )}

        {/* Explicação */}
        <div className="max-w-2xl mx-auto space-y-5 font-body text-lg text-amber-50/85 leading-relaxed text-pretty">
          {pedra.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Os Paramentos: vitrine dos adornos, nua e crua --- */
function AdornosSection({ adornos, theme, ink, charme, reduceMotion }) {
  const maskRadial = "radial-gradient(ellipse 82% 78% at 50% 48%, #000 62%, transparent 94%)";
  return (
    <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg950} overflow-hidden`}>
      <SectionTexture src={theme.texture} />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${theme.seal}1F 0%, transparent 55%)` }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <SectionLabel>{adornos.rotulo}</SectionLabel>
          <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 leading-tight text-balance`}>
            {adornos.titulo}
          </h2>
        </div>

        {/* Vitrine */}
        <motion.figure
          className="relative mx-auto max-w-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 ${ink.frame60} z-20 pointer-events-none`} />
          <div className={`absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 ${ink.frame60} z-20 pointer-events-none`} />
          <div className="relative" style={{ aspectRatio: "4 / 3" }}>
            {/* Foco de luz da vitrine */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(220,228,240,0.18) 0%, transparent 70%)" }}
            />
            <motion.img
              src={adornos.src}
              alt={adornos.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain p-3"
              style={{ WebkitMaskImage: maskRadial, maskImage: maskRadial }}
              initial={reduceMotion ? false : { scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              onError={e => { e.target.style.opacity = "0.12"; }}
            />
          </div>
          {adornos.legenda && (
            <figcaption className="mt-4 text-center font-serif italic text-amber-50/55 text-sm">
              {adornos.legenda}
            </figcaption>
          )}
        </motion.figure>
      </div>

      {/* Charme: o obreiro espreita a vitrine, no canto */}
      {charme && (
        <HomemPrata
          src={charme.src}
          flip
          className="hidden md:block absolute bottom-0 right-4 lg:right-10 w-28 lg:w-36 opacity-70 z-10"
          reduceMotion={reduceMotion}
        />
      )}
    </section>
  );
}

/* --- O Obreiro: o homem de prata em destaque, ladeado pela história do grau --- */
function ObreiroSection({ obreiro, theme, ink, reduceMotion }) {
  return (
    <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg900} overflow-hidden`}>
      <SectionTexture src={theme.texture} />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 75% 20%, ${theme.seal}1A 0%, transparent 55%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            className="order-2 lg:order-1"
            initial={reduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>{obreiro.rotulo}</SectionLabel>
            <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 mb-8 leading-tight text-balance`}>
              {obreiro.titulo}
            </h2>
            <div className="space-y-5 font-body text-lg text-amber-50/80 leading-relaxed text-pretty">
              {obreiro.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* O obreiro de prata, em destaque */}
          <motion.figure
            className="relative order-1 lg:order-2"
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 ${ink.frame60} z-20 pointer-events-none`} />
            <div className={`absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 ${ink.frame60} z-20 pointer-events-none`} />
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(203,213,225,0.16) 0%, transparent 70%)" }}
              />
              <motion.img
                src={obreiro.src}
                alt={obreiro.alt}
                loading="lazy"
                decoding="async"
                className="relative w-full h-auto object-contain"
                style={{ filter: "drop-shadow(0 12px 36px rgba(148,163,184,0.35))" }}
                initial={reduceMotion ? false : { scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                onError={e => { e.target.style.opacity = "0.12"; }}
              />
            </div>
            {obreiro.legenda && (
              <figcaption className="mt-4 text-center font-serif italic text-amber-50/55 text-sm">
                {obreiro.legenda}
              </figcaption>
            )}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

export default function OrderPage({ data, setCurrentPage }) {
  const theme = THEMES[data.theme] || THEMES.carmesim;
  const ink = INK[data.ink] || INK.ouro;
  const reduceMotion = useReducedMotion();

  const goContato = () => setCurrentPage("home", "contato");

  return (
    <div className={`${theme.bg950} text-amber-50 min-h-screen`}>
      <Navbar variant="order" onHome={() => setCurrentPage("home")} onContato={goContato} />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div
          className="absolute inset-0"
          style={{ background: theme.heroGradient }}
        />
        <SectionTexture src={theme.texture} opacity={0.15} eager />
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id={`gh-${data.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`rgba(${ink.rgb},0.5)`} />
              <stop offset="100%" stopColor={`rgba(${ink.rgb},0)`} />
            </radialGradient>
          </defs>
          <circle cx="600" cy="300" r="280" fill={`url(#gh-${data.id})`} />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x1 = 600 + Math.cos(a) * 180;
            const y1 = 300 + Math.sin(a) * 180;
            const x2 = 600 + Math.cos(a) * 400;
            const y2 = 300 + Math.sin(a) * 400;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(${ink.rgb},0.3)`} strokeWidth="0.6" />
            );
          })}
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <button
            onClick={() => setCurrentPage("home")}
            className={`inline-flex items-center gap-2 ${ink.link} font-display text-[10px] tracking-[0.4em] uppercase mb-8 sm:mb-12 transition-colors`}
          >
            <span>←</span> Voltar à página inicial
          </button>

          <div className="mb-8 sm:mb-10 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full opacity-25 blur-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle, rgba(${ink.rgb},0.6) 0%, transparent 70%)` }}
              />
              <img
                src={data.emblema}
                alt={`Emblema da ${data.titulo}`}
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 object-contain"
                style={{ filter: `drop-shadow(0 0 40px rgba(${ink.rgb},0.35))` }}
                onError={e => { e.target.style.opacity = "0.3"; }}
              />
            </div>
          </div>

          <div className={`font-display text-[10px] tracking-[0.5em] uppercase ${ink.eyebrow} mb-4`}>
            Ordens de Aperfeiçoamento do Cariri
          </div>
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${ink.titleClass} leading-[1.05] mb-6`}
            style={{ filter: `drop-shadow(0 2px 24px rgba(${ink.rgb},0.2))` }}
          >
            {data.titulo}
          </h1>
          {data.subtitulo && (
            <p className="font-serif italic text-xl md:text-2xl text-amber-50/70 mb-6">
              {data.subtitulo}
            </p>
          )}
          <p className="font-display text-[11px] tracking-[0.45em] uppercase text-amber-200">
            {data.classificacao}
          </p>

          <OrnamentalDivider className="max-w-md mx-auto mt-12" />
        </div>

        {/* Charme atmosférico: o obreiro de prata, ao pé do Templo */}
        {data.charme && (
          <HomemPrata
            src={data.charme.src}
            float={false}
            className="hidden md:block absolute bottom-0 left-2 lg:left-10 w-40 lg:w-52 opacity-[0.16] z-0"
            reduceMotion={reduceMotion}
          />
        )}
      </section>

      {/* O que é */}
      <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg950} overflow-hidden`}>
        <SectionTexture src={theme.texture} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <SectionLabel>O que é</SectionLabel>
          <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 mb-10 text-center leading-tight`}>
            {data.queE.titulo}
          </h2>
          <div className="space-y-6 font-body text-lg md:text-xl text-amber-50/80 leading-relaxed">
            {data.queE.paragrafos.map((p, i) => (
              <p key={i} className={i === 0 ? `first-letter:font-display first-letter:text-6xl first-letter:font-bold ${ink.dropcap} first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1` : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* A Pedra histórica — destaque + explicação */}
      {data.pedra && (
        <PedraSection pedra={data.pedra} theme={theme} ink={ink} charme={data.charme} reduceMotion={reduceMotion} />
      )}

      {/* Vida da Loja */}
      {data.vidaLoja && (
        <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg900} overflow-hidden`}>
          <SectionTexture src={theme.texture} />
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 75% 25%, ${theme.seal}1A 0%, transparent 55%)`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >
                <SectionLabel>{data.vidaLoja.rotulo}</SectionLabel>
                <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 mb-8 leading-tight`}>
                  {data.vidaLoja.titulo}
                </h2>
                <div className="space-y-5 font-body text-lg text-amber-50/80 leading-relaxed mb-12">
                  {data.vidaLoja.paragrafos.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {data.vidaLoja.marcas && (
                  <div>
                    <p className="font-display text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: theme.sealText }}>
                      {data.vidaLoja.marcasRotulo}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {data.vidaLoja.marcas.map((m, i) => (
                        <div
                          key={i}
                          className="aspect-square flex items-center justify-center transition-colors duration-300"
                          style={{ border: `1px solid ${theme.seal}33` }}
                          onMouseEnter={e => (e.currentTarget.style.borderColor = `${theme.seal}99`)}
                          onMouseLeave={e => (e.currentTarget.style.borderColor = `${theme.seal}33`)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 transition-colors duration-300"
                            style={{ color: `${theme.seal}99` }}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d={m.d} />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="relative"
                initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 z-10 pointer-events-none" style={{ borderColor: `${theme.seal}99` }} />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 z-10 pointer-events-none" style={{ borderColor: `${theme.seal}99` }} />
                <div className={`absolute -top-4 -right-4 w-7 h-7 border-t border-r ${ink.frame30} z-10 pointer-events-none`} />
                <div className={`absolute -bottom-4 -left-4 w-7 h-7 border-b border-l ${ink.frame30} z-10 pointer-events-none`} />

                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 50px ${theme.seal}1A, 0 30px 80px -20px rgba(0,0,0,0.85)` }}
                />

                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <motion.img
                    src={data.vidaLoja.foto.src}
                    alt={data.vidaLoja.foto.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={reduceMotion ? false : { scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    onError={e => { e.target.style.opacity = "0.15"; }}
                  />
                </div>

                {data.vidaLoja.foto.legenda && (
                  <p className="mt-4 font-serif italic text-sm text-amber-50/55 text-center">
                    {data.vidaLoja.foto.legenda}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Os Paramentos / Adornos do grau */}
      {data.adornos && (
        <AdornosSection adornos={data.adornos} theme={theme} ink={ink} charme={data.charme} reduceMotion={reduceMotion} />
      )}

      {/* O Obreiro de prata, em destaque, com a história do grau */}
      {data.obreiro && (
        <ObreiroSection obreiro={data.obreiro} theme={theme} ink={ink} reduceMotion={reduceMotion} />
      )}

      {/* Memória Visual — galeria padrão (fotos, adornos, fatos, curiosidades) */}
      {data.galeria && (
        <GaleriaSection
          galeria={data.galeria}
          theme={theme}
          ink={ink}
          bg={theme.bg950}
          reduceMotion={reduceMotion}
        />
      )}

      {/* CTA */}
      <section className={`relative py-16 sm:py-24 lg:py-32 ${theme.bg950} overflow-hidden`}>
        <SectionTexture src={theme.texture} />
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(${ink.rgb},0.08) 0%, transparent 55%)` }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className={`relative ${theme.ctaPanel} border ${ink.ctaPanelBorder} p-10 md:p-16 text-center`}>
            {[
              "top-0 left-0",
              "top-0 right-0 rotate-90",
              "bottom-0 right-0 rotate-180",
              "bottom-0 left-0 -rotate-90",
            ].map((pos, i) => (
              <svg
                key={i}
                viewBox="0 0 40 40"
                className={`absolute w-12 h-12 ${ink.ctaCorner} ${pos}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M0 18V0h18M0 10h8M10 0v8" />
              </svg>
            ))}

            <Emblema size={72} ring={false} glow={false} className="mb-6" />
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 className={`font-display text-3xl md:text-5xl ${ink.head} mt-6 mb-6 leading-tight`}>
              Tem interesse nesta Ordem?
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-amber-50/75 max-w-2xl mx-auto mb-10">
              Escreva-nos. A primeira pedra de toda jornada simbólica é a
              palavra honesta.
            </p>
            <button
              onClick={goContato}
              className={`group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-b ${ink.btn} font-display text-[11px] tracking-[0.45em] uppercase transition-all`}
              style={{ boxShadow: `0 8px 30px -10px rgba(${ink.rgb},0.6)` }}
            >
              Entrar em Contato
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
