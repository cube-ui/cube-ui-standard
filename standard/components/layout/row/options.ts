import { componentOptions } from '../../../utils'

export const Name = 'CubeRow'

export const Options = componentOptions({
  name: Name,
  props: {
    align: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    alignContent: {
      type: String,
      default: ''
    },
    gutter: {
      type: Number,
      default: 0
    }
  }
})
