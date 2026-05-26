import { useEffect } from 'react';
import { Navbar, Emblema, OrnamentalDivider, SectionLabel, Footer, Icon } from '../components/shared';

export default function OrderPage({ data, setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  const goContato = () => {
    setCurrentPage("home");
    setTimeout(() => {
      const el = document.getElementById("contato");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <div className="bg-carmesim-950 text-amber-50 min-h-screen">
      <Navbar variant="order" onHome={() => setCurrentPage("home")} onContato={goContato} />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, #57121a 0%, #2b0709 45%, #1a0507 85%)",
          }}
        />
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id={`gh-${data.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(230,191,82,0.5)" />
              <stop offset="100%" stopColor="rgba(230,191,82,0)" />
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
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(230,191,82,0.3)" strokeWidth="0.6" />
            );
          })}
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <button
            onClick={() => setCurrentPage("home")}
            className="inline-flex items-center gap-2 text-ouro-300 hover:text-ouro-400 font-display text-[10px] tracking-[0.4em] uppercase mb-12 transition-colors"
          >
            <span>←</span> Voltar à página inicial
          </button>

          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full opacity-25 blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(230,191,82,0.6) 0%, transparent 70%)" }}
              />
              <img
                src={data.emblema}
                alt={`Emblema da ${data.titulo}`}
                className="relative w-44 h-44 object-contain drop-shadow-[0_0_40px_rgba(230,191,82,0.35)]"
                onError={e => { e.target.style.opacity = "0.3"; }}
              />
            </div>
          </div>

          <div className="font-display text-[10px] tracking-[0.5em] uppercase text-ouro-300/80 mb-4">
            Ordens de Aperfeiçoamento do Cariri
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-ouro-300 via-ouro-400 to-ouro-600 leading-[1.05] mb-6 drop-shadow-[0_2px_24px_rgba(230,191,82,0.2)]">
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
      </section>

      {/* O que é */}
      <section className="relative py-24 lg:py-32 bg-carmesim-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <SectionLabel>O que é</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ouro-300 mt-6 mb-10 text-center leading-tight">
            {data.queE.titulo}
          </h2>
          <div className="space-y-6 font-body text-lg md:text-xl text-amber-50/80 leading-relaxed">
            {data.queE.paragrafos.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-ouro-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Simbolismo */}
      <section className="relative py-24 lg:py-32 bg-carmesim-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(230,191,82,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Simbolismo</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ouro-300 mt-6 leading-tight">
              Símbolos e Ensinamentos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.simbolismo.map((s, i) => (
              <div
                key={i}
                className="relative bg-carmesim-950 border border-ouro-500/20 hover:border-ouro-400/60 transition-all p-8 lg:p-9 group"
              >
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-ouro-500/40 group-hover:border-ouro-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-ouro-500/40 group-hover:border-ouro-400 transition-colors" />

                <div className="w-14 h-14 rounded-full border border-ouro-500/60 flex items-center justify-center mb-6 group-hover:border-ouro-400 transition-colors">
                  <s.Icon className="w-7 h-7 text-ouro-300 group-hover:text-ouro-400 transition-colors" />
                </div>
                <div className="font-display text-[10px] tracking-[0.4em] uppercase text-ouro-500/80 mb-3">
                  {String(i + 1).padStart(2, "0")} · {s.rotulo}
                </div>
                <h3 className="font-display text-2xl text-ouro-300 mb-4 leading-tight">
                  {s.titulo}
                </h3>
                <p className="font-body text-amber-50/70 leading-relaxed">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="relative py-24 lg:py-32 bg-carmesim-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Requisitos</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ouro-300 mt-6 leading-tight">
              Para bater à porta
            </h2>
            <p className="font-serif italic text-amber-50/60 mt-4 max-w-2xl mx-auto">
              "Não basta querer entrar — é preciso estar pronto a permanecer."
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {data.requisitos.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-b border-ouro-500/15 pb-5"
              >
                <span className="shrink-0 w-9 h-9 rounded-full border border-ouro-400/70 flex items-center justify-center text-ouro-300 bg-ouro-500/5">
                  <Icon.Check className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-display text-[10px] tracking-[0.4em] uppercase text-ouro-500/70 mb-1">
                    Requisito {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-body text-lg text-amber-50/85 leading-relaxed">
                    {r}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Curiosidades Históricas */}
      <section className="relative py-24 lg:py-32 bg-carmesim-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 100%, rgba(122,18,22,0.6) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Memória</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ouro-300 mt-6 leading-tight">
              Curiosidades Históricas
            </h2>
          </div>

          <div className="space-y-12">
            {data.historia.map((h, i) =>
              h.tipo === "citacao" ? (
                <figure key={i} className="relative my-8 px-6 md:px-10">
                  <Icon.Quote className="w-12 h-12 text-ouro-400/40 mb-4" />
                  <blockquote className="font-serif italic text-2xl md:text-3xl text-ouro-300 leading-snug border-l-2 border-ouro-400 pl-6 md:pl-8">
                    "{h.texto}"
                  </blockquote>
                  {h.autor && (
                    <figcaption className="mt-4 font-display text-[10px] tracking-[0.4em] uppercase text-ouro-500/80 pl-6 md:pl-8">
                      — {h.autor}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div key={i} className="flex gap-6 md:gap-8">
                  <div className="shrink-0 hidden md:block">
                    <div className="font-display text-5xl text-ouro-400/30 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1">
                    {h.titulo && (
                      <h3 className="font-display text-xl text-ouro-300 mb-3 tracking-wide">
                        {h.titulo}
                      </h3>
                    )}
                    <p className="font-body text-lg text-amber-50/80 leading-relaxed">
                      {h.texto}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-carmesim-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(230,191,82,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="relative bg-gradient-to-b from-carmesim-900 via-carmesim-950 to-carmesim-900 border border-ouro-400/60 p-10 md:p-16 text-center">
            {[
              "top-0 left-0",
              "top-0 right-0 rotate-90",
              "bottom-0 right-0 rotate-180",
              "bottom-0 left-0 -rotate-90",
            ].map((pos, i) => (
              <svg
                key={i}
                viewBox="0 0 40 40"
                className={`absolute w-12 h-12 text-ouro-400 ${pos}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M0 18V0h18M0 10h8M10 0v8" />
              </svg>
            ))}

            <Emblema size={72} ring={false} glow={false} className="mb-6" />
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ouro-300 mt-6 mb-6 leading-tight">
              Tem interesse nesta Ordem?
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-amber-50/75 max-w-2xl mx-auto mb-10">
              Escreva-nos. A primeira pedra de toda jornada simbólica é a
              palavra honesta.
            </p>
            <button
              onClick={goContato}
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-b from-ouro-300 via-ouro-400 to-ouro-600 text-carmesim-950 font-display text-[11px] tracking-[0.45em] uppercase hover:from-ouro-400 hover:to-ouro-500 transition-all shadow-[0_8px_30px_-10px_rgba(230,191,82,0.6)]"
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
