const The404Page = () => import(/* webpackChunkName: 'page-errors' */ '../pages/The404Page.vue');

const TheHomePage = () => import(/* webpackChunkName: 'page-home' */ '../pages/TheHomePage.vue');
const TheAboutPage = () => import(/* webpackChunkName: 'page-about' */ '../pages/TheAboutPage.vue');
const TheContactPage = () => import(/* webpackChunkName: 'page-contact' */ '../pages/TheContactPage.vue');
const TheFlooringPage = () => import(/* webpackChunkName: 'page-flooring' */ '../pages/TheFlooringPage.vue');
const TheFlooringHomePage = () => import(/* webpackChunkName: 'page-flooring' */ '../pages/TheFlooringHomePage.vue');
const TheGalleryPage = () => import(/* webpackChunkName: 'page-gallery' */ '../pages/TheGalleryPage.vue');
const TheShopPage = () => import(/* webpackChunkName: 'page-store' */ '../pages/TheShopPage.vue');
const TheStoreItemPage = () => import(/* webpackChunkName: 'page-store' */ '../pages/TheStoreItemPage.vue');

const routes = [
  { path: '/', component: TheHomePage },
  { path: '/about', component: TheAboutPage },
  { path: '/contact', component: TheContactPage },
  { path: '/home', component: TheFlooringHomePage },
  { path: '/flooring-101', component: TheFlooringPage },
  { path: '/gallery', component: TheHomePage },
  { path: '/store/:slug', component: TheStoreItemPage },
  { path: '/shop', component: TheShopPage },

  { path: '*', name: '404', component: The404Page }
];

export default routes;
