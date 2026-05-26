import { Icon } from '../components/shared';
import OrderPage from './OrderPage';

const DATA_MALTA = {
  id: "malta",
  numero: "IV",
  titulo: "Ordem dos Cavaleiros de Malta",
  subtitulo: "Guardiões da fé e servos dos pobres",
  classificacao: "Ordem Cavaleiresca · Rito de York",
  emblema: "assets/insignias_ordens/Ordem_malta.png",
  queE: {
    titulo: "Do Hospital de Jerusalém ao cavaleiro do Rito",
    paragrafos: [
      "Em torno de 1048, mercadores amalfitanos fundaram em Jerusalém um hospital dedicado a São João Batista, destinado ao cuidado dos peregrinos que adoeciam na Terra Santa. Daquela obra de misericórdia nasceria, ao longo das Cruzadas, uma das mais antigas ordens cavaleirescas da cristandade — os Cavaleiros Hospitalários de São João, que a história viria a chamar de Cavaleiros de Malta.",
      "Do Templo de Salomão a Rodes, de Rodes à ilha de Malta (conquistada em 1530), a Ordem atravessou séculos de batalhas, exílios e renovações espirituais, carregando sempre sua insígnia maior: a cruz de oito pontas sobre o manto negro — símbolo das oito bem-aventuranças e da disposição ao sacrifício.",
      "No Rito de York maçônico, a Ordem dos Cavaleiros de Malta confere ao irmão a dimensão da hospitalidade como virtude iniciática — lembrando que nenhuma construção do Templo interior é completa sem o serviço ao próximo.",
    ],
  },
  simbolismo: [
    {
      Icon: Icon.Cross,
      rotulo: "A Cruz de Malta",
      titulo: "Oito pontas, oito bem-aventuranças",
      texto:
        "A cruz de oito pontas da Ordem não é ornamento — é mapa. Cada ponta corresponde a uma bem-aventurança do Sermão da Montanha, lembrete de que a nobreza cavaleiresca começa na humildade interior.",
    },
    {
      Icon: Icon.Hands,
      rotulo: "A Hospitalidade",
      titulo: "O servo no cavaleiro",
      texto:
        "Nenhum grau do Rito de York ensina com mais clareza o paradoxo cristão: o maior entre vós será o servo de todos. O Cavaleiro de Malta é, antes de guerreiro, um hospitaleiro.",
    },
    {
      Icon: Icon.Crown,
      rotulo: "A Perseverança",
      titulo: "Sob todos os exílios",
      texto:
        "Expulsos de Jerusalém, de Rodes, de Malta — os Hospitalários nunca dissolveram a Ordem. Ensinamento ao obreiro: a Tradição verdadeira sobrevive a toda perseguição e a todo exílio.",
    },
  ],
  requisitos: [
    "Ser Cavaleiro Templário regular, em pleno gozo dos seus direitos.",
    "Professar a fé cristã e demonstrar vida compatível com os ideais cavaleirescos.",
    "Apresentar referências de um Comendador ou irmão do corpo.",
    "Ter conhecimento do simbolismo do Sagrado Arco Real.",
    "Comprometer-se com o espírito de serviço e hospitalidade.",
    "Aceitar os compromissos rituais da Ordem com consciência e liberdade.",
  ],
  historia: [
    {
      titulo: "1048 — O hospital dos peregrinos",
      texto:
        "A fundação em Jerusalém de um hospital dedicado a São João Batista por mercadores de Amalfi é o ponto de partida — não um ato militar, mas um ato de caridade. A Ordem nasceu do cuidado, antes de nascer da espada.",
    },
    {
      tipo: "citacao",
      texto: "Tuitio fidei et obsequium pauperum.",
      autor: "Lema da Ordem de Malta · Proteção da fé e serviço aos pobres",
    },
    {
      titulo: "A Cruz de Malta e a heráldica do Cariri",
      texto:
        "A cruz de oito pontas ressurge, em formas variadas, na iconografia religiosa popular do Nordeste — nas bandeiras de penitentes, nos ex-votos de couro, nas capelas do sertão. Uma coincidência que os irmãos do Cariri percebem com especial afeto.",
    },
    {
      titulo: "A Ordem no Rito de York",
      texto:
        "Recebida no contexto da Comanderia Templária, a Ordem de Malta oferece ao Cavaleiro Templário uma dimensão adicional de meditação — a da misericórdia ativa — que complementa a ascese e a fé já cultivadas nos graus anteriores.",
    },
  ],
};

export default function PageMalta({ setCurrentPage }) {
  return <OrderPage data={DATA_MALTA} setCurrentPage={setCurrentPage} />;
}
