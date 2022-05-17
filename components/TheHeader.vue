<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#page-top"
        ><img src="/assets/img/navbar-logo.svg" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'List',
          path: '/list',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Contacts',
          path: '/contacts',
        },
      ],
    }
  },
}
</script>

<style scoped>
.header {
  background: orange;
}
.logo {
  color: white;
  font-size: 32px;
}
</style>
