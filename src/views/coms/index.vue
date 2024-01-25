<script setup lang="ts">
import { ref } from "vue";
import Child1 from "./childs/child1.vue";
import Child2 from "./childs/child2.vue";
import SelfInput from './childs/SelfInput.vue';
import SlotSlot from './childs/slotslot.vue';
import BaseLayout from './childs/baselayout.vue';
import FancyList from './childs/fancylist.vue';

defineOptions({
  name: "Coms",
});

const message = ref('父信息');

const postFontSize = ref(1);

function changeFont(size: number) {
  if (!size) {
    postFontSize.value += 0.1
  } else {
    postFontSize.value += size
  }
}

const modelValue = ref(null);

function modelChange(val: any) {
  console.log(modelValue.value, val);
  modelValue.value = val;
}

</script>

<template>
  <div class="text-center">
    <div>test</div>
    <Child1 class="bg-blue-300"></Child1>
    <Child1 class="bg-blue-600"></Child1>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <Child2 title="标题" @font-change="changeFont">
        插槽内容
      </Child2>
    </div>
    <div>
      <SelfInput :model-value="modelValue" @update:model-value="modelChange"></SelfInput>
    </div>
    <div class=" bg-gray-400">
      <SlotSlot>新鲜Btn<br><a>dong</a>{{ message }}</SlotSlot>
    </div>
    <div class=" bg-yellow-100">
      <BaseLayout>
        <template #header>标题头</template>
        <!-- <template #default>正文</template> -->
        正文
        <template #footer>页脚</template>
      </BaseLayout>
    </div>
    <div>
      <FancyList>
        <template #item="scope">
          {{ scope.name }} | {{ scope.likes }} done
        </template>
      </FancyList>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
