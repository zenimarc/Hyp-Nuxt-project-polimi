<template>
  <div>
    <div>
      <img
        class="back"
        src="/assets/img/backgroundEvents.jpg"
        alt="backgroundItinieraries"
      />

      <div class="text-center intro page-section top-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
        </h3>
      </div>
    </div>

    <section id="events" class="page-section">
      <div class="container">
        <div class="row text-center gy-3">
          <FilterButtons
            id="filterButtons"
            :categories="eventType"
            :active-number="idCategory"
            @categoryChanged=";(idCategory = $event), updateData()"
          />
          <FilterDropdown
            id="filterDropdown"
            :categories="eventType"
            :active-number="idCategory"
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
      </div>
    </section>
  </div>
</template>

<script>
import CardElement from '~/components/CardElement.vue'
import FilterButtons from '~/components/FilterButtons.vue'
import FilterDropdown from '~/components/FilterDropdown.vue'
export default {
  name: 'EventsPage',
  components: {
    CardElement,
    FilterButtons,
    FilterDropdown,
  },

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    const data2 = (await $axios.get('/api/eventType')).data
    const data3 = (await $axios.get('/api/page-info/events/')).data
    const categories = [{ id: 0, name: 'Tutti' }].concat(data2)
    return {
      eventList: data,
      eventType: categories,
      infoPage: data3,
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
  },
}
</script>

<style>
.text-center {
  margin-top: 0.5rem;
}
</style>
