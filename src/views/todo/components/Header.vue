<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Header",
});

const emit = defineEmits(["changeShowType"]);

const showType = ref("all");
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <input
        class="sr-only"
        type="radio"
        id="all"
        value="all"
        v-model="showType"
        @change="$emit('changeShowType', showType)"
      />
      <label
        class="cursor-pointer py-1 px-4 m-2 border border-solid border-blue-400 rounded-md bg-blue-200 hover:bg-blue-600"
        :class="{ 'bg-blue-500': showType === 'all'}"
        for="all"
        >全部</label
      >
      <input
        class="sr-only"
        type="radio"
        id="completed"
        value="completed"
        v-model="showType"
        @change="$emit('changeShowType', showType)"
      />
      <label
        class="cursor-pointer py-1 px-4 m-2 border border-solid border-blue-400 rounded-md bg-blue-200 hover:bg-blue-600"
        :class="{ 'bg-blue-500': showType === 'completed'}"
        for="completed"
        >已完成</label
      >
      <input
        class="sr-only"
        type="radio"
        id="unCompleted"
        value="unCompleted"
        v-model="showType"
        @change="$emit('changeShowType', showType)"
      />
      <label
        class="cursor-pointer py-1 px-4 m-2 border border-solid border-blue-400 rounded-md bg-blue-200 hover:bg-blue-600"
        :class="{ 'bg-blue-500': showType === 'unCompleted'}"
        for="unCompleted"
        >未完成</label
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
