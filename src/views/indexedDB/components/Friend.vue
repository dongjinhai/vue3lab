<script setup lang="ts">
import { db } from "../../../utils/db";
import { liveQuery } from "dexie";
import { useObservable, from } from "@vueuse/rxjs";
import Good from "./Good.vue";
defineOptions({
  name: "Friend",
});

const props = defineProps<{
  id: number;
  name: string;
}>();

const goods = useObservable(
  from(
    liveQuery(async () => {
      return await db.goods.where("id").equals(props.id).toArray();
    }),
  ),
);
</script>

<template>
  <div class="border border-solid border-red-300">
    <h2>{{ props.id + props.name }}</h2> 
    <div v-for="good in goods">
      <Good :id="good.id" :name="good.name"></Good>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
