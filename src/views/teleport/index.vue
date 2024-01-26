<script setup lang='ts'>
import MyModel from './model.vue'
defineOptions({
  name: 'Teleport'
})
</script>

<template>
  <div class="outer">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <MyModel />
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
