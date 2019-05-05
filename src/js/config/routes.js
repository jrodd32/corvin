const The404Page = () => import(/* webpackChunkName: 'page-errors' */ '../pages/The404Page.vue');
const TheElementsPage = () => import(/* webpackChunkName: 'page-elements' */ '../pages/TheElementsPage.vue');
const TheExamplePage = () => import(/* webpackChunkName: 'page-example' */ '../pages/TheExamplePage.vue');
const TheHomePage = () => import(/* webpackChunkName: 'page-home' */ '../pages/TheHomePage.vue');

const routes = [
  { path: '/', component: TheHomePage },
  { path: '/elements', component: TheElementsPage },
  { path: '/example', component: TheExamplePage },
  { path: '*', name: '404', component: The404Page }
];

export default routes;
