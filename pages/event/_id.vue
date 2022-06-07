<template>
  <div class="container">
    <div class="row gy-5">
      <div class="col-sm-9">
        <h1 class="title">{{ name }}</h1>
        <p class="description">
          {{ shortDescription }}
        </p>
        <p class="infos fw-bold">Dove e Quando : {{ practicalInfo }}</p>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          Back to events list
        </button>
      </div>
      <carousel-element :images="images" />
    </div>
  </div>
</template>

<script>
import CarouselElement from '~/components/CarouselElement.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'EventdetailsPage',
  components: { CarouselElement },
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
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.back()
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
