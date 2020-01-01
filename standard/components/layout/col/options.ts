import { componentOptions } from '../../../utils'

export const Name = 'CubeCol'

export const Options = componentOptions({
  name: Name,
  props: {
    offset: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    span: {
      type: Number,
      default: 0
    },
    alignSelf: {
      type: String,
      default: ''
    }
  }
})
