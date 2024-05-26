<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { Codemirror } from "vue-codemirror";
import { python } from "@codemirror/lang-python";
defineOptions({
  name: "CodeEditor",
});

const props = defineProps<{
  text?: string
}>()

defineEmits(['update:text'])

const code = ref("");
const extensions = [python()];
// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
};

const log = console.log;
</script>

<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '100%', width: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="4"
    :extensions="extensions"
    @ready="handleReady"
    @change="$emit('update:text', code)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>
<style lang="scss" scoped></style>