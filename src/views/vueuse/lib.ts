import { createApp, ref } from "vue";
import Plotly from "./components/Plotly.vue";

const PlotlyBox = {
  create(title: string, width: number, height: number, left: number, top: number) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp(Plotly, {
      title,
      width,
      height,
      left,
      top,
      onClose() {
        console.log('close');
        app.unmount()
        div.remove()
      }
    })
    app.mount(div)
  }
}

export default PlotlyBox
