export default async (models) => {
  const locationList = [
    {
      name: 'Cat Paradise',
      city: 'Milan',
    },
    {
      name: 'Cat City',
      city: 'Rome',
    },
  ]
  const location0 = await models.Location.create(locationList[0])
  const location1 = await models.Location.create(locationList[1])
  const catList = [
    {
      name: 'Cat 1',
      breed: 'Siberian',
      description: 'Details about cat 1',
      img: 'https://fs.i3lab.group/hypermedia/cats/siberian.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 2',
      breed: 'Birman',
      description: 'Details about cat 2',
      img: 'https://fs.i3lab.group/hypermedia/cats/birman.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 3',
      breed: 'Bombay',
      description: 'Details about cat 3',
      img: 'https://fs.i3lab.group/hypermedia/cats/bombay.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 4',
      breed: 'Calico',
      description: 'Details about cat 4',
      img: 'https://fs.i3lab.group/hypermedia/cats/calico.jpg',
      locationId: location1.id,
    },
    {
      name: 'Cat 5',
      breed: 'Maine Coon',
      description: 'Details about cat 5',
      img: 'https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg',
      locationId: location1.id,
    },
  ]
  await models.Cat.bulkCreate(catList)
  //  Team members
  const membersList = [
    {
      name: 'Giorgio',
      surname: 'Verdi',
      jobTitle: 'head of office',
      img: 'https://i.pinimg.com/originals/3d/fa/72/3dfa721da08c2977a0fe583bea20d7d4.jpg',
    },
    {
      name: 'Luca',
      surname: 'Rossi',
      jobTitle: 'city expert',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',
    },
    {
      name: 'Franca',
      surname: 'Garzotto',
      jobTitle: 'researcher',
      img: 'https://garzotto.faculty.polimi.it/images/download.jpeg',
    },
  ]
  await models.TeamMember.bulkCreate(membersList)

  // Point of interest seeder
  const poiList = [
    {
      name: 'Chiesa di San Giuseppe',
      visitInformation: '',
      shortDescription: `La chiesa di San Giuseppe, situata accanto alla Torre dell'Orologio o Torre di mezzo, si affaccia dominandola sulla piazza IX Aprile. Fu costruita tra la fine del 1600 e l'inizio del 1700 in stile barocco. Una doppia rampa di scale, delimitata da una balaustra in pietra di Siracusa, porta sul sagrato della chiesa. La facciata è costituita da un grande portale centrale, realizzato con marmi di Taormina di diversi colori, dal quale si accede all'interno, e due piccoli portali laterali, realizzati in piestra di Siracusa, dai quali si accede in sagrestia a destra e in una piccola saletta spesso usata per mostre di pittura a sinistra. Sul lato destro della chiesa sorge il grande campanile, la cui parte inferiore è fatta con grossi blocchi di pietra di Taormina. La chiesa era la sede della “Confraternita delle anime del Purgatorio” per questo motivo in diversi punti della facciata ed anche all'interno della chiesa si possono notare delle figure umane in mezzo alle fiamme che simboleggiano la purificazione dai peccati. All’interno, la chiesa è ad una sola navata con un transetto che ha al suo centro una cupola in cui si può ammirare un affresco che raffigura San Giovanni Bosco bambino fra la Madonna e Gesù.
        Sono i Padri Salesiani, a Taormina dal 1911, che di occupano della chiesa dal 1919.`,
      address: 'Piazza 9 Aprile, Taormina, Sicilia, Italy 98039',
    },
  ]
  await models.PointOfInterest.bulkCreate(poiList)

  // Service types
  const serviceTypeList = [
    {
      name: 'Pharmacies',
      title: 'Title 1',
      introduction: 'Introduction 1',
    },
    {
      name: 'Banks',
      title: 'Title 2',
      introduction: 'Introduction 2',
    },
    {
      name: 'Restaurants',
      title: 'Title 3',
      introduction: 'Introduction 3',
    },
    {
      name: 'Health services',
      title: 'Title 4',
      introduction: 'Introduction 4',
    },
  ]

  const serviceType = {}
  for (let i = 0; i < serviceTypeList.length; i++) {
    serviceType[i] = await models.ServiceType.create(serviceTypeList[i])
    // console.log(JSON.stringify(serviceType[i]) + '~')
  }
}
