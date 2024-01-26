import { ref, onMounted, onUnmounted } from 'vue';

// type Position = {
//   x: number;
//   y: number;
// }


export function useMouse() {
  const y = ref(0);
  const x = ref(0);
  
  function update(event: any) {
    x.value = event.pageX;
    y.value = event.pageY;
  }
  
  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));
  
  return { x, y }
}