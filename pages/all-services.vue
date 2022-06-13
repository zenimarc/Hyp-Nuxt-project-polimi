<template>
  <div>
    <div>
      <div class="text-center intro page-section top-center">
        <h1 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h1>
      </div>
    </div>

    <the-breadcrumb
      :paths="['/']"
      :labels="['Home']"
      :activeLabel="'Servizi'"
    />
    <section id="services" class="page-section">
      <div class="container">
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
    </section>
  </div>
</template>

<script>
import Service from '~/components/Service.vue'
import FilterButtons from '~/components/FilterButtons.vue'
import FilterDropdown from '~/components/FilterDropdown.vue'
import TheBreadcrumb from '~/components/TheBreadcrumb.vue'
export default {
  name: 'ServicesPage',
  components: { Service, FilterButtons, FilterDropdown, TheBreadcrumb },
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
  head() {
    return {
      title: 'Servizi a Taormina',
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
<style scoped>
.intro {
  background-image: url('/assets/img/backgroundService.jpg');
}
</style>
