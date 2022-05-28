<template>
  <section id="pois" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Places</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <div class="row text-center gy-5 gx-10">
        <card-element
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :name="poi.name"
          :img="poi.images[0]"
          :address="poi.address"
          :cardType="'poi'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
export default {
  name: 'PoiListPage',
  components: {
    CardElement,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
