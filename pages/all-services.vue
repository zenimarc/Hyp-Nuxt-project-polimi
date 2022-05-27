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
      </div>
      <div class="row text-center gy-5">
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
</template>

<script>
import Service from '~/components/Service.vue'
export default {
  name: 'ServicesPage',
  components: { Service },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    const info = await $axios.get('/api/page-info/services')
    const data2 = info.data
    return {
      servicesList: data,
      infoPage: data2,
    }
  },
}
</script>
