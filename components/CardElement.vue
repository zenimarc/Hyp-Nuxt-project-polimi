import VueTypeText from '@/vue-type-text.vue';
<template>
  <div @click="goToDetails" class="col-md-4 card-wrapper">
    <div class="card-image">
      <img :src="img" :alt="`${name}`" />
    </div>
    <h4 class="my-3">{{ name }}</h4>
    <p class="text-muted">{{ address }}</p>
  </div>
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
    cardType: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.cardType}/${this.id}`)
    },
  },
}
</script>

<style scoped>
img {
  border-radius: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.card-image {
  height: 19rem;
  width: 15rem;
  padding: 1rem;
}
</style>
