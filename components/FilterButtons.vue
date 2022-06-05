<template>
  <div>
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <div
        v-for="(category, categoryIndex) of categories"
        :key="`category${categoryIndex}`"
      >
        <input
          :id="`btnradio${category.id}`"
          type="radio"
          class="btn-check category"
          name="btnradio"
          autocomplete="off"
          :checked="category.id === activeNumber ? 1 : 0"
          @click="readClick(category.id)"
        />
        <label
          class="btn btn-outline-primary"
          :for="`btnradio${category.id}`"
          >{{ category.name }}</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',
  props: {
    categories: {
      type: Array[JSON],
      required: true,
    },
    activeNumber: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    readClick(id) {
      if (id !== this.activeNumber) {
        document.getElementsByClassName('category')[
          this.activeNumber
        ].checked = false
        document.getElementsByClassName('category')[id].checked = true
        this.$emit('categoryChanged', id)
      }
    },
  },
}
</script>
<style scoped>
.btn-outline-primary {
  background-color: #fff;
  border-color: #212529;
  color: #212529;
  margin-right: 5 px;
}

</style>
