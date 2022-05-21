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
  for (let i = 0; i < serviceTypeList.length; i++) {
    serviceType[i] = await models.ServiceType.create(serviceTypeList[i])
    // console.log(JSON.stringify(serviceType[i]) + '~')
  }
  const pharmaciesJson = require('./pharmacies')

  for (let i = 0; i < pharmaciesJson.length; i++) {
    console.log(JSON.stringify(pharmaciesJson))
    pharmaciesJson[i].serviceTypeId = serviceType[0].id
  }

  await models.Service.bulkCreate(pharmaciesJson)
}
