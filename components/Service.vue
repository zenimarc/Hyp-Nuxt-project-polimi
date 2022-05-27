import VueTypeText from '@/vue-type-text.vue';
<template>
  <div class="col-md-4">
    <span class="fa-stack fa-8x">
      <img id="serviceImage" :src="img" :alt="`${name}`" />
    </span>
    <h4 class="my-3">{{ name }}</h4>
    <span>
      <a :href="`${link}`" target="_blank" class="link-info"
        ><p class="text-muted my-3 mr-3">
          {{ address + '  ' }}<i class="fa-solid fa-location-dot"></i></p
      ></a>
    </span>
    <span>
      <a
        class="btn btn-primary"
        data-bs-toggle="collapse"
        :href="`.collapseExample${id}`"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Show opening hours <i class="fas fa-calendar-day"></i>
      </a>
      <div :class="`collapse collapseExample${id}`">
        <table class="table styled-table">
          <thead class="thead-dark">
            <div>
              <tr>
                <th class="headCell" scope="col">Week day</th>
                <th class="headCell" scope="col" colspan="5">
                  <div>Opening hours</div>
                </th>
              </tr>
            </div>
          </thead>
          <!-- ======================Opening hours========================= -->
          <!-- To put in a component or dinamically find prop -->
          <tbody
            v-for="(sched, schedIndex) of { week }"
            :key="`sched${schedIndex}`"
          >
            <div v-for="(day, dayIndex) of sched" :key="`day${dayIndex}`">
              <tr v-for="(day2, day2Index) of day" :key="`day2${day2Index}`">
                <th class="bodyCell" scope="row">
                  {{ day2Index }}
                </th>
                <td v-for="(hour, hourIndex) of day2" :key="`hour${hourIndex}`">
                  <div v-if="hour[day2Index] != null">
                    {{ hour[day2Index] }}
                  </div>
                  <div v-if="hour[day2Index] == null">Not Found</div>
                </td>
              </tr>
            </div>
          </tbody>
          <!-- ==================================================================== -->
        </table>
      </div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'ServiceComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    week: {
      type: Array[JSON],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
table {
  border-radius: 6px;
  border-collapse: separate;
  border: solid #212529 1px;
}
#serviceImage {
  border-radius: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  font-size: 1vw;
}
.headCell {
  border-bottom: solid #212529 1px;
  border-width: 1px;
  background-color: #212529;
  color: #ced4da;
}
.bodyCell {
  border-bottom: solid #212529 1px;
  border-width: 1px;
  background-color: #ced4da;
}
td,
th {
  padding: 0;
  vertical-align: middle;
}
.btn-primary {
  background-color: #212529;
  border-color: #212529;
  color: #ced4da;
}
</style>
