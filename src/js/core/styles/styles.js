/**
 * @name colorProps
 * @description Mixin for handling all colors styles
 */
const colorProps = {
  props: {
    /**
     * @property {string} type Sets a type for applying class modifiers based on type
     */
    type: {
      type: String,
      default() {
        return '';
      }
    },
    isBlack: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isBlue: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isBlueAlt: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isOrange: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isWhite: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    /**
     * @function
     * @name styleModifiers
     * @returns {object} Returns CSS class modifiers
     */
    styleModifiers() {
      return {
        'is-black': this.isBlack,
        'is-blue': this.isBlue,
        'is-blue-alt': this.isBlueAlt,
        'is-orange': this.isOrange,
        'is-white': this.isWhite
      };
    }
  }
};

/**
 * @name linkProps
 * @description Mixin for adding extra config to DoeLink
 */
const linkProps = {
  props: {
  },
  computed: {
    /**
     * @function
     * @name extraLinkModifiers
     * @returns {object} Returns CSS class modifiers
     */
    extraLinkModifiers() {
      return {
      };
    }
  }
};

export {
  colorProps,
  linkProps
};
