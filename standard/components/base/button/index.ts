import './style/index.styl'
import { Options as CubeButton } from './options'
import renderOptions from './template.vue?vue3'

CubeButton.render = renderOptions.render

export { CubeButton }

export default CubeButton
