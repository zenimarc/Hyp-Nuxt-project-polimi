<template>
  <div class="main-page">
    <the-header class="homepageNav" :is-fixed-pos="true" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'HomeLayout',
  components: {
    TheHeader,
  },
  mounted() {
    // Navbar shrink function
    const navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('.homepageNav')
      if (!navbarCollapsible) {
        return
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }
    }

    // Shrink the navbar
    navbarShrink()

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink)

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler')
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    )
    responsiveNavItems.forEach(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click()
        }
      })
    })
  },
}
</script>
