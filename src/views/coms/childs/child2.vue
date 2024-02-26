<script setup lang='ts'>

// const props = defineProps(['title'])
// ts写法
const propsTs = defineProps<{
  title?: string;
  likes?: number;
}>();
console.log(propsTs)
const emit = defineEmits(['font-change'])

// 可以在script中是直接使用emit
emit('font-change')

defineOptions({
    name: 'Child2'
})
</script>

<template>
  <div class="bg-green-300">
    <div>Child2</div>
    <div>{{ title }}</div>
    <button @click="$emit('font-change', 0.5)">字体0.5</button><br>
    <button @click="$emit('font-change')">字体0.1</button><br>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
