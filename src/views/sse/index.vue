<script setup lang="ts">
import { onMounted, ref } from "vue";
import FloatQ from "./components/FloatQ.vue";
import SuggestedInput from "./components/SuggestedInput.vue";
defineOptions({
  name: "SSE",
});

const text = ref<string>("");
const error = ref<string>("");
let contorller = new AbortController();

function stop() {
  contorller.abort();
}

function request() {
  contorller = new AbortController();
  const eventSource = new EventSource("http://127.0.0.1:8000/stream");
  eventSource.onmessage = function (event: MessageEvent) {
    if (event.data === "end") {
      eventSource.close();
    } else {
      text.value = text.value + event.data;
    }
  };
  eventSource.onerror = function (event: ErrorEvent) {
    error.value = `${event.message}`;
  };
  contorller.signal.addEventListener("abort", () => {
    eventSource.close();
  });
}

const questions = ref([
  "问题1问题1问题1问题1问题1问题1问题1问题1问题1",
  "问题2问题2问题2问题2问题2",
  "问题3问题3问题3问题3",
  "问题3问题",
  "问题1问题1问题1问题1问题1问题1问题1问题1问题3",
  "问题1问题1问题1问题1问题1问题1问题1问题1问题3",
  "问题1问题sss",
  "问题1问题1问题1问题1问题1问题1问题1问题1问题3",
  "问题1问题1问题1问题1问题1问题1问题1问题1问题3",
  "问题1问题sss",
  "问题1问题sss",
  "问题1问题sss",
  "问题1问题sss",
]);

const question = ref('')
</script>

<template>
  <div>test</div>
  <div class="flex flex-grow gap-1">
    <button class="border border-solid" @click="request">点击</button>
    <button class="border border-solid" @click="stop">中断</button>
  </div>
  <p>{{ text }}</p>
  <p>{{ error }}</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <FloatQ :questions="questions">
    <template #input="{ focus, blur, value: soltValue }">
      <input
        :value="soltValue"
        @focus="focus"
        @blur="blur"
        type="text"
        class="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder="Click me"
      />
    </template>
  </FloatQ>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <SuggestedInput v-model:question="question" :questions="questions"></SuggestedInput>
  {{ question }}
</template>

<style lang="scss" scoped></style>
