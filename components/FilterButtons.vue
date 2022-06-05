<template>
  <div>
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <template v-for="(category, categoryIndex) of categories">
        <input
          :id="`btnradio${category.id}`"
          :key="`inputcategory${categoryIndex}`"
          type="radio"
          class="btn-check category"
          name="btnradio"
          autocomplete="off"
          :checked="category.id === activeNumber ? 1 : 0"
          @click="readClick(category.id)"
        />
        <label
          :key="`category${categoryIndex}`"
          class="btn btn-outline-primary"
          :for="`btnradio${category.id}`"
          >{{ category.name }}</label
        >
      </template>
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
.btn-check:checked + .btn-outline-primary,
.btn-check:active + .btn-outline-primary,
.btn-outline-primary:active,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.activeInput {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-primary,
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem #212529;
}
</style>
