<template>
  <section id="services" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
        </h3>

        <div class="row text-center gy-3">
          <FilterButtons
            id="filterButtons"
            :categories="servicesType"
            :active-number="idCategory"
            @categoryChanged=";(idCategory = $event), updateData()"
          />
          <FilterDropdown
            id="filterDropdown"
            :categories="servicesType"
            :active-number="idCategory"
            @categoryChanged=";(idCategory = $event), updateData()"
          />
          <br />
          <br />
          <br />
          <br />
          <Service
            v-for="(service, serviceIndex) of servicesList"
            :id="service.id"
            :key="`service${serviceIndex}`"
            :name="service.name"
            :address="service.address"
            :img="service.img"
            :link="service.serviceLink"
            :week="service.weekDay"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Service from '~/components/Service.vue'
import FilterButtons from '~/components/FilterButtons.vue'
import FilterDropdown from '~/components/FilterDropdown.vue'
export default {
  name: 'ServicesPage',
  components: { Service, FilterButtons, FilterDropdown },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    const data2 = (await $axios.get('/api/page-info/services/')).data
    const data3 = (await $axios.get('/api/servicesType')).data
    const categories = [{ id: 0, name: 'Tutti' }].concat(data3)
    return {
      servicesList: data,
      infoPage: data2,
      servicesType: categories,
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
      const data = await (await fetch('/api/services/' + categoryNumber)).json()
      this.servicesList = data
    },
  },
}
</script>
