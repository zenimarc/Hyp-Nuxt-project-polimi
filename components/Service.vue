import VueTypeText from '@/vue-type-text.vue';
<template>
  <div class="col-md-4">
    <span class="fa-stack fa-4x">
      <img :src="img" />
    </span>
    <h4 class="my-3">{{ name }}</h4>

    <p class="text-muted my-3">{{ address }}</p>
    <!--  <table class="table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Opening hours</th>
        </tr>
      </thead>
      <tbody>
        <td v-for="(row, rowIndex) in weekDay" :key="`row${rowIndex}`">
          <td>{{row}}</td>
          <td v-for="(column, colIndex) in monday" :key="`column${colIndex}`">
            {{ column[weekday[rowIndex]] }}
          </td>
             <td v-for="(column, indexColumn) in tuesday" :key="indexColumn">{{item[column].tuesday}}</td>
              <td v-for="(column, indexColumn) in wednesday" :key="indexColumn">{{item[column].wednesday}}</td>
              <td v-for="(column, indexColumn) in thursday" :key="indexColumn">{{item[column].thursday}}</td>
              <td v-for="(column, indexColumn) in friday" :key="indexColumn">{{item[column].friday}}</td>
              <td v-for="(column, indexColumn) in saturday" :key="indexColumn">{{item[column].saturday}}</td>
              <td v-for="(column, indexColumn) in sunday" :key="indexColumn">{{item[column].sunday}}</td>  
        </td>
      </tbody>
    </table> -->
  </div>
</template>
<script>
export default {
  name: 'ServiceComponent',
  weekDay: [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ],
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
}
</script>

<style scoped>
img {
  border-radius: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
table {
  height: 100%;
  table-layout: fixed;
  width: 100%;
}
th {
  word-wrap: break-word;
  height: 100%;
  width: 100%;
}
</style>
