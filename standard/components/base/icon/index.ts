import './style/index.styl'
import { Options as CubeIcon } from './options'
import renderOptions from './template.vue?vue3'

CubeIcon.render = renderOptions.render

export { CubeIcon }

export default CubeIcon
