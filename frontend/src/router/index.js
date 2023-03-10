import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../page/Home.vue';
import Blog from '../page/Blog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
