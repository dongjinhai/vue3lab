<script setup lang="ts">
import { type Ref, ref, reactive } from "vue";

type DeepObject = {
  name: string;
  arr: Array<string>;
  obj: Object;
};

defineOptions({
  name: "Reactive",
});

const year: Ref<string | number> = ref(2020);
year.value = "2020";

// 深层相应对象
const deep: Ref<DeepObject> = ref({
  name: "dongjinhai",
  arr: ["dong", "jin", "hai"],
  obj: { count: 0 },
});

interface Book {
  title: string;
  year?: number;
}

const book: Book = reactive({ title: "reactive修饰对象本身也具有相应行" });

const unPackObj = reactive({ id: ref("解包") });
function testUnPackObj() {
  // upPackObj.id值已经被自动解包了，就是一个原生的string
  return unPackObj.id.toString();
}

const packArray = reactive([ref("不解包")]);
function testPackArray() {
  // packArray[0]的值没有自动解包，还是一个ref对象
  return packArray[0].toString();
}

const count = ref(0);
const object = { id: ref(1) };
</script>

<template>
  <div>
    <p>深层相应对象ref: {{ deep.name }}</p>
    <div v-for="w in deep.arr">{{ w }}</div>
    <button @click="deep.arr.push('new')">改变deep ref对象</button>
    <div>{{ book.title }}</div>
    <button @click="book.title = book.title + '222222'">
      改变reactive对象
    </button>
    <div>
      ref解包:
      <p>
        1. ref对象在深层响应式对象中才会自动解包,
        在响应式数组或者原生集合类型(eg: map)中不会自动解包
      </p>
      <div>解包：{{ testUnPackObj() }}</div>
      <div>不解包：{{ testPackArray() }}</div>
    </div>
    <div>
      <p>
        ref模板解包注意事项: 只有顶级属性或者插值\{\{
        \}\}本身返回的就是属性值才会自动解包
      </p>
      <ul>
        <li>const count = ref(0) // 顶级属性</li>
        <li>const object = { id: ref(1) } // 非顶级属性</li>
      </ul>
      <div>{{ count + ":1" }}</div>
      <div>{{ object.id + "111" }}</div>
      <div>{{ object.id }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
