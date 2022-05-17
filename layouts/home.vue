<template>
  <div class="main-page">
    <the-header class="homepageNav" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'HomeLayout',
  components: {
    TheHeader,
  },
}
</script>
