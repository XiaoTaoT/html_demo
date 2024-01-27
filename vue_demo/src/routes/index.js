/**
 @ClassName:index
 @Author:TwT
 @Date:2023/2/1 20:20
 @Version:1.0
 **/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/antv/x6',
            component: () => import('../antv/x6/antv'),
        },
        {
            path: '/office/docPreview',
            component: () => import('../office/docPreview'),
        },
        {
            path: '/watermask/watermask',
            component: () => import('../watermask/index'),
        },
        {
            path: '/ws/stomp',
            component: () => import('../ws/stomp.vue'),
        },
    ]
})
