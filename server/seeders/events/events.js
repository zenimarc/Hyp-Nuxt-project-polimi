import { mergeServiceJsonId } from '../services/scriptService/script'

export default async (models) => {
  const eventTypeList = [
    {
      name: 'Other',
    },
    {
      name: 'Summer',
    },
    {
      name: 'Winter',
    },
  ]

  const eventType = {}
  for (let i = 0; i < eventTypeList.length; i++) {
    eventType[i] = await models.EventType.create(eventTypeList[i])
  }

  let eventsList = new Array(0)
  const otherJson = require('./json/otherEvents')
  const summerJson = require('./json/summerEvents')
  const winterJson = require('./json/winterEvents')

  eventsList = mergeServiceJsonId(
    mergeServiceJsonId(
      mergeServiceJsonId(eventsList, winterJson, eventType[2].id),
      summerJson,
      eventType[1].id
    ),
    otherJson,
    eventType[0].id
  )

  for (const element of otherJson) {
    delete element.link
  }
  for (const element of summerJson) {
    delete element.link
  }
  await models.Event.bulkCreate(eventsList)
}
