import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
        children:[
            { path: 'order',component:Order},
            { path: 'list', component:List}
        ]
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
  ]
})
