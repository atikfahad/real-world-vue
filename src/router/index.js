import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event',
    name: 'event-show',
    component: () =>
      import(/* webpackChunkName: "event-show" */ '../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'event-create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event-create" */ '../views/EventCreate.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
