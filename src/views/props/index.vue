<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
import Text from './components/Text.vue';

import { useChatStore } from '../../store/index'

defineOptions({
  name: 'PropsTest'
})

interface Content {
  data: string,
  type: string
}

const loading = ref(false)

const chatStore = useChatStore()

// const data = reactive({
//   contents: []
// })


function add(){
  let counter = 0
  const intervalId = setInterval(() => {
    const content = {
      type: 'text',
      data: '0'
    }
    chatStore.addContent(0, content)
    content.data = `${content.data} ***`
    chatStore.chats[0].contents.forEach(item => {
      item.data = `${item.data} ${counter}`
    })
    console.log(chatStore.chats[0]);
    counter++;
  }, 1000)
  
  setTimeout(() => {
    clearInterval(intervalId)
  }, 10000);
}


onMounted(() => {
  chatStore.addChat({
    contents: [],
    loading: false
  })
})


</script>

<template>
  <div>Props测试</div>
  <button @click="add" class="border">添加</button>
  <div v-for="chat, key1 in chatStore.chats" :key="key1">
    <div v-for="content, key2 in chat.contents" :key="key2">
      <Text :loading="loading" :content="content"></Text>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
