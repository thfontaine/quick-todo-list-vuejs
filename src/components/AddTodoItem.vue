<template>
  <div class="add-todo-item">
    <input v-model="itemText" type="text">
    <button @click="addItem">Ajouter</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      itemText: null
    }
  },
  methods: {
    ...mapActions(['addTodoItem']),
    addItem () {
      this.addTodoItem({ itemText: this.itemText })
    }
  }
}
</script>

<style scoped lang="scss"></style>
