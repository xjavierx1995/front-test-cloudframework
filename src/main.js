import Vue from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate';
import VueCompositionAPI from '@vue/composition-api'

require('./plugins/axios')
Vue.use(VueCompositionAPI)
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
