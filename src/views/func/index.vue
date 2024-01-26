<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue';

defineOptions({
  name: 'Func'
})

const x = ref(0);
const y = ref(0);

function update(event: any) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>
  Mouse position is at: {{ x }} {{ y }}
</template>

<style lang='scss' scoped>

</style>
