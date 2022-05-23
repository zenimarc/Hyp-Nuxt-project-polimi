<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events</h1>
    <div class="row row-cols-4">
      <card
        v-for="(event, eventIndex) of eventList"
        class="col-sm-2 m-2"
        :key="`event-index-${eventIndex}`"
        :id="event.id"
        :name="event.name"
        :img="event.images[0]"
        breed="boh"
        card-type="event"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'EventsPage',
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
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>

