import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Navbar, Footer } from './components/shared';
import Hero from './sections/Hero';
import NossasOrganizacoes from './sections/NossasOrganizacoes';
import SobreOrdens from './sections/SobreOrdens';
import Lideranca from './sections/Lideranca';
import ConhecerOrdens from './sections/ConhecerOrdens';
import Reunioes from './sections/Reunioes';
import Cronograma from './sections/Cronograma';
import Contato from './sections/Contato';
import PageMarca from './pages/Marca';
import PageNautas from './pages/Nautas';
import PageSAR from './pages/SAR';
import PageMalta from './pages/Malta';
import PageTemplarios from './pages/Templarios';
import PageKTP from './pages/KTP';

const PAGE_TITLES = {
  home: "Ordens de Aperfeiçoamento no Cariri",
  marca: "Mestres Maçons da Marca · Ordens Cariri",
  nautas: "Nautas da Arca Real · Ordens Cariri",
  sar: "Sagrado Arco Real · Ordens Cariri",
  malta: "Cavaleiros de Malta · Ordens Cariri",
  templarios: "Cavaleiros Templários · Ordens Cariri",
  ktp: "Sacerdotes Templários (KTP) · Ordens Cariri",
};

export default function App() {
  const [currentPage, setCurrentPageState] = useState("home");
  const reduceMotion = useReducedMotion();
  // Âncora a rolar depois que a próxima página montar (ex.: "contato")
  const pendingScrollRef = useRef(null);

  // navigate(page, scrollTarget?) — troca de página e agenda o destino de rolagem
  const navigate = (page, scrollTarget = null) => {
    pendingScrollRef.current = scrollTarget;
    setCurrentPageState(page);
  };

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  // Ao montar a nova página: rola ao topo, ou à âncora pendente (ex.: Petição)
  useLayoutEffect(() => {
    const target = pendingScrollRef.current;
    pendingScrollRef.current = null;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  const goContato = () => {
    if (currentPage !== "home") {
      navigate("home", "contato");
    } else {
      const el = document.getElementById("contato");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "marca":      return <PageMarca setCurrentPage={navigate} />;
      case "nautas":     return <PageNautas setCurrentPage={navigate} />;
      case "sar":        return <PageSAR setCurrentPage={navigate} />;
      case "malta":      return <PageMalta setCurrentPage={navigate} />;
      case "templarios": return <PageTemplarios setCurrentPage={navigate} />;
      case "ktp":        return <PageKTP setCurrentPage={navigate} />;
      default:
        return (
          <div className="bg-carmesim-950 text-amber-50 min-h-screen overflow-hidden">
            <Navbar
              variant="home"
              onHome={() => navigate("home")}
              onContato={goContato}
            />
            <Hero />
            <SobreOrdens />
            <NossasOrganizacoes />
            <Lideranca />
            <ConhecerOrdens onSelect={(id) => navigate(id)} />
            <Reunioes />
            <Cronograma />
            <Contato />
            <Footer />
          </div>
        );
    }
  };

  // Transição "como se subisse ao topo de uma nova página":
  // a página que sai recua para cima e some; a que entra emerge de baixo e assenta no topo.
  const variants = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.25 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, y: 64 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, y: -32, transition: { duration: 0.34, ease: [0.4, 0, 1, 1] } },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={currentPage}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}
