<script setup lang="ts">
import { ref } from "vue";
import CodeEditor from "./CodeEditor.vue";
defineOptions({
  name: "Editor",
});

const code = ref("");
</script>

<template>
  <div class="w-full h-full">
    <div class="w-1/2">
      <CodeEditor v-model:text="code"></CodeEditor>
    </div>
    <pre>{{ code }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
