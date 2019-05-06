import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './views/TodoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList
    }
  ]
})
