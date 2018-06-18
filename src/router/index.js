import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/common/Header'
import Home from '@/page/Home'
import a from '@/page/a'
import b from '@/page/b'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
        	path:'/',
        	name: 'a',
        	component: a
        },
        {
        	path: 'b',
        	name: 'b',
        	component: b
        }
      ]
    }
  ]
})
