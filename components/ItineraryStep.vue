<template>
  <li :class="{ 'timeline-inverted': inverted }">
    <div class="timeline-image" :style="imgStyle" :alt="`${name}`"></div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <nuxt-link :to="`/poi/${poiId}`">
          <h4 class="subheading mt-4">{{ name }}</h4>
        </nuxt-link>
      </div>
      <div class="timeline-body">
        <p class="text-muted">
          {{ truncatedDescription }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'ItinerarystepComponent',
  mixins: [CommonMixin],
  props: {
    name: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    inverted: {
      type: Boolean,
      required: false,
    },
    poiId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      return this.truncateString(this.shortDescription, 180)
    },
    imgStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        backgroundSize: 'cover',
      }
    },
  },
}
</script>
