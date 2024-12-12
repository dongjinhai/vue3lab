<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { ref } from "vue";
defineOptions({
  name: "Plotly",
});

const props = defineProps<{
  title: string;
  width: number;
  height: number;
  left: number;
  top: number;
}>()
const emit = defineEmits(['close'])

const el = ref<HTMLElement | null>(null);

const { position, isDragging, style } = useDraggable(el, {
  initialValue: { x: props.left, y: props.top},
});
</script>

<template>
  <div
    class="bg-lime-400 border-solid border border-gray-300 rounded-sm shadow-lg resize overflow-auto"
    style="position: fixed;"
    :style="style"
  >
    <div ref="el" class="bg-slate-400 cursor-move py-[2px] px-1 flex justify-between">
      <div>{{ props.title }}</div>
      <div class="cursor-pointer bg-gray-300 hover:bg-slate-200 px-[4px]" @click="emit('close')">x</div>
    </div>
    <div class="p-1" :style="{ width: props.width + 'px', height: props.height + 'px' }">
      {{ Math.round(position.x) }} {{ Math.round(position.y) }}
    </div>
  </div>
</template>

<style scoped>
</style>
