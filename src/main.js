import '@/firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './firebase'
Vue.config.productionTip = false


// Vue.component("about", require('./components/About.vue').default);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
