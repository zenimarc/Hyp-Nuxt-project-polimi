<template>
  <div>
    <div>
      <div class="text-center intro page-section top-center">
        <h1 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h1>
      </div>
    </div>
    <the-breadcrumb
      :paths="['/']"
      :labels="['Home']"
      :activeLabel="'Itinerari'"
    />
    <section id="pois" class="page-section">
      <div class="container">
        <div class="row text-center gy-5">
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
  </div>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    CardElement,
    TheBreadcrumb,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    const data2 = (await $axios.get('/api/page-info/itineraries/')).data
    return {
      itineraryList: data,
      infoPage: data2,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Itinerari Taormina',
    }
  },
}
</script>

<style scoped>
.intro {
  background-image: url('/assets/img/backgroundItineraries.jpg');
  background-position: center 45%;
}
</style>
