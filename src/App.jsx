import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/shared';
import Hero from './sections/Hero';
import SobreOrdens from './sections/SobreOrdens';
import NossasOrganizacoes from './sections/NossasOrganizacoes';
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

export default function App() {
  const [currentPage, setCurrentPageRaw] = useState("home");

  const setCurrentPage = (p) => {
    setCurrentPageRaw(p);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const titles = {
      home: "Ordens de Aperfeiçoamento do Cariri",
      marca: "Mestres Maçons da Marca · Ordens Cariri",
      nautas: "Nautas da Arca Real · Ordens Cariri",
      sar: "Sagrado Arco Real · Ordens Cariri",
      malta: "Cavaleiros de Malta · Ordens Cariri",
      templarios: "Cavaleiros Templários · Ordens Cariri",
      ktp: "Sacerdotes Templários (KTP) · Ordens Cariri",
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const goContato = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById("contato");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      const el = document.getElementById("contato");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (currentPage === "marca") return <PageMarca setCurrentPage={setCurrentPage} />;
  if (currentPage === "nautas") return <PageNautas setCurrentPage={setCurrentPage} />;
  if (currentPage === "sar") return <PageSAR setCurrentPage={setCurrentPage} />;
  if (currentPage === "malta") return <PageMalta setCurrentPage={setCurrentPage} />;
  if (currentPage === "templarios") return <PageTemplarios setCurrentPage={setCurrentPage} />;
  if (currentPage === "ktp") return <PageKTP setCurrentPage={setCurrentPage} />;

  return (
    <div className="bg-carmesim-950 text-amber-50 min-h-screen overflow-hidden">
      <Navbar
        variant="home"
        onHome={() => setCurrentPage("home")}
        onContato={goContato}
      />
      <Hero />
      <SobreOrdens />
      <NossasOrganizacoes />
      <Lideranca />
      <ConhecerOrdens onSelect={setCurrentPage} />
      <Reunioes />
      <Cronograma />
      <Contato />
      <Footer />
    </div>
  );
}
