<script setup lang="ts">
import { ref } from "vue";
import { routes } from "./routers/index";

const refRoutes = ref(routes);
</script>

<template>
  <div class="flex justify-between w-full h-full">
    <div class="bg-slate-400 flex flex-col h-full w-24">
      <router-link
        v-for="rou in refRoutes"
        :key="rou.name"
        :to="rou.path"
        class="text-center m-2"
      >
        {{ rou.name }}</router-link
      >
    </div>
    <div class="bg-slate-400 flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
