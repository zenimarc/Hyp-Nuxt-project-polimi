<template>
  <div>
    <section id="history" class="page-section bg-light">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            {{ infoPage.introductionCity }}
          </h2>
          <h3 class="section-subheading text-muted">
            {{ infoPage.subtitleCity }}
          </h3>
        </div>
        <div
          v-for="(about, aboutIndex) of aboutList"
          :key="`about${aboutIndex}`"
          class="container"
        >
          <h4 class="visitInformation">{{ about.descriptionCity }}</h4>
          <div class="row gy-5">
            <div class="col-lg-9 ms-auto description-wrapper">
              <p class="description">
                {{ about.textCity }}
              </p>
            </div>
            <div class="col-lg-3">
              <img
                class="townImg"
                :src="about.img"
                :alt="`${about.descriptionCity}`"
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>

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
  </div>
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
    const townInfo = new Array(2)

    for (let i = 0; i < 2; i++) {
      townInfo[i] = {
        descriptionCity: data2.descriptionCity[i],
        textCity: data2.textCity[i],
        img: data2.img[i],
      }
    }

    return {
      membersList: data,
      infoPage: data2,
      socials: data3,
      aboutList: townInfo,
    }
  },
}
</script>
<style scoped>
.visitInformation {
  --bs-text-opacity: 1;
  color: #6c757d !important;
  font-size: smaller;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.townImg {
  width: 100%;
}
</style>
