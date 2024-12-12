import Dexie, { type EntityTable } from "dexie";

const db = new Dexie('FriendDatabase') as Dexie & {
  histories: EntityTable<Chat.History, 'id'>,
  friends: EntityTable<Chat.Friend, 'id'>
  goods: EntityTable<Chat.Good, 'id'>
};

db.version(3).stores({
  goods: '++id, friendId, name',
  friends: '++id, historyId, name',
  histories: '++id, name'
})


export { db }
