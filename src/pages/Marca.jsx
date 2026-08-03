import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_MARCA = {
  id: "marca",
  numero: "I",
  theme: "azul",
  ink: "prata",
  titulo: "Ordem de Mestres Maçons da Marca",
  subtitulo: "A assinatura do obreiro sobre a pedra",
  emblema: "assets/insignias_ordens/Ordem_marca.svg",
  queE: {
    titulo: "Da pedreira medieval às Lojas Maçônicas",
    paragrafos: [
      "Nascido nas guildas operativas da Idade Média, o grau de Mestre da Marca remonta ao tempo em que cada canteiro de pedra possuía um sinal pessoal — um diagrama gravado nas faces ocultas dos blocos — para que mestres-de-obra pudessem identificar o autor, calcular o salário e atestar a qualidade do trabalho.",
      "Quando a Maçonaria especulativa herdou os instrumentos da Maçonaria operativa, herdou também essa ética da marca: nada do que fazemos é anônimo diante de nós mesmos e do Grande Arquiteto. Toda obra leva, inevitavelmente, a assinatura interior daquele que a executou.",
      "Aceitos os companheiros à pedreira simbólica, escolhe-se uma marca que o identificará para sempre nos registros da Loja — um pacto silencioso entre o obreiro e a sua consciência.",
    ],
  },
  vidaLoja: {
    rotulo: "Vida da Loja",
    titulo: "A Marca, viva no Cariri",
    paragrafos: [
      "Na Loja de Mestres Maçons da Marca, consagrada no Cariri, o antigo costume dos canteiros medievais permanecem em prática, cada marcador avançado ao grau escolhe a sua marca pessoal, um símbolo geométrico e irrepetível, que passa a identifica-lo nos registros da Ordem para sempre.",
      "Mais que um ritual herdado, é um lembrete vivo de que todo trabalho carrega a assinatura de quem o executou, e que essa assinatura responde por si diante dos irmãos e do Grande Gêometra do Universo.",
    ],
    foto: {
      src: "assets/fotos/reuniao_marca.jpeg",
      alt: "Sessão do Capítulo de Mestres Maçons da Marca, no Cariri",
      legenda: "Sessão do Capítulo da Marca — Vale do Cariri.",
    },
    marcasRotulo: "Marcas de canteiro, gravadas em catedrais medievais",
    marcas: [
      { d: "M12 3 L20 19 L4 19 Z M8 14 L16 14" },
      { d: "M4 17 L8 7 L12 17 L16 7 L20 17" },
      { d: "M12 3 L21 12 L12 21 L3 12 Z M3 12 L21 12 M12 3 L12 21" },
      { d: "M12 2 L6.1 20.1 L21.5 8.9 L2.5 8.9 L17.9 20.1 Z" },
      { d: "M5 5 L5 19 L19 19 M5 12 L13 12" },
      { d: "M12 4 L5 20 M12 4 L19 20 M8 14 L16 14" },
    ],
  },
  
  pedra: {
    rotulo: "A Pedra",
    titulo: "A marca, gravada para sempre na pedra",
    src: "assets/paginas/marca/Marca_pedra.webp",
    alt: "Marca de canteiro gravada na face de um bloco de pedra histórico",
    selo: "Marca de canteiro · pedra histórica",
    legenda:
      "O sinal pessoal do obreiro, talhado na face do bloco — irrepetível como uma assinatura.",
    paragrafos: [
      "Esta é a imagem que dá nome ao grau: uma marca de canteiro talhada na face de um bloco de pedra. Nas grandes obras medievais, cada obreiro escolhia um sinal próprio — geométrico, irrepetível — e o gravava em tudo o que talhava.",
      "Por essa marca, os mestres-de-obra reconheciam a autoria de cada peça, calculavam o salário justo e atestavam a qualidade do trabalho. Nada saía da mão do obreiro sem a sua assinatura silenciosa.",
      "Séculos depois, a pedra permanece — e a marca também. É esse gesto antigo que o Mestre da Marca renova ao escolher, ainda hoje, o símbolo que o identificará para sempre nos registros do Capítulo.",
    ],
  },
  adornos: {
    rotulo: "Os Paramentos",
    titulo: "Confira abaixo as regalias que compõem o paramento de um mestre maçom da marca",
    src: "assets/paginas/marca/adornos_marca.webp",
    alt: "Avental e joia do Mestre Maçom da Marca, em azul-celeste e carmim",
    legenda: "Avental e joia do Mestre Maçom da Marca.",
  },
  obreiro: {
    rotulo: "Origens do Grau",
    titulo: "Uma tradição que atravessa séculos",
    src: "assets/paginas/marca/homem_prata.png",
    alt: "Figura do obreiro de prata, representação do grau de Mestre Maçom da Marca",
    legenda:
      "O Mestre da Marca — herdeiro de uma tradição que se conta em séculos.",
    paragrafos: [
      "Neste grau as Sagradas Escrituras são muito utilizadas para instruir o Candidato e os Irmãos na história que serve para ensinar que a verdadeira mensagem é a contemplação das forças e fraquezas humanas. Em termos cronológicos, o Grau segue imediatamente ao Segundo Grau da Maçonaria Simbólica.",
      "Há supostamente algumas evidências de que o Grau tem 400 anos, mas os primeiros registros ingleses remontam a 1769, quando foi trabalhado pela primeira vez no Capítulo da Amizade, do Arco Real nº 257 (anteriormente nº 3) em Portsmouth. No entanto, um livro de atas datado de 1599 da Loja de Edimburgo afirma que vários irmãos especulativos haviam anexado suas marcas após seus nomes.",
      "A primeira reunião da Grande Loja de Mestres Maçons da Marca foi realizada numa segunda-feira, dia 23 de junho de 1856.",
    ],
  },
};

export default function PageMarca({ setCurrentPage }) {
  return <OrderPage data={DATA_MARCA} setCurrentPage={setCurrentPage} />;
}
