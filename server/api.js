const express = require('express')
const cors = require('cors')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(cors())
app.use(express.json())

let database = null
// Production (use this code when deploying to production in Heroku)
if (process.env.NODE_ENV === 'production') {
  const pg = require('pg')
  pg.defaults.ssl = true
  database = new Sequelize(process.env.DATABASE_URL, {
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  })
} else {
  // Development
  database = new Sequelize('postgres://postgres:postgres@localhost:5432/hyp')
}

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  // Team member
  // ========================================================
  const TeamMember = database.define('teamMember', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  // Social
  // ========================================================
  const Social = database.define('socials', {
    name: DataTypes.STRING,
    url: DataTypes.TEXT,
  })
  Social.belongsTo(TeamMember)
  TeamMember.hasMany(Social)
  // Service
  // ========================================================
  const Service = database.define('service', {
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    address: DataTypes.STRING,
    weekDay: DataTypes.ARRAY(DataTypes.JSON),
    coords: DataTypes.STRING,
    serviceLink: DataTypes.TEXT,
  })

  const ServiceType = database.define('serviceType', {
    name: DataTypes.STRING,
    mapMarkerIcon: DataTypes.STRING,
  })
  ServiceType.hasMany(Service)
  Service.belongsTo(ServiceType)
  // ========================================================
  // Point of Interest
  // ========================================================
  const PointOfInterest = database.define('PointOfInterest', {
    name: DataTypes.STRING,
    nonDetailedName: DataTypes.STRING,
    visitInformation: DataTypes.TEXT,
    shortDescription: DataTypes.TEXT,
    address: DataTypes.STRING,
    coords: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.TEXT),
  })
  // ========================================================
  // Itinerary
  const Itinerary = database.define('Itinerary', {
    title: DataTypes.STRING,
    durationMinutes: DataTypes.INTEGER,
    shortDescription: DataTypes.TEXT,
  })
  // ========================================================
  // Events
  const Event = database.define('event', {
    name: DataTypes.STRING,
    shortDescription: DataTypes.TEXT,
    practicalInfo: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.TEXT),
  })
  // ========================================================
  // EventType
  const EventType = database.define('eventType', {
    name: DataTypes.STRING,
  })
  // ========================================================
  // Involves bridge table
  // look here for documentation: https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
  const Involves = database.define(
    'Involves',
    {
      order: DataTypes.INTEGER,
    },
    { timestamps: false }
  )
  const isSurrounded = database.define(
    'IsSurrounded',
    {
      distanceMeters: DataTypes.INTEGER,
    },
    { timestamps: false }
  )
  Itinerary.belongsToMany(PointOfInterest, { through: Involves })
  PointOfInterest.belongsToMany(Itinerary, { through: Involves })
  PointOfInterest.belongsToMany(Service, { through: isSurrounded })
  Service.belongsToMany(PointOfInterest, { through: isSurrounded })
  PointOfInterest.hasMany(Event)
  Event.belongsTo(PointOfInterest)
  EventType.hasMany(Event)
  Event.belongsTo(EventType)

  await database.sync({ force: true })
  return {
    TeamMember,
    Social,
    PointOfInterest,
    Itinerary,
    Involves,
    Service,
    ServiceType,
    Event,
    EventType,
  }
}
// ========================================================
// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
  index: {
    title: 'Homepage',
    image: 'https://fs.i3lab.group/hypermedia/images/index.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
  about: {
    title: 'About',
    introduction: `ABOUT: IL NOSTRO TEAM`,
    description: `Piacere di fare la tua conoscenza! Esplora i nostri social per più informazioni!`,
    footer: 'Siam sempre pronti a migliorare per offrirti nuovi contenuti!',
    introductionCity: `ABOUT: TAORMINA`,
    subtitleCity: `Alcuni cenni sulla storia di questa magnifica città!`,
    descriptionCity: [
      `Taormina nell'antichità`,
      `Taormina dal Medioevo ad oggi`,
    ],
    textCity: [
      'I siculi si insediarono sul monte Tauro vicino l’attuale castello e instaurarono buoni rapporti con la nuova colonia greca di Naxos nel 735 a.C. Quando Dionisio I di Siracusa distrusse Naxos, i siculi concessero rifugio ai coloni greci prima che il tiranno di Siracusa conquistasse l’insediamento greco di Tauromenion. Con Andromaco, padre dello storico greco Timeo, i greci governarono la città per la prima volta nel 358 a.C. Come alleata di Siracusa, la città visse un periodo di crescita economica e culturale prima di essere conquistata prima dai cartaginesi e dopo la prima guerra punica dai romani. Come “civitas foederata” la romana Tauromenium sperimentò un altro periodo molto prospero. Nella prima guerra servile, Taormina fu una delle principali roccaforti degli schiavi e si alleò con Sesto Pompeo dopo l’assasinio di Giulio Cesare. L’alleanza con Sesto Pompeo ha portato alla deportazione della popolazione dopo la vittoria di Ottaviano. ',
      'Durante la conquista araba della Sicilia, Taormina divenne temporaneamente la capitale della provincia bizantina siciliana, prima di essere l’ultima città siciliana a cadere in mano agli arabi nel 902 d.C. Gli arabi distrussero la città dopo due rivolte nel 962 e nel 969 e la ricostruirono. Sotto i normanni, Taormina acquistò importanza – nel 1410, il parlamento si incontrò per scegliere il nuovo re. Tuttavia, gli spagnoli e i francesi misero in moto il declino di Taormina finchè la città non venne riscoperta come meta turistica nel XIX secolo. Con l’aumentare del turismo la città ritrovò il suo splendore e divenne uno dei più conosciuti centri turistici della Sicilia orientale. ',
    ],
    img: [
      'https://www.comune.taormina.me.it/la-citt/storia/immagini/teatrogreco_bn.jpg',
      'https://www.archetravel.com/wp-content/uploads/2020/05/teatro-di-taormina-03.jpg',
    ],
  },
  services: {
    title: 'Services',
    introduction: `TUTTI I SERVIZI`,
    description: `Ecco per te la lista dei servizi di Taormina!`,
  },
  contacts: {
    title: 'Contacts',
    introduction: `CONTATTI`,
    description: `Compila il form se vuoi chiederci/farci sapere qualunque cosa!`,
  },
  pois: {
    title: 'Pois',
    introduction: 'PUNTI DI INTERESSE',
    description: `Scopri le maggiori attrazioni di Taormina!`,
  },
  itineraries: {
    title: 'Itineraries',
    introduction: 'ITINERARI',
    description: `Segui queste guide per provare sulla tua pelle esperienze che non dimenticherai!`,
  },
  events: {
    title: 'Events',
    introduction: 'EVENTI',
    description: `Non perderti gli eventi della città!`,
  },
}

async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)

  app.get('/page-info/:topic', (req, res) => {
    const { topic } = req.params
    const result = pageContentObject[topic]
    return res.json(result)
  })

  app.get('/poi/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await models.PointOfInterest.findOne({
      where: { id },
      include: [
        { model: models.Service, include: [{ model: models.ServiceType }] },
        { model: models.Event },
      ],
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the POIs in our actual database
  app.get('/pois', async (req, res) => {
    const result = await models.PointOfInterest.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        visitInformation: element.visitInformation,
        // shortDescription: element.shortDescription,
        address: element.address,
        images: element.images,
        nonDetailedName: element.nonDetailedName,
      })
    }
    return res.json(filtered)
  })

  app.get('/itinerary/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await models.Itinerary.findOne({
      where: { id },
      include: [{ model: models.PointOfInterest }],
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the itineraries in our actual database
  app.get('/itineraries', async (req, res) => {
    const result = await models.Itinerary.findAll({
      include: models.PointOfInterest,
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        title: element.title,
        durationMinutes: element.durationMinutes,
        shortDescription: element.shortDescription,
        img: element.PointOfInterests[2].images[0],
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the members in our actual database
  app.get('/teamMembers', async (req, res) => {
    const result = await models.TeamMember.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        surname: element.surname,
        id: element.id,
        jobTitle: element.jobTitle,
      })
    }
    return res.json(filtered)
  })

  // event details page
  app.get('/event/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await models.Event.findOne({
      where: { id },
    })
    return res.json(result)
  })

  // events page
  app.get('/events', async (req, res) => {
    const result = await models.Event.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        shortDescription: element.shortDescription,
        practicalInfo: element.practicalInfo,
        images: element.images,
      })
    }
    return res.json(filtered)
  })

  app.get('/events/:idType', async (req, res) => {
    const id = Number(req.params.idType)
    let result = new Array(0)
    if (id !== 0) {
      result = await models.Event.findAll({
        where: { eventTypeId: id },
      })
    } else {
      result = await models.Event.findAll()
    }
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        shortDescription: element.shortDescription,
        practicalInfo: element.practicalInfo,
        images: element.images,
      })
    }
    return res.json(filtered)
  })

  app.get('/eventType', async (req, res) => {
    const result = await models.EventType.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
      })
    }
    return res.json(filtered)
  })

  app.get('/eventType/:category', async (req, res) => {
    const category = +req.params.category
    const result = await models.EventType.findOne({
      where: { name: category },
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the socials in our actual database
  app.get('/socials/:idMember', async (req, res) => {
    const idMember = Number(req.params.idMember)
    const result = await models.Social.findAll({
      where: { teamMemberId: idMember },
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        url: element.url,
        teamMemberId: element.teamMemberId,
      })
    }
    return res.json(filtered)
  })
  // HTTP GET api that returns the filtered services type by category
  app.get('/servicesType/:category', async (req, res) => {
    const category = +req.params.category
    const result = await models.ServiceType.findOne({
      where: { name: category },
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the services type in our actual database
  app.get('/servicesType', async (req, res) => {
    const result = await models.ServiceType.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the services in our actual database
  app.get('/services', async (req, res) => {
    const result = await models.Service.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.img,
        weekDay: element.weekDay,
        address: element.address,
        serviceLink: element.serviceLink,
        serviceTypeId: element.serviceTypeId,
        coords: element.coords,
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the services in our actual database filtered by serviceType
  app.get('/services/:idType', async (req, res) => {
    const id = Number(req.params.idType)
    let result = new Array(0)
    if (id !== 0) {
      result = await models.Service.findAll({
        where: { serviceTypeId: id },
      })
    } else {
      result = await models.Service.findAll()
    }
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.img,
        weekDay: element.weekDay,
        address: element.address,
        serviceLink: element.serviceLink,
        coords: element.coords,
      })
    }
    return res.json(filtered)
  })
  // HTTP GET api that returns all the top itineraries
  app.get('/top/itineraries', async (req, res) => {
    const result = await models.Itinerary.findAll({
      include: models.PointOfInterest,
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.title,
        img: element.PointOfInterests[2].images[0],
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // events page
  app.get('/top/events', async (req, res) => {
    const result = await models.Event.findAll({ limit: 5 })
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.images,
      })
    }
    return res.json(filtered)
  })
  // HTTP GET api that returns all the top POIs i
  app.get('/top/pois', async (req, res) => {
    const result = await models.PointOfInterest.findAll({ limit: 5 })
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        img: element.images,
        name: element.nonDetailedName,
      })
    }
    return res.json(filtered)
  })
  // HTTP GET api that returns the top services in our actual database
  app.get('/top/services', async (req, res) => {
    const result = await models.Service.findAll({ limit: 5 })
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.img,
      })
    }
    return res.json(filtered)
  })
}

runMainApi()

export default app
