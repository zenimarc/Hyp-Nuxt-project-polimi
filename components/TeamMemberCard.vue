<template>
  <div class="team-card" style="width: 18rem">
      <img class="team-card-image" :src="image">
      <div class="team-card-name">
          {{name}} {{surname}}
      </div>
      <div class="team-jobtitle">{{jobTitle}}</div>
  </div>
</template>

<style scoped>
.team-card {
    
}
.team-card-image {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
  border-radius: 50% !important;
}
</style>

<script>
export default {
  name: 'TeamMemberCardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {},
}
</script>
