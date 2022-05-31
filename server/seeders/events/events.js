export default async (models) => {
  const eventList2 = [
    {
      name: 'TAOBOK - Festival del Libro',
      shortDescription:
        '"La Bellezza declinata in ogni sua forma". Tale è l’alchimia di Taobuk che convoglia su Taormina, luogo unico al mondo, snodo fra cultura occidentale ed orientale, le eccellenze della letteratura, delle arti e del pensiero. Il Festival, nato dodici anni fa, da un’intuizione di Antonella Ferrara che lo presiede e dirige, accoglie la vocazione di recepire i “sedimenti letterari” della città, sintesi di una storia che coagula eventi, miti, vissuti, tradizioni. Ogni anno, Taobuk sceglie un tema intorno a cui s’incardina un calendario di incontri, con il concorso di scrittori autorevoli, artisti, filosofi e scienziati. La kermesse ha assunto una configurazione multidisciplinare e il cartello si impreziosisce con mostre, spettacoli teatrali e di danza, retrospettive cinematografiche, in location suggestive di cui il più rappresentativo è il Teatro Antico, insieme a palazzi, angoli e grandi alberghi.',
      practicalInfo:
        'Dal 16 al 20 Giugno 2022 - Piazza 9 Aprile,Taormina, Sicilia, Italy 98039',
      images: [
        'https://blog.taobuk.it/wp-content/uploads/2020/07/5_dMSKQg.jpg',
        'https://www.add-design.it/wp-content/uploads/2020/09/logo-taobuk-10anni.gif',
      ],
    },
    {
      name: 'Achille Lauro in concerto',
      shortDescription:
        'Achille Lauro si esibirà a Taormina, sul palco suggestivo del Teatro Antico, il 14 Luglio 2022. Nel tour ACHILLE IDOL SUPERSTAR – ELECTRIC ORCHESTRA l’artista sarà accompagnato da 52 elementi, oltre ai 5 componenti della band, e porterà in scena uno show tutto nuovo, dagli arrangiamenti ai costumi, evoluzione di tutto ciò che abbiamo visto finora. Il nuovo album LAURO - ACHILLE IDOL SUPERSTAR, nuova edizione dell’album LAURO, include 7 nuove bonus track. Il processo creativo subìto da questi brani – tra le mura di uno studio costruito per l’occasione sull’isola che è stata casa dell’artista per più di cinque mesi – ha richiesto un lungo tempo di lavorazione, per poi andare a intrecciarsi in un unicum esemplare con le fila dell’album LAURO. Un viaggio che probabilmente non è ancora giunto alla sua fase finale ma che dà un’identità chiara e precisa di quello che sarà il futuro dell’artista-innovatore del panorama musicale italiano.',
      practicalInfo: '14 Luglio 2022 - Teatro Antico di Taormina',
      images: [
        'https://i0.wp.com/www.hiphopstarztour.com/wp-content/uploads/2020/02/achille-lauro-superstar-tour-2022.jpg?fit=400%2C300&ssl=1',
        'https://www.traveltaormina.com/images/icagenda/thumbs/themes/ic_large_w900h600q100_achille-lauro-taormina-2022.jpg',
      ],
    },
    {
      name: 'Taormina Film Fest',
      shortDescription:
        'Taormina: lo sguardo corre dal mare invitante all’Etna imponente, come su un naturale grande schermo in Cinemascope. Il legame tra Taormina e il cinema è innato. A cavallo tra Ottocento e Novecento, quasi in coincidenza con l’invenzione dei fratelli Lumière, Taormina diventava patria elettiva del barone Wilhelm von Gloeden, che ha lasciato un suggestivo patrimonio visivo di fotografie e cartoline raffiguranti giovani siciliani agghindati come divinità dell’Olimpo (luogo proverbiale per la Decima Musa) con sullo sfondo panorami risplendenti: il suo studio fu visitato, tra gli altri, da Oscar Wilde, Gabriele D’Annunzio, Eleonora Duse. Va in scena la 68° edizione dell’acclamato Festival del Cinema, un concorso internazionale composto da sei film: una selezione ufficiale riservata a opere prime e seconde che si alterneranno alle première sul grande schermo del Teatro Antico. In programma anche agli incontri con gli autori, le personalità del cinema e della cultura e, naturalmente, le celebrities nella settimana in cui Taormina si trasforma in una sala cinematografica open air.',
      practicalInfo: 'Dal 26 Giugno al 2 Luglio - Teatro antico di Taormina',
      images: [
        'https://i0.wp.com/www.universalmovies.it/wp-content/uploads/2022/03/taormina-film-festival-2022-scaled.jpeg?resize=1210%2C642&ssl=1',
        'https://www.askanews.it/wp-content/uploads/2021/01/20210121_194150_A61B774C.jpg',
        'https://sicilianews24.it/wp-content/uploads/2018/07/Taormina-Film-Fest-19-Luglio-2018-Gianvito-Casadonte-dir-art-64tff_-Luciano-Cannito-coreografo_-Rossella-Brescia-showgirl_-Dale-Hildebrand-regista-1024x683.jpg',
      ],
    },
  ]
  const eventList = require('./json/events').concat(eventList2)
  for (const element of eventList) {
    delete element.link
  }
  await models.Event.bulkCreate(eventList)
}
