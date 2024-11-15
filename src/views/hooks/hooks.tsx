import { computed, reactive, ref } from "vue";

export function useCounter(count: number) {
  const refCount = ref(count);

  const doubleCount = computed(() => refCount.value * 2);
  const value = ref(false);

  const increase = (delta: number) => {
    console.log(delta);
    refCount.value = refCount.value + delta;
    return refCount.value;
  };

  const node = () => (
    <>
      <el-button onClick={() => console.log("xxxx")}>Log1</el-button>
      <el-button onClick={() => console.log("yyyy")}>Log2</el-button>
      <el-button onClick={() => console.log("3333")}>Log3</el-button>
      <el-button onClick={() => console.log("4444")}>Log4</el-button>
      <el-switch modelValue={value.value} active-text="Open" inactive-text="Close" />
    </>
  );

  return {
    refCount,
    doubleCount,
    increase,
    node,
  };
}
