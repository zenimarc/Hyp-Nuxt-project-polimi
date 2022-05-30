<template>
  <div class="main-page">
    <the-header class="navbar-shrink" />
    <body>
      <nuxt />
    </body>
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
<style scoped>
body {
  height: 100%;
}
</style>
