export default async (models) => {
  // Point of interest seeder
  const poiList = [
    {
      name: 'Chiesa di San Giuseppe',
      visitInformation: '',
      shortDescription: `La chiesa di San Giuseppe, situata accanto alla Torre dell'Orologio o Torre di mezzo, si affaccia dominandola sulla piazza IX Aprile. Fu costruita tra la fine del 1600 e l'inizio del 1700 in stile barocco. Una doppia rampa di scale, delimitata da una balaustra in pietra di Siracusa, porta sul sagrato della chiesa. La facciata è costituita da un grande portale centrale, realizzato con marmi di Taormina di diversi colori, dal quale si accede all'interno, e due piccoli portali laterali, realizzati in piestra di Siracusa, dai quali si accede in sagrestia a destra e in una piccola saletta spesso usata per mostre di pittura a sinistra. Sul lato destro della chiesa sorge il grande campanile, la cui parte inferiore è fatta con grossi blocchi di pietra di Taormina. La chiesa era la sede della “Confraternita delle anime del Purgatorio” per questo motivo in diversi punti della facciata ed anche all'interno della chiesa si possono notare delle figure umane in mezzo alle fiamme che simboleggiano la purificazione dai peccati. All’interno, la chiesa è ad una sola navata con un transetto che ha al suo centro una cupola in cui si può ammirare un affresco che raffigura San Giovanni Bosco bambino fra la Madonna e Gesù.
        Sono i Padri Salesiani, a Taormina dal 1911, che di occupano della chiesa dal 1919.`,
      address: 'Piazza 9 Aprile, Taormina, Sicilia, Italy 98039',
      images: [
        'https://i.pinimg.com/originals/6a/04/d1/6a04d1010517ac0e39704e18fa24f6f1.jpg',
      ],
    },
  ]
  await models.PointOfInterest.bulkCreate(poiList)
}
