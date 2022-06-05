import { mergeEventJsonId } from '../../script'

export default async (models) => {
  const eventTypeList = [
    {
      name: 'Estate',
    },
    {
      name: 'Inverno',
    },
    {
      name: 'Altro',
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

  eventsList = mergeEventJsonId(
    mergeEventJsonId(
      mergeEventJsonId(eventsList, otherJson, eventType[2].id),
      winterJson,
      eventType[1].id
    ),
    summerJson,
    eventType[0].id
  )

  for (const element of eventsList) {
    delete element.link
  }
  await models.Event.bulkCreate(eventsList)
}
