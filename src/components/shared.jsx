import { useEffect, useState } from 'react';

export const EMBLEMA_SRC = "assets/lojas/Ordens_cariri.png";

/* --- Emblema --- */
export function Emblema({ size = 96, ring = true, glow = true, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}>
      {ring && (
        <div className="absolute inset-0 rounded-full border border-ouro-400/50" />
      )}
      {glow && (
        <div className="absolute inset-[6%] rounded-full"
          style={{ boxShadow: "0 0 40px 6px rgba(230,191,82,0.18)" }} />
      )}
      <img
        src={EMBLEMA_SRC}
        alt="Emblema das Ordens de Aperfeiçoamento do Cariri"
        className="relative z-10 object-contain"
        style={{ width: "88%", height: "88%" }} />
    </div>
  );
}

/* --- OrnamentalDivider --- */
export function OrnamentalDivider({ className = "", label = null }) {
  return (
    <div className={`flex items-center justify-center gap-4 w-full opacity-40 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ouro-400 to-ouro-400" />
      <span className="relative inline-block w-3 h-3 rotate-45 border border-ouro-400">
        <span className="absolute inset-[3px] bg-ouro-400/70" />
      </span>
      {label &&
        <span className="font-display tracking-[0.4em] text-[10px] uppercase text-ouro-300">
          {label}
        </span>
      }
      <span className="relative inline-block w-3 h-3 rotate-45 border border-ouro-400">
        <span className="absolute inset-[3px] bg-ouro-400/70" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-ouro-400 to-ouro-400" />
    </div>
  );
}

/* --- SectionLabel ---
   Cor padrão: Ouro Velho (a assinatura que une todas as seções).
   `tone="prata"` acompanha as seções de tinta prata (Nossa História, Reuniões).
   `align="left"` segue cabeçalhos alinhados à esquerda. */
export function SectionLabel({ children, tone = "ouro", align = "center" }) {
  const color = tone === "prata" ? "text-prata-300/85" : "text-ouro-300/90";
  const justify = align === "left" ? "justify-start" : "justify-center";
  return (
    <div className={`flex items-center ${justify} gap-3 ${color} font-display tracking-[0.45em] text-xs uppercase`}>
      <span aria-hidden>✦</span>
      <span>{children}</span>
      <span aria-hidden>✦</span>
    </div>
  );
}

/* --- Navbar --- */
export function Navbar({ onHome, onContato, variant = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 60) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = variant === "home" ? [
    { label: "Nossa História", href: "#sobre" },
    { label: "Organizações",    href: "#organizacoes" },
    { label: "Liderança",      href: "#lideranca" },
    { label: "As Ordens",      href: "#conhecer" },
    { label: "Contato",        href: "#contato" },
  ] : [];

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-carmesim-950/95 backdrop-blur-md border-b border-ouro-500/20"
        : "bg-gradient-to-b from-carmesim-950 via-carmesim-950/70 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3 flex items-center justify-between">
        <button onClick={onHome} className="flex items-center gap-3 group shrink-0" aria-label="Página inicial">
          <Emblema size={40} ring={false} glow={false} />
          <span className="hidden sm:flex flex-col leading-tight text-left">
            <span className="font-display text-[11px] tracking-[0.35em] text-ouro-300 uppercase">Ordens</span>
            <span className="font-serif italic text-amber-50/70 text-xs">Cariri</span>
          </span>
        </button>

        {variant === "home" ? (
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className="relative font-display text-[10px] tracking-[0.3em] uppercase text-amber-50/80 hover:text-ouro-300 transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto after:h-px after:w-0 after:bg-ouro-400 hover:after:w-full after:transition-all after:duration-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <button onClick={onHome}
            className="font-display text-[11px] tracking-[0.35em] uppercase text-ouro-300 hover:text-ouro-400 transition-colors">
            ← Voltar
          </button>
        )}

        <div className="flex items-center gap-3">
          <button onClick={onContato}
            className="hidden md:inline-flex items-center gap-2 border border-ouro-500/50 hover:border-ouro-400 hover:bg-ouro-500/10 text-ouro-300 font-display text-[10px] tracking-[0.35em] uppercase px-4 py-2 transition-all">
            Petição <span>→</span>
          </button>
          {variant === "home" && (
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-ouro-300"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
              <span className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {variant === "home" && (
        <div className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-carmesim-950/98 backdrop-blur-md border-t border-ouro-500/15`}>
          <ul className="flex flex-col px-5 pt-5 pb-3 gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={handleMobileLink}
                  className="block font-display text-[11px] tracking-[0.4em] uppercase text-amber-50/80 hover:text-ouro-300 py-3 border-b border-ouro-500/10 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 pt-3">
            <button onClick={() => { onContato(); handleMobileLink(); }}
              className="w-full flex items-center justify-center gap-2 border border-ouro-500/50 text-ouro-300 font-display text-[10px] tracking-[0.4em] uppercase py-3 hover:bg-ouro-500/10 transition-all">
              Petição →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

const LODGE_EMBLEMS = [
  { src: "assets/lojas/Emblema_loja_marca.svg",      label: "Marca" },
  { src: "assets/lojas/Emblema_loja_nautas.svg",     label: "Nautas" },
  { src: "assets/lojas/Emblema_loja_sar.svg",        label: "SAR" },
  { src: "assets/lojas/Emblema_loja_malta.svg",      label: "Malta" },
  { src: "assets/lojas/Emblema_loja_templarios.svg", label: "Templários" },
  { src: "assets/lojas/Emblema_loja_ktp.svg",        label: "KTP" },
];

/* --- Footer --- */
export function Footer() {
  return (
    <footer className="relative border-t border-ouro-500/15 bg-carmesim-950 overflow-hidden">
      {/* Textura de fundo */}
      <img src="assets/fundo_preto.svg" aria-hidden="true"
        loading="lazy" decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35 }} />

      {/* Gradiente radial central */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(122,18,22,0.25) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col items-center gap-8 text-center">

        {/* Emblema principal */}
        <Emblema size={72} ring={false} glow={false} />

        <OrnamentalDivider className="max-w-xs" />

        {/* Linha de emblemas das ordens */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
          {LODGE_EMBLEMS.map((e) => (
            <img
              key={e.label}
              src={e.src}
              alt={e.label}
              title={e.label}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-30 hover:opacity-70 transition-opacity duration-300"
              style={{ filter: "brightness(2) saturate(0)" }}
              onError={ev => { ev.target.style.display = "none"; }}
            />
          ))}
        </div>

        <OrnamentalDivider className="max-w-xs" />

        <p className="font-serif italic text-amber-50/50 max-w-xl">
          "Audi, vide, tace — escuta, observa, silencia."
        </p>

        <div className="font-display text-[10px] tracking-[0.4em] uppercase text-ouro-400/70">
          Ordens de Aperfeiçoamento do Cariri
        </div>

        <p className="text-amber-50/30 text-xs font-body max-w-md leading-relaxed">
          Juazeiro do Norte · Crato · Vale do Cariri — Ceará, Brasil.<br />
          Anno Lucis MMXXVI · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* --- Icon set --- */
export const Icon = {
  Square:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 4h12v4M3 4v16h4" /><path d="M9 12h6M15 8v8" /></svg>,
  Compass: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="6" r="1.6" /><path d="M12 7.5v3l-5 11M12 10.5l5 11" /><path d="M9 18h6" /></svg>,
  Cross:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3v18M5 9h14" /></svg>,
  Hands:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 13l3-6 3 2 3-2 3 2 3-2 3 6" /><path d="M3 13c0 5 4 8 9 8s9-3 9-8" /></svg>,
  Ark:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M2 16c2-1 4-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0" /><path d="M4 13l2-5h12l2 5" /><path d="M12 3v5" /></svg>,
  Sword:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M14 3l7 7-3 1-1 3-7-7z" /><path d="M10 7L3 21l4-1 1-4 6-6" /></svg>,
  Arch:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 21V11a9 9 0 0118 0v10" /><path d="M3 21h18M12 11v10" /><circle cx="12" cy="11" r="1.4" /></svg>,
  Key:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="8" cy="14" r="4" /><path d="M11 13l9-9M16 8l3 3" /></svg>,
  Crown:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 8l4 7 5-9 5 9 4-7v11H3z" /><path d="M3 19h18" /></svg>,
  Star:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5 9.5 9z" /></svg>,
  Check:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M4 12l5 5L20 6" /></svg>,
  Quote:   (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7 7h4v4H7c0 3 1 4 3 5l-1 2c-3-1-5-3-5-7V7zm9 0h4v4h-4c0 3 1 4 3 5l-1 2c-3-1-5-3-5-7V7z" /></svg>,
};
