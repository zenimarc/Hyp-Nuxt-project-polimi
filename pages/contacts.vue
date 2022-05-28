<template>
  <section id="contact" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          {{ infoPage.introduction }}
        </h2>
        <h3 class="section-subheading text-muted">
          {{ infoPage.description }}
        </h3>
      </div>
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <!-- Name input-->
              <input
                id="name"
                class="form-control"
                type="text"
                placeholder="Your Name *"
                data-sb-validations="required"
              />
              <div class="invalid-feedback" data-sb-feedback="name:required">
                A name is required.
              </div>
            </div>
            <div class="form-group">
              <!-- Email address input-->
              <input
                id="email"
                class="form-control"
                type="email"
                placeholder="Your Email *"
                data-sb-validations="required,email"
              />
              <div class="invalid-feedback" data-sb-feedback="email:required">
                An email is required.
              </div>
              <div class="invalid-feedback" data-sb-feedback="email:email">
                Email is not valid.
              </div>
            </div>
            <div class="form-group mb-md-0">
              <!-- Phone number input-->
              <input
                id="phone"
                class="form-control"
                type="tel"
                placeholder="Your Phone *"
                data-sb-validations="required"
              />
              <div class="invalid-feedback" data-sb-feedback="phone:required">
                A phone number is required.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <!-- Message input-->
              <textarea
                id="message"
                class="form-control"
                placeholder="Your Message *"
                data-sb-validations="required"
              ></textarea>
              <div class="invalid-feedback" data-sb-feedback="message:required">
                A message is required.
              </div>
            </div>
          </div>
        </div>
        <!-- Submit success message-->
        <!---->
        <!-- This is what your users will see when the form-->
        <!-- has successfully submitted-->
        <div id="submitSuccessMessage" class="d-none">
          <div class="text-center text-white mb-3">
            <div class="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms"
              >https://startbootstrap.com/solution/contact-forms</a
            >
          </div>
        </div>
        <!-- Submit error message-->
        <!---->
        <!-- This is what your users will see when there is-->
        <!-- an error submitting the form-->
        <div id="submitErrorMessage" class="d-none">
          <div class="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <!-- Submit Button-->
        <div class="text-center">
          <button
            id="submitButton"
            class="btn btn-primary btn-xl text-uppercase"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  async asyncData({ $axios }) {
    const info = await $axios.get('/api/page-info/contacts')
    const data2 = info.data
    return {
      infoPage: data2,
    }
  },
}
</script>

<style scoped>
#contact form#contactForm .form-group {
  margin-bottom: 1.5rem;
}
#contact form#contactForm .form-group input,
#contact form#contactForm .form-group textarea {
  padding: 1.25rem;
}
#contact form#contactForm .form-group input.form-control {
  height: auto;
}
#contact form#contactForm .form-group-textarea {
  height: 100%;
}
#contact form#contactForm .form-group-textarea textarea {
  height: 100%;
  min-height: 10rem;
}
#contact form#contactForm p.help-block {
  margin: 0;
}
#contact form#contactForm .form-control:focus {
  box-shadow: none;
}
#contact form#contactForm ::-webkit-input-placeholder,
#contact form#contactForm :-moz-placeholder,
#contact form#contactForm ::-moz-placeholder,
#contact form#contactForm :-ms-input-placeholder {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 700;
}
#contact form#contactForm :-moz-placeholder,
#contact form#contactForm ::-moz-placeholder,
#contact form#contactForm :-ms-input-placeholder,
#contact form#contactForm ::-webkit-input-placeholder {
  background-color: #212529;
  color: #fff;
}
#contact form#contactForm .form-group-textarea textarea,
#contact form#contactForm .form-group input.form-control {
  background-color: #212529;
  color: #fff;
}
#submitButton,
.btn-primary,
.btn-primary:hover,
.form-control {
  background-color: #fff;
  border-color: #212529;
  color: #212529;
}
</style>
