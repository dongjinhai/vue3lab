<script setup lang="ts">
import { useMouse } from '../../utils/mouse';
defineOptions({
  name: "Home",
});

const { x, y } = useMouse()
</script>

<template>
  <div>Home</div>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
  <h1> {{ $translate('greetings.hello') }}</h1>
</template>

<style lang="scss" scoped></style>
