import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Condition from '@/components/Condition'
import IceBox from '@/components/IceBox'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                title: '首页'
            },
            children: [
                {path: '/Condition', component: Condition},
                {path: '/IceBox', component: IceBox}
            ], redirect: '/IceBox'//默认显示子路由
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: '我的'
            }
        },
        {
            path: '/productDetail',
            name: 'ProductDetail',
            component: ProductDetail,
            meta: {
                title: '订单详情'
            }
        }
    ]
})
