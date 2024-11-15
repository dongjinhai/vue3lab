<script setup lang='ts'>
import { ref, onMounted } from 'vue';
defineOptions({
  name: 'ListLoading'
})

const data = ref([])
const dataShown = ref([])
const topIndex = ref(0)
const bottomIndex = ref(0)
const scrollRef = ref<HTMLElement>(null)
const offsetHeight = ref(0)
const scrollHeight = ref(0)
const scrollClientHeight = ref(0)
const scrollToVal = ref(0)
const scrollBottomValue = ref(0)

function handleScroll(e: Event) {
  console.log(e.target);
  const target = e.target as HTMLDivElement
  offsetHeight.value = target.offsetHeight
  scrollHeight.value = target.scrollHeight
  scrollToVal.value = target.scrollTop
  if ((scrollToVal.value + offsetHeight.value) >= scrollHeight.value && bottomIndex.value < data.value.length ) {
    const oldBottonIndex = bottomIndex.value
    bottomIndex.value = bottomIndex.value + 20 < data.value.length ? bottomIndex.value + 20 : data.value.length
    for (let i = oldBottonIndex; i < bottomIndex.value; i++) {
      dataShown.value.push(data.value[i])
    }
  }
}

onMounted(() => {
  for(let i = 0; i < 200; i ++) {
    data.value.push({
      name: `Row${i}`,
      value: i
    })
  }
  bottomIndex.value = 20 
  topIndex.value = 0
  dataShown.value = [...data.value.slice(0, 20)]
  if (scrollRef.value) {
    scrollRef.value.addEventListener('scroll', handleScroll, true)
  }
})
</script>

<template>
  <div class="container">
    <div class="show">
      {{ offsetHeight }} {{ scrollHeight }} {{ scrollToVal }}
      {{ topIndex }} {{ bottomIndex }}
    </div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div>xxxxxxx</div>
    <div class="box" ref="scrollRef">
      <div v-for="val, key in dataShown" :key="key">
        <div class="flex justify-center items-center"></div>
        <div>{{ val['name'] }}</div>
        <div>{{ val['value'] }}</div>
      </div>
    </div>
    
    <div class="animate-scale-up" style="width: 500px; height: 500px; background-color: blanchedalmond;"></div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-items: center; */
  /* justify-content: center; */
  /* align-items: center; */
}

.box {
  width: 800px;
  height: 400px;
  overflow-y: scroll;
  scrollbar-color: green;
  scrollbar-width: thin;
}

@keyframes scale-up {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.animate-scale-up {
  animation: scale-up 5s ease-in-out forwards;
  transform-origin: top left;
}
</style>
