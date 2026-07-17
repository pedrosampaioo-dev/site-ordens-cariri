---
name: Ordens de Aperfeiçoamento do Cariri
description: Site institucional cerimonial para as seis Ordens de Aperfeiçoamento Maçônico do Rito de York no Vale do Cariri.
colors:
  crimson-950: "#220608"
  crimson-900: "#340b0f"
  crimson-800: "#4a0e14"
  crimson-700: "#670f15"
  crimson-600: "#8c1519"
  gold-300: "#f5d77a"
  gold-400: "#e6bf52"
  gold-500: "#c9a23a"
  gold-600: "#a07d24"
  vellum: "#fffbeb"
  navy-950: "#050e2a"
  forest-950: "#051d0a"
  slate-950: "#070708"
  seal-marca: "#3B82F6"
  seal-nautas: "#22C55E"
  seal-sar: "#EF4444"
  seal-malta: "#94A3B8"
  seal-templarios: "#F87171"
  seal-ktp: "#F59E0B"
typography:
  display:
    fontFamily: "Cinzel, serif"
    fontSize: "clamp(1.65rem, 7.5vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "normal"
  headline:
    fontFamily: "Cinzel, serif"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Cinzel, serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.4em"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  section-y-sm: "4rem"
  section-y-lg: "7rem"
  section-y-xl: "9rem"
  container-x: "1.5rem"
  container-x-lg: "2.5rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(150deg, {colors.gold-300} 0%, {colors.gold-400} 48%, {colors.gold-600} 100%)"
    textColor: "{colors.crimson-950}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "15px 36px"
  button-primary-hover:
    backgroundColor: "linear-gradient(150deg, {colors.gold-400} 0%, {colors.gold-500} 100%)"
    textColor: "{colors.crimson-950}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.gold-300}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  card-order:
    backgroundColor: "linear-gradient(180deg, rgba(43,7,9,0.75) 0%, rgba(26,5,7,0.92) 100%)"
    textColor: "{colors.gold-300}"
    rounded: "{rounded.none}"
    padding: "40px"
  input-field:
    backgroundColor: "rgba(52,11,15,0.6)"
    textColor: "{colors.vellum}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  nav-link:
    textColor: "rgba(255,251,235,0.8)"
    typography: "{typography.label}"
---

# Design System: Ordens de Aperfeiçoamento do Cariri

## 1. Overview

**Creative North Star: "A Loja ao Anoitecer"**

O sistema recria a sensação de cruzar a porta de uma loja maçônica no instante em que a luz do dia se apaga e o espaço passa a ser iluminado por velas e ouro contra paredes de pedra carmesim. Cada decisão visual — cor, tipografia, movimento — serve a esse único momento sustentado: solene, quente, reverente. Nada aqui é "moderno" ou "neutro"; tudo carrega o peso de um rito secular em andamento.

O sistema rejeita explicitamente dois territórios vizinhos e perigosos. Primeiro, a loja esotérica/"new age" — sem misticismo pop, cristais, gradientes pastel ou tipografia "espiritual" de varejo; isto é uma instituição secular com séculos de tradição, não uma marca de bem-estar. Segundo, o clichê de SaaS genérico — sem cards idênticos de feature, sem eyebrows numerados (01/02/03) como grade padrão, sem gradiente de texto em todo título. O ouro brilha porque é raro; se brilhasse em tudo, deixaria de significar algo.

**Key Characteristics:**
- Fundos profundos com matiz alternado por seção (carmesim, marinho, floresta, ardósia) — todos unidos pelo mesmo ouro de assinatura.
- Profundidade por halo de luz dourada e textura de grão, não por sombra escura tradicional.
- Geometria de ângulo reto (raio zero) em quase tudo; círculos reservados a emblemas, medalhões e pequenos pontos ornamentais.
- OrnamentalDivider (linha + losangos dourados) como pontuação recorrente entre seções e blocos.
- Epígrafes em latim e citações em itálico como elemento atmosférico — a voz de uma instituição que fala de si mesma com formalidade.
- Movimento ambiente lento e contínuo (giros, pulsos em CSS) somado a entradas coreografadas com framer-motion ao rolar a página.

## 2. Colors: A Paleta da Loja ao Anoitecer

A paleta é dominada por dois tons — Carmesim do Templo e Ouro Velho — com tons profundos alternados (marinho, floresta, ardósia) dando ritmo entre seções, e seis cores-selo discretas identificando cada Ordem.

### Primary
- **Carmesim do Templo** (`#220608` a `#8c1519`): a superfície dominante do site — fundo de praticamente toda seção e das páginas individuais de cada Ordem (`OrderPage`). `crimson-950` é a base mais profunda (corpo da página); `crimson-900`/`crimson-800` aparecem como superfícies secundárias (cards, seções alternadas); `crimson-700`/`crimson-600` aparecem como paradas de gradiente em fundos radiais e brilhos.

### Secondary
- **Ouro Velho** (`#c9a23a` a `#f5d77a`): o único acento que carrega significado — usado em CTAs, títulos de destaque, ícones, bordas, divisores ornamentais e texto de label. `gold-300` é o ponto mais claro (destaques de gradiente em títulos); `gold-400` é o tom-âncora (textos dourados sólidos, ícones); `gold-500` aparece em bordas finas (10–30% de opacidade); `gold-600` fecha gradientes em botões e sombras.

### Tertiary
- **Selos das Seis Ordens**: `seal-marca` (#3B82F6 azul), `seal-nautas` (#22C55E verde), `seal-sar` (#EF4444 vermelho), `seal-malta` (#94A3B8 prata/ardósia), `seal-templarios` (#F87171 vermelho-cruz), `seal-ktp` (#F59E0B âmbar). Cada cor identifica uma Ordem em seu card, anel de emblema e brilho de hover na grade "Nossas Organizações" e nos cartões de Liderança — nunca usadas fora desse contexto.

### Neutral
- **Vellum** (`#fffbeb`, equivalente a `amber-50`): a única superfície clara do site, reservada à seção "Petição" — o fundo vira pergaminho/papel no momento em que o visitante está prestes a redigir um pedido formal. Não é um modo claro geral.
- **Marinho Profundo** (`navy-950`, `#050e2a`): fundo da seção "Nossa História" (SobreOrdens) — alterna o matiz sem romper a base escura.
- **Verde-Floresta Profundo** (`forest-950`, `#051d0a`): fundo da seção "Liderança".
- **Ardósia Profunda** (`slate-950`, `#070708`): fundo da seção "Reuniões"/galeria — o tom mais neutro/frio do conjunto.
- **Texto sobre Carmesim** (`amber-50` em opacidades): `/85` para corpo de alta ênfase, `/65–/70` para corpo padrão e citações, `/40–/50` para labels secundários, `/20–/30` para texto puramente atmosférico (rodapés, marcas d'água).

### Named Rules
**The Gold Leaf Rule.** O texto com gradiente dourado (`bg-clip-text` + gradiente `gold-300→gold-400→gold-600`) é reservado ao H1 principal de cada página (Hero, topo de `OrderPage`) e ao H2 do CTA final. Títulos de seção comuns usam Ouro Velho sólido (`gold-300`). Gradiente em todo título dilui o efeito — aqui ele marca apenas os dois momentos de maior peso da página.

**The One Accent Rule.** Ouro Velho é a única cor com permissão para carregar peso de CTA/significado em toda a interface. As cores-selo das Ordens e os fundos alternados (marinho/floresta/ardósia) são atmosfera e sinalização — nunca competem com o dourado por atenção.

## 3. Typography

**Display Font:** Cinzel (com fallback serif)
**Body Font:** EB Garamond (com fallback Georgia, serif)
**Label/Mono Font:** Cormorant Garamond, itálico (fallback Georgia, serif)

**Character:** Cinzel é a "voz epigráfica" — maiúsculas largas, gravadas em pedra, usadas em todo título, label, botão e item de navegação. Cormorant Garamond itálico é a "voz manuscrita" — citações, nomes de membros e subtítulos atmosféricos. EB Garamond carrega o corpo de texto longo. A combinação evoca uma inscrição romana ladeada por uma carta manuscrita.

### Hierarchy
- **Display** (peso 600, `clamp(1.65rem, 7.5vw, 5.4rem)`, leading 1.0–1.08): o H1 do Hero e o título de cada `OrderPage` — sempre em Cinzel, sempre com o tratamento "Gold Leaf".
- **Headline** (peso 600, `clamp(1.875rem, 5vw, 3.75rem)`, leading 1.2): H2 de cada seção — Cinzel, Ouro Velho sólido (`gold-300`).
- **Title** (peso 400, itálico, `clamp(1.125rem, 2vw, 1.5rem)`, leading 1.5): subtítulos atmosféricos, citações em blockquote, nomes de membros — Cormorant Garamond itálico, `amber-50` em 60–80% de opacidade.
- **Body** (peso 400, 1rem–1.25rem, leading 1.7): parágrafos de conteúdo — EB Garamond, `amber-50` em 70–85%, limitado a ~65–75ch.
- **Label** (peso 500, 8–11px, letter-spacing 0.28em–0.5em, uppercase): eyebrows, navegação, botões, classificações de cargo/ordem — Cinzel, `gold-300`/`gold-400` ou `amber-50` em opacidade reduzida conforme ênfase.

### Named Rules
**The Inscription Rule.** Cinzel nunca aparece em caixa normal — sempre maiúsculo e com tracking ≥0.28em. Se um texto está em Cinzel mas em minúsculas e sem espaçamento, é um erro de aplicação, não uma variação válida.

## 4. Elevation

Não há sombras de queda tradicionais para hierarquia de superfície. A profundidade vem de três fontes: (1) gradientes radiais em camadas + textura de grão criando profundidade atmosférica; (2) halos de brilho dourado (`box-shadow` suave em `rgba(230,191,82,*)`) marcando elementos focais — emblemas, CTAs, cards ativos; (3) bordas finas douradas (`gold-500` em 10–30% de opacidade) delimitando cards e painéis, clareando no hover/focus.

### Shadow Vocabulary
- **ember-glow-soft** (`0 0 40px 6px rgba(230,191,82,0.18)`): halo de repouso atrás de emblemas e medalhões.
- **ember-glow-strong** (`0 8px 40px -10px rgba(230,191,82,0.65), inset 0 1px 0 rgba(255,255,255,0.22)`): botões CTA primários, em repouso e hover.
- **vignette-deep** (`inset 0 0 160px 60px rgba(6,0,1,0.8)`): escurecimento de borda de seção para focar o conteúdo central.
- **petition-lift** (`0 40px 120px -20px rgba(0,0,0,0.7), inset 0 0 80px rgba(122,18,22,0.06)`): a única sombra de "elevação" tradicional do site, reservada ao painel do formulário de Petição.

### Named Rules
**The Halo, Not Shadow Rule.** Importância é comunicada por luz dourada irradiando para fora, não por sombra escura projetada para baixo. `petition-lift` é a exceção deliberada — reservada à superfície interativa mais importante de cada página (o formulário de petição).

## 5. Components

### Buttons
- **Shape:** raio zero (`{rounded.none}`), cantos sempre retos.
- **Primary:** gradiente dourado `linear-gradient(150deg, gold-300 0% → gold-400 48% → gold-600 100%)`, texto `crimson-950`, Cinzel uppercase 10–11px tracking 0.45em, padding ~`15px 36–40px`, sombra `ember-glow-strong`. Um *shimmer* diagonal (faixa branca a 22% de opacidade) varre o botão da esquerda para a direita no hover.
- **Hover/Focus:** eleva-se 1px (`translateY(-1px)`), o shimmer dispara, o gradiente escurece um tom (`gold-400→gold-500`).
- **Secondary/Ghost:** sem preenchimento, texto `gold-300` a 50% de opacidade subindo a 100% no hover; uma linha horizontal de 1px cresce de `w-5` a `w-8` sob o texto.

### Cards (grade "Nossas Organizações")
- **Corner Style:** raio zero; cada canto recebe um "L" de borda (`border-t + border-l`, etc.) na cor-selo da Ordem a 40% de opacidade, subindo a 70% no hover — substitui uma borda completa por marcação de canto.
- **Background:** `linear-gradient(180deg, rgba(43,7,9,0.75) → rgba(26,5,7,0.92))` sobre o fundo `crimson-900` da seção.
- **Shadow Strategy:** brilho radial na cor-selo da Ordem aparece no hover (família `ember-glow`, recolorida por selo).
- **Border:** 1px `gold-500` a 10%, subindo a 22% no hover.
- **Internal Padding:** 24px no mobile → 40px no desktop (`p-6 sm:p-8 lg:p-10`).
- **Detalhe de assinatura:** numeral romano (I–VI) em marca d'água, a 3.5% de opacidade, centralizado atrás do conteúdo.

### Inputs / Fields (formulário de Petição)
- **Style:** fundo `crimson-900` a 60%, borda 1px `gold-500` a 25%, raio zero.
- **Focus:** borda clareia para `gold-400`, fundo fica opaco, anel de foco 1px `gold-400` a 40%.
- **Label:** Cinzel 10px, tracking 0.35em, uppercase, `gold-300` a 80%; campos obrigatórios recebem um "·" dourado.
- **Placeholder:** `amber-50` a 30% — abaixo da meta de contraste WCAG AA; ver Do's and Don'ts.

### Navigation
- Fixa no topo; transparente sobre o Hero, passando a `crimson-950` a 95% com `backdrop-blur-md` e borda inferior `gold-500` a 20% após 30px de rolagem.
- Links: Cinzel 10px, tracking 0.3em, uppercase, `amber-50` a 80% → `gold-300` no hover, com sublinhado central que cresce de 0 a 100% da largura.
- Mobile: hambúrguer abre painel full-width com os mesmos links empilhados e um CTA fantasma com borda dourada ao final.

### OrnamentalDivider (componente de assinatura)
Uma linha horizontal fina (gradiente `gold-400→transparente` em cada extremidade) ladeando um ou dois losangos (quadrados de 1px de borda rotacionados 45°, com preenchimento dourado translúcido) — a pontuação recorrente entre toda seção e bloco de conteúdo principal. Pode incluir um label central em Cinzel (tracking 0.4em) para transições nomeadas (ex.: "Petição").

## 6. Do's and Don'ts

### Do:
- **Do** tratar Ouro Velho como a única cor com permissão para carregar peso de CTA/significado — tudo o mais é atmosfera ou sinalização (The One Accent Rule).
- **Do** manter toda superfície retangular (botões, cards, inputs, painéis) em raio zero; reservar `rounded-full` exclusivamente para emblemas, halos e pequenos pontos ornamentais.
- **Do** usar o OrnamentalDivider (ou suas variantes de canto ornamental) como transição entre seções, em vez de espaço em branco ou `<hr>` simples.
- **Do** usar Cinzel apenas em maiúsculas com tracking ≥0.28em (labels, títulos, botões, navegação); reservar Cormorant Garamond itálico para citações, nomes e subtítulos atmosféricos; usar EB Garamond para corpo de texto.
- **Do** elevar o contraste de textos translúcidos (atualmente `amber-50/30` a `/50` em vários lugares, incluindo placeholders) em direção à meta WCAG AA de 4.5:1 para texto de corpo — por exemplo, subir para `amber-50/65` ou mais sobre `crimson-950` — preservando os tons `/20–/40` apenas para rótulos puramente decorativos/atmosféricos que não carregam informação necessária.

### Don't:
- **Don't** introduzir pergaminho/creme/areia como fundo de seção fora da "Petição" — essa superfície é uma inversão deliberada (documento formal), não uma opção de "modo claro" geral.
- **Don't** usar misticismo "new age" / loja esotérica — sem gradientes pastel, cristais ou tipografia "espiritual" de varejo; o site precisa ler como instituição secular e histórica, não como vitrine esotérica.
- **Don't** recorrer a andaimes genéricos de SaaS: sem grades de cards idênticos com ícone+título+texto, sem eyebrows numerados 01/02/03 como padrão de seção, sem gradiente de texto em todo título — gradiente dourado é exclusivo do H1 principal e do H2 do CTA final (The Gold Leaf Rule).
- **Don't** adicionar sombra de "elevação" tradicional a cards comuns — profundidade vem de halo dourado + borda fina (The Halo, Not Shadow Rule); a sombra pesada `petition-lift` é exclusiva do painel de Petição.
- **Don't** deixar as seis cores-selo das Ordens (`seal-marca`, `seal-nautas`, etc.) vazarem para o chrome global da UI (botões, navegação, CTAs gerais) — são acentos de sinalização restritos ao card/emblema/página de cada Ordem.
