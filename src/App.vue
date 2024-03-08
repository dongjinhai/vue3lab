<script setup lang="ts">
import { ref } from "vue";
import { routes } from "./routers/index";

const refRoutes = ref(routes);
</script>

<template>
  <div class="flex justify-between w-full h-full">
    <div class="bg-slate-400 flex flex-col h-full min-w-[150px]">
      <router-link
        v-for="rou in refRoutes"
        :key="rou.name"
        :to="rou.path"
        class="text-center m-2 bg-blue-400 rounded-md p-1"
        tag="button"
      >
        {{ rou.name }}</router-link
      >
    </div>
    <div class="bg-gray-300 flex-1 p-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
