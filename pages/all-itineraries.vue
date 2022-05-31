<template>
  <section id="pois" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Itineraries</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <div class="row text-center gy-5 gx-10">
        <card-element
          v-for="(itinerary, itineraryIndex) of itineraryList"
          :id="itinerary.id"
          :key="`poi-index-${itineraryIndex}`"
          :name="itinerary.title"
          :img="itinerary.img"
          :address="''"
          :cardtype="'itinerary'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    CardElement,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/itineraries')
    // console.log(data)
    return {
      itineraryList: data,
    }
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
