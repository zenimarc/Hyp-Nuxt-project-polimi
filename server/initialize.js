import initializeServiceList from './seeders/services/services'
import initializeMemberList from './seeders/teamMembers/members'
import initializePoiList from './seeders/poi/poi'
import initializeItinerariesList from './seeders/itineraries/itineraries'
import initializeEventsList from './seeders/events/events'
import initializeNearServices from './seeders/nearServices'

export default async (models) => {
  //  init services
  await initializeServiceList(models)
  //  init members
  await initializeMemberList(models)
  //  init poi
  await initializePoiList(models)
  //  init itineraries
  await initializeItinerariesList(models)
  //  init events
  await initializeEventsList(models)
  // fill the near services in poi
  await initializeNearServices(models)
}
