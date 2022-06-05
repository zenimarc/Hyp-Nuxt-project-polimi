<template>
  <div class="container mt-5 mb-5">
    <div class="row gy-5">
      <div class="col-lg-6 ms-auto description-wrapper">
        <h1 class="title">{{ name }}</h1>
        <p class="visitInformation">
          {{ visitInformation }}
        </p>
        <p class="description">
          {{ shortDescription }}
        </p>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          Back to list
        </button>
      </div>
      <div class="col-lg-6 image-wrapper">
        <carousel-element :images="images" />
      </div>
    </div>
    <div id="map" class="map-container mt-4"></div>
    <!-- <div class="row">
      <div
        v-for="(service, serviceIndex) of nearServices"
        :key="`poi-index-${serviceIndex}`"
      >
        {{ service.name }} is at
        {{ service.IsSurrounded.distanceMeters }} meters
      </div>
    </div> -->
    <template v-if="hostedEvents.length > 0">
      <div class="row text-center gy-5 gx-10">
        <h2>Scopri gli eventi</h2>
        <card-element
          v-for="(event, eventIndex) of hostedEvents"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          :name="event.name"
          :img="event.images[0]"
          :address="''"
          :cardtype="'event'"
        />
      </div>
    </template>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import CarouselElement from '~/components/CarouselElement.vue'
export default {
  name: 'PoidetailsPage',
  components: { CarouselElement },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi/' + id)
    console.log(data)
    return {
      id: data.id,
      name: data.nonDetailedName,
      coords: data.coords,
      visitInformation: data.visitInformation,
      shortDescription: data.shortDescription,
      address: data.address,
      images: data.images,
      nearServices: data.services,
      hostedEvents: data.events,
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
    const poi = {
      name: this.name,
      address: this.address,
      stringCoords: this.coords,
      coords: this.parseCoords(this.coords),
    }
    const services = this.nearServices
    const parseCoordsFunction = this.parseCoords

    function pinSymbol(color, strokeColor = '#000') {
      return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
        fillColor: color,
        fillOpacity: 1,
        strokeColor,
        strokeWeight: 2,
        scale: 1.5,
      }
    }

    function initMap() {
      // Create an info window to share between markers.
      const infoWindow = new window.google.maps.InfoWindow()

      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: poi.coords,
      })

      // marker of the poi
      const poiMarker = new window.google.maps.Marker({
        position: poi.coords,
        map,
        title: poi.name,
        optimized: false,
        zIndex: 99,
      })

      // Add a click listener for poi marker, and set up the info window.
      poiMarker.addListener('click', () => {
        infoWindow.close()
        infoWindow.setContent(
          `<b>${poi.name}</b><br><a href='https://www.google.com/maps/search/${poi.stringCoords}'
           target='_blank'>Ottieni indicazioni</a>`
        )
        infoWindow.open(poiMarker.getMap(), poiMarker)
      })

      services.forEach((service, i) => {
        const marker = new window.google.maps.Marker({
          position: parseCoordsFunction(service.coords),
          map,
          title: `${service.name}`,
          icon: {
            ...pinSymbol('#37323E', '#37323E'),
            labelOrigin: new window.google.maps.Point(0, -29),
          },
          label: {
            text: service.serviceType.mapMarkerIcon, // codepoint from https://fonts.google.com/icons
            fontFamily: 'Material Icons',
            color: '#fff',
            fontSize: '20px',
          },
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
      // this.$router.push('/all-point-of-interests')
      this.$router.back()
    },
  },
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
.visitInformation {
  --bs-text-opacity: 1;
  color: #6c757d !important;
  font-size: smaller;
}
.map-container {
  width: 100%;
  height: 36rem;
}
</style>
