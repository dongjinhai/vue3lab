<script setup lang="ts">
import { reactive, computed } from "vue";
defineOptions({
  name: "Computed",
});

const author = reactive({
  name: "John Doe",
  books: ["vu2 - xxxxxxx", "vu3 - xxxxxxx", "vu4 - xxxxxxx"],
});

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
</script>

<template>
  <div>
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span
    ><br />
    <span>{{ publishedBooksMessage }}</span>
    <p>
      计算属性可以缓存，只要它依赖的响应式属性没有改变，
      则无论调用多少次计算属性都是返回的缓存属性
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
