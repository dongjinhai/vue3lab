<script setup lang='ts'>
defineOptions({
  name: 'Rxjs'
})
import { of, map, first, observable } from 'rxjs'
import { a } from './lib/test'
defineOptions({
  name: 'Rxjs'
})

of(1, 2, 3).pipe(map((x) => x*x)).subscribe((v) => console.log(`value ${v}`))
of(1, 2, 3).pipe(first()).subscribe((v) => console.log(`value ${v}`))
</script>

<template>
  <div>test</div>
</template>

<style lang='scss' scoped>

</style>
