<template>
  <div class="container mt-5">
      <div class="page-title">
          OUR AMAZING TEAM
      </div>
      <div class="row">
          <team-card v-for="(member) of teamMembersList" :id="member.id" :key="`members-index-${member.id}`" :image="member.image" :job-title="member.jobTitle" :name="member.name" :surname="member.surname" />
      </div>
  </div>
</template>


<style scoped>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>


<script>
import TeamCard from '~/components/TeamMemberCard.vue'
export default {
  name: 'TeamMembersPage',
  components: {
    TeamCard
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/info/teamMembers')
    console.log(data)
    return {
      teamMembersList: data
    }
  },
}
</script>
