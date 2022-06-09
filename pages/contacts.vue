<template>
  <section id="contact" class="page-section bg-light">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
        </h3>
        <the-breadcrumb
        :paths="['/']"
        :labels="['Home']"
        :activeLabel="'Servizi'"
        />
      </div>
      <SubmitForm></SubmitForm>
    </div>
  </section>
</template>

<script>
import SubmitForm from '~/components/SubmitForm.vue'
export default {
  name: 'ContactPage',
  components: { SubmitForm },
  async asyncData({ $axios }) {
    const info = await $axios.get('/api/page-info/contacts')
    const data2 = info.data
    return {
      infoPage: data2,
    }
  },
}
</script>
