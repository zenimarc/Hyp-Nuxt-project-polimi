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
export { mergeServiceJsonId, sorting, formatData }
