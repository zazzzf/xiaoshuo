import Vue from 'vue'
import App from './App'
import request from '@/common/request'

Vue.config.productionTip = false
Vue.prototype.$Request = request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
