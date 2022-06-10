import fetch from 'node-fetch'
// function which transforms the 7 day elements from json file in 1 array element

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
export { convertAddressToCoords, mergeEventJsonId }
