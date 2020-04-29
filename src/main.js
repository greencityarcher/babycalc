import Vue from 'vue'
import App from './App.vue'
import './ml'

import Argon from './components/design/vue-argon-design-system/src/plugins/argon-kit'

Vue.use(Argon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
