<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { ref } from "vue";
import DraggableBox from "./components/DraggableBox.vue";
import box from "./components/Box.vue";

defineOptions({
  name: "VueUse",
});

// const el = ref<HTMLElement | null>(null);

// const { x, y, style } = useDraggable(el, {
//   initialValue: { x: 400, y: 400 },
// });
const boxes = ref([]);
const addBox = () => {
  boxes.value.push({
    data: `Box ${boxes.value.length + 1}`,
    position: { x: 100, y: 100 },
    size: { width: 200, height: 150 },
  });
};

const el2 = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(el2, {
  initialValue: { x: 600, y: 400 },
});
</script>

<template>
  <div class="w-full h-full bg-green-200">
    <button @click="addBox">Add Draggable Box</button>
  </div>
  <!-- <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ Math.round(x) }}, {{ Math.round(y) }}
  </div> -->
  <div
    ref="el2"
    p="x-4 y-2"
    shadow="~ hover:lg"
    class="fixed bg-$vp-c-bg select-none cursor-move z-31 border-solid"
    style="touch-action: none"
    :style="style"
  >
    👋 Drag me!
    <div class="text-sm opacity-50">
      I am at {{ Math.round(x) }}, {{ Math.round(y) }}
    </div>
  </div>
  <DraggableBox
    v-for="(box, index) in boxes"
    :key="index"
    :data="box.data"
    :initialPosition="box.position"
    :initialSize="box.size"
  />

  <box
    :data="{ name: 'xxxx' }"
    :initialPositon="{ x: 200, y: 200 }"
    :initialSize="{ width: 200, height: 200 }"
  ></box>
</template>

<style lang="scss" scoped></style>
