<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "FormBind",
});

const inputText = ref("input");
const checked = ref(true);
</script>

<template>
  <div>
    <p>Bind</p>
    <input v-model="inputText" />
    <div>{{ inputText }}</div>
    <input type="checkbox" v-model="checked" />
    <div>{{ checked }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
