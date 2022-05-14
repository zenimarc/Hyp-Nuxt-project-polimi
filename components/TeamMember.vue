<template>
  <!-- Team member-->
  <!-- ========================================= -->
  <div class="team-member">
    <img class="mx-auto rounded-circle" :src="img" alt="..." />
    <h4>{{ name }} {{ surname }}</h4>
    <p class="text-muted">{{ jobTitle }}</p>
    <!-- Socials-->
    <!-- ========================================= -->
    <a
      class="btn btn-dark btn-social mx-2"
      href="#!"
      aria-label="Parveen Anand Twitter Profile"
      ><i class="fab fa-twitter"></i
    ></a>
    <a
      class="btn btn-dark btn-social mx-2"
      href="#!"
      aria-label="Parveen Anand Facebook Profile"
      ><i class="fab fa-facebook-f"></i
    ></a>
    <a
      class="btn btn-dark btn-social mx-2"
      href="#!"
      aria-label="Parveen Anand LinkedIn Profile"
      ><i class="fab fa-linkedin-in"></i
    ></a>
    <!-- ========================================= -->
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
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
  },
}
</script>
