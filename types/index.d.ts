import { ComponentCustomProperties } from "vue";

declare module "vue" {
  interface ComponentCustomProperties {
    $msg: (msg: string) => void;
    $translate: (msg: string) => void;
  }
}

export default ComponentCustomProperties;
