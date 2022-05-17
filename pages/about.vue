<template>
  <!-- Team members header-->
  <!-- ========================================= -->
  <section id="team" class="page-section bg-light">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <!-- Team members-->
      <!-- ========================================= -->
      <div class="row">
        <TeamMember
          v-for="(member, memberIndex) of membersList"
          :id="member.id"
          :key="`member${memberIndex}`"
          class="col-lg-4"
          :name="member.name"
          :surname="member.surname"
          :job-title="member.jobTitle"
          :img="member.img"
          :socials-list="socialsList"
        />
      </div>

      <!-- Team members footer-->
      <!-- ========================================= -->
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
      <!-- ========================================= -->
    </div>
  </section>
</template>

<script>
import TeamMember from '~/components/TeamMember.vue'
export default {
  name: 'AboutPage',
  components: {
    TeamMember,
  },
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('api/teamMembers')
    const data2 = await $axios.get('/api/page-info/about')
    // console.log("~" + JSON.stringify(data2.data.socialsList));
    return {
      membersList: data,
      socialsList: data2.data.socialsList,
    }
  },
  data() {
    return {}
  },
}
</script>
