<template>
  <!-- Team member-->
  <!-- ========================================= -->
  <div class="team-member">
    <img
      class="mx-auto rounded-circle"
      :src="img"
      :alt="`${name}` + ` ` + `${surname}`"
    />
    <h4>{{ name }} {{ surname }}</h4>
    <p class="text-muted">{{ jobTitle }}</p>
    <!-- Socials-->
    <!-- ========================================= -->
    <Social
      v-for="(social, socialIndex) of socials"
      :key="`social${socialIndex}`"
      :name="name"
      :surname="surname"
      :social="social.name"
      :url="social.url"
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
    socials: {
      type: Array[JSON],
      required: true,
    },
  },
}
</script>

<style scoped>
.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
h4,
.h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}
</style>
