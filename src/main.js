import Vue from 'vue'
import App from './App.vue'

// importing the vuex store
import store from '@/store'

// imporing the vue sepecific npm package for google charts 
import VueGoogleCharts from 'vue-google-charts'

// configuring Vue to use vue-google-charts globally
Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
