<template>
  <!-- Team members header-->
  <!-- ========================================= -->
  <section id="team" class="page-section bg-light">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
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
          :socials="socials[member.id - 1]"
        ></TeamMember>
      </div>

      <!-- Team members footer-->
      <!-- ========================================= -->
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">
            {{ infoPage.footer }}
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
    const { data } = await $axios.get('api/teamMembers')

    const info = await $axios.get('/api/page-info/about')
    const data2 = info.data
    const data3 = new Array(0)

    for (let i = 1; i <= Object.values(data).length; i++) {
      const infoMember = await $axios.get('/api/socials/' + i)
      data3[i - 1] = infoMember.data
    }
    return {
      membersList: data,
      infoPage: data2,
      socials: data3,
    }
  },
  data() {
    return {}
  },
}
</script>
