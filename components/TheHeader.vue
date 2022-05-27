<template>
  <nav
    id="mainNav"
    :class="`navbar navbar-expand-lg navbar-dark ${
      isFixedPos ? 'fixed-top' : 'sticky-top'
    }`"
  >
    <div class="container">
      <nuxt-link to="/" class="navbar-brand"
        ><img src="/assets/img/navbar-logo.svg" alt="logo"
      /></nuxt-link>
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
      <div id="navbarResponsive" class="collapse navbar-collapse">
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
  props: {
    isFixedPos: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      headerList: [
        {
          name: 'Places',
          path: '/all-point-of-interests',
        },
        {
          name: 'Events',
          path: '/events'
        },
        {
          name: 'Services',
          path: '/all-services',
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

<style scoped>
.header {
  background: orange;
}
.logo {
  color: white;
  font-size: 32px;
}
#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #212529;
}
#mainNav .navbar-toggler {
  padding: 0.75rem;
  font-size: 0.75rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  text-transform: uppercase;
  font-weight: 700;
}
#mainNav .navbar-brand {
  color: #ffc800;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 700;
  letter-spacing: 0.0625em;
  text-transform: uppercase;
}
#mainNav .navbar-brand img {
  height: 1.5rem;
}
#mainNav .navbar-nav .nav-item .nav-link {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 0.95rem;
  color: #fff;
  letter-spacing: 0.0625em;
}
#mainNav .navbar-nav .nav-item .nav-link.active,
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #ffc800;
}

@media (min-width: 992px) {
  #mainNav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
  }
  #mainNav .navbar-brand {
    font-size: 1.5em;
    transition: font-size 0.3s ease-in-out;
  }
  #mainNav .navbar-brand img {
    height: 2rem;
    transition: height 0.3s ease-in-out;
  }
  #mainNav.navbar-shrink {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #212529;
  }
  #mainNav.navbar-shrink .navbar-brand {
    font-size: 1.25em;
  }
  #mainNav.navbar-shrink .navbar-brand svg,
  #mainNav.navbar-shrink .navbar-brand img {
    height: 1.5rem;
  }
  #mainNav .navbar-nav .nav-item {
    margin-right: 1rem;
  }
  #mainNav .navbar-nav .nav-item:last-child {
    margin-right: 0;
  }
}
</style>
