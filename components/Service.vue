import VueTypeText from '@/vue-type-text.vue';
<template>
  <div class="col-md-4">
    <span class="fa-stack fa-8x">
      <img id="serviceImage" :src="img" :alt="`${name}`" />
    </span>
    <h4 class="my-3">{{ name }}</h4>
    <span>
      <a :href="`${link}`" class="link-info"
        ><p class="text-muted my-3 mr-3">
          {{ address + '  ' }}<i class="fa-solid fa-location-dot"></i></p
      ></a>
    </span>
    <span>
      <p>
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
      </p>
      <div :class="`collapse collapseExample${id}`">
        <table class="table styled-table">
          <thead class="thead-dark">
            <tr>
              <th class="headCell" scope="col">Week day</th>
              <th class="headCell" scope="col" colspan="10">Opening hours</th>
            </tr>
          </thead>
          <tbody>
            <!-- ======================Opening hours========================= -->
            <!-- To put in a component or dinamically find prop -->
            <tr v-for="(row, rowIndex) of { monday }" :key="`row${rowIndex}`">
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.monday != null">{{ row2.monday }}</div>
                <div v-if="row2.monday == null">Not found</div>
              </td>
            </tr>
            <tr v-for="(row, rowIndex) of { tuesday }" :key="`row${rowIndex}`">
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.tuesday != null">{{ row2.tuesday }}</div>
                <div v-if="row2.tuesday == null">Not found</div>
              </td>
            </tr>
            <tr
              v-for="(row, rowIndex) of { wednesday }"
              :key="`row${rowIndex}`"
            >
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.wednesday != null">
                  {{ row2.wednesday }}
                </div>
                <div v-if="row2.wednesday == null">Not found</div>
              </td>
            </tr>

            <tr v-for="(row, rowIndex) of { thursday }" :key="`row${rowIndex}`">
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.thursday != null">{{ row2.thursday }}</div>
                <div v-if="row2.thursday == null">Not found</div>
              </td>
            </tr>

            <tr v-for="(row, rowIndex) of { saturday }" :key="`row${rowIndex}`">
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.saturday != null">{{ row2.saturday }}</div>
                <div v-if="row2.saturday == null">Not found</div>
              </td>
            </tr>

            <tr v-for="(row, rowIndex) of { sunday }" :key="`row${rowIndex}`">
              <th class="bodyCell">{{ rowIndex }}</th>
              <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
                <div v-if="row2.sunday != null">
                  {{ row2.sunday }}
                </div>
                <div v-if="row2.sunday == null">Not found</div>
              </td>
            </tr>
            <!-- ==================================================================== -->

            <!-- ==================================================================== -->
          </tbody>
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
    /*     days: {
      type: Array[Array],
      required: true,
    }, */
    monday: {
      type: Array[JSON],
      required: true,
    },
    tuesday: {
      type: Array[JSON],
      required: true,
    },
    wednesday: {
      type: Array[JSON],
      required: true,
    },
    thursday: {
      type: Array[JSON],
      required: true,
    },
    friday: {
      type: Array[JSON],
      required: true,
    },
    saturday: {
      type: Array[JSON],
      required: true,
    },
    sunday: {
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
      weekDay: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
    }
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
