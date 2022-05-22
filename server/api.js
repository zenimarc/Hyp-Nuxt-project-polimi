const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/hyp'
)

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const TeamMember = database.define('teamMember', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  // Service
  // ========================================================
  const Service = database.define('service', {
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    address: DataTypes.STRING,
    monday: DataTypes.ARRAY(DataTypes.JSON),
    tuesday: DataTypes.ARRAY(DataTypes.JSON),
    wednesday: DataTypes.ARRAY(DataTypes.JSON),
    thursday: DataTypes.ARRAY(DataTypes.JSON),
    friday: DataTypes.ARRAY(DataTypes.JSON),
    saturday: DataTypes.ARRAY(DataTypes.JSON),
    sunday: DataTypes.ARRAY(DataTypes.JSON),
    order: DataTypes.STRING,
    serviceLink: DataTypes.TEXT,
  })

  const ServiceType = database.define('serviceType', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    introduction: DataTypes.STRING,
  })
  ServiceType.hasMany(Service)
  Service.belongsTo(ServiceType)
  // Point of Interest
  // ========================================================
  const PointOfInterest = database.define('pointOfInterest', {
    name: DataTypes.STRING,
    visitInformation: DataTypes.TEXT,
    shortDescription: DataTypes.TEXT,
    address: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.TEXT),
  })
  // ========================================================
  // Itinerary
  const Itinerary = database.define('itinerary', {
    title: DataTypes.STRING,
    durationMinutes: DataTypes.INTEGER,
    shortDescription: DataTypes.TEXT,
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
  Itinerary.belongsToMany(PointOfInterest, { through: Involves })
  PointOfInterest.belongsToMany(Itinerary, { through: Involves })
  PointOfInterest.belongsToMany(Service, { through: Involves })
  Service.belongsToMany(PointOfInterest, { through: Involves })

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
    PointOfInterest,
    Itinerary,
    Involves,
    Service,
    ServiceType,
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
    image: 'https://fs.i3lab.group/hypermedia/images/about.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
    socialsList: ['instagram', 'twitter', 'facebook', 'linkedin'],
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

  // HTTP GET api that returns all the services in our actual database
  app.get('/services', async (req, res) => {
    const result = await models.Service.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.img,
        monday: element.monday,
        tuesday: element.tuesday,
        wednesday: element.wednesday,
        thursday: element.thursday,
        friday: element.friday,
        saturday: element.saturday,
        sunday: element.sunday,
        address: element.address,
        order: element.order,
        serviceLink: element.serviceLink,
        serviceTypeId: element.serviceTypeId,
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
