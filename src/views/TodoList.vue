<template>
  <div class="todo-list-container">
    <h1>My Todo List</h1>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @remove-todo-item="removeItem"/>
    <add-todo-item @add-todo-item="addItem" />
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import AddTodoItem from '../components/AddTodoItem'

export default {
  components: {
    TodoItem,
    AddTodoItem
  },
  data () {
    let currentId = 0
    const todoList = Array.from({ length: 3 }, it => {
      return {
        id: ++currentId,
        text: `item${currentId}`
      }
    })

    return {
      currentId,
      todoList
    }
  },
  methods: {
    removeItem (itemToRemove) {
      this.todoList.splice(this.todoList.findIndex(item => itemToRemove.id === item.id), 1)
    },
    addItem (itemText) {
      this.todoList.push({ id: ++this.currentId, text: itemText })
    }
  }
}
</script>

<style lang="scss" scoped></style>
