<script setup lang='ts'>
import { ref } from 'vue'
import { db } from '../../utils/db';

defineOptions({
  name: 'IndexedDB'
})

const text = ref('')

async function addFriend() {
  const res = await db.friends.add({name: 'xxx', age: 100})
  // console.log(res);
  console.log(text.value);
  const res2 = await db.histories.add({id:text.value, name: 'jjj', content: 'add'})
  console.log(res2);
}

async function getFriend() {
  const res = await db.friends.get({id: 2})
  console.log(res.name);
}

</script>

<template>
  <button class="border p-1" @click="addFriend">Add</button>
  <input type="text" v-model="text">

  <button class="border p-1" @click="getFriend">Get</button>
</template>

<style lang='scss' scoped>

</style>
