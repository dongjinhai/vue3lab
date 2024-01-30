<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "Template",
});

const text = ref("文本插值");
const idMod = ref("Attribute绑定");
const isDisabled = ref(true);
const action = ref("click");

function insertSpace(s: string) {
  return s.split("").concat(" ");
}
</script>

<template>
  <div>
    <div>文本插值</div>
    <div>{{ text }}</div>
    <div :id="idMod">Attribute绑定</div>
    <div v-bind:id="idMod">Attribute绑定</div>
    <button :disabled="isDisabled">DisabledButton</button>
    <div>
      判断能否使用的表达式一个简单的方式是查看表达式是否可以合法的写在return后面
    </div>
    <div>使用javascipt表达式:{{ idMod.toUpperCase() }}</div>
    <div :id="`list-${idMod}`">属性中使用js表达式</div>
    <div>模板中可以使用函数: {{ insertSpace(text) }}</div>
    <div>受限的全局访问: {{ Date().toString() }}</div>
    <div>动态参数</div>
    <div :[action]="true">绑定动态参数</div>
    <button @[action]="() => console.log('yeah!')">动态参数button</button>
    <div>修饰符Modifiers</div>
    <button @[action].once="() => $msg('yeah!')">只触发一次的Button</button>
  </div>
</template>

<style lang="scss" scoped></style>
