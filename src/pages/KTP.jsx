import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_KTP = {
  id: "ktp",
  numero: "VI",
  theme: "vermelho",
  titulo: "Ordem dos Sacerdotes Cavaleiros Templários do Sagrado Arco Real",
  subtitulo: "O sacerdote e o cavaleiro",
  emblema: "assets/insignias_ordens/Ordem_ktp.svg",
  queE: {
    titulo: "Onde o Templo e o Arco se fundem no sacerdote-cavaleiro",
    paragrafos: [
      "A Ordem dos Sacerdotes Cavaleiros Templários do Sagrado Arco Real, ou no original, Holy Royal Arch Knight Templar Priests (KTP) é uma Ordem de Aperfeiçoamento Maçônica que possui registros desde o final do século XVIII.",
      "Conta-se que, nessa época, os Cavaleiros Templários de diferentes localidades juntavam-se como um ‘‘Grupo de União’’ com o objetivo de conferir esse Grau, mas não havia um corpo governante para exercer controle e fornecer diretrizes, o que contribuiu em grande parte para a sua confusa origem.",
      "Em 1895, foi criado em Newcastle-upon-Tyne um Tabernáculo, o ‘‘The Royal Kent’’, e em 1923, o Grande Colégio (Grand College) foi constituído em Newcastle."
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Arch,
      rotulo: "O Arco e o Templo",
      titulo: "A síntese simbólica",
      texto:
        "O Arco Real restaura a Palavra; o Templo a consagra; o sacerdote-cavaleiro a guarda com o silêncio de quem sabe que algumas verdades não podem ser simplesmente ditas — precisam ser vividas.",
    },
    {
      Icon: Icon.Crown,
      rotulo: "O Sacerdócio",
      titulo: "O ungido guardião",
      texto:
        "Ungir é consagrar — separar para um propósito. O Sacerdote KTP é aquele que, tendo percorrido o Rito inteiro, é separado para a custódia da Tradição viva no coração da fraternidade.",
    },
    {
      Icon: Icon.Sword,
      rotulo: "A Cavalaria",
      titulo: "A espada dobrada à cruz",
      texto:
        "A espada do sacerdote-cavaleiro aponta sempre para baixo: não é instrumento de conquista, mas de proteção. Seu fio guarda o Templo de tudo que seria profanação.",
    },
  ],
  historia: [
    {
      titulo: "A confluência de duas correntes",
      texto:
        "O grau dos Sacerdotes Cavaleiros Templários do Sagrado Arco Real nasce da confluência de duas grandes correntes do esoterismo cristão: a tradição sacerdotal do Templo de Salomão, transmitida pelos graus capitulares, e a tradição cavaleiresca dos Templários históricos, preservada na Maçonaria. Em sua fusão, um grau único.",
    },
    {
      tipo: "citacao",
      texto:
        "Tu és sacerdote para sempre, segundo a ordem de Melquisedeque.",
      autor: "Salmo 110, 4",
    },
    {
      titulo: "O Rito de York no Brasil e no Cariri",
      texto:
        "A presença do Rito de York no Brasil intensificou-se nas primeiras décadas do século XX. No Cariri, a estrutura completa das Ordens — incluindo a KTP — representa um testemunho de maturidade institucional raro no nordeste brasileiro.",
    },
    {
      titulo: "Por que o KTP é o último pórtico",
      texto:
        "Não porque seja o mais alto em hierarquia formal, mas porque pressupõe todos os outros. O irmão que chega à KTP carrega, em sua memória simbólica, cada pedra de cada grau anterior. Ele não é chamado ao pódio — é chamado ao serviço eterno da Tradição.",
    },
  ],
  galeria: {
    rotulo: "Memória Visual",
    titulo: "A KTP em imagens",
    intro:
      "Consagrações, paramentos, vestígios históricos e curiosidades do último pórtico — um acervo a ser preenchido com a memória da Ordem no Cariri.",
    itens: [
      {
        categoria: "Reuniões",
        legenda: "Reservado a registros das sessões e consagrações da Ordem.",
      },
      {
        categoria: "Adornos & Paramentos",
        legenda: "Reservado à mitra, à espada dobrada e às insígnias sacerdotais.",
      },
      {
        categoria: "Fatos Históricos",
        legenda:
          "Reservado a registros da confluência sacerdotal e cavaleiresca do Rito.",
      },
      {
        categoria: "Curiosidades",
        legenda: "Reservado a selos, gravuras e símbolos do sacerdote-cavaleiro.",
      },
    ],
    nota: "Os quadros reservados aguardam o acervo fotográfico da Ordem.",
  },
};

export default function PageKTP({ setCurrentPage }) {
  return <OrderPage data={DATA_KTP} setCurrentPage={setCurrentPage} />;
}
