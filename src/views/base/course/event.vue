<script setup lang="ts">
defineOptions({
  name: "Event",
});

function warn(s: string, e: Event) {
  alert(s);
  if (e) {
    alert(e.preventDefault());
  }
}
</script>

<template>
  <div>Event</div>
  <p>在内联事件处理器中访问事件参数</p>
  <button @click="warn('触发', $event)">传递事件对象1</button><br />
  <button @click="(event) => warn('触发', event)">传递事件对象2</button>
</template>

<style lang="scss" scoped></style>
