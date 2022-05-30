import VueTypeText from '@/vue-type-text.vue';
<template>
  <a class="col-md-4 card-wrapper" @click="goToDetails">
    <div class="card-image">
      <img :src="img" :alt="`${name}`" />
    </div>
    <h4 class="my-3">{{ name }}</h4>
    <p class="text-muted">{{ address }}</p>
  </a>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cardtype: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.cardtype}/${this.id}`)
    },
  },
}
</script>

<style scoped>
a {
  color: unset;
  text-decoration: unset;
}
img {
  height: 100%;
  width: 100%;
  border-radius: 5%;
  object-fit: cover;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
img:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.card-image {
  overflow: hidden;
  border-radius: 5%;
  height: 19rem;
  width: 15rem;
}
</style>
