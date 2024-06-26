import { type App } from "vue"

export default {
  install: (app: App, options: any) => {
    app.config.globalProperties.$translate = (key: any) => {
      return key.split('.').reduce((opt: any, i: any) => {
        if(opt) return opt[i]
      }, options)
    }
  }
}