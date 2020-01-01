import './index.styl'
import { Options as CubeCol } from './options'
import renderOptions from './template.vue?vue3'

CubeCol.render = renderOptions.render

export { CubeCol }

export default CubeCol
