<template>
  <div class="todo-item-container">
    {{ item.text }}
    <button @click="removeItem">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeItem () {
      this.$emit('remove-todo-item', this.item)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
