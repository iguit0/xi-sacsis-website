import Vue from 'vue'
import Router from 'vue-router'
import { prefix } from '@/global'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: prefix+'/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: prefix+'/evento',
      name: 'event',
      component: () => import('./views/Event.vue')
    },
    {
      path: prefix+'/wsis',
      name: 'wsis',
      component: () => import('./views/Wsis.vue')
    },
    {
      path: prefix+'/csgo',
      name: 'csgo',
      component: () => import('./views/Esports.vue')
    },
    {
      path: prefix+'/maratona',
      name: 'maratona',
      component: () => import('./views/Maratona.vue')
    },
    {
      path: prefix+'/futebol',
      name: 'futebol',
      component: () => import('./views/Futebol.vue')
    },
    {
      path: prefix+'/meninasmaismais',
      name: 'meninas',
      component: () => import('./views/Meninas.vue')
    },
    {
      path: prefix+'/como-chegar',
      name: 'map',
      component: () => import('./views/Map.vue')
    },
    {
      path: prefix+'/inscricao',
      name: 'redirect',
      component: () => import('./views/Redirect.vue')
    },
    {
      path: prefix+'/*',
      name: 'notfound',
      component: () => import('./views/404.vue')
    }
  ]
})
