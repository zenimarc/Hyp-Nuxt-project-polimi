import { mergeServiceJsonId, formatData, sorting } from './scriptService/script'

export default async (models) => {
  // Service types
  const serviceTypeList = [
    {
      name: 'Pharmacies',
    },
    {
      name: 'Restaurants',
    },
    {
      name: 'ATMs',
    },
  ]

  const serviceType = {}
  for (let i = 0; i < serviceTypeList.length; i++)
    serviceType[i] = await models.ServiceType.create(serviceTypeList[i])

  let servicesList = new Array(0)
  const pharmaciesJson = require('./json/pharmacies')
  const restaurantsJson = require('./json/restaurants')
  const atmsJson = require('./json/atms')

  servicesList = mergeServiceJsonId(
    mergeServiceJsonId(
      mergeServiceJsonId(servicesList, atmsJson, serviceType[2].id),
      restaurantsJson,
      serviceType[1].id
    ),
    pharmaciesJson,
    serviceType[0].id
  )

  servicesList = formatData(servicesList)
  servicesList = sorting(servicesList)

  await models.Service.bulkCreate(servicesList)
}
