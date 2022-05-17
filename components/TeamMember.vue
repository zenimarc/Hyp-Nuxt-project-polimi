<template>
  <!-- Team member-->
  <!-- ========================================= -->
  <div class="team-member">
    <img class="mx-auto rounded-circle" :src="img" alt="..." />
    <h4>{{ name }} {{ surname }}</h4>
    <p class="text-muted">{{ jobTitle }}</p>
    <!-- Socials-->
    <!-- ========================================= -->
    <Social
      v-for="(social, socialIndex) of socialsList"
      :key="`social${socialIndex}`"
      :name="name"
      :surname="surname"
      :social="social"
    />
    <!-- ========================================= -->
  </div>
</template>

<script>
import Social from './Social.vue'
export default {
  name: 'TeamMember',
  components: { Social },
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    socialsList: {
      type: Array,
      required: true,
    },
  },
}
</script>
