<template>
  <form id="contactForm" class="was-validated">
    <div class="row align-items-stretch mb-5">
      <div class="col-md-6">
        <div class="form-group">
          <!-- Username input-->
          <div class="input-group needs-validation">
            <span id="inputGroupPrepend" class="input-group-text">@</span>
            <input
              id="validationCustomUsername"
              type="text"
              class="form-control"
              placeholder="Username *"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="valid-tooltip feedback-pos">Perfetto!</div>
            <div class="invalid-tooltip">Username obbligatorio.</div>
          </div>
        </div>

        <div class="form-group">
          <!-- Email address input-->
          <div class="input-group needs-validation">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email *"
              class="email white col-7 col-md-4 col-lg-7 ml-3 form-control"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <div class="valid-tooltip feedback-pos">Perfetto!</div>
            <div class="invalid-tooltip feedback-pos">Email obbligatoria.</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group form-group-textarea mb-md-0">
          <div class="input-group needs-validation">
            <textarea
              id="validationTextarea"
              class="form-control"
              placeholder="Messaggio *"
              required
            ></textarea>
            <div class="test valid-tooltip feedback-pos">Perfetto!</div>
            <div class="invalid-tooltip">Messaggio obbligatorio.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Submit Button-->
    <div class="text-center">
      <div class="col-12">
        <button
          id="submitButton"
          class="btn btn-primary"
          type="submit"
          @onsubmit="onSubmit()"
        >
          Submit form
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SubmitComponent',
  data() {
    return {
      validUsername: false,
      validEmail: false,
      validText: false,
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
  background-color: #fff;
  color: #212529;
}

.btn-primary,
.btn-primary:hover,
.form-control {
  background-color: #fff;
  border-color: #212529;
  color: #212529;
}
#submitButton {
  background-color: #212529;
  border-color: #212529;
  color: #fff;
}
</style>
