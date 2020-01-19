import './style/index.styl'
import { Options as CubeButton } from './options'
import renderOptions from './template.vue?vue3'
import { CubeIcon } from '../icon'

CubeButton.render = renderOptions.render

CubeButton.components = {
  [CubeIcon.name]: CubeIcon
}

export { CubeButton }

export default CubeButton
