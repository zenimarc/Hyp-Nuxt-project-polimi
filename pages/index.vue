<template>
  <div>
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">Explore the city!</div>
        <div class="masthead-heading text-uppercase">Taormina</div>
        <a
          class="btn btn-primary btn-xl text-uppercase"
          @click="scrollSmoothIntoView('#mainContentHome')"
          >Tell Me More</a
        >
      </div>
    </header>
    <br />

    <div id="mainContentHome" class="text-center">
      <div class="row mb-4">
        <div class="col">
          <CarouselLink
            class="preview"
            :elements="eventsCarousel"
            cardtype="event"
          />
        </div>
        <div class="col">
          <CarouselLink
            class="preview"
            :elements="itinenariesCarousel"
            cardtype="itinerary"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <CarouselLink
            class="preview"
            :elements="poisCarousel"
            cardtype="poi"
          />
        </div>
        <div class="col">
          <CarouselLink
            class="preview"
            :elements="servicesCarousel"
            cardtype="all-services"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselLink from '~/components/CarouselLink.vue'
export default {
  name: 'IndexPage',
  components: { CarouselLink },
  async asyncData({ $axios }) {
    const data1 = (await $axios.get('/api/top/events/')).data
    const data2 = (await $axios.get('/api/top/itineraries/')).data
    const data3 = (await $axios.get('/api/top/pois/')).data
    const data4 = (await $axios.get('/api/top/services/')).data
    return {
      eventsCarousel: data1,
      itinenariesCarousel: data2,
      poisCarousel: data3,
      servicesCarousel: data4,
    }
  },
  head() {
    return {
      title: 'Taormina Homepage', // Other meta information
    }
  },
  methods: {
    scrollSmoothIntoView(selector) {
      const elem = document.querySelector(selector)
      elem.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  background-image: url('/assets/img/backgroundHome1.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  height: 900px;
}
header.masthead .masthead-subheading {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
header.masthead .masthead-heading {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 13rem;
    padding-bottom: 12.5rem;
  }
  header.masthead .masthead-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
  header.masthead .masthead-heading {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
  .preview {
    border-radius: 1%;
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
  .btn {
    background-color: #fd7e14;
  }
}
</style>
