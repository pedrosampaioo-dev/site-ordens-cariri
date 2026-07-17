import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_TEMPLARIOS = {
  id: "templarios",
  numero: "V",
  theme: "vermelho",
  ink: "prata",
  titulo: "Ordem dos Cavaleiros Templários",
  subtitulo: "Herdeiros simbólicos do Templo de Salomão",
  classificacao: "Ordem Cavaleiresca · Coroação do Rito de York",
  emblema: "assets/insignias_ordens/Ordem_templarios.svg",
  queE: {
    titulo: "Do Templo histórico ao Templo do coração",
    paragrafos: [
      "Em 1118, nove cavaleiros francos, sob a liderança de Hugo de Payens, fizeram votos diante do Patriarca de Jerusalém: defenderiam os peregrinos que cruzavam a Terra Santa, viveriam em pobreza, castidade e obediência, e teriam como morada o monte do antigo Templo de Salomão. Nasciam os Pauperes commilitones Christi Templique Salomonici — os Pobres Cavaleiros de Cristo e do Templo de Salomão.",
      "Quase dois séculos depois, perseguida e dissolvida pela bula papal de 1312, a Ordem original do Templo deixou um vácuo histórico — e uma fascinação que jamais cessou. A Maçonaria, herdeira simbólica de muitas tradições construtivas e cavaleirescas, recolheu parte deste fio e tece, nos seus Cavaleiros Templários, a memória espiritual do Templo.",
      "Não somos cavaleiros militares. Somos cavaleiros do espírito — guardiões da fé, da palavra empenhada e da justiça serena que se exerce com discrição, sem espada, mas com firmeza.",
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Cross,
      rotulo: "A Cruz",
      titulo: "Cruz vermelha sobre o branco",
      texto:
        "A cruz pátea, vermelha como o sangue dos mártires, sobre o manto branco da pureza. Sinal de que toda fé verdadeira tem um preço e uma alvura.",
    },
    {
      Icon: Icon.Sword,
      rotulo: "A Espada",
      titulo: "Justiça sem ira",
      texto:
        "A espada do Templário é sempre voltada para baixo, no juramento — sinal de que o cavaleiro só a ergue em defesa do indefeso, jamais por vaidade ou vingança.",
    },
    {
      Icon: Icon.Crown,
      rotulo: "A Vigília",
      titulo: "Os três votos",
      texto:
        "Fé, abnegação e defesa da cristandade. Votos simbólicos que ensinam ao homem moderno a recolher-se, simplificar e proteger o que importa.",
    },
  ],
  historia: [
    {
      titulo: "1307 — A Sexta-feira treze",
      texto:
        "Na madrugada de 13 de outubro de 1307, sexta-feira, Felipe IV da França ordenou a prisão simultânea de todos os Templários do reino. A data tornou-se, por superstição popular, sinônimo de mau agouro. Para os irmãos, é dia de meditação sobre a fragilidade dos poderes deste mundo.",
    },
    {
      tipo: "citacao",
      texto:
        "Não a nós, Senhor, não a nós, mas ao Teu nome dá glória.",
      autor: "Lema templário · Salmo 115, 1",
    },
    {
      titulo: "Jacques de Molay",
      texto:
        "Último Grão-Mestre da Ordem histórica, Jacques de Molay foi queimado em Paris em 1314. Diz a tradição que, do alto da fogueira, conclamou rei e papa a comparecerem diante do tribunal de Deus dentro do ano. Ambos morreram em poucos meses.",
    },
    {
      titulo: "No Brasil colonial",
      texto:
        "A Ordem de Cristo, sucedânea portuguesa dos Templários, foi instrumental na chegada das caravelas ao Brasil. A cruz pátea ornava as velas. No Cariri, a memória cavaleiresca encontra eco nos romeiros que cruzam o sertão como peregrinos rumo a Juazeiro.",
    },
  ],
  galeria: {
    rotulo: "Memória Visual",
    titulo: "Os Templários em imagens",
    intro:
      "Vigílias, paramentos, vestígios históricos e curiosidades da Ordem do Templo — o acervo vivo dos Cavaleiros Templários no Cariri.",
    itens: [
      {
        categoria: "Reuniões",
        src: "assets/fotos/reuniao_templario.jpeg",
        alt: "Sessão da Comanderia dos Cavaleiros Templários no Cariri",
        legenda: "Sessão da Comanderia Templária — Vale do Cariri.",
      },
      {
        categoria: "Adornos & Paramentos",
        src: "assets/molduras/Moldura_felipe_templario.webp",
        alt: "Paramento da Ordem dos Cavaleiros Templários",
        fit: "contain",
        legenda: "Manto branco, cruz pátea e espada do Cavaleiro Templário.",
      },
      {
        categoria: "Fatos Históricos",
        legenda:
          "Reservado a registros de Hugo de Payens, Molay e da Ordem de Cristo.",
      },
      {
        categoria: "Curiosidades",
        legenda: "Reservado a estandartes, selos e a cruz pátea sobre as velas.",
      },
    ],
    nota: "Os quadros reservados aguardam o acervo fotográfico da Ordem.",
  },
};

export default function PageTemplarios({ setCurrentPage }) {
  return <OrderPage data={DATA_TEMPLARIOS} setCurrentPage={setCurrentPage} />;
}
