<template>
  <div
    :style="{
      left: 300 + 'px',
      top: 300 + 'px',
      width: 300 + 'px',
      height: 300 + 'px',
    }"
  >
    <div
      ref="draggable"
      class="draggable"
      :style="{
        left: position.x + 'px',
        top: position.y + 'px',
        width: size.width + 'px',
        height: size.height + 'px',
      }"
    >
      <div class="content">
        <slot>{{ data }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

export default {
  props: {
    data: {
      type: String,
      default: "Default Content",
    },
    initialPosition: {
      type: Object,
      default: () => ({ x: 100, y: 100 }),
    },
    initialSize: {
      type: Object,
      default: () => ({ width: 200, height: 150 }),
    },
  },
  setup(props) {
    const position = ref(props.initialPosition);
    const size = ref(props.initialSize);
    const draggable = ref(null);

    // 使用 useDraggable
    const { x, y } = useDraggable(draggable, {
      initialValue: props.initialPosition,
    });

    return {
      draggable,
      position,
      size,
      data: props.data,
    };
  },
};
</script>

<style scoped>
.draggable {
  position: absolute;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: move; /* 确保光标为移动状态 */
  resize: both; /* 允许水平和垂直调整大小 */
  overflow: auto; /* 允许内容溢出时滚动 */
}

.content {
  padding: 10px;
}
</style>
