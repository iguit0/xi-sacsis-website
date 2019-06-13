import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './plugins/vuetify'
import './plugins/leaflet'
import './plugins/back-to-top'
import './plugins/vmodal'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-140729382-1',
  router,
  checkDuplicatedScript: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
