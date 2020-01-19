import './style/index.styl'
import { Options as CubeButtons } from './options'
import renderOptions from './template.vue?vue3'

CubeButtons.render = renderOptions.render

export { CubeButtons }

export default CubeButtons
