import './index.styl'
import { Options as CubeRow } from './options'
import renderOptions from './template.vue?vue3'

CubeRow.render = renderOptions.render

export { CubeRow }

export default CubeRow
