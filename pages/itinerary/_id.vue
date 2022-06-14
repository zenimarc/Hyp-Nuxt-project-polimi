<template>
  <section id="about" class="page-section">
    <div class="container">
      <the-breadcrumb
        :paths="['/', '/all-itineraries']"
        :labels="['Home', 'Itinerari']"
        :activeLabel="title"
      />
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{ title }}</h2>
        <h3 id="itine-subheading" class="section-subheading text-muted">
          {{ shortDescription }}
        </h3>
        <itinerary-duration class="duration" :duration="durationMinutes" />
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
      </ul>
    </div>
    <div id="itinerary-map"></div>
  </section>
</template>

<script>
import ItineraryStep from '~/components/ItineraryStep.vue'
import CommonMixin from '~/mixins/common'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
import ItineraryDuration from '~/components/ItineraryDuration.vue'
export default {
  name: 'ItineraryPage',
  components: { ItineraryStep, TheBreadcrumb, ItineraryDuration },
  mixins: [CommonMixin],
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
  mounted() {
    // Create the script tag, set the appropriate attributes
    window.google = {}
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.$config.GOOGLE_API_KEY}&callback=initMap`
    script.async = true
    const tourStops = this.poiList.map((poi) => {
      return [this.parseCoords(poi.coords), poi.name]
    })
    function initMap() {
      // Create an info window to share between markers.
      const infoWindow = new window.google.maps.InfoWindow()

      const map = new window.google.maps.Map(
        document.getElementById('itinerary-map'),
        {
          zoom: 15,
          center: tourStops[0][0],
        }
      )

      tourStops.forEach(([position, title], i) => {
        const marker = new window.google.maps.Marker({
          position,
          map,
          title: `${i + 1}. ${title}`,
          label: `${i + 1}`,
          optimized: false,
        })

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', () => {
          infoWindow.close()
          infoWindow.setContent(marker.getTitle())
          infoWindow.open(marker.getMap(), marker)
        })
      })
    }

    window.initMap = initMap

    // Append the 'script' element to 'head'
    document.head.appendChild(script)
  },
  methods: {
    backToList() {
      this.$router.push('/all-point-of-interests')
    },
  },
}
</script>
<style scoped>
#itinerary-map {
  height: 500px;
}
.section-subheading {
  margin-bottom: 1rem;
}
#itine-subheading {
  margin-bottom: 1rem;
}
.duration {
  margin-bottom: 2rem;
}
</style>
