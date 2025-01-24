<template>
  <div ref="containerRef" class="relative">
    <input
      :value="question"
      @focus="onShow"
      @blur="onHide"
      @input="
        emit('update:question', ($event.target as HTMLTextAreaElement).value)
      "
      type="text"
      class="w-full px-3 py-2 border border-gray-300 rounded"
      placeholder="Click me"
    />
    <div
      v-show="show"
      :style="{ width: dropdownWidth }"
      class="absolute bottom-full p-2 mt-2 text-sm bg-white border border-gray-300 rounded shadow-md"
    >
      <div class="divider-container">
        <div class="divider-line-left"></div>
        <span class="divider-title">常问问题</span>
        <div class="divider-line-right"></div>
      </div>
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
  question: string;
}

const props = defineProps<Props>();

const show = ref(false);
const containerRef = ref<HTMLElement>(null);
const dropdownWidth = ref("");

const emit = defineEmits(["update:question"]);

onMounted(() => {
  console.log(containerRef.value);
  if (containerRef.value) {
    dropdownWidth.value = `${containerRef.value.offsetWidth}px`;
  }
});

const selectQuestion = (newQuestion: string) => {
  emit("update:question", newQuestion);
  console.log(props.question);
  show.value = false;
};

function onShow() {
  show.value = true;
  console.log(show.value);
}

function onHide() {
  console.log(show.value);
  setTimeout(() => {
    show.value = false;
  }, 100);
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

.divider-container {
  display: flex;
  align-items: center;
  margin: 6px 0;
}

.divider-line-left {
  width: 30px;
  height: 1px;
  background-color: #ccc;
}

.divider-line-right{
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
}

.divider-title {
  padding: 0 6px;
}
</style>
