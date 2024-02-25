<script setup lang='ts'>
defineOptions({
  name: 'SelfInput'
})
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
   :value="props.modelValue"
   @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang='scss' scoped>

</style>
