<script setup lang="ts">
import { onMounted } from "vue";

defineOptions({
  name: "Composable",
});

onMounted(() => {
  let list = document.querySelector('.list');
  let currentLi;
  list?.addEventListener('dragstart', (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    currentLi = e.target;
    setTimeout(() => {
      // currentLi.classList.add('moving');
      currentLi.style.background = 'transparent';
      currentLi.style.color = 'transparent';
      currentLi.style.border = '1px dashed #ccc';
    })
  })

  list?.addEventListener('dragenter', (e: DragEvent) => {
    e.preventDefault();
    if (e.target === currentLi || e.target === list) {
      return
    }
    let liArray = Array.from(list?.childNodes);
    let currentIndex = liArray.indexOf(currentLi);
    let targetIndex = liArray.indexOf(e.target as HTMLElement);
    
    if (currentIndex < targetIndex) {
      list?.insertBefore(currentLi, (e.target as HTMLElement).nextElementSibling);
    } else {
      list?.insertBefore(currentLi, e.target as HTMLElement);
    }
  })

  list?.addEventListener('draover', (e) => {
    e.preventDefault();
  })
  
  list?.addEventListener('dragend', (_e) => {
    // currentLi.classList.remove('moving');
    currentLi.style.removeProperty('background');
    currentLi.style.removeProperty('color');
    currentLi.style.removeProperty('border');
  })

});
</script>

<template>
  <div>
    <div class="resizable">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio vel
      nisi venenatis venenatis. Duis et elit nec nisl vehicula aliquet. Mauris
      tincidunt, ex ac tempus dapibus, lectus purus vestibulum elit, vel commodo
      felis purus sed lorem. Nam auctor efficitur quam, a laoreet lectus varius
      nec. Cras eget dolor quis neque aliquam aliquet at a ligula. Curabitur et
      enim at erat lacinia dictum. Sed auctor magna nec nisl consectetur
      efficitur. Phasellus vulputate dui quis neque placerat, eget fermentum
      nisi iaculis. In non dui eu odio congue eleifend vel sit amet purus. Proin
      tempor vehicula felis, ut lobortis velit molestie eget.
    </div>
    <div>
      <ul class="list">
        <li draggable="true">1</li>
        <li draggable="true">2</li>
        <li draggable="true">3</li>
        <li draggable="true">4</li>
        <li draggable="true">5</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.resizable {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  resize: both; /* 允许元素在水平和垂直方向上调整大小 */
  overflow: auto; /* 当元素内容超出大小时显示滚动条 */
}

ul {
  margin: 200px auto;
  width: 200px;
  list-style-type: none;
}
li {
  margin: 5px;
  text-align: center;
  width: 200px;
  height: 30px;
  background: skyblue;
}
.list .moving {
  background: transparent;
  color: transparent;
  border: 1px dashed #ccc;
}
</style>
