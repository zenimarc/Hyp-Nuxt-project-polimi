//  import initializeServiceList from './seeders/services/services'
import initializeMemberList from './seeders/teamMembers/members'
import initializeCatList from './seeders/cats/cats'
import initializePoiList from './seeders/poi/poi'

export default async (models) => {
  //  init services
  //  await initializeServiceList(models)
  //  init members
  await initializeMemberList(models)
  //  init cats
  await initializeCatList(models)
  //  init poi
  await initializePoiList(models)
}
