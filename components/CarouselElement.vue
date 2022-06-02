<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div
      v-for="(image, imageIndex) of images" v-bind:key="imageIndex"
      class="carousel-item" :class="{active: imageIndex==0}" >
      <img :src="image" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
    name: 'CarouselElement',
    props: {
        images: Array
    }
}
</script>

<style>
  .carousel-item{
    height: 60rem;
    width: inherit;
  }
  img{
    height: inherit;
    width: inherit;
  }
</style>