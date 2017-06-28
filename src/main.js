// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'
import store from './vuex/store'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000'

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
