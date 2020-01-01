declare module '*.vue?vue3' {
  import { defaultVue3Component } from 'standard/utils'
  export default defaultVue3Component
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
