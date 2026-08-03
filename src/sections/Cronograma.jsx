import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '../components/shared';

const CRONOGRAMA_DATA = [

  {
    mesId: "ago",
    nomeOrdem: "Sagrado Arco Real",
    cor: { border: "#991B1B", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_sar.svg",
    titulo: "Cerimônia de Exaltação",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "11",
    mes: "Ago",
    ano: "2026",
  },
  {
    mesId: "ago",
    nomeOrdem: "Nautas da Arca Real",
    cor: { border: "#15803D", text: "#86EFAC" },
    emblema: "assets/insignias_ordens/Ordem_nauta.svg",
    titulo: "Cerimônia de Elevação e Eleição da II Gestão",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "25",
    mes: "Ago",
    ano: "2026",
  },
  {
    mesId: "set",
    nomeOrdem: "Cavaleiros Templários",
    cor: { border: "#DC2626", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_templarios.svg",
    titulo: "Armadura de Novos Cavaleiros e Eleição da II Gestão",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Sábado",
    dia: "19",
    mes: "Set",
    ano: "2026",
  },
  {
    mesId: "out",
    nomeOrdem: "Cavaleiros de Malta",
    cor: { border: "#9CA3AF", text: "#E5E7EB" },
    emblema: "assets/insignias_ordens/Ordem_malta.svg",
    titulo: "Armadura de Novos Cavaleiros",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "13",
    mes: "Out",
    ano: "2026",
  },
  {
    mesId: "out",
    nomeOrdem: "Mestres da Marca",
    cor: { border: "#1E40AF", text: "#93C5FD" },
    emblema: "assets/insignias_ordens/Ordem_marca.svg",
    titulo: "Instalação da II Gestão Administrativa",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "27",
    mes: "Out",
    ano: "2026",
  },
  {
    mesId: "nov",
    nomeOrdem: "Nautas da Arca Real",
    cor: { border: "#15803D", text: "#86EFAC" },
    emblema: "assets/insignias_ordens/Ordem_nauta.svg",
    titulo: "Instalação da Nova Gestão",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "10",
    mes: "Nov",
    ano: "2026",
  },
  {
    mesId: "nov",
    nomeOrdem: "Sagrado Arco Real",
    cor: { border: "#991B1B", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_sar.svg",
    titulo: "Preleção e Apresentação de Trabalhos",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "24",
    mes: "Nov",
    ano: "2026",
  },
  {
    mesId: "dez",
    nomeOrdem: "Cavaleiros Templários",
    cor: { border: "#DC2626", text: "#FCA5A5" },
    emblema: "assets/insignias_ordens/Ordem_templarios.svg",
    titulo: "Instalação da Nova Gestão",
    local: "Juazeiro do Norte — CE",
    diaSemana: "Terça-feira",
    dia: "08",
    mes: "Dez",
    ano: "2026",
  },
];

const MESES = [
  { id: "ago", label: "Agosto",    ano: "2026" },
  { id: "set", label: "Setembro",  ano: "2026" },
  { id: "out", label: "Outubro",   ano: "2026" },
  { id: "nov", label: "Novembro",  ano: "2026" },
  { id: "dez", label: "Dezembro",  ano: "2026" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 8 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: Math.min(i, 4) * 0.045, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MES_IDS_POR_INDICE = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function getMesInicialId() {
  const hoje = new Date();
  const mesAtualId = MES_IDS_POR_INDICE[hoje.getMonth()];
  const anoAtual = hoje.getFullYear();

  const mesAtual = MESES.find(m => m.id === mesAtualId && Number(m.ano) === anoAtual);
  if (mesAtual) return mesAtual.id;

  const proximoDisponivel = MESES.find(m => {
    const ano = Number(m.ano);
    return ano > anoAtual || (ano === anoAtual && MES_IDS_POR_INDICE.indexOf(m.id) >= hoje.getMonth());
  });
  return (proximoDisponivel ?? MESES[MESES.length - 1])?.id ?? MESES[0]?.id;
}

export default function Cronograma() {
  const [activeMes, setActiveMes] = useState(getMesInicialId);
  const prefersReducedMotion = useReducedMotion();

  const eventos = CRONOGRAMA_DATA.filter(c => c.mesId === activeMes);

  return (
    <section id="cronograma" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        loading="lazy" decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.30 }} />

      <div className="absolute inset-0 opacity-45 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(155,22,28,0.55) 0%, transparent 55%)" }} />

      <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(230,191,82,0.15) 20%, rgba(230,191,82,0.15) 80%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel align="left">Cronograma</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 leading-tight">
            Próximas Reuniões
          </h2>
          <p className="font-serif italic text-amber-50/65 text-lg mt-4 max-w-xl">
            Fique atento às próximas atividades.
          </p>
        </motion.div>

        {/* Seletor de meses */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            role="tablist"
            aria-label="Filtrar por mês"
            className="flex gap-0.5 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {MESES.map((mes) => {
              const isActive = activeMes === mes.id;
              return (
                <button
                  key={mes.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveMes(mes.id)}
                  className="relative shrink-0 px-3 sm:px-5 py-3 focus:outline-none transition-colors duration-200"
                  style={{
                    color: isActive ? "#E6BF52" : "rgba(251,191,36,0.35)",
                    backgroundColor: isActive ? "rgba(230,191,82,0.07)" : "transparent",
                    borderBottom: isActive ? "2px solid #E6BF52" : "2px solid transparent",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(251,191,36,0.60)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = "rgba(251,191,36,0.35)";
                  }}
                >
                  <span className="font-display text-xs sm:text-base tracking-[0.1em] sm:tracking-[0.15em] uppercase whitespace-nowrap">
                    {mes.label}
                  </span>
                  <span className="hidden sm:inline font-display text-[9px] tracking-[0.2em] text-amber-50/30 ml-2">
                    {mes.ano}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="h-px" style={{ background: "rgba(230,191,82,0.10)" }} />
        </motion.div>

        {/* Grid de eventos */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeMes}
            layout={!prefersReducedMotion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {eventos.length === 0 ? (
              <div
                className="flex items-center justify-center py-24 border"
                style={{ borderColor: "rgba(230,191,82,0.08)", background: "rgba(13,2,3,0.35)" }}
              >
                <p className="font-display text-[10px] tracking-[0.35em] uppercase text-amber-50/25">
                  Nenhum evento programado para este mês
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {eventos.map((c, i) => (
                  <motion.article
                    key={`${activeMes}-${i}`}
                    custom={i}
                    variants={cardVariant}
                    initial={prefersReducedMotion ? "show" : "hidden"}
                    animate="show"
                    className="group relative flex items-stretch overflow-hidden border transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5"
                    style={{ borderColor: c.cor.border + "45", background: "rgba(13,2,3,0.55)" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = c.cor.border + "99";
                      e.currentTarget.style.boxShadow = `0 8px 32px -8px ${c.cor.border}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = c.cor.border + "45";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Barra colorida lateral esquerda */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:w-1"
                      style={{ backgroundColor: c.cor.border + "80" }}
                    />

                    {/* Coluna da data */}
                    <div
                      className="shrink-0 w-20 sm:w-24 flex flex-col items-center justify-center text-center px-2 py-4 self-stretch"
                      style={{ backgroundColor: c.cor.border + "20", borderRight: `1px solid ${c.cor.border}30` }}
                    >
                      <span className="font-display text-3xl sm:text-4xl leading-none" style={{ color: c.cor.text }}>
                        {c.dia}
                      </span>
                      <span
                        className="font-display text-[10px] tracking-[0.35em] uppercase mt-1"
                        style={{ color: c.cor.text, opacity: 0.7 }}
                      >
                        {c.mes}
                      </span>
                      <span className="font-display text-[9px] tracking-[0.2em] text-amber-50/40 mt-1">
                        {c.ano}
                      </span>
                    </div>

                    {/* Corpo do card */}
                    <div className="flex flex-1 items-center gap-4 px-5 py-4">
                      <img
                        src={c.emblema}
                        alt={c.nomeOrdem}
                        loading="lazy" decoding="async"
                        className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain opacity-65 group-hover:opacity-100 transition-opacity duration-300"
                        onError={e => { e.target.style.display = "none"; }}
                      />
                      <div>
                        <span
                          className="font-display text-[9px] tracking-[0.4em] uppercase block mb-1.5"
                          style={{ color: c.cor.text, opacity: 0.65 }}
                        >
                          {c.nomeOrdem}
                        </span>
                        <h3 className="font-display text-sm sm:text-base text-amber-50/90 leading-snug mb-1.5">
                          {c.titulo}
                        </h3>
                        <p className="font-body text-sm text-amber-50/50">
                          {c.local} · {c.diaSemana}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nota de rodapé */}
        <motion.p
          className="text-center font-display text-[9px] tracking-[0.4em] uppercase text-amber-50/25 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Datas Sujeitas a Alteração - Confirme com o Presidente de cada organização
        </motion.p>
      </div>
    </section>
  );
}
