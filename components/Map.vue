<template>
  <div id="mapWrapper">
    <h3>{{ title }}</h3>
    <!--The div element for the map -->
    <div id="map">
      <iframe
        width="100%"
        height="100%"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src="`https://www.google.com/maps/embed/v1/place?key=${$config.GOOGLE_API_KEY}&q=${query}`"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
// This component will take 100% height available from the parent
export default {
  name: 'MapComponent',
  props: {
    query: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
#map {
  flex: 1;
}
#mapWrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
