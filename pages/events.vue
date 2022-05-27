<template>
  <section id="events" class="page-section">
    <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">Events</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum.
          </h3>
        </div>
      <div class="row text-center gy-5">
        <card-element
          v-for="(event, eventIndex) of eventList"
          :key="`event-index-${eventIndex}`"
          :id="event.id"
          :name="event.name"
          :img="event.images[0]"
          :address="event.practicalInfo"
          :card-type="'event'"
        />
      </div>
  </div>
  </section>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
export default {
  name: 'EventsPage',
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

