import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId: 0,
    todoList: []
  },
  getters: {
    getTodoList: state => state.todoList,
    isTodoListEmpty: state => !state.todoList.length
  },
  mutations: {
    [ADD_TODO_ITEM]: (state, itemText) => {
      state.todoList.push({ id: ++state.currentId, text: itemText })
    },
    [REMOVE_TODO_ITEM]: (state, itemToRemove) => {
      state.todoList.splice(state.todoList.findIndex(item => itemToRemove.id === item.id), 1)
    }
  },
  actions: {
    addTodoItem ({ commit }, { itemText }) {
      commit(ADD_TODO_ITEM, itemText)
    },
    removeTodoItem ({ commit }, { itemToRemove }) {
      commit(REMOVE_TODO_ITEM, itemToRemove)
    }
  }
})
