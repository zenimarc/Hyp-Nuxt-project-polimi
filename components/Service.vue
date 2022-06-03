import VueTypeText from '@/vue-type-text.vue';
<template>
  <div class="col-md-3 cardService">
    <div class="card">
      <span class="fa-stack fa-8x card-img-top">
        <img id="serviceImage" :src="img" :alt="`${name}`" />
      </span>
      <div class="card-body">
        <h4 class="my-3 card-title">{{ name }}</h4>
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
            Mostra orari
            <i class="fas fa-calendar-day"></i>
          </a>
          <div :class="`collapse collapseExample${id} mt-2`">
            <table class="table styled-table">
              <thead class="thead-dark">
                <tr>
                  <th class="headCell" scope="col">Giorno</th>
                  <th class="headCell" scope="col" :colspan="colspanHours">
                    Orari
                  </th>
                </tr>
              </thead>
              <!-- ======================Opening hours========================= -->
              <!-- To put in a component or dinamically find prop -->
              <tbody>
                <tr
                  v-for="(day, dayKey, dayIndex) in weekTimetable"
                  :key="dayIndex"
                >
                  <th class="bodyCell" scope="row">{{ dayKey }}</th>
                  <td
                    v-for="(opening, openingIndex) of day"
                    :key="openingIndex"
                    :colspan="day.length === 1 ? 2 : 1"
                  >
                    {{ opening[dayKey] || 'Not found' }}
                  </td>
                </tr>
              </tbody>
              <!-- ==================================================================== -->
            </table>
          </div>
        </span>
      </div>
    </div>
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
  data() {
    return {
      timeOpened: false,
    }
  },
  computed: {
    weekTimetable() {
      return this.week[0]
    },
    colspanHours() {
      // calculate the max number of openings in a day to choose a colspan
      let maxOpenings = 0
      for (const key in this.weekTimetable) {
        const opening = this.weekTimetable[key]
        const currLength = opening.length
        if (currLength > maxOpenings) {
          maxOpenings = currLength
        }
      }
      return maxOpenings
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
.card {
  border-radius: 5%;
  border: solid #ced4da 2px;
}
#serviceImage {
  border-radius: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  font-size: 1vw;
  border: solid #ced4da 2px;
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
  width: 100%;
}
</style>
