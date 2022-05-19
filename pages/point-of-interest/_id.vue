<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 description-wrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
          laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
          ea, alias ut unde.
        </p>
      </div>
      <div class="col-lg-6 image-wrapper">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'PoidetailsPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi/' + id)
    return {
      name: data.name,
      breed: data.breed,
      img: data.img,
      description: data.description,
      location: data.location,
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
      this.$router.push('/list')
    },
  },
}
</script>
