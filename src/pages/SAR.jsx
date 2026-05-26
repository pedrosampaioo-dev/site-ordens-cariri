import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_SAR = {
  id: "sar",
  numero: "III",
  titulo: "Ordem do Sagrado Arco Real de Jerusalém",
  subtitulo: "Onde a Palavra Perdida é restaurada",
  classificacao: "Grau Capitular · Culminância do Rito de York",
  emblema: "assets/insignias_ordens/Ordem_sar.png",
  queE: {
    titulo: "O grau que completa o Mestre",
    paragrafos: [
      "Há, na tradição do Rito de York, um ensinamento secreto: o grau de Mestre Maçom não está completo. Há uma palavra perdida, há uma verdade enterrada, há um nome sagrado que foi ocultado para que não fosse profanado nem esquecido. O Sagrado Arco Real é o grau onde esta Palavra finalmente é restaurada ao obreiro.",
      "Diz a alegoria que, durante a reconstrução do Templo de Jerusalém após o exílio babilônico — sob Zorobabel, Esdras e o sumo-sacerdote Josué —, três obreiros, ao escavar as ruínas, descobriram uma abóbada subterrânea. Nela, gravado em ouro, jazia o Nome Inefável. A Palavra estava no fim, porque estava também no princípio.",
      "Por isso, o Arco Real é tido por muitos irmãos como o coroamento luminoso do Rito — a chave de abóbada que sustenta todos os graus anteriores.",
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Arch,
      rotulo: "O Arco",
      titulo: "A pedra angular",
      texto:
        "O arco arquitetônico só se sustenta por sua pedra-chave — aquela colocada por último, no alto, e que pressiona todas as outras umas contra as outras. Sem ela, ruína; com ela, séculos.",
    },
    {
      Icon: Icon.Key,
      rotulo: "A Palavra",
      titulo: "O Nome restaurado",
      texto:
        "A Palavra Perdida não é uma sílaba — é uma compreensão. Restaurá-la é descobrir, no íntimo, o que sempre esteve gravado e que a pressa da vida fez esquecer.",
    },
    {
      Icon: Icon.Star,
      rotulo: "O Triplo Tau",
      titulo: "Templum Hierosolyma",
      texto:
        "Joia distintiva do Companheiro do Arco Real — três taus entrelaçados que significam 'Tesouro do Templo de Jerusalém' e a marca dos verdadeiramente iniciados.",
    },
  ],
  requisitos: [
    "Ser Mestre Maçom regular, há ao menos um ano.",
    "Estar familiarizado com a alegoria do Templo e suas dimensões simbólicas.",
    "Apresentar carta de Loja-mãe atestando regularidade.",
    "Ter recebido os ensinamentos preliminares do grau de Mestre.",
    "Aceitar o caráter judaico-cristão do simbolismo do Arco Real.",
    "Comprometer-se a participar com assiduidade dos trabalhos do Capítulo.",
  ],
  historia: [
    {
      titulo: "Da Inglaterra para o mundo",
      texto:
        "Embora o grau apareça em documentos a partir de 1740, suas raízes simbólicas mergulham profundamente no judaísmo segundo-templista. Em 1813, a fusão entre as Grandes Lojas inglesas declarou que 'a antiga Maçonaria consiste em três graus, incluindo o Sublime Grau do Sagrado Arco Real' — afirmação histórica que define até hoje a Maçonaria britânica.",
    },
    {
      tipo: "citacao",
      texto:
        "Se calarem, as próprias pedras clamarão.",
      autor: "Lucas 19, 40",
    },
    {
      titulo: "A abóbada subterrânea",
      texto:
        "A imagem da câmara descoberta sob as ruínas do Templo influenciou a arquitetura de inúmeras Lojas no século XIX, que construíram salas de Capítulo no subsolo — para que, ao subir à superfície, o obreiro sentisse, simbolicamente, o reencontro com a luz.",
    },
    {
      titulo: "O Triplo Tau",
      texto:
        "O símbolo, presente também na iconografia hospitalária medieval, foi adotado pelo Arco Real como sua joia distintiva. Pode ser interpretado simultaneamente como T+H (Templum Hierosolyma), três Ts entrelaçados ou a cruz copta — três caminhos, uma só verdade.",
    },
  ],
};

export default function PageSAR({ setCurrentPage }) {
  return <OrderPage data={DATA_SAR} setCurrentPage={setCurrentPage} />;
}
