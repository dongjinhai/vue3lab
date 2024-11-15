import type { App } from "vue";
import { createPinia, defineStore } from "pinia";
import type { Chat, Content } from './store'
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

const useChatStore = defineStore('chatStore', {
  state: () => ({
    chats: []
  }),
  
  actions: {
    addChat(chat: Chat) {
      this.chats.push(chat)
    },
    
    addContent(chatIndex: number, content: Content) {
      this.chats[chatIndex].contents.push(content)
    },
    
    modifyContent(chatIndex: number, contentIndex: number, data: string) {
      this.chats[chatIndex].contents[contentIndex].data = data
    }
  }
})

export { store, useChatStore };