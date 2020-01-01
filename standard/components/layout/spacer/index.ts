import './index.styl'
import { Options as CubeSpacer } from './options'
import renderOptions from './template.vue?vue3'

CubeSpacer.render = renderOptions.render

export { CubeSpacer }

export default CubeSpacer
