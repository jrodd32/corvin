const carouselSwipeProps = {
  data() {
    return {
      swipeAllowedTime: 300,
      swipeDirection: 'none',
      swipeElapsedTime: 0,
      swipeRestraint: 100,
      swipeStartTime: 0,
      swipeThreshold: 100,
      touchDistX: 0,
      touchDistY: 0,
      touchStartX: 0,
      touchStartY: 0
    };
  },
  mounted() {
    if ('ontouchstart' in window) {
      this.$refs.carousel.addEventListener('touchstart', this.handleTouchStart);
      this.$refs.carousel.addEventListener('touchend', this.handleTouchEnd);
    }
  },
  beforeDestroy() {
    if ('ontouchstart' in window) {
      this.$refs.carousel.removeEventListener('touchstart', this.handleTouchStart);
      this.$refs.carousel.removeEventListener('touchend', this.handleTouchEnd);
    }
  },
  methods: {
    handleTouchStart(e) {
      this.swipeDirection = 'none';
      this.touchStartX = e.changedTouches[0].pageX;
      this.touchStartY = e.changedTouches[0].pageY;
      this.swipeStartTime = new Date().getTime();
    },
    handleTouchEnd(e) {
      this.touchDistX = e.changedTouches[0].pageX - this.touchStartX;
      this.touchDistY = e.changedTouches[0].pageY - this.touchStartY;
      this.swipeElapsedTime = new Date().getTime() - this.swipeStartTime;

      if (this.swipeElapsedTime <= this.swipeAllowedTime && Math.abs(this.touchDistX) >= this.swipeThreshold && Math.abs(this.touchDistY) <= this.swipeRestraint) {
        this.swipeDirection = (this.touchDistX < 0) ? 'left' : 'right';

        /* eslint no-unused-expressions: 0 */
        (this.swipeDirection === 'right') ? this.prevSlide() : this.nextSlide();
      }
    }
  }
};

const escKeyProps = {
  methods: {
    handleEscKey(event) {
      if (event.keyCode === 27) {
        this.close();
      }
    },
    toggleEscKey() {
      if (this.isOpen) {
        document.addEventListener('keydown', this.handleEscKey);
        return;
      }

      document.removeEventListener('keydown', this.handleEscKey);
    }
  }
};

const tableProps = {
  props: {
    headerRows: {
      type: Array
    },
    bodyRows: {
      type: Array
    }
  }
};

const windowProps = {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
    isTablet() {
      return this.windowWidth > 768;
    },
    isTabletOnly() {
      return this.isTablet && !this.isDesktop;
    },
    isDesktop() {
      return this.windowWidth > 1008;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
  }
};

const smoothScroll = {
  methods: {
    smoothScroll(el, offset = 0) {
      const startLocation = window.pageYOffset;
      const endLocation = el.offsetTop - offset;
      const distance = endLocation - startLocation;
      const increments = distance / (500 / 20);

      const scrollPage = () => {
        window.scrollBy(0, increments);

        const distanceTraveled = window.pageYOffset;

        if ((distanceTraveled >= (endLocation - increments)) || ((window.innerHeight + distanceTraveled) >= document.body.offsetHeight)) {
          clearInterval(scrollPageInterval);
        }
      };

      const scrollPageInterval = setInterval(scrollPage, 20);
    }
  }
};

export {
  carouselSwipeProps,
  escKeyProps,
  tableProps,
  windowProps,
  smoothScroll
};
