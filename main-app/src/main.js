import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import Element from 'element-ui'

// 数据字典
import dict from './components/Dict'

// 权限指令
import checkPer from '@/utils/permission'
import permission from './components/Permission'
import './assets/styles/element-variables.scss'

// global css
import './assets/styles/index.scss'

import App from './App'
import store from './store'
import router from './router/routers'

// 乾坤子应用注册
import './qiankun.js'

import './assets/icons' // icon
import './router/index' // permission control

// 微前端mixin
import microAppMixin from '@/mixins/micro-app'

import formCreate from '@form-create/element-ui'

Vue.use(VueCompositionAPI)

Vue.use(checkPer)
Vue.use(permission)
Vue.use(dict)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.use(formCreate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  mixins: [microAppMixin],
  render: h => h(App)
})
