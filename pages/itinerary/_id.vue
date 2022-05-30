<template>
  <section id="about" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{ title }}</h2>
        <h3 class="section-subheading text-muted">
          {{ shortDescription }}
        </h3>
      </div>
      <ul class="timeline">
        <itinerary-step
          v-for="(poi, poiIndex) of poiList"
          :key="`poi-index-${poiIndex}`"
          :image="poi.images[0]"
          :name="poi.name"
          :short-description="poi.shortDescription"
          :inverted="poiIndex % 2 !== 0"
          :poi-id="poi.id"
        />

        <li class="timeline-inverted">
          <div class="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'ItineraryPage',
  components: { ItineraryStep },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itinerary/' + id)
    return {
      id: data.id,
      title: data.title,
      durationMinutes: data.durationMinutes,
      shortDescription: data.shortDescription,
      address: data.address,
      images: data.PointOfInterests.map((poi) => poi.images[0]),
      poiList: data.PointOfInterests,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/all-point-of-interests')
    },
  },
}
</script>
