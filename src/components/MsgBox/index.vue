<template>
  <div class="msg-box">
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <button class="btn cancel" @click="handleCancel">取消</button>
      <button class="btn confirm" @click="handleConfirm">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MsgBox',
  emits: ['confirm', 'cancel'],
  setup(props, { emit }) {
    const handleConfirm = () => {
      emit('confirm')
    }

    const handleCancel = () => {
      emit('cancel')
    }

    return {
      handleConfirm,
      handleCancel
    }
  }
})
</script>

<style scoped>
.msg-box {
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  max-width: 400px;
  margin: 0 auto;
}

.content {
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.cancel {
  background-color: #f0f0f0;
  color: #333;
}

.cancel:hover {
  background-color: #e0e0e0;
}

.confirm {
  background-color: #007bff;
  color: white;
}

.confirm:hover {
  background-color: #0069d9;
}
</style>
