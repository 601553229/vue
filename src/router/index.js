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
        children:[
            { path: 'Condition',component:Condition},
            { path: 'IceBox', component:IceBox}
        ]
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
      {
          path: '/productDetail',
          name:'ProductDetail',
          component:ProductDetail
      }
  ]
})
