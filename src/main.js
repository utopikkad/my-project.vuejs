import Vue from 'vue'
import mycontext from './my-context.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(mycontext),
}).$mount('#app')
