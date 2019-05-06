<template>
  <div class="hero-carousel">
    <div
      ref="slidesContainer"
      :class="contentClassNames"
    >
      <slot></slot>

      <doe-section
        v-for="(slide, index) in slides"
        :is-large-headline="isLargeHeadline"
        :key="index"
        :picture="slide.picture"
        has-full-image
        is-hero
        is-left-aligned
      >
        <div class="is-contained">
          <doe-content
            :h1="slide.content.h1"
            :h2="slide.content.h2"
            :html="slide.content.html"
          />
          <legent-link
            v-if="slide.button"
            :text="slide.button.text"
            :href="slide.button.href"
            is-abstract
            is-gold
            skip-router
            @click.prevent.native="handleCtaClick(slide.button.href)"
          />
          <legent-floating-image
            v-if="hasFloatingImage"
            :src="floatingImage"
          />
        </div>
      </doe-section>
    </div>

    <div
      ref="meta"
      class="hero-carousel-meta is-contained"
    >
      <div class="scroll-progress">
        <div class="scroll-progress-text">{{ currentSlideText }}</div>
        <div class="scroll-progress-bar">
          <span :style="progressStyles" />
        </div>
      </div>

      <div class="hero-carousel-nav">
        <legent-link
          :disabled="currentSlide === 0"
          class="hero-carousel-nav-prev"
          icon="caret-left"
          is-button
          is-icon-only
          is-transparent
          @click.prevent.native="prevSlide"
        />
        <legent-link
          class="circle"
          is-button
          is-icon-only
          is-transparent
          @click.prevent.native="handleCircleClick"
        />
        <legent-link
          :disabled="currentSlide === slidesCount - 1"
          class="hero-carousel-nav-next"
          icon="caret-right"
          is-button
          is-icon-only
          is-transparent
          @click.prevent.native="nextSlide"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import DoeContent from '../doe/DoeContent.vue';
  import DoeSection from '../doe/DoeSection.vue';

  export default {
    components: {
      DoeContent,
      DoeSection
    },
    props: {
      animateRedirect: {
        type: Boolean,
        default() {
          return false;
        }
      },
      floatingImage: {
        type: String,
        default() {
          return '';
        }
      },
      isLargeHeadline: {
        type: Boolean,
        default() {
          return false;
        }
      },
      slides: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentSlide: 0
      };
    },
    computed: {
      contentClassNames() {
        return {
          'hero-carousel-content': true,
          'has-slot-content': this.hasSlotContent
        };
      },
      currentSlideText() {
        return `${this.currentSlide + 1} of ${this.slidesCount}`;
      },
      hasFloatingImage() {
        return this.floatingImage && this.floatingImage.length > 0;
      },
      hasSlotContent() {
        return !!this.$slots.default;
      },
      progressOffset() {
        return this.progressWidth * this.currentSlide;
      },
      progressStyles() {
        return {
          marginLeft: `${this.progressOffset}%`,
          width: `${this.progressWidth}%`
        };
      },
      progressWidth() {
        return (100 / this.slidesCount);
      },
      slidesCount() {
        return this.slides.length;
      }
    },
    activated() {
      setTimeout(() => {
        this.$el.classList.add('is-ready');
      }, 250);
    },
    methods: {
      handleCircleClick() {
        if (this.slides[this.currentSlide].button) {
          this.handleCtaClick(this.slides[this.currentSlide].button.href);
        }
      },
      handleCtaClick(path) {
        if (!this.animateRedirect) {
          this.$router.push({ path });
          return;
        }

        const { slidesContainer, meta } = this.$refs;
        const currentSlide = slidesContainer.querySelectorAll('.section')[this.currentSlide];
        const currentSlideVideo = currentSlide.querySelector('video');

        const loadingScreen = document.createElement('div');
        const heroCarouselContent = document.createElement('div');

        const newSlide = currentSlide.cloneNode(true);
        const newSlideVideo = newSlide.querySelector('video');
        const newHeroCarouselMeta = meta.cloneNode(true);

        heroCarouselContent.classList.add('hero-carousel-content');
        heroCarouselContent.appendChild(newSlide);

        loadingScreen.appendChild(heroCarouselContent);
        loadingScreen.appendChild(newHeroCarouselMeta);
        loadingScreen.classList.add('hero-carousel', 'is-overlay');

        heroCarouselContent.querySelector('.button').classList.add('is-focused');

        document.body.appendChild(loadingScreen);

        if (newSlideVideo) {
          // can't show loading until new video is ready
          newSlideVideo.currentTime = currentSlideVideo.currentTime;
          this.prepareLoadingVideo(loadingScreen, path, newSlideVideo, currentSlideVideo);
          return;
        }

        loadingScreen.classList.add('is-showing');

        this.redirect(loadingScreen, path);
      },
      nextSlide() {
        /* eslint prefer-destructuring: 0 */
        (this.currentSlide === this.slidesCount - 1) ? false : this.setSlide(this.currentSlide + 1);
      },
      prepareLoadingVideo(container, path, newVideo, oldVideo) {
        if (newVideo.readyState === 4) {
          container.classList.add('is-showing');
          oldVideo.pause();
          this.redirect(container, path);
          return;
        }

        // recursively call method until the above condition is true
        setTimeout(() => {
          this.prepareLoadingVideo(container, path, newVideo, oldVideo);
        }, 100);
      },
      prevSlide() {
        /* eslint no-unused-expressions: 0 */
        (this.currentSlide === 0) ? false : this.setSlide(this.currentSlide - 1);
      },
      redirect(container, path) {
        setTimeout(() => {
          container.classList.add('is-loading');
          this.$router.push({ path });
        }, 250);
      },
      setSlide(targetSlide) {
        if (targetSlide === this.currentSlide) {
          return;
        }

        const { slidesContainer } = this.$refs;
        const slides = slidesContainer.querySelectorAll('.section');

        const currentSlide = slides[this.currentSlide];
        const nextSlide = slides[targetSlide];

        const nextSlideVideo = nextSlide.querySelector('video');
        if (nextSlideVideo) {
          nextSlideVideo.play();
        }

        currentSlide.style.zIndex = 2;
        nextSlide.style.zIndex = 1;

        const hidingClasses = [
          'is-hiding',
          'is-hiding-alt'
        ];
        const hidingClass = hidingClasses[Math.floor(Math.random() * hidingClasses.length)];

        currentSlide.classList.add(hidingClass);

        setTimeout(() => {
          currentSlide.style.zIndex = 0;
          currentSlide.classList.remove(hidingClass);
          nextSlide.style.zIndex = 2;

          const currentSlideVideo = currentSlide.querySelector('video');
          if (currentSlideVideo) {
            currentSlideVideo.pause();
            currentSlideVideo.currentTime = 0;
          }
        }, 1000);

        this.currentSlide = targetSlide;
      }
    }
  };
</script>
