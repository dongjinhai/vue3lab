<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Footer",
});

const emit = defineEmits(["addItem"]);

const content = ref("");

function addContent() {
  console.log(content);
  emit("addItem", content.value);
  // 添加任务后清空输入框
  content.value = "";
}
</script>

<template>
  <div>
    <div class="flex">
      <input
        type="text"
        class="m-1 px-4 py-2 border border-gray-300 rounded-md flex-grow"
        placeholder="输入框"
        v-model="content"
      />
      <button
        class="m-1 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
        @click="addContent"
      >
        添加
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
