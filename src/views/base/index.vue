<script setup lang="ts">
defineOptions({
  name: "Base",
});

// 自动将course目录下的.vue文件导入进来并显示到页面上
const modules = import.meta.glob("./course/*.vue", { eager: true });
console.log(modules);

const coms: any[] = [];
for (const path in modules) {
  console.log(path, modules[path]);
  coms.push(modules[path].default);
}
</script>

<template>
  <div class="bg-slate-100 flex justify-start flex-wrap w-full h-full">
    <div
      class="w-96 h-96 border border-blue-500 border-solid"
      v-for="com in coms"
    >
      <component :is="com"></component>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
