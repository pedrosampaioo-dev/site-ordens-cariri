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
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-36 bg-azul-950 overflow-hidden">

      {/* Textura */}
      <img src="assets/fundo_azul.svg" aria-hidden="true"
        loading="lazy" decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.30 }} />

      {/* Gradiente radial */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 10% 50%, rgba(22,52,165,0.55) 0%, transparent 55%), radial-gradient(ellipse at 90% 10%, rgba(16,38,120,0.40) 0%, transparent 50%)",
      }} />
      

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Cabeçalho */}
        <motion.div className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel tone="prata" align="left">Nossa História</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-prata-300 mt-6 leading-tight">
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
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-prata-500/70 z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-prata-500/70 z-10 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-7 h-7 border-t border-r border-prata-400/30 z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-7 h-7 border-b border-l border-prata-400/30 z-10 pointer-events-none" />

            {/* Glow de moldura */}
            <div className="absolute inset-0 z-10 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 50px rgba(230,191,82,0.05), 0 30px 80px -20px rgba(0,0,0,0.85)' }} />

            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
              <motion.img
                src="assets/foto_jd.jpg"
                alt="História das Ordens de Aperfeiçoamento do Cariri"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Sobreposições */}
              

              
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
              className="font-serif italic text-xl md:text-2xl text-amber-50/70 leading-snug">
              A criação das Ordens de Aperfeiçoamento Maçônico no Cariri
            </motion.p>

            <motion.p variants={fadeUp}
              className="first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-prata-300 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
              As Ordens de Aperfeiçoamento no Cariri nasceram do entusiasmo, da dedicação e da visão fraterna de irmãos comprometidos com o crescimento da Maçonaria na região. Foi por iniciativa e incentivo dos irmãos que integram as Lojas simbólicas da região do Cariri cearense que se acendeu a chama que daria origem a este importante capítulo da história maçônica.
            </motion.p>

            <motion.p variants={fadeUp}>
              Movidos pelo desejo de aprofundar os ensinamentos maçônicos e fortalecer os laços fraternos, o Grupo de irmãos da Loja Maçônica Jacques de Molay n.° 4810 com o apoio do Eminente Grão-Mestre Leonardo Monteiro do GOBCE, empenharam-se na construção de uma estrutura que pudesse levar as Ordens de Aperfeiçoamento a um número cada vez maior de maçons na região do Cariri e adjacências.
            </motion.p>

            <motion.p variants={fadeUp}>
              A criação das Ordens de Aperfeiçoamento no Cariri representa, portanto, um marco histórico para a região, fruto do esforço coletivo e da perseverança de irmãos de diversas Lojas que acreditaram no poder transformador da Maçonaria. Que este legado continue a inspirar as gerações futuras, expandindo cada vez mais a luz maçônica.
            </motion.p>

            

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
