<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
defineOptions({
  name: "",
});

const isContentShown: Ref<"none" | null> = ref("none");
const open = () => (isContentShown.value = null);

const shownStyle = ref({
  display: "none",
});

defineExpose({
  open,
});
</script>

<template>
  <div :style="shownStyle">弹框</div>
</template>

<style lang="scss" scoped></style>
