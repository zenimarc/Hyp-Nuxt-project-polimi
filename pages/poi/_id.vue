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
      <div class="col-lg-6 ms-auto image-wrapper">
        <img :src="images[0]" :alt="name" width="100%" />
      </div>
    </div>
    <div class="map-container mt-4">
      <Map title="How to reach it" :query="`${name} taormina`" />
    </div>
  </div>
</template>

<script>
import Map from '~/components/Map.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'PoidetailsPage',
  components: { Map },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi/' + id)
    return {
      id: data.id,
      name: data.nonDetailedName,
      visitInformation: data.visitInformation,
      shortDescription: data.shortDescription,
      address: data.address,
      images: data.images,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
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
