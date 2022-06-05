<template>
  <div class="main-page">
    <the-header class="navbar-shrink" />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>
