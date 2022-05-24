import VueTypeText from '@/vue-type-text.vue';
<template>
  <div class="col-md-4">
    <span class="fa-stack fa-4x">
      <img :src="img" />
    </span>
    <h4 class="my-3">{{ name }}</h4>

    <p class="text-muted my-3">{{ address }}</p>

    <table class="table">
      <thead class="thead-dark headtr">
        <tr>
          <th class="col1" scope="col">Week day</th>
          <th class="col2" scope="col">Opening hours</th>
        </tr>
      </thead>
      <tbody class="bodytr">
        <!-- ======================Opening hours========================= -->
        <!-- To put in a component or dinamically find prop -->
        <!--      <tr>
          <th
            v-for="(day, dayIndex) of weekDay"
            :key="`day${dayIndex}`"
            scope="col"
          >
            {{ day }}
          </th>
        </tr>
        <tr v-for="(row, rowIndex) of days" :key="`row${rowIndex}`">
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            {{ row2[weekDay[row2Index]] }}
                      <div v-if="row2.weekDay[row2Index] != null">
              {{ row2.weekDay[row2Index] }}
            </div>
            <div v-if="row2.weekDay[row2Index] == null">Not found</div> 
          </td>
        </tr>
-->

        <!-- ======================Opening hours========================= -->
        <!-- To put in a component or dinamically find prop -->
        <tr v-for="(row, rowIndex) of { monday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.monday != null">{{ row2.monday }}</div>
            <div v-if="row2.monday == null">Not found</div>
          </td>
        </tr>
        <tr v-for="(row, rowIndex) of { tuesday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.tuesday != null">{{ row2.tuesday }}</div>
            <div v-if="row2.tuesday == null">Not found</div>
          </td>
        </tr>
        <tr v-for="(row, rowIndex) of { wednesday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.wednesday != null">{{ row2.wednesday }}</div>
            <div v-if="row2.wednesday == null">Not found</div>
          </td>
        </tr>

        <tr v-for="(row, rowIndex) of { thursday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.thursday != null">{{ row2.thursday }}</div>
            <div v-if="row2.thursday == null">Not found</div>
          </td>
        </tr>

        <tr v-for="(row, rowIndex) of { saturday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.saturday != null">{{ row2.saturday }}</div>
            <div v-if="row2.saturday == null">Not found</div>
          </td>
        </tr>

        <tr v-for="(row, rowIndex) of { sunday }" :key="`row${rowIndex}`">
          <th>{{ rowIndex }}</th>
          <td v-for="(row2, row2Index) of row" :key="`row2${row2Index}`">
            <div v-if="row2.sunday != null">{{ row2.sunday }}</div>
            <div v-if="row2.sunday == null">Not found</div>
          </td>
        </tr>
        <!-- ==================================================================== -->

        <!-- ==================================================================== -->
      </tbody>
    </table>
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
      weekDayCut: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    }
  },
}
</script>

<style scoped>
img {
  border-radius: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
tr {
  font-size: 0.8vw;
  border: 1px solid currentColor;
  border-width: 1px;
  border-style: solid;
  border-color: 212529;
}
tbody > tr {
  border-left: 1px solid currentColor;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
}
td,
th {
  padding: 0;
  vertical-align: middle;
}
tbody > tr > th {
  border-right: 1px solid currentColor;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.05);
}
div {
  height: 100%;
}
.col2 {
  border-left: 1px solid #212529;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #212529;
}
.col1 {
  border: 1px solid #212529;
  border-width: 1px;
  border-style: solid;
  border-color: #212529;
}
</style>
