import { motion } from 'framer-motion';
import { SectionLabel } from '../components/shared';

export const ORDENS_DATA = [
  {
    id: "marca",
    nome: "Ordem de Mestres Maçons da Marca",
    nomeAbreviado: "Mestres da Marca",
    classificacao: "Grau Capitular · Rito de York",
    descricao:
      "A marca individual do obreiro sobre a pedra — assinatura do trabalho honesto e do compromisso inabalável com tudo que se constrói.",
    emblema: "assets/insignias_ordens/Ordem_marca.svg",
    fundo: "assets/fundo_azul.svg",
    cor: { border: "#1E40AF", text: "#93C5FD" },
  },
  {
    id: "nautas",
    nome: "Ordem dos Nautas da Arca Real",
    nomeAbreviado: "Nautas da Arca Real",
    classificacao: "Ordem Anexa · Rito de York",
    descricao:
      "Marinheiros da Arca Real — alegoria do dilúvio, do refúgio e da aliança renovada entre o Criador e o homem sob o arco do céu.",
    emblema: "assets/insignias_ordens/Ordem_nauta.svg",
    fundo: "assets/fundo_verde.svg",
    cor: { border: "#15803D", text: "#86EFAC" },
  },
  {
    id: "sar",
    nome: "Ordem do Sagrado Arco Real de Jerusalém",
    nomeAbreviado: "Sagrado Arco Real",
    classificacao: "Grau Capitular · Coroamento da Mestria",
    descricao:
      "Onde a Palavra Perdida é restaurada e a pedra angular se revela. O culminar luminoso do Rito e a chave de toda a abóbada simbólica.",
    emblema: "assets/insignias_ordens/Ordem_sar.svg",
    fundo: "assets/fundo_vermelho.svg",
    cor: { border: "#991B1B", text: "#FCA5A5" },
  },
  {
    id: "malta",
    nome: "Ordem dos Cavaleiros de Malta",
    nomeAbreviado: "Cavaleiros de Malta",
    classificacao: "Ordem Cavaleiresca · Rito de York",
    descricao:
      "Herdeiros dos Hospitalários de São João — a cruz de oito pontas e a hospitalidade como virtude iniciática em defesa dos peregrinos.",
    emblema: "assets/insignias_ordens/Ordem_malta.svg",
    fundo: "assets/fundo_preto.svg",
    cor: { border: "#9CA3AF", text: "#E5E7EB" },
  },
  {
    id: "templarios",
    nome: "Ordem dos Cavaleiros Templários",
    nomeAbreviado: "Cavaleiros Templários",
    classificacao: "Ordem Cavaleiresca · Coroação do Rito de York",
    descricao:
      "Herdeiros simbólicos do Templo de Salomão — fé, espada e a cruz vermelha em defesa da virtude cristã e da palavra empenhada.",
    emblema: "assets/insignias_ordens/Ordem_templarios.svg",
    fundo: "assets/fundo_vermelho.svg",
    cor: { border: "#DC2626", text: "#FCA5A5" },
  },
  {
    id: "ktp",
    nome: "Ordem dos Sacerdotes Cavaleiros Templários do Sagrado Arco Real",
    nomeAbreviado: "Sacerdotes Templários",
    classificacao: "Ordem Sacerdotal · Cume do Rito de York",
    descricao:
      "A síntese do Arco e do Templo — sacerdote e cavaleiro num só irmão, guardião dos mais elevados mistérios do Rito de York.",
    emblema: "assets/insignias_ordens/Ordem_ktp.svg",
    fundo: "assets/fundo_vermelho.svg",
    cor: { border: "#92400E", text: "#FCD34D" },
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.85, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ConhecerOrdens({ onSelect }) {
  return (
    <section id="conhecer" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.30 }} />

      {/* Gradiente radial topo */}
      <div className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(155,22,28,0.60) 0%, transparent 60%)" }} />

      {/* Linha decorativa topo */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(230,191,82,0.2) 30%, rgba(230,191,82,0.2) 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>As Ordens</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 mb-6 sm:mb-8 leading-tight">
            Seis caminhos,
            
          </h2>
          <p className="font-serif text-lg md:text-xl text-amber-50/70 italic max-w-3xl mx-auto leading-relaxed">
            Cada Ordem é um pórtico, Atravessá-lo é descobrir
            uma nova jornada de conhecimentos
          </p>
        </motion.div>

        {/* Grid de ordens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORDENS_DATA.map((o, i) => (
            <motion.article
              key={o.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative border transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                backgroundImage: `url('${o.fundo}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                borderColor: o.cor.border + "55",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = o.cor.border + "cc";
                e.currentTarget.style.boxShadow = `0 24px 64px -16px ${o.cor.border}60`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = o.cor.border + "55";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Overlay escuro */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(170deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.65) 100%)" }}
              />

              {/* Emblema marca d'água central */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <img
                  src={o.emblema}
                  alt=""
                  aria-hidden="true"
                  className="w-64 h-64 object-contain opacity-[0.09] group-hover:opacity-[0.18] transition-opacity duration-700"
                  style={{ filter: "brightness(3) saturate(0)" }}
                  onError={e => { e.target.style.display = "none"; }}
                />
              </div>

              {/* Cantos ornamentais */}
              <div
                className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
                style={{ borderTop: `1px solid ${o.cor.border}55`, borderRight: `1px solid ${o.cor.border}55` }}
              />
              <div
                className="absolute bottom-0 left-0 w-14 h-14 pointer-events-none"
                style={{ borderBottom: `1px solid ${o.cor.border}55`, borderLeft: `1px solid ${o.cor.border}55` }}
              />

              {/* Número de ordem — marca no canto */}
              <div
                className="absolute top-4 left-5 font-display text-[9px] tracking-[0.4em] pointer-events-none"
                style={{ color: o.cor.text, opacity: 0.3 }}
              >
                0{i + 1}
              </div>

              <div className="relative z-10 p-8 lg:p-9 flex flex-col h-full">

                {/* Emblema principal */}
                <div className="flex justify-center mb-7">
                  <img
                    src={o.emblema}
                    alt={`Emblema ${o.nomeAbreviado}`}
                    className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                    onError={e => { e.target.style.display = "none"; }}
                  />
                </div>

                <h3
                  className="font-display text-lg leading-tight mb-2"
                  style={{ color: o.cor.text }}
                >
                  {o.nome}
                </h3>

                <p className="font-display text-[9px] tracking-[0.3em] uppercase text-amber-50/40 mb-5">
                  {o.classificacao}
                </p>

                <p className="font-body text-amber-50/75 leading-relaxed flex-1 mb-8 text-base">
                  {o.descricao}
                </p>

                <button
                  onClick={() => onSelect(o.id)}
                  className="inline-flex items-center gap-3 self-start font-display text-[10px] tracking-[0.45em] uppercase border-b pb-2 transition-all duration-300 group/btn"
                  style={{ color: o.cor.text, borderColor: o.cor.border + "70" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = o.cor.border; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = o.cor.border + "70"; }}
                >
                  Conhecer Mais
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
