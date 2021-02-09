import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles/reset.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
