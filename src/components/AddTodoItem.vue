<template>
  <div class="add-todo-item">
    <input v-model="itemText" type="text">
    <button @click="addTodoItem">Ajouter</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemText: null
    }
  },
  methods: {
    addTodoItem () {
      this.$emit('add-todo-item', this.itemText)
    }
  }
}
</script>

<style scoped lang="scss"></style>
