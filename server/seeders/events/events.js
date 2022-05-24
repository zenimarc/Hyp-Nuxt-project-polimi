export default async (models) => {
  const eventList = [
    {
      name: 'TAOBOK - Festival del Libro',
      shortDescription:
        'La XII edizione di Taobuk, vieni a scoprire insieme a molti ospiti la bellezza che si cela dietro ai libri',
      practicalInfo:
        'Quando : dal 16 al 20 Giugno 2022\n Dove : Piazza 9 Aprile,Taormina, Sicilia, Italy 98039',
      images: [
        'https://blog.taobuk.it/wp-content/uploads/2020/07/5_dMSKQg.jpg',
      ],
    },
    {
      name: 'Achille Lauro in concerto',
      shortDescription:
        'La star di Sanremo e rappresentante dello stato di San Marino ad Eurovision 2022 sarà in concerto nella splendida Tormina per un serata da non perdere',
      practicalInfo:
        'Quando : 14 Luglio 2022\n Dove : Teatro Antico di Taormina',
      images: [
        'https://i0.wp.com/www.hiphopstarztour.com/wp-content/uploads/2020/02/achille-lauro-superstar-tour-2022.jpg?fit=400%2C300&ssl=1',
        'https://www.traveltaormina.com/images/icagenda/thumbs/themes/ic_large_w900h600q100_achille-lauro-taormina-2022.jpg',
      ],
    },
  ]
  await models.Event.bulkCreate(eventList)
}
