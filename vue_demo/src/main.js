import Vue from 'vue'
//入口文件
import App from './App.vue'

//路由
import {router} from './routes/index'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
}).$mount('#app')
