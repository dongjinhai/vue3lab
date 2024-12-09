import Dexie, { type EntityTable } from "dexie";

const db = new Dexie('FriendDatabase') as Dexie & {
  friends: EntityTable<Chat.Friend, 'id'>
  histories: EntityTable<Chat.History, 'id'>
};

db.version(1).stores({
  friends: '++id, name, age',
  histories: 'id, name, content'
})


export { db }
