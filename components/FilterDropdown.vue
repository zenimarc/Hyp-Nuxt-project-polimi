<template>
  <div>
    <div class="dropdown">
      <button
        id="dropdownMenuButton1"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ categories[activeNumber].name }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li
          v-for="(category, categoryIndex) of categories"
          :key="`category${categoryIndex}`"
        >
          <a
            :class="`dropdown-item category ${
              activeNumber === categoryIndex ? 'active' : ''
            }`"
            href="#"
            @click="readClick(category.id)"
            >{{ category.name }}</a
          >
        </li>
      </ul>
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
    initActive() {
      document
        .getElementsByClassName('category')
        [this.activeNumber].classList.add('active')
    },
    readClick(id) {
      if (id !== this.activeNumber) {
        document
          .getElementsByClassName('category')
          [this.activeNumber].classList.remove('active')
        document.getElementsByClassName('category')[id].classList.add('active')
        this.$emit('categoryChanged', id)
      }
    },
  },
}
</script>
<style scoped>
#dropdownMenuButton1 {
  background-color: #212529;
  border-color: #212529;
  color: #ced4da;
}
</style>
