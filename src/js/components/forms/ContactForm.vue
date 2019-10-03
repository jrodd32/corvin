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
          first_name: '',
          last_name: '',
          phone: '',
          message: ''
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
