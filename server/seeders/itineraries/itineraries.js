export default async (models) => {
  // Point of interest seeder
  const rawItinerariesList = [
    {
      title: 'Un giorno a Taormina',
      durationMinutes: 120,
      shortDescription: 'un giorno senza perdere nulla',
      involvedPois: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      title: 'itine2',
      durationMinutes: 120,
      shortDescription: 'sdss',
      involvedPois: [8, 9, 10, 11],
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
