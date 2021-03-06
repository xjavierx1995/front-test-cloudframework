import Vue from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'

require('./plugins/axios')
require('./plugins/VueMoney')
require('./plugins/VeeValidate')
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
