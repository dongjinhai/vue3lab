<script setup lang='ts'>
import { ref } from 'vue'
defineOptions({
  name: 'Chat'
})

const show = ref(false)

</script>

<template>
<div v-show="show" class="box">Hello World!</div>
<button @click="show = !show">Toggle Fade</button>
</template>

<style scoped>
.box {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

/* 淡入样式 */
.show {
    opacity: 1;
}
</style>
