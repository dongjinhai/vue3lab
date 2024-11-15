<script setup lang='ts'>
import { ref, computed } from 'vue';
defineOptions({
  name: 'Text'
})

interface Props {
  loading: boolean,
  content: {
    data: string,
    type: string
  }
}

const props = defineProps<Props>()

const text = computed(() => {
  return props.content.data + '!!!'
})
</script>

<template>
  <div>{{ text }}</div>
</template>

<style lang='scss' scoped>

</style>
