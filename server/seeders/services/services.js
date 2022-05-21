export default async (models) => {
  // Service types
  const serviceTypeList = [
    {
      name: 'Pharmacies',
      title: 'Title 1',
      introduction: 'Introduction 1',
    },
    {
      name: 'Restaurants',
      title: 'Title 3',
      introduction: 'Introduction 3',
    },
    {
      name: 'ATMs',
      title: 'Title 2',
      introduction: 'Introduction 2',
    },
  ]

  const serviceType = {}
  for (let i = 0; i < serviceTypeList.length; i++)
    serviceType[i] = await models.ServiceType.create(serviceTypeList[i])

  //  function that integrates the external json with the current array and dynamically adds the forign key Id
  //  ==========================================================0
  function mergeServiceJsonId(arrayJson, externalJson, id) {
    for (let i = 0; i < externalJson.length; i++)
      externalJson[i].serviceTypeId = id
    return arrayJson.concat(externalJson)
  }
  //  ==========================================================0
  let servicesList = new Array(JSON)

  const pharmaciesJson = require('./pharmacies')
  servicesList = mergeServiceJsonId(
    servicesList,
    pharmaciesJson,
    serviceType[0].id
  )
  await models.Service.bulkCreate(servicesList)
}
