<template>
  <div>
    <div>
      <div class="text-center intro page-section top-center">
        <h1 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h1>
      </div>
    </div>
    <the-breadcrumb :paths="['/']" :labels="['Home']" :activeLabel="'Posti'" />
    <section id="pois" class="page-section">
      <div class="container">
        <div class="row text-center gy-5">
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
  </div>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
export default {
  name: 'PoiListPage',
  components: {
    CardElement,
    TheBreadcrumb,
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
  head() {
    return {
      title: 'Posti a Taormina',
    }
  },
}
</script>
<style scoped>
.intro {
  background-image: url('/assets/img/backgroundPoi.jpg');
  background-position: center 0;
}
</style>
