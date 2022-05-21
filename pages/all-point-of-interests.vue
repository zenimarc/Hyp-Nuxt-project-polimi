<template>
  <div class="page container mt-5">
    <h1 class="display-4">ovviamente layout da cambiare</h1>
    <div class="row mt-3">
      <card
        v-for="(poi, poiIndex) of poiList"
        class="col-sm-2 m-2"
        :key="`poi-index-${poiIndex}`"
        :id="poi.id"
        :name="poi.name"
        :img="poi.images[0]"
        breed="boh"
        card-type="poi"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'ListPage',
  components: {
    Card,
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
