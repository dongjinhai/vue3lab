import { computed, reactive, ref } from "vue";


export function useCounter(count: number) {
  const refCount = ref(count);

  const doubleCount = computed(() => refCount.value * 2)

  const increase = (delta: number) => {
    console.log(delta);
    refCount.value = refCount.value + delta;
    return refCount.value
  }

  return {
    refCount,
    doubleCount,
    increase
  }
}