const The404Page = () => import(/* webpackChunkName: 'page-errors' */ '../pages/The404Page.vue');

const TheHomePage = () => import(/* webpackChunkName: 'page-home' */ '../pages/TheHomePage.vue');
const TheAboutPage = () => import(/* webpackChunkName: 'page-about' */ '../pages/TheAboutPage.vue');
const TheContactPage = () => import(/* webpackChunkName: 'page-contact' */ '../pages/TheContactPage.vue');
const TheMaintenancePage = () => import(/* webpackChunkName: 'page-flooring' */ '../pages/TheMaintenancePage.vue');
const TheFlooringHomePage = () => import(/* webpackChunkName: 'page-flooring' */ '../pages/TheFlooringHomePage.vue');
const TheGalleryPage = () => import(/* webpackChunkName: 'page-gallery' */ '../pages/TheGalleryPage.vue');
const TheStorePage = () => import(/* webpackChunkName: 'page-store' */ '../pages/TheStorePage.vue');
const TheStoreCategoryPage = () => import(/* webpackChunkName: 'page-store' */ '../pages/TheStoreCategoryPage.vue');
const TheStoreItemPage = () => import(/* webpackChunkName: 'page-store' */ '../pages/TheStoreItemPage.vue');

const routes = [
  { path: '/', component: TheHomePage },
  { path: '/about', component: TheAboutPage },
  { path: '/contact-us', component: TheContactPage },
  { path: '/home', component: TheFlooringHomePage },
  { path: '/maintenance', component: TheMaintenancePage },
  { path: '/gallery', component: TheGalleryPage },
  { path: '/shop/:category/:slug', component: TheStoreItemPage },
  { path: '/shop/:category', component: TheStoreCategoryPage },
  { path: '/shop', component: TheStorePage },

  { path: '*', name: '404', component: The404Page }
];

export default routes;
