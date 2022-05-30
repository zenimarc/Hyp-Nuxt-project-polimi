<template>
  <a
    class="btn btn-dark btn-social mx-2"
    :href="`${url}`"
    :aria-label="`${name} ${surname} ${social} profile`"
    target="_blank"
    ><i :class="`fab fa-${social}`"></i
  ></a>
</template>

<script>
export default {
  name: 'SocialComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    social: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn-social {
  height: 2.5rem;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 100%;
}
</style>
