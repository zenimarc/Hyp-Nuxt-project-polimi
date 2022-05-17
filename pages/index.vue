<template>
  <custom-page :title="title" :image="image" :description="description" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
  },
  layout: 'home',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
  head() {
    return {
      title: 'Taormina Homepage', // Other meta information
    }
  },
}
</script>
