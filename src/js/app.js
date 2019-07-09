import './core/public-path';
import axios from 'axios';
import PortalVue from 'portal-vue';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import { detect } from 'detect-browser';
import {
  TweenLite,
  TimelineMax
} from 'gsap/TweenMax';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import eventBus from '@bit/doeanderson.components.core.event-bus/event-bus';
import GtmPlugin from '@bit/doeanderson.components.core.gtm-plugin/gtm-plugin';
import routes from './config/routes';
import api from './config/api';
import App from './App.vue';
import CorvinLandingPage from './CorvinLandingPage.vue';

require('./core/gsap/ScrollToPlugin');
require('objectFitPolyfill');
require('intersection-observer');

Vue.use(GtmPlugin);
Vue.use(PortalVue);
Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.use(VueTheMask);

// Detect and set browser
// {
//   name,
//   version,
//   os
// }
const browser = detect();
Vue.prototype.$browser = browser;

// Setup env helpers
Vue.prototype.$local = (window.location.hostname === 'localhost');
Vue.prototype.$dev = (window.location.hostname === 'corvin.test');
Vue.prototype.$prod = (window.location.hostname === 'www.corvinfurnitureofbardstown.com');
Vue.prototype.$prerender = window.prerender;

// Error tracking
// if (Vue.prototype.$prod || Vue.prototype.$staging) {
//   Sentry.init({
//     dsn: 'https://4d9267d1c4074ece8374826f3ba247e0@sentry.io/1441408',
//     integrations: [
//       new Integrations.Vue({
//         Vue,
//         attachProps: true
//       })
//     ]
//   });
// }

// Setup GSAP references
Vue.prototype.$gsapTimelineMax = TimelineMax;
Vue.prototype.$gsapTweenLite = TweenLite;
Vue.prototype.$gsapEases = {};

// Set axios default headers
// Axios is the HTTP request library
let baseUrl = window.location.origin;

if (Vue.prototype.$local) {
  baseUrl = 'https://corvin.test';
}
Vue.prototype.$axios = axios.create();
Vue.prototype.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$axios.defaults.baseURL = `${baseUrl}/api`;
Vue.prototype.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf_token"]').content;

// Set api endpoints for later use
Vue.prototype.$api = api;

// Set event bus
Vue.prototype.$eventBus = eventBus;

// TODO: update dynamically
Vue.prototype.$site = 'en';

// Register Bit Components
// https://webpack.js.org/guides/dependency-management/#require-context
const bitComponents = require.context(
  // Look for files in the base directory
  '../../node_modules/@bit/',
  // Look in subdirectories
  true,
  // Only include "Base" prefixed .vue files
  /[\w]+\.vue/
);

bitComponents.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = bitComponents(fileName);

  // Remove the . and leading back slash
  // Remove the .vue file extension
  let componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
  if (componentName.startsWith('doeanderson.components')) {
    const componentNameParts = componentName.split('/');
    componentName = componentNameParts[componentNameParts.length - 1];
  }

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

const scrollBehavior = (to, from, savedPosition) => new Promise((resolve) => {
  setTimeout(() => {
    if (savedPosition) {
        resolve(savedPosition);
      } else {
        resolve({ x: 0, y: 0 });
      }
  }, 500);
});

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
});

const isHomePage = window.location.pathname === '/';

const app = new Vue({
  router,
  components: { App },
  template: '<App />'
});

const landingPage = new Vue({
  router,
  components: { CorvinLandingPage },
  template: '<CorvinLandingPage />'
});

document.addEventListener('DOMContentLoaded', () => {
  router.onReady(() => {
    if (isHomePage) {
      landingPage.$mount('#app', true);
      return;
    }

    app.$mount('#app', true);
  });

  // Add service worker if on production and browser supports it
  // NOTE: if you want to test in dev or staging, change the hostname condition
  // TODO: set hostname
  if ('serviceWorker' in navigator && window.location.hostname === 'https://corvin.com') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
});
