<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "ClassStyleBind",
});
const tw = ref("bg-green-200");
const obj = ref({
  "bg-green-200": true,
});
</script>

<template>
  <div>test</div>
  <div class="bg-green-200">背景</div>
  <div :class="obj">背景</div>
  <div :class="[tw]">TailWind背景</div>
</template>

<style lang="scss" scoped></style>
