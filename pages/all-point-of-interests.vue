<template>
  <section id="pois" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
        </h3>
      </div>
      <div class="row text-center gy-5 gx-10">
        <card-element
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :name="poi.nonDetailedName"
          :img="poi.images[0]"
          :address="poi.address"
          :cardtype="'poi'"
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
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/pois')
    const data2 = (await $axios.get('/api/page-info/pois/')).data
    return {
      poiList: data,
      infoPage: data2,
    }
  },
  data() {
    return {}
  },
}
</script>
