<script setup lang='ts'>
import {ref} from 'vue';

defineOptions({
  name: 'FancyList'
})

const comments = ref<any>([
  {name: 'dong1', likes: 10},
  {name: 'dong2', likes: 10},
  {name: 'dong3', likes: 10},
  {name: 'dong4', likes: 10},
  {name: 'dong5', likes: 10},
  {name: 'dong6', likes: 10},
])

</script>

<template>
  <div>
    <div v-for="item in comments" :key="item.name">
      <slot name="item" v-bind="item"></slot>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
