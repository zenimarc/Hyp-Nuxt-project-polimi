<template>
  <div>
    <span class="text-duration">Durata: {{ duration }} minuti</span
    ><i class="fa-solid fa-stopwatch icon"></i>
  </div>
</template>

<script>
export default {
  name: 'ItineraryDurationComponent',
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.text-duration {
  margin-right: 0.5em;
}
</style>
