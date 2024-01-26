import { type App } from "vue"

export default {
  install: (app: App, options: any) => {
    app.config.globalProperties.$translate = (key: any) => {
      return key.split('.').reduce((o: any, i: any) => {
        if(o) return o[i]
      }, options)
    }
  }
}