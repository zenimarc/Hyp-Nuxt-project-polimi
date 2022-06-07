<template>
  <div
    :id="`carouselExampleDark${cardtype}`"
    class="carousel carousel-light slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(el, elIndex) of elements"
        :key="elIndex"
        type="button"
        class="carousel-bar"
        :data-bs-target="`#carouselExampleDark${cardtype}`"
        :data-bs-slide-to="`  ${el.id - 1}`"
        :class="{ active: elIndex === 0 }"
        :aria-current="{ true: elIndex === 0 }"
        :aria-label="`${el.name}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(el, elIndex) of elements"
        :key="elIndex"
        class="carousel-item"
        :class="{ active: elIndex === 0 }"
        :aria-current="elIndex === 0 ? 'true' : 'false'"
        data-bs-interval="10000"
      >
        <img :src="`${el.img}`" class="d-block w-100" :alt="`${el.name}`" />
        <div class="carousel-caption top-center">
          <a
            class="btn btn-primary btn-xl text-uppercase"
            @click="goToDetails(el.id)"
          >
            {{ el.name }}
          </a>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#carouselExampleDark${cardtype}`"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#carouselExampleDark${cardtype}`"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselLink',
  props: {
    elements: {
      type: Array[JSON],
      required: true,
    },
    cardtype: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails(id) {
      this.cardtype === 'all-services'
        ? this.$router.push(`/${this.cardtype}/` + '#' + id)
        : this.$router.push(`/${this.cardtype}/` + id)
    },
  },
}
</script>

<style>
img {
  height: inherit;
  width: inherit;
  object-fit: cover;
}
.carousel-caption {
  width: 100%;
  height: 100%;
  left: 0;
}
.btn-xl {
  background-color: #fd7e14;
  color: #fff;
  margin-top: 20px;
  font-size: 1vw;
}
.carousel-item {
  height: 55vh;
  width: 100%;
}
.carousel-inner {
  height: inherit;
}

.carousel-control-prev-icon,
.carousel-control-next-icon,
.carousel-bar {
  width: 75px;
  height: 75px;
}
</style>
