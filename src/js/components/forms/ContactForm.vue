<template>
  <base-form
    :notification="notification"
    @form-close="handleFormClose"
    @submit.native.prevent="handleSubmit"
  >
    <doe-honey-pot ref="honeyPot" />

    <doe-input
      v-model="form.email"
      field="email"
      label="Email address"
      placeholder="warwick@doeanderson.com"
      required
      type="email"
    />

    <doe-fields-wrapper>
      <doe-input
        v-model="form.name"
        :styles="[
          'is-wide'
        ]"
        field="name"
        placeholder="Warwick Anderson"
        required
      />

      <doe-input
        v-mask="phoneMask"
        v-model="form.phone"
        :styles="[
          'is-wide'
        ]"
        field="phone"
        placeholder="555-555-5555"
        type="phone"
      />
    </doe-fields-wrapper>

    <h3>Your Address</h3>

    <doe-address-inputs v-model="form.address" />

    <h3>Comments</h3>

    <doe-input
      v-model="form.message"
      field="message"
      label="Give us any additional details"
      required
      type="textarea"
    />

    <doe-link
      :disabled="isDisabled"
      :text="submitButtonText"
      is-button
      is-red
    />
  </base-form>
</template>

<script>
  import { formProps } from '@bit/doeanderson.components.core.forms';

  export default {
    mixins: [
      formProps
    ],
    data() {
      return {
        form: {
          email: '',
          name: '',
          phone: '',
          address: {
            street1: '',
            street2: '',
            city: '',
            region: '',
            country: 'United States',
            postalCode: ''
          }
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
    }
  };
</script>
