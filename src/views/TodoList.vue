<template>
  <div class="todo-list-container">
    <h1>My Todo List</h1>
    <span v-if="isTodoListEmpty">Pas de taches</span>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item" />
    <add-todo-item />
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import AddTodoItem from '../components/AddTodoItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItem,
    AddTodoItem
  },
  computed: {
    ...mapGetters({
      todoList: 'getTodoList',
      isTodoListEmpty: 'isTodoListEmpty'
    })
  }
}
</script>

<style lang="scss" scoped></style>
