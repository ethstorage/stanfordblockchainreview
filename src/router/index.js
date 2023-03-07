import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../page/Home.vue';
import Content from '../page/Content.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/id/:id',
    name: 'Content',
    component: Content,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
