<script setup lang="ts">
import { type Ref, ref, onMounted } from "vue";
import MyModal from "./childs/mymodal.vue";

defineOptions({
  name: "TempRef",
});
const input: Ref<HTMLElement | null> = ref(null);
onMounted(() => {
  if (input) {
    input?.value?.focus();
  }
});
const modal = ref<InstanceType<typeof MyModal> | null>(null);

const openModal = () => {
  modal.value?.open();
};
</script>

<template>
  <div>test11</div>
  <input ref="input" />
  <MyModal ref="modal"></MyModal>
  <button @click="openModal">打开Modal</button>
</template>

<style lang="scss" scoped></style>
