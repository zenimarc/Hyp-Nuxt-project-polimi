export default async (models) => {
  // Point of interest seeder
  const rawItinerariesList = [
    {
      title: 'Un giorno a Taormina',
      durationMinutes: 120,
      shortDescription: 'Un giorno senza perdere nulla',
      involvedPois: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      title: 'Per le vie del centro',
      durationMinutes: 120,
      shortDescription: `Ammira l'unicità delle vie del centro`,
      involvedPois: [8, 10, 11],
    },
    {
      title: `Uno dei borghi più belli d'Italia: Castelmola`,
      durationMinutes: 120,
      shortDescription: 'Preparati per viste mozzafiato e luoghi stupendi',
      involvedPois: [13, 14, 15, 16, 17, 18, 19],
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
