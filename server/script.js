// function which transforms the 7 day elements from json file in 1 array element

function mergeEventJsonId(arrayJson, externalJson, id) {
  //  function that integrates the external json with the current array and dynamically adds the forign key Id
  for (let i = 0; i < externalJson.length; i++) externalJson[i].eventTypeId = id
  return arrayJson.concat(externalJson)
}
//  ==========================================================0

// ================================================
export { mergeEventJsonId }
