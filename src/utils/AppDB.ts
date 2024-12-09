// import Dexie, { type EntityTable } from "dexie";
// import Friend from "./Friend";

// export default class AppDB extends Dexie {
//   friends!: EntityTable<Friend, 'id'>
  
//   constructor() {
//     super('FriendsDB');
//     this.version(1).stores({
//       friends: '++id, name, age'
//     });
//     this.friends.mapToClass(Friend);
//   }
// }