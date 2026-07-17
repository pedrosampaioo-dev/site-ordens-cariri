import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_NAUTAS = {
  id: "nautas",
  numero: "II",
  theme: "verde",
  titulo: "Ordem dos Nautas da Arca Real",
  subtitulo: "Os Marinheiros da Arca Real — guardiões da aliança",
  classificacao: "Ordem Anexa · Rito de York",
  emblema: "assets/insignias_ordens/Ordem_nauta.svg",
  queE: {
    titulo: "A Arca, o Dilúvio e a aliança renovada",
    paragrafos: [
      "A Ordem dos Nautas da Arca Real revisita uma das narrativas mais antigas da humanidade: o dilúvio, a Arca, a pomba que retorna com o ramo de oliveira e a aliança refundada entre Deus e os homens, simbolizada pelo arco-íris que atravessa o céu purificado.",
      "Não se trata de mera recapitulação bíblica. A Arca, para o Nauta, é o templo flutuante onde a virtude sobrevive ao caos. É o coração do justo no meio das águas turvas do tempo — protegido pela providência, navegando rumo à terra firme da Promessa.",
      "Como Ordem anexa, vincula-se à Marca, somando-se a um corpo simbólico que prepara o obreiro para os mistérios capitulares mais elevados.",
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Ark,
      rotulo: "A Arca",
      titulo: "O refúgio",
      texto:
        "Cinquenta cúbitos de fé, trinta de esperança, trezentos de caridade — a Arca é o homem virtuoso construído ao longo de uma vida, capaz de atravessar qualquer dilúvio interior.",
    },
    {
      Icon: Icon.Star,
      rotulo: "A Pomba",
      titulo: "O sinal de paz",
      texto:
        "A pomba que retorna com o ramo de oliveira é a obediência fiel — aquela que vai, observa, retorna e anuncia. Mensageira do silêncio entre a tempestade e a aurora.",
    },
    {
      Icon: Icon.Arch,
      rotulo: "O Arco-íris",
      titulo: "A aliança refeita",
      texto:
        "Sete cores num arco — pacto entre o Criador e a criatura. Símbolo de que, após toda travessia, há um céu que se reconcilia.",
    },
  ],
  historia: [
    {
      titulo: "Origens britânicas",
      texto:
        "A organização moderna dos Royal Ark Mariners remonta ao final do século XVIII na Inglaterra, com registros formais a partir de 1790. Foi associada à Marca pela Grande Loja em meados do século XIX.",
    },
    {
      tipo: "citacao",
      texto:
        "Porei meu arco nas nuvens, e ele será sinal da aliança entre mim e a terra.",
      autor: "Gênesis 9, 13",
    },
    {
      titulo: "O nome 'Nautas' no Brasil",
      texto:
        "Entre os irmãos do Brasil, a Ordem é frequentemente designada por 'Nautas' — termo afetivo que evoca os navegantes da Arca e distingue, com sotaque brasileiro, a tradição inglesa dos Royal Ark Mariners.",
    },
    {
      titulo: "No Cariri",
      texto:
        "Em terra de romaria, onde a fé atravessa gerações e a chuva é prece, a alegoria da Arca encontra ressonância especialmente forte — basta lembrar que toda festa nordestina é, em algum nível, gratidão por uma travessia.",
    },
  ],
  galeria: {
    rotulo: "Memória Visual",
    titulo: "Os Nautas em imagens",
    intro:
      "Travessias, paramentos, vestígios históricos e curiosidades da Arca Real — o acervo vivo da Ordem no Vale do Cariri.",
    itens: [
      {
        categoria: "Reuniões",
        src: "assets/fotos/reuniao_nauta.jpeg",
        alt: "Sessão da Ordem dos Nautas da Arca Real no Cariri",
        legenda: "Sessão dos Nautas da Arca Real — Vale do Cariri.",
      },
      {
        categoria: "Adornos & Paramentos",
        src: "assets/molduras/Moldura_felipe_marcanauta.webp",
        alt: "Paramento da Ordem dos Nautas",
        fit: "contain",
        legenda: "Joia e paramento do Nauta da Arca Real.",
      },
      {
        categoria: "Fatos Históricos",
        legenda:
          "Reservado a registros da Arca, do dilúvio e da aliança do arco-íris.",
      },
      {
        categoria: "Curiosidades",
        legenda: "Reservado a estandartes, pombas e símbolos da travessia.",
      },
    ],
    nota: "Os quadros reservados aguardam o acervo fotográfico da Ordem.",
  },
};

export default function PageNautas({ setCurrentPage }) {
  return <OrderPage data={DATA_NAUTAS} setCurrentPage={setCurrentPage} />;
}
