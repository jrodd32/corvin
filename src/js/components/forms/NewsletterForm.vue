<template>
  <base-form
    :notification="notification"
    :show-required-field-text="false"
    @form-close="handleFormClose"
    @submit.native.prevent="handleNewsletterSubmit"
  >
    <div class="newsletter">
      <doe-input
        v-model="form.email"
        field="email"
        required
        type="email"
      />

      <doe-link
        :disabled="isDisabled"
        class="submit"
        is-button
        @click.native="handleNewsletterSubmit"
      >
        Submit
      </doe-link>
    </div>
  </base-form>
</template>

<script>
  import { formMixin } from '@bit/doeanderson.components.core.forms';

  export default {
    mixins: [
      formMixin,
    ],
    data() {
      return {
        form: {
          email: '',
        },
        newsletterMessage: '',
        notification: {
          message: '',
        },
      };
    },
    methods: {
      handleNewsletterSubmit() {
        this.$axios.post('/v1/mailchimp', {
          email: this.form.email,
        })
        .then((response) => {
          const {
            message,
            success,
          } = response;

          this.notification.message = message;
          this.notification.status = success === true ? 200 : 400;

          console.log(this.notification.message, this.notification.status);

          this.$nextTick(() => {
            this.resetFields();
          });
        })
        .catch((error) => {
          const { message } = error;
          this.notification.message = message;

          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Data:');
            console.log(error.response.data);
            console.log('Status:');
            console.log(error.response.status);
            console.log('Headers:');
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Request:');
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }

          console.log('Config:');
          console.log(error.config);
          console.error(error);
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .newsletter {
    display: flex;
    flex-flow: row nowrap;
  }

  .button {
    @include font-secondary();
    color: $black;
    height: 3.9rem;
    margin-top: 1.5rem;
  }

  .field {
    flex: 1;

    /deep/ .label {
      @include font-secondary();
      color: $white;
    }
  }
</style>