<script setup lang='ts'>
defineOptions({
  name: 'Good'
})
const props = defineProps<{
  id: number;
  name: string;
}>()
</script>

<template>
  <div class="border border-solid border-lime-200">
    {{ props.id }} {{ props.name }}
  </div>
</template>

<style lang='scss' scoped>

</style>
