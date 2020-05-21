import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo'
import Classes from '@/components/classes'
import Setting from '@/components/setting'
import Calendar from '@/components/calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classes',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
