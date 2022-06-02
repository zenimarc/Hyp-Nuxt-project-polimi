import {
  mergeServiceJsonId,
  formatData,
  sorting,
  convertAddressToCoords,
} from './scriptService/script'

export default async (models) => {
  // Service types
  const serviceTypeList = [
    {
      name: 'Farmacie',
    },
    {
      name: 'Ristoranti',
    },
    {
      name: 'Musei',
    },
    {
      name: 'Bar',
    },
    {
      name: 'Bancomat',
    },
    {
      name: 'Benzinai',
    },
  ]

  const serviceType = {}
  for (let i = 0; i < serviceTypeList.length; i++)
    serviceType[i] = await models.ServiceType.create(serviceTypeList[i])

  let servicesList = new Array(0)
  const pharmaciesJson = require('./json/pharmacies')
  const restaurantsJson = require('./json/restaurants')
  const atmsJson = require('./json/atms')
  const gasJson = require('./json/gas')
  const coffeeJson = require('./json/coffee')
  const museumsJson = require('./json/museums')

  servicesList = mergeServiceJsonId(
    mergeServiceJsonId(
      mergeServiceJsonId(
        mergeServiceJsonId(
          mergeServiceJsonId(
            mergeServiceJsonId(servicesList, gasJson, serviceType[5].id),
            atmsJson,
            serviceType[4].id
          ),
          coffeeJson,
          serviceType[3].id
        ),
        museumsJson,
        serviceType[2].id
      ),
      restaurantsJson,
      serviceType[1].id
    ),
    pharmaciesJson,
    serviceType[0].id
  )
  for (const element of servicesList)
    element.coords = await convertAddressToCoords(element.address)

  servicesList = formatData(servicesList)
  servicesList = sorting(servicesList)

  await models.Service.bulkCreate(servicesList)
}
