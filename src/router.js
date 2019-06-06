import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/evento',
      name: 'event',
      component: () => import('./views/Event.vue')
    },
    {
      path: '/wsis',
      name: 'wsis',
      component: () => import('./views/Wsis.vue')
    },
    {
      path: '/csgo',
      name: 'csgo',
      component: () => import('./views/Esports.vue')
    },
    {
      path: '/maratona',
      name: 'maratona',
      component: () => import('./views/Maratona.vue')
    },
    {
      path: '/futebol',
      name: 'futebol',
      component: () => import('./views/Futebol.vue')
    },
    {
      path: '/meninasmaismais',
      name: 'meninas',
      component: () => import('./views/Meninas.vue')
    },
    {
      path: '/como-chegar',
      name: 'map',
      component: () => import('./views/Map.vue')
    },
    {
      path: '/inscricao',
      name: 'redirect',
      component: () => import('./views/Redirect.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('./views/404.vue')
    }
  ]
})
