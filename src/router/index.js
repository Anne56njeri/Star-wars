import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router); 

import HelloWorld from '@/components/HelloWorld'

routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
]