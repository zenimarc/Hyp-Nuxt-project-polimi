export default async (models) => {
  // Point of interest seeder
  const poiList = require('./json/poi')
  console.log(JSON.stringify(poiList))
  for (const poi of poiList) {
    delete poi.order
  }
  await models.PointOfInterest.bulkCreate(poiList)
}
