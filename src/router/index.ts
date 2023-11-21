import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import Player from "@/views/Player.vue";
import Contenter from "@/components/Contenter.vue";
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView,
    children: [
      {
        path: '/player/:id',
        name: 'player',
        component: Player
      },
      {
        path: '/home',
        name: 'home',
        component: Contenter
      }
    ],
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
