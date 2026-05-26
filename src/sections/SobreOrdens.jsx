import { motion } from 'framer-motion';
import { OrnamentalDivider, SectionLabel } from '../components/shared';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function SobreOrdens() {
  return (
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-36 bg-carmesim-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_vermelho.svg" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.18 }} />

      {/* Gradiente radial */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 10% 50%, rgba(122,18,22,0.6) 0%, transparent 55%), radial-gradient(ellipse at 90% 10%, rgba(87,13,17,0.4) 0%, transparent 50%)",
      }} />

      {/* Emblema marca d'água — canto inferior direito */}
      <div className="absolute -right-16 -bottom-16 w-[480px] h-[480px] pointer-events-none select-none">
        <img src="assets/lojas/Ordens_cariri.svg" aria-hidden="true"
          className="w-full h-full object-contain"
          style={{ opacity: 0.04, filter: 'brightness(2) saturate(0)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Nossa História</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ouro-300 mt-6 leading-tight">
            De onde viemos,<br />por que existimos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Coluna da foto */}
          <motion.div className="relative"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Cantos ornamentais */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-ouro-500/70 z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-ouro-500/70 z-10 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-7 h-7 border-t border-r border-ouro-400/30 z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-7 h-7 border-b border-l border-ouro-400/30 z-10 pointer-events-none" />

            {/* Glow de moldura */}
            <div className="absolute inset-0 z-10 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 50px rgba(230,191,82,0.05), 0 30px 80px -20px rgba(0,0,0,0.85)' }} />

            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
              <motion.img
                src="assets/foto_jd.png"
                alt="História das Ordens de Aperfeiçoamento do Cariri"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Sobreposições */}
              <div className="absolute inset-0 bg-gradient-to-t from-carmesim-950/75 via-carmesim-950/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-carmesim-950/25 pointer-events-none" />

              {/* Carimbo Anno Lucis */}
              <div className="absolute bottom-5 right-5 flex flex-col items-end gap-0.5 pointer-events-none">
                <span className="font-display text-[7px] tracking-[0.55em] uppercase text-ouro-300/45">Anno Lucis</span>
                <span className="font-display text-[9px] tracking-[0.35em] text-ouro-400/55">MMXXVI</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna de texto */}
          <motion.div
            className="flex flex-col justify-center space-y-7 font-body text-lg text-amber-50/80 leading-relaxed"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp}
              className="first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-ouro-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
              A Criação das Ordens de Aperfeiçoamento Maçônico no Cariri
            </motion.p>

            <motion.p variants={fadeUp}>
              As Ordens de Aperfeiçoamento no Cariri nasceram do entusiasmo, da dedicação e da visão fraterna de irmãos comprometidos com o crescimento da Maçonaria na região. Foi por iniciativa e incentivo dos irmãos que integram as lojas simbólicas na região do cariri cearense que se acendeu a chama que daria origem a este importante capítulo da história maçônica do Cariri.
            </motion.p>

            <motion.p variants={fadeUp}>
              Movidos pelo desejo de aprofundar os ensinamentos maçônicos e fortalecer os laços fraternos, um pequeno grupo de irmãos da Loja Maçônica Jacques de Molay n.º 4810 empenharam-se na construção de uma estrutura que pudesse levar as Ordens de Aperfeiçoamento a um número cada vez maior de maçons na região do Cariri e adjacências.
            </motion.p>

            <motion.p variants={fadeUp}>
              A criação das Ordens de Aperfeiçoamento no Cariri representa, portanto, um marco histórico para a região, fruto do esforço coletivo e da perseverança de irmãos de diversas Lojas que acreditaram no poder transformador da Maçonaria. Que este legado continue a inspirar as gerações futuras, expandindo cada vez mais a luz maçônica.
            </motion.p>

            <motion.div variants={fadeUp}>
              <OrnamentalDivider className="max-w-xs pt-2" />
            </motion.div>

            <motion.p variants={fadeUp} className="font-serif italic text-amber-50/55 text-base">
              "Audi, vide, tace — escuta, observa, silencia."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
