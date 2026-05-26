import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_MARCA = {
  id: "marca",
  numero: "I",
  titulo: "Ordem de Mestres Maçons da Marca",
  subtitulo: "A assinatura do obreiro sobre a pedra",
  classificacao: "Grau Capitular · Rito de York",
  emblema: "assets/insignias_ordens/Ordem_marca.png",
  queE: {
    titulo: "Da pedreira medieval ao Templo simbólico",
    paragrafos: [
      "Nascido nas guildas operativas da Idade Média, o grau de Mestre da Marca remonta ao tempo em que cada canteiro de pedra possuía um sinal pessoal — um diagrama gravado nas faces ocultas dos blocos — para que mestres-de-obra pudessem identificar o autor, calcular o salário e atestar a qualidade do trabalho.",
      "Quando a Maçonaria especulativa herdou os instrumentos da Maçonaria operativa, herdou também essa ética da marca: nada do que fazemos é anônimo diante de nós mesmos e do Grande Arquiteto. Toda obra leva, inevitavelmente, a assinatura interior daquele que a executou.",
      "Aceitos os companheiros à pedreira simbólica, escolhe-se uma marca que o identificará para sempre nos registros da Loja — um pacto silencioso entre o obreiro e a sua consciência.",
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Square,
      rotulo: "A Marca",
      titulo: "O sinal pessoal",
      texto:
        "Cada Mestre da Marca escolhe um símbolo seu — geométrico, irrepetível — que sela o seu trabalho. É o nome íntimo do obreiro perante o Templo.",
    },
    {
      Icon: Icon.Hands,
      rotulo: "O Salário",
      titulo: "O justo pago ao justo",
      texto:
        "A alegoria da pedra rejeitada e do salário cobrado ensina que o trabalho honesto sempre encontra reconhecimento — embora nem sempre no tempo que esperamos.",
    },
    {
      Icon: Icon.Cross,
      rotulo: "A Responsabilidade",
      titulo: "Cada pedra responde",
      texto:
        "Marcar a pedra é responsabilizar-se por ela. Ensina o Mestre da Marca que toda escolha deixa rastro, e que o Templo se faz, antes, de retidão.",
    },
  ],
  requisitos: [
    "Ser Mestre Maçom regular, em pleno gozo dos seus direitos.",
    "Apresentar duas referências de irmãos da Loja-mãe.",
    "Comprovar conduta moral ilibada na vida civil e familiar.",
    "Estar disposto a estudar os ensinamentos do grau por ao menos doze meses.",
    "Manifestar fé num Princípio Criador — o Grande Arquiteto do Universo.",
    "Comprometer-se com a regularidade e o sigilo dos trabalhos.",
  ],
  historia: [
    {
      titulo: "A Pedra rejeitada da Bíblia",
      texto:
        "A alegoria central do grau, baseada no Salmo 118 — 'a pedra que os construtores rejeitaram tornou-se a pedra angular' —, é também uma das mais citadas pelo Cristo nos Evangelhos. Por isso a Marca dialoga, desde sempre, com a sensibilidade cristã.",
    },
    {
      tipo: "citacao",
      texto: "A pedra que os construtores rejeitaram veio a ser a pedra angular.",
      autor: "Salmo 118, 22",
    },
    {
      titulo: "As marcas que sobreviveram",
      texto:
        "Nas catedrais de Chartres, Reims, Salisbury e mesmo nos primeiros edifícios coloniais do Nordeste brasileiro, ainda hoje se podem reconhecer marcas de canteiros gravadas nos blocos — assinaturas silenciosas de obreiros que nunca souberam que sua mão ecoaria por séculos.",
    },
    {
      titulo: "O grau no Brasil",
      texto:
        "O grau de Mestre da Marca chega ao Brasil sobretudo pelo Rito de York difundido a partir do final do século XIX. No Cariri, organizou-se em Capítulos regulares, articulados à tradição cristã profundamente enraizada na cultura local.",
    },
  ],
};

export default function PageMarca({ setCurrentPage }) {
  return <OrderPage data={DATA_MARCA} setCurrentPage={setCurrentPage} />;
}
