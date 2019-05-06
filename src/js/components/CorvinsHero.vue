<!-- has-shadow - adds psuedo element for gradient fade over hero -->
<template>
  <div
    ref="hero"
    class="hero"
  >
    <div
      ref="heroLayout"
      :class="heroModifiers"
      :data-theme="theme"
      class="hero-layout"
    >
      <corvins-link
        v-if="isClickable"
        :href="href"
        class="overlay-link"
        is-anchor
      />

      <div
        ref="media"
        class="hero-background"
        data-object-fit="cover"
      >
        <base-picture
          v-if="hasImage"
          :picture="image"
        />
        <corvins-video-background
          v-if="hasVideo"
          :file="videoFile"
          :poster-url="image.url"
          :url="image.videoUrl"
          :url-mobile="image.videoUrlMobile"
          :video="video"
        />
      </div>

      <div
        ref="content"
        class="hero-content"
      >
        <slot>
          <doe-content
            v-if="content"

            :h1="content.h1"
            :h2="content.h2"
            :p="content.p"
            :html="content.html"
            :button="button"
          />
        </slot>
      </div>

      <div
        v-if="hasOverlay"
        ref="overlay"
        class="hero-overlay"
      />

      <div
        v-if="hasShadow"
        ref="shadow"
        class="hero-shadow"
      />

      <button
        v-if="hasMouse"
        aria-label="Next section"
        class="hero-mouse"
        @click.prevent="scrollDown"
      />
    </div>
  </div>
</template>

<script>
  import { smoothScroll } from '../core/mixins';
  import DoeContent from '@bit/doeanderson.components.components.doe-content';

  export default {
    components: {
      DoeContent,
    },
    mixins: [
      smoothScroll
    ],
    props: {
      animateIn: {
        type: Boolean,
        default() {
          return true;
        }
      },
      hasFade: {
        type: Boolean,
        default() {
          return false;
        }
      },
      hasMouse: {
        type: Boolean,
        default() {
          return false;
        }
      },
      hasOverlay: {
        type: Boolean,
        default() {
          return false;
        }
      },
      hasShadow: {
        type: Boolean,
        default() {
          return false;
        }
      },
      hasCallout: {
        type: Boolean,
        default() {
          return false;
        }
      },
      isFullscreen: {
        type: Boolean,
        default() {
          return false;
        }
      },
      isClickable: {
        type: Boolean,
        default() {
          return false;
        }
      },
      isLight: {
        type: Boolean,
        default() {
          return false;
        }
      },
      video: {
        type: Object,
        default() {
          return {};
        }
      },
      videoFile: {
        type: String,
        default() {
          return '';
        }
      },
      content: {
        type: Object,
        default() {
          return {};
        }
      },
      button: {
        type: Object,
        default() {
          return {};
        }
      },
      href: {
        type: String,
        default() {
          return '';
        }
      },
      image: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        windowHeight: (window.innerHeight || document.documentElement.clientHeight)
      };
    },
    computed: {
      heroModifiers() {
        return {
          'has-callout': this.hasCallout,
          'has-fade': this.hasFade,
          'is-fullscreen': this.isFullscreen
        };
      },
      hasImage() {
        return this.image && Object.keys(this.image).length > 0 && this.image.videoUrl === null;
      },
      hasVideo() {
        return (this.image && this.image.videoUrl && this.image.videoUrl.length > 0) || this.videoFile.length > 0 || (this.video && Object.keys(this.video).length > 0);
      },
      theme() {
        let theme = 'dark';

        if (this.isLight) {
          theme = 'light';
        }

        return theme;
      }
    },
    mounted() {
      if (this.hasFade || this.animateIn) {
        this.$nextTick(() => {
          this.addScene();
        });
      }
    },
    beforeDestroy() {
      if (this.hasFade || this.animateIn) {
        this.destroyScene();
      }
    },
    activated() {
      if (this.hasFade || this.animateIn) {
        this.$nextTick(() => {
          this.addScene();
        });
      }
    },
    deactivated() {
      if (this.hasFade || this.animateIn) {
        this.destroyScene();
      }
    },
    methods: {
      addScene() {
        if (this.animateIn) {
          const {
              hero,
              content,
              media,
              overlay,
              shadow
          } = this.$refs;

          const contentChildren = content.children;

          const timeline = new this.$gsapTimelineMax();
          timeline.staggerFromTo(contentChildren, 1.25, { y: '15%', opacity: 0 }, { y: '0%', opacity: 1 }, 0.25, 0);

          if (!this.hasFade) {
            timeline.fromTo(media, 1, { scale: '1.1' }, { scale: '1' }, 0);
          }

          if (this.hasShadow) {
            timeline.fromTo(shadow, 1, { scale: '1.1' }, { scale: '1' }, 0);
          }

          if (this.hasOverlay) {
            timeline.fromTo(overlay, 1, { scale: '1.1' }, { scale: '1' }, 0);
          }

          const scene = new this.$scrollMagic.Scene({
            offset: (hero.clientHeight / 2),
            reverse: false,
            triggerElement: hero,
            triggerHook: 'onEnter'
          })
          .setTween(timeline);

          this.$scrollActions.$emit('addScene', `hero-${this._uid}`, scene);
        }

        if (this.hasFade) {
          const { hero, heroLayout } = this.$refs;
          const heroSibling = hero.nextElementSibling;
          const main = hero.parentNode;
          const offset = this.windowHeight / 1.25;
          const startingTheme = ((heroSibling.offsetTop - offset) < window.scrollY) ? 'light' : 'dark';

          // NOTE: this "resets" the fade effect on IE
          if (this.$browser && this.$browser.name === 'ie') {
            heroLayout.dataset.theme = 'light';
            main.dataset.theme = 'light';
            return;
          }

          main.dataset.theme = startingTheme;
          heroLayout.dataset.theme = startingTheme;

          // scrolling down
          // when the next element has entered
          // trigger scene on the enter event
          const sceneDown = new this.$scrollMagic.Scene({
            triggerElement: heroSibling,
            triggerHook: 'onEnter',
            offset
          })
          .on('enter', (e) => {
            if (e.scrollDirection === 'FORWARD') {
              heroLayout.dataset.theme = 'light';
              main.dataset.theme = 'light';
            }
          });
          this.$scrollActions.$emit('addScene', `backgroundDown-${this._uid}`, sceneDown);

          // scrolling up
          // when the next element is leaving
          // trigger scene on the leave event
          const sceneUp = new this.$scrollMagic.Scene({
            triggerElement: heroSibling,
            triggerHook: 'onEnter',
            offset
          })
          .on('leave', (e) => {
            if (e.scrollDirection === 'REVERSE') {
              heroLayout.dataset.theme = 'dark';
              main.dataset.theme = 'dark';
            }
          });
          this.$scrollActions.$emit('addScene', `backgroundUp-${this._uid}`, sceneUp);

          // add fade to hero's parent (main)
          main.classList.add('has-fade');
        }
      },
      destroyScene() {
        if (this.animateIn) {
          this.$scrollActions.$emit('destroyScene', `hero-${this._uid}`);
        }

        if (this.hasFade) {
          this.$scrollActions.$emit('destroyScene', `backgroundDown-${this._uid}`);
          this.$scrollActions.$emit('destroyScene', `backgroundUp-${this._uid}`);
        }
      },
      scrollDown() {
        const { hero } = this.$refs;

        this.$gtm.$emit('trackEvent', {
          event: 'e_contentInteraction',
          contentComponent: 'Homepage hero scroll indicator mouse'
        });

        this.smoothScroll(hero.nextElementSibling, 70);
      }
    }
  };
</script>
