import { motion } from 'framer-motion';
import { SectionLabel, OrnamentalDivider } from '../components/shared';

const MEMBROS = [
  {
    cargo: "Eminente Preceptor",
    nome: "Felipe Bandeira",
    foto: "assets/molduras/Moldura_felipe_templario.webp",
    emblema: "assets/lojas/Emblema_loja_templarios.svg",
    cor: { accent: "#DC2626", glow: "rgba(220,38,38,0.30)", bg: "rgba(220,38,38,0.08)" },
  },
  {
    cargo: "Excelente Companheiro",
    nome: "Wandson Pereira",
    foto: "assets/molduras/Moldura_wandson_sar.png",
    emblema: "assets/lojas/Emblema_loja_sar.svg",
    cor: { accent: "#B91C1C", glow: "rgba(185,28,28,0.30)", bg: "rgba(185,28,28,0.08)" },
  },
  {
    cargo: "Venerável Mestre",
    nome: "Felipe Bandeira",
    foto: "assets/molduras/Moldura_felipe_marca.png",
    emblema: "assets/lojas/Emblema_loja_marca.svg",
    cor: { accent: "#3B82F6", glow: "rgba(59,130,246,0.30)", bg: "rgba(59,130,246,0.08)" },
  },
  {
    cargo: "Venerável Comandante",
    nome: "Felipe Bandeira",
    foto: "assets/molduras/Moldura_felipe_marca.png",
    emblema: "assets/lojas/Emblema_loja_nautas.svg",
    cor: { accent: "#16A34A", glow: "rgba(22,163,74,0.30)", bg: "rgba(22,163,74,0.08)" },
  },
  {
    cargo: "Eminente Prior",
    nome: "Felipe Bandeira",
    foto: "assets/molduras/Moldura_felipe_templario.webp",
    emblema: "assets/lojas/Emblema_loja_malta.svg",
    cor: { accent: "#CBD5E1", glow: "rgba(203,213,225,0.18)", bg: "rgba(203,213,225,0.05)" },
  },
  {
    cargo: "Sumo Sacerdote",
    nome: "Leonardo Monteiro",
    foto: "assets/molduras/Moldura_leonardo_ktp.png",
    emblema: "assets/lojas/Emblema_loja_ktp.svg",
    cor: { accent: "#D97706", glow: "rgba(217,119,6,0.30)", bg: "rgba(217,119,6,0.08)" },
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};


export default function Lideranca() {
  return (
    <section id="lideranca" className="relative py-20 sm:py-28 lg:py-40 bg-floresta-950 overflow-hidden">

      <img
        src="assets/fundo_verde.svg"
        aria-hidden="true"
        loading="lazy" decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.28 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(18,85,35,0.55) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(10,30,15,0.85) 0%, transparent 55%)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(230,191,82,0.3) 30%, rgba(230,191,82,0.3) 70%, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <SectionLabel>Liderança</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 mb-5 leading-tight">
            Os Presidentes<br />dos Corpos
          </h2>
          <p className="font-serif text-lg md:text-xl text-amber-50/60 italic max-w-xl mx-auto leading-relaxed">
            Período Administrativo de 2026
          </p>
          <OrnamentalDivider className="mt-10 max-w-xs mx-auto" />
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10 sm:gap-x-7 sm:gap-y-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {MEMBROS.map((m, i) => (
            <motion.div key={i} variants={cardVariants} className="group flex flex-col">

              {/* Área da foto — sem fundo, a moldura flutua sobre o bg da seção */}
              <div
                className="relative w-full"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={m.foto}
                  alt={`Retrato de ${m.nome}`}
                  loading="lazy" decoding="async"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Informações do membro */}
              <div className="flex flex-col items-center text-center pt-4 gap-2 px-1">

                {/* Emblema da ordem */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(ellipse at 50% 30%, ${m.cor.bg}, rgba(4,12,8,0.98))`,
                    border: `1px solid ${m.cor.accent}55`,
                    boxShadow: `0 0 14px ${m.cor.glow}, 0 0 0 2px rgba(4,12,8,0.9)`,
                  }}
                >
                  <img
                    src={m.emblema}
                    alt={`Emblema — ${m.cargo}`}
                    loading="lazy" decoding="async"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.9))" }}
                    onError={e => { e.currentTarget.parentElement.style.display = 'none'; }}
                  />
                </div>

                {/* Linha ornamental */}
                <div className="flex items-center gap-2 w-full justify-center">
                  <div
                    className="h-px flex-1 max-w-[36px]"
                    style={{ background: `linear-gradient(to right, transparent, ${m.cor.accent}35)` }}
                  />
                  <div className="w-1 h-1 rotate-45" style={{ backgroundColor: `${m.cor.accent}50` }} />
                  <div
                    className="h-px flex-1 max-w-[36px]"
                    style={{ background: `linear-gradient(to left, transparent, ${m.cor.accent}35)` }}
                  />
                </div>

                {/* Cargo */}
                <p
                  className="font-display text-[9px] sm:text-[10px] tracking-[0.28em] uppercase leading-tight"
                  style={{ color: m.cor.accent }}
                >
                  {m.cargo}
                </p>

                {/* Nome */}
                <p className="font-serif italic text-amber-50/80 text-sm sm:text-[15px] leading-snug group-hover:text-ouro-200 transition-colors duration-500">
                  {m.nome}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rodapé */}
        <motion.div
          className="text-center mt-20 sm:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          <OrnamentalDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-display text-[9px] tracking-[0.5em] uppercase text-amber-50/20">
            Ordens de Aperfeiçoamento Maçônico no Cariri
          </p>
        </motion.div>

      </div>
    </section>
  );
}
