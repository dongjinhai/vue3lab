<script setup lang='ts'>
import { ref } from 'vue'

defineOptions({
    name: 'Child1'
})

let count = ref(0);

function add() {
  console.log(count.value);
  // count.value++;
  count.value = count.value + 1
}
</script>

<template>
  <div>
    <div>Child1</div>
    <button @click="add()">+{{ count }}</button>
  </div>
</template>

<style lang='scss' scoped>

</style>
