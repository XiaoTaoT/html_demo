import Vue from 'vue'
//入口文件
import App from './App.vue'

//路由
import {router} from './routes/index'
/*Element UI*/
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element, { size: "small" })


Vue.config.productionTip = false
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
}).$mount('#app')
