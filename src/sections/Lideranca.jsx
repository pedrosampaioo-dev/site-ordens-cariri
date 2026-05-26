import { motion } from 'framer-motion';
import { SectionLabel } from '../components/shared';

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MEMBROS = [
  {
    cargo: "Ilustríssimo Governador",
    nome: "N∴ Fulano de Tal",
    emblema: "assets/lojas/Emblema_loja_templarios.svg",
    cor: { border: "#DC2626", glow: "rgba(220,38,38,0.3)", bg: "rgba(220,38,38,0.08)" },
  },
  {
    cargo: "Venerável Mestre",
    nome: "N∴ Cicrano de Sousa",
    emblema: "assets/lojas/Emblema_loja_sar.svg",
    cor: { border: "#991B1B", glow: "rgba(153,27,27,0.3)", bg: "rgba(153,27,27,0.08)" },
  },
  {
    cargo: "Primeiro Vigilante",
    nome: "N∴ Beltrano Araújo",
    emblema: "assets/lojas/Emblema_loja_marca.svg",
    cor: { border: "#1E40AF", glow: "rgba(30,64,175,0.3)", bg: "rgba(30,64,175,0.08)" },
  },
  {
    cargo: "Secretário",
    nome: "N∴ João das Pedras",
    emblema: "assets/lojas/Emblema_loja_nautas.svg",
    cor: { border: "#15803D", glow: "rgba(21,128,61,0.3)", bg: "rgba(21,128,61,0.08)" },
  },
  {
    cargo: "Tesoureiro",
    nome: "N∴ Pedro da Luz",
    emblema: "assets/lojas/Emblema_loja_malta.svg",
    cor: { border: "#9CA3AF", glow: "rgba(156,163,175,0.25)", bg: "rgba(156,163,175,0.06)" },
  },
  {
    cargo: "Orador",
    nome: "N∴ Marcos do Vale",
    emblema: "assets/lojas/Emblema_loja_ktp.svg",
    cor: { border: "#92400E", glow: "rgba(146,64,14,0.3)", bg: "rgba(146,64,14,0.08)" },
  },
];

export default function Lideranca() {
  return (
    <section id="lideranca" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.18 }} />

      {/* Gradiente radial topo */}
      <div className="absolute inset-0 opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(122,18,22,0.55) 0%, transparent 55%)" }} />

      {/* Linha decorativa topo */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(230,191,82,0.25) 30%, rgba(230,191,82,0.25) 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Liderança</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 mb-6 leading-tight">
            Os obreiros
            <br />que dirigem
          </h2>
          <p className="font-serif text-lg md:text-xl text-amber-50/65 italic max-w-2xl mx-auto leading-relaxed">
            Guiados pela tradição, servem ao Rito com a discrição e dedicação
            que o Templo exige de seus melhores construtores.
          </p>
        </motion.div>

        {/* Grid de membros */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-7">
          {MEMBROS.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="group flex flex-col items-center text-center"
            >
              {/* Avatar circular */}
              <div
                className="relative w-28 h-28 mb-5 overflow-hidden rounded-full border-2 transition-all duration-500"
                style={{
                  borderColor: m.cor.border + "55",
                  background: `radial-gradient(ellipse at 50% 30%, ${m.cor.bg}, rgba(10,2,3,0.95))`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = m.cor.border + "cc";
                  e.currentTarget.style.boxShadow = `0 0 28px ${m.cor.glow}, inset 0 0 20px ${m.cor.bg}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = m.cor.border + "55";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Figura silhueta */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none">
                  <circle cx="50" cy="36" r="18" fill="rgba(230,191,82,0.18)" />
                  <ellipse cx="50" cy="95" rx="34" ry="24" fill="rgba(230,191,82,0.12)" />
                </svg>

                {/* Emblema da ordem como marca d'água */}
                <img
                  src={m.emblema}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain p-4 opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ filter: 'brightness(2) saturate(0)' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />

                {/* Gradiente base */}
                <div className="absolute inset-0 bg-gradient-to-t from-carmesim-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Anel interno ornamental */}
                <div
                  className="absolute inset-2 rounded-full pointer-events-none"
                  style={{ border: `1px solid ${m.cor.border}25` }}
                />
              </div>

              {/* Cargo */}
              <div
                className="font-display text-[9px] tracking-[0.35em] uppercase mb-2 leading-tight"
                style={{ color: m.cor.border, opacity: 0.75 }}
              >
                {m.cargo}
              </div>

              {/* Nome */}
              <div className="font-serif italic text-amber-50/75 text-sm leading-snug">
                {m.nome}
              </div>

              {/* Linha ornamental */}
              <div
                className="w-6 h-px mt-3 transition-all duration-500 group-hover:w-10"
                style={{ backgroundColor: m.cor.border + "60" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <p className="font-display text-[9px] tracking-[0.5em] uppercase text-amber-50/25">
            Ordens de Aperfeiçoamento do Cariri · In Nomine Dei
          </p>
        </motion.div>
      </div>
    </section>
  );
}
