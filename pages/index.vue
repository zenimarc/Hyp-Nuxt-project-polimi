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
    <hr />
    <div id="mainContentHome" class="text-center">
      <div class="row mb-4">
        <div class="col">
          <img class="preview" src="/assets/img/backgroundEvents.jpg" />
        </div>
        <div class="col">
          <img class="preview" src="/assets/img/backgroundItineraries.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="preview" src="/assets/img/backgroundPoi.jpg" />
        </div>
        <div class="col">
          <img class="preview" src="/assets/img/backgroundService.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
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
}
</style>
