<script setup lang='ts'>
import { ref, toRefs } from 'vue';
import { useDraggable } from '@vueuse/core';

defineOptions({
  name: 'Box'
})

interface Props {
  data: object,
  initialPosition: { x: number, y: number },
  initialSize: { width: number, height: number}
}

const props = defineProps<Props>()

const el = ref<HTMLElement | null>(null)
const { initialPosition, initialSize } = toRefs(props);
const position = ref(initialPosition.value);
const size = ref(initialSize.value);
</script>

<template>
  <div
    ref="el"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px',
      width: size.width + 'px',
      height: size.height + 'px'
    }"
  >
  <div>{{ data }}</div>
  </div>
</template>

<style lang='scss' scoped>

</style>
