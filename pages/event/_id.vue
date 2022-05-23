<template>
  <div class="container mt-5 mb-5">
    <div class="row gy-5">
      <div class="col-lg-6 ms-auto description-wrapper">
        <h1 class="title">{{ name }}</h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
          laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
          ea, alias ut unde.
        </p>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          Back to events list
        </button>
      </div>
      <div class="col-lg-6 ms-auto image-wrapper">
        <img :src="images[0]" :alt="name" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'EventdetailsPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      id: data.id,
      name: data.name,
      shortDescription: data.shortDescription,
      practicalInfo: data.practicalInfo,
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
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
</style>
