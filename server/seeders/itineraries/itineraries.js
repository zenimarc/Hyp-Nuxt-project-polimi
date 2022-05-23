export default async (models) => {
  // Point of interest seeder
  const rawItinerariesList = [
    {
      title: 'itine1',
      durationMinutes: 120,
      shortDescription: 'sdss',
      images: [],
      involvedPois: [1, 2],
    },
    {
      title: 'itine2',
      durationMinutes: 120,
      shortDescription: 'sdss',
      images: [],
      involvedPois: [1, 2, 3],
    },
  ]

  for (const itinerary of rawItinerariesList) {
    const { involvedPois, ...newItinerary } = itinerary // remove involvedPois key from object to send to db
    const newlyCreatedItinerary = await models.Itinerary.create(newItinerary)
    const involvesBridge = []
    for (const [index, involvedPoi] of itinerary.involvedPois.entries()) {
      involvesBridge.push({
        PointOfInterestId: involvedPoi,
        ItineraryId: newlyCreatedItinerary.id,
        order: index,
      })
    }
    await models.Involves.bulkCreate(involvesBridge)
  }
}
