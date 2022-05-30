<template>
  <section id="events" class="page-section">
    <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">Events</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum.
          </h3>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" id="btnradio1" class="btn-check" name="btnradio" autocomplete="off" checked>
          <label id="btnall" class="btn btn-outline-primary" for="btnradi1o" @click="goToAllEventsList">All Events</label>
    
          <input type="radio" class="btn-check" name="btnradio" autocomplete="off">
          <label id="btnsum" class="btn btn-outline-primary" for="btnradio2" @click="goToSummerEventsList">Summer Events</label>
    
          <input type="radio" class="btn-check" name="btnradio" autocomplete="off">
          <label id="btnwint" class="btn btn-outline-primary" for="btnradio3">Winter Events</label>
        </div>
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
  async asyncData({ route,$axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  methods: {
    goToSummerEventsList() {
      this.$router.push('../summer-events')
    },
    goToAllEventsList() {
      this.$router.push('../all-year-events')
    },
    goToWinterEventsList() {
      this.$router.push('../winter-events')
    },
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>

<style>
  .text-center {
    margin-top: 0.5rem;
  }
</style>