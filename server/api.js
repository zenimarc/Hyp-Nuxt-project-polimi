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
  Event.belongsTo(PointOfInterest)

  const Cat = database.define('cat', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    breed: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  const Location = database.define('location', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
  })
  Location.hasMany(Cat)
  Cat.belongsTo(Location)
  await database.sync({ force: true })
  return {
    Cat,
    Location,
    TeamMember,
    Social,
    PointOfInterest,
    Itinerary,
    Involves,
    Service,
    ServiceType,
    Event,
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
    introduction: `IL NOSTRO TEAM`,
    description: `Piacere di fare la tua conoscenza! Esplora i nostri social per più informazioni!`,
    footer:
      'Cerchiamo di migliorare sempre per offrirti il miglior contenuto possibile!',
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

  app.get('/cats/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Cat.findOne({
      where: { id },
      include: [{ model: models.Location }],
    })
    return res.json(result)
  })

  app.get('/poi/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await models.PointOfInterest.findOne({
      where: { id },
      include: [
        { model: models.Service, include: [{ model: models.ServiceType }] },
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
        img: element.PointOfInterests[0].images[0],
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the cats in our actual database
  app.get('/cats', async (req, res) => {
    const result = await models.Cat.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        breed: element.breed,
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

  // HTTP POST api, that will push (and therefore create) a new element in
  // our actual database
  app.post('/cats', async (req, res) => {
    const { body } = req
    await models.Cat.create(body)
    return res.sendStatus(200)
  })
}

runMainApi()

export default app
