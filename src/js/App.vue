<template>
  <div id="app">
    <a
      href="#main"
      class="skip-link hidden-element"
    >
      Skip to content
    </a>

    <the-header />

    <the-500-page v-if="show500Page" />
    <the-503-page v-else-if="show503Page" />
    <the-offline-page v-else-if="showOfflinePage" />

    <keep-alive v-else>
      <router-view
        id="main"
        :key="$route.fullPath"
      />
    </keep-alive>

    <the-footer />

    <portal-target
      name="modals"
      slim
    />
  </div>
</template>

<script>
  import TheHeader from './layout/TheHeader.vue';
  import TheFooter from './layout/TheFooter.vue';

  // NOTE: lazy loading component since it isn't needed immediately and cuts down on size
  const The500Page = () => import(/* webpackChunkName: 'page-errors' */ './pages/The500Page.vue');
  const The503Page = () => import(/* webpackChunkName: 'page-errors' */ './pages/The503Page.vue');
  const TheOfflinePage = () => import(/* webpackChunkName: 'page-errors' */ './pages/TheOfflinePage.vue');

  export default {
    components: {
      The500Page,
      The503Page,
      TheHeader,
      TheFooter,
      TheOfflinePage
    },
    data() {
      return {
        baseGtmDataLayer: [],
        show500Page: false,
        show503Page: false,
        showOfflinePage: false
      };
    },
    watch: {
      $route() {
        this.show500Page = false;
        this.showOfflinePage = false;
      }
    },
    created() {
      this.$eventBus.$on('error', () => {
        if ('onLine' in navigator && !navigator.onLine) {
          this.showOfflinePage = true;
          return;
        }

        this.show500Page = true;
      });

      if (this.$prerender) {
        this.$eventBus.$on('page-loaded', () => {
          document.dispatchEvent(new Event('page-rendered'));
        });
      }
    }
  };
</script>
