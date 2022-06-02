<template>
  <section id="events" class="page-section">
    <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase">Events</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum.
          </h3>
      </div>
      <filter-categories
        id="filter"
        :categories="eventType"
        @categoryChanged=";(idCategory = $event), updateData()"
        />
      <div class="row text-center gy-5 gx-10">
        <card-element
          v-for="(event, eventIndex) of eventList"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          :name="event.name"
          :img="event.images[0]"
          :address="event.practicalInfo"
          :cardtype="'event'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
import FilterCategories from '~/components/FilterCategories.vue'
export default {
  name: 'EventsPage',
  components: {
    CardElement,
    FilterCategories,
},

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    const { data2 } = (await $axios.get('/api/eventType')).data
    const { categories } = [{id: 0, name: 'All Events'}].concat(data2)
    return {
      eventList: data,
      eventType: categories,
    }
  },

  data() {
    return {
      idCategory: 0,
    }
  },

  methods: {
    async updateData() {
      const categoryNumber = this.idCategory
      const data = await (await fetch('/api/events/' + categoryNumber)).json()
      this.eventList = data
    },
  }
}
</script>

<style>
  .text-center {
    margin-top: 0.5rem;
  }
</style>
