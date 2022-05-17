<template>
  <a
    class="btn btn-dark btn-social mx-2"
    href="#!"
    :aria-label="`${name} ${surname} ${social} profile`"
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
  },
}
</script>
