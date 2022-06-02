export default async (models) => {
  const allServices = await models.Service.findAll()
  const allPois = await models.PointOfInterest.findAll()
  const maxMetersToBeNear = 300
  for (const service of allServices) {
    for (const poi of allPois) {
      const { lat: lat1, lng: lon1 } = parseCoords(poi.coords)
      const { lat: lat2, lng: lon2 } = parseCoords(service.coords)
      const distanceMeters = calcRadialDistanceCoords(lat1, lat2, lon1, lon2)
      if (distanceMeters < maxMetersToBeNear) {
        poi.addService(service, {
          through: { distanceMeters: Math.ceil(distanceMeters) },
        })
      }
    }
  }
}

function calcRadialDistanceCoords(lat1, lat2, lon1, lon2) {
  const R = 6371e3 // metres
  const φ1 = (lat1 * Math.PI) / 180 // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const d = R * c // in metres
  return d
}

function parseCoords(stringCoords) {
  const [latString, lngString] = stringCoords.split(',')
  return { lat: Number(latString), lng: Number(lngString) }
}
