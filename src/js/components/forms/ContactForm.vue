<template>
  <base-form
    :notification="notification"
    @form-close="handleFormClose"
    @submit.native.prevent="handleSubmit"
  >
    <doe-honey-pot ref="honeyPot" />

    <doe-fields-wrapper class="is-space-between">
      <doe-input
        class="is-wide"
        v-model="form.first_name"
        field="first_name"
        required
      />

      <doe-input
        class="is-wide"
        v-model="form.last_name"
        field="last_name"
        required
      />
    </doe-fields-wrapper>

    <doe-fields-wrapper class="is-space-between">
      <doe-input
        class="is-wide"
        v-mask="phoneMask"
        v-model="form.phone"
        field="phone"
        placeholder="XXX-XXX-XXXX"
        type="phone"
      />

      <doe-input
        class="is-wide"
        v-model="form.email"
        field="email"
        label="Email address"
        required
        type="email"
      />
    </doe-fields-wrapper>

    <doe-input
      v-model="form.message"
      field="message"
      label="Message"
      required
      type="textarea"
    />

    <doe-link
      :disabled="isDisabled"
      :text="submitButtonText"
      is-button
      is-blue
      @click.native="handleSubmit"
    />
  </base-form>
</template>

<script>
  import { formMixin } from '@bit/doeanderson.components.core.forms';
  import api from '../../config/api';

  export default {
    mixins: [
      formMixin,
    ],
    data() {
      return {
        notification: {
          message: '',
        },
        form: {
          email: '',
          first_name: '',
          last_name: '',
          phone: '',
          message: '',
          honeyPot: '',
        },
        submitButton: 'Send message'
      };
    },
    computed: {
      dateMask() {
        return '##/##/####';
      },
      phoneMask() {
        return '###-###-####';
      }
    },
    methods: {
      handleSubmit() {
        if (this.form.honeyPot.length === 0) {
          delete this.form.honeyPot;

          this.$axios.post(api.forms.contact, this.form)
          .then((response) => {
            this.isSubmitting = false;

            const {
              errors, message, success,
            } = response.data;

            this.notification.message = message;
            this.notification.status = 200;

            if (!success) {
              // set server-side error on each field
              this.fieldKeys.forEach((key) => {
                if (errors[key]) {
                  this.findField(key).setError(errors[key].join(', '));
                }
                this.notification.status = 400;
              });

              return;
            }

            // Form was successful so reset it
            this.form = {
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              message: '',
              honeyPot: '',
            };

            this.$nextTick(() => {
              this.resetFields();
            });
          })
          .catch((error) => {
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
      }
    }
  };
</script>
