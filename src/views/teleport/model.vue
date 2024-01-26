<script setup lang='ts'>
import { ref } from 'vue'
defineOptions({
  name: 'Model'
})

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>
  <Teleport to="body">
    <Transition>
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
