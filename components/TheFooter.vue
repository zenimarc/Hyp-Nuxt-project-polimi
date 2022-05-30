<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">
          Copyright &copy; Your Website 2022
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <!-- Partners -->
          <!-- ========================== -->
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    src="@/styles/assets/img/logos/microsoft.svg"
                    alt="..."
                    aria-label="Microsoft Logo"
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    src="@/styles/assets/img/logos/google.svg"
                    alt="..."
                    aria-label="Google Logo"
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    src="@/styles/assets/img/logos/facebook.svg"
                    alt="..."
                    aria-label="Facebook Logo"
                /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"
                  ><img
                    class="img-fluid img-brand d-block mx-auto"
                    src="@/styles/assets/img/logos/ibm.svg"
                    alt="..."
                    aria-label="IBM Logo"
                /></a>
              </div>
            </div>
          </div>
          <!-- ========================== -->
        </div>
        <div class="col-lg-4 text-lg-end">
          <a class="link-dark text-decoration-none me-3" href="#!"
            >Privacy Policy</a
          >
          <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer {
  border-top: ridge;
  text-align: center;
  font-size: 0.9rem;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
.img-brand {
  height: 2.75rem;
}
</style>
