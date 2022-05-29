export default async (models) => {
  // Point of interest seeder
  /*   const poiList = [
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
    {
      name: 'Teatro Antico di Taormina',
      visitInformation: '',
      shortDescription: `L'edificazione del teatro inizia probabilmente ad opera dei Greci intorno al III sec. a.C., all'epoca di Gerone II. Per consentire la costruzione fu necessario asportare manualmente dalla montagna oltre 100000 m cubici di roccia. L'impianto fu poi ristrutturato ed ampliato dai Romani, che inserirono colonne, statue e le ingegnose coperture. 

      Il Teatro antico di Taormina, che era nato per ospitare rappresentazioni drammatiche o musicali, si era trasformato durante l'epoca romana per far posto ai giochi gladiatorii e alle battaglie navali. Questo comportò l'ampliamento dell'orchestra, che in epoca greca era destinata ai suonatori, in modo da essere adattata alla nuova funzione di arena.`,
      address: 'Via del teatro greco, 1',
      images: [
        'https://www.archetravel.com/wp-content/uploads/2020/05/teatro-di-taormina_fb.jpg',
      ],
    },
    {
      name: 'Villa Comunale',
      visitInformation: '',
      shortDescription: `La villa è un vero polmone verde, popolato da una rigogliosa vegetazione costituita da palmizi, piante grasse e una vasta quantità di fiori che in estate rendono questo luogo un incanto per gli occhi.

      La villa era originariamente abitata da Lady Florence Trevelyan, una nobildonna scozzese che abbandonò il proprio paese dopo aver avuto una relazione con l'erede al trono d'Inghilterra Edoardo VII. Arrivata a Taormina nel 1884 Lady Trevelyan si sposò col sindaco prof. Salvatore Cacciola.
      
      Il giardino divenne di proprietà del comune a partire dal 1922 e all'interno ancora oggi si possono ammirare delle particolari costruzioni fatte edificare da Lady Trevelyan a scopo ornamentale, chiamate victorian follies.`,
      address: 'Via Bagnoli Croce, Taormina, Sicilia, Italy 98039',
      images: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dd/48/20/fb-img-1473259476583.jpg?w=1100&h=-1&s=1',
      ],
    },
  ] */
  const poiList = require('./json/poi')
  console.log(JSON.stringify(poiList))
  for (const poi of poiList) {
    delete poi.coords
    delete poi.order
  }
  await models.PointOfInterest.bulkCreate(poiList)
}
