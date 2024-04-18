<script setup lang='ts'>
import { useCounter } from './hooks';

defineOptions({
  name: 'HooksTest'
})

const { refCount, doubleCount, increase } = useCounter(10)

</script>

<template>
  <div>
    <div>数字: {{ refCount }}, 双倍: {{ doubleCount }}</div>
    <button @click="increase(1)" style="border: solid;">增加</button>
  </div>
</template>

<style lang='scss' scoped>

</style>
