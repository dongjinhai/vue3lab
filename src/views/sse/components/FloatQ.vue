<template>
  <div ref="containerRef" class="relative">
    <slot
      ref="slotRef"
      name="input"
      :focus="onShow"
      :blur="onHide"
      :value="selectedQuestion"
    ></slot>
    <div
      v-show="show"
      :style="{ width: dropdownWidth }"
      class="absolute bottom-full p-2 mt-2 text-sm bg-white border border-gray-300 rounded shadow-md transition-all duration-200 ease-in-out transform"
    >
      <div class="separator relative text-center text-gray-500">提示字符</div>
      <div class="flex flex-wrap">
        <div
          v-for="(question, index) in props.questions"
          :key="index"
          @click="selectQuestion(question)"
          class="m-1 px-1 border cursor-pointer bordr-gray-300 rounded max-w-100 overflow-hidden text-overflow shadow"
        >
          {{ question }}
        </div>
      </div>
      <div class="separator relative text-center text-gray-500">提示字符</div>
      <div class="flex flex-wrap">
        <div
          v-for="(question, index) in props.questions"
          :key="index"
          @click="selectQuestion(question)"
          class="m-1 px-1 border cursor-pointer bordr-gray-300 rounded max-w-100 overflow-hidden text-overflow shadow"
        >
          {{ question }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  questions: string[];
}

const props = defineProps<Props>();

const show = ref(false);
const selectedQuestion = ref("");
const slotRef = ref<HTMLElement>(null);
const containerRef = ref<HTMLElement>(null);
const dropdownWidth = ref("");

onMounted(() => {
  console.log(containerRef.value);
  if (containerRef.value) {
    dropdownWidth.value = `${containerRef.value.offsetWidth}px`;
  }
});

const selectQuestion = (question: string) => {
  selectedQuestion.value = question;
  console.log(question);
  show.value = false;
};

function onShow() {
  show.value = true;
}

function onHide() {
  console.log(selectedQuestion.value);
  setTimeout(() => {
    show.value = false;
  }, 200);
}
</script>

<style scoped>
.max-w-100 {
  max-width: 200px;
}
.text-overflow {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.separator::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #ddd;
  z-index: -1;
}
.separator {
  background: #fff;
  padding: 0 1rem;
}
</style>
