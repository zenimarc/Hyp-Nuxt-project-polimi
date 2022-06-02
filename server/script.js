import fetch from 'node-fetch'
// function which transforms the 7 day elements from json file in 1 array element
function formatData(arrayList) {
  const dataVals = Object.values(arrayList)
  let i = 0
  for (const dataVal of dataVals) {
    dataVals[i].weekDay = [
      {
        monday: dataVal.monday,
        tuesday: dataVal.tuesday,
        wednesday: dataVal.wednesday,
        thursday: dataVal.thursday,
        friday: dataVal.friday,
        saturday: dataVal.saturday,
        sunday: dataVal.sunday,
      },
    ]
    delete dataVals[i].monday
    delete dataVals[i].tuesday
    delete dataVals[i].wednesday
    delete dataVals[i].thursday
    delete dataVals[i].friday
    delete dataVals[i].saturday
    delete dataVals[i].sunday
    delete dataVals[i].order

    i++
  }
  return arrayList
}
// ================================================

// function which randomized the displayed services
function sorting(arrayList) {
  return arrayList.sort(() => Math.random() - 0.5)
}
//  ==========================================================0
function mergeServiceJsonId(arrayJson, externalJson, id) {
  //  function that integrates the external json with the current array and dynamically adds the forign key Id
  for (let i = 0; i < externalJson.length; i++)
    externalJson[i].serviceTypeId = id
  return arrayJson.concat(externalJson)
}
//  ==========================================================0
function mergeEventJsonId(arrayJson, externalJson, id) {
  //  function that integrates the external json with the current array and dynamically adds the forign key Id
  for (let i = 0; i < externalJson.length; i++) externalJson[i].eventTypeId = id
  return arrayJson.concat(externalJson)
}
//  ==========================================================0

// function which extracts coords from address (Google Maps)
async function convertAddressToCoords(address) {
  const coordsLink = await (
    await fetch(
      'https://maps.google.com/maps/api/geocode/json?address=' +
        address +
        '&key=AIzaSyAEIq77p46JVQVeDNbl-q59sj_uJKnYl94'
    )
  ).json()

  return (
    coordsLink.results[0].geometry.location.lat +
    ', ' +
    coordsLink.results[0].geometry.location.lng
  )
}
// ================================================
export {
  mergeServiceJsonId,
  sorting,
  formatData,
  convertAddressToCoords,
  mergeEventJsonId,
}
