<template>
  <div class="todo-item-container">
    {{ item.text }}
    <button @click="removeItem">Supprimer</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeTodoItem']),
    removeItem () {
      this.removeTodoItem({ itemToRemove: this.item })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
