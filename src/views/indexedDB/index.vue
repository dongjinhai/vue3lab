<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { liveQuery } from "dexie";
import { db } from "../../utils/db";
import { useObservable, from } from "@vueuse/rxjs";
import { map, switchAll } from "rxjs";
import Friend from "./components/Friend.vue";

defineOptions({
  name: "IndexedDB",
});

// async function deleteFriend() {
//   const res = await db.friends.where("age").equals(100).delete()
// }

// const friends = useObservable(
//   from(
//     liveQuery(async() => {
//       return await db.friends.where("age").equals(100).toArray();
//     })
//   )
// )
const currentHistoryId = ref(0);
const queryHistoryId = ref(2);
function updateCurrentHistoryId() {
  queryHistoryId.value = currentHistoryId.value;
  console.log(queryHistoryId.value, currentHistoryId.value);
  
}

const friendText = ref("");
const friendId = ref(0);
const goodText = ref("");
const historyId = ref(0);
const historyText = ref("");
const goodId = ref(0);

async function addHistory() {
  const res = await db.histories.add({ name: historyText.value });
  console.log(res);
}

async function addFriend() {
  const res = await db.friends.add({
    historyId: +historyId.value,
    name: friendText.value,
  });
  console.log(res);
}

async function addGood() {
  const res = await db.goods.add({
    friendId: +friendId.value,
    name: goodText.value,
  });
  console.log(res);
}

async function appendGoodName() {
  const good = await db.goods.get(+goodId.value);
  const new_name = good.name + goodText.value;
  const res = await db.goods.update(+goodId.value, { name: new_name });
  console.log(res);
}

const queryObs = from(queryHistoryId, { immediate: true, deep: false })
const friensdObs = liveQuery(
  async () => {
    console.log(queryHistoryId.value);
    return await db.friends.where('historyId').equals(+queryHistoryId.value).toArray();
  }
)
const source = queryObs.pipe(map(() => friensdObs))
const out = source.pipe(switchAll())
const friends2 = useObservable(out)

const histories = useObservable(
  from(
    liveQuery(async () => {
      return await db.histories.toArray();
    }),
  ),
);

// const friends = ref<Array<Chat.Friend>>([]);
const friends = useObservable(
  from(
    liveQuery(async () => {
      console.log(queryHistoryId.value);
      return await db.friends.where('historyId').equals(+queryHistoryId.value).toArray();
    }),
  ),
);

// watch(queryHistoryId, async () => {
//   friends.value = await db.friends
//     .where("historyId")
//     .equals(++queryHistoryId.value)
//     .toArray();
// });
</script>

<template>
  <input type="text" v-model="historyText" />
  <button class="border p-1" @click="addHistory">AddHistory</button><br />
  <input type="text" v-model="historyId" />
  <input type="text" v-model="friendText" />
  <button class="border p-1" @click="addFriend">AddFriend</button><br />
  <input type="text" v-model="friendId" />
  <input type="text" v-model="goodText" />
  <button class="border p-1" @click="addGood">AddGood</button><br />
  <input type="text" v-model="goodId" />
  <input type="text" v-model="goodText" />
  <button class="border p-1" @click="appendGoodName">AppendGoodText</button
  ><br />

  <br />
  <input type="text" v-model="currentHistoryId" />
  <button class="border p-1" @click="updateCurrentHistoryId">Update</button
  ><br />
  <div v-for="his in histories">{{ his }}</div>

  <br />
  <div class="p-3" v-for="friend in friends">
    <Friend :id="friend.id" :name="friend.name"></Friend>
  </div>
  
  <br>

  <div class="p-3" v-for="friend in friends2">
    <Friend :id="friend.id" :name="friend.name"></Friend>
  </div>
</template>

<style lang="scss" scoped></style>
