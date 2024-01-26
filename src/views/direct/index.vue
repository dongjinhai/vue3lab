<script setup lang='ts'>
defineOptions({
  name: 'Direct'
})

const vFocus = {
  mounted: (el) => el.focus(),
}
</script>

<template>
  <input v-focus />
</template>

<style lang='scss' scoped>

</style>
