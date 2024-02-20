<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Item from "./components/Item.vue";
import Footer from "./components/Footer.vue";
import { dragablize } from "./lib/dragable";

defineOptions({
  name: "ToDo",
});

type Task = {
  isCompleted: boolean;
  content: string;
};

const tasks = ref<Array<Task>>([
  { isCompleted: false, content: "xiaohong" },
  { isCompleted: false, content: "xiaoming" },
  { isCompleted: true, content: "xiaoqiang" },
  { isCompleted: true, content: "xiaoqiang" },
  { isCompleted: false, content: "xiaowang" },
]);

const showType = ref("all");

function changeShowType(type: string) {
  showType.value = type;
}

function addItem(content: string) {
  tasks.value.push({
    isCompleted: false,
    content: content,
  });
}

function deleteItem(idx: number) {
  tasks.value.splice(idx, 1);
}

function switchState(idx: number) {
  tasks.value[idx].isCompleted = !tasks.value[idx].isCompleted;
}

function filter(task: Task) {
  if (showType.value === "all") {
    return true;
  }
  if (showType.value === "completed" && task.isCompleted) {
    return true;
  }
  if (showType.value === "unCompleted" && !task.isCompleted) {
    return true;
  }

  return false;
}

onMounted(() => {
  const items = document.querySelector("#items");
  dragablize(items);
});
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="flex flex-col justify-between h-1/2 w-1/3 bg-gray-200 rounded-lg shadow-lg border-[3px] border-solid border-red-300 resize overflow-auto"
    >
      <Header
        class="border-b border-solid border-gray-400"
        @change-show-type="changeShowType"
      ></Header>
      <div id="items" class="flex-grow m-1 scrollbar">
        <div v-for="(task, idx) in tasks" draggable="true">
          <Item
            class="border border-solid border-orange-300 my-1 shadow-md hover:bg-orange-200"
            v-if="filter(task)"
            :task="task"
            :idx="idx"
            :key="idx"
            @delete="deleteItem"
            @switch-state="switchState"
          ></Item>
        </div>
      </div>
      <Footer
        @add-item="addItem"
        class="border-t border-solid border-gray-400"
      ></Footer>
    </div>
  </div>
</template>

<style scoped>
.scrollbar {
  scrollbar-width: thin; /* Firefox支持的滚动条宽度 */
  scrollbar-color: #a0aec0 #edf2f7; /* 滚动条颜色（轨道颜色和滑块颜色）*/
  overflow-y: auto; /* 只有当内容超出容器时才显示垂直滚动条 */
}

/* 自定义滚动条轨道 */
.scrollbar::-webkit-scrollbar-track {
  background-color: #edf2f7;
}

/* 自定义滚动条滑块 */
.scrollbar::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 6px; /* 滑块的圆角 */
  border: 3px solid #edf2f7; /* 滑块边框 */
}

/* 鼠标悬停时滑块颜色 */
.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #718096;
}
</style>
