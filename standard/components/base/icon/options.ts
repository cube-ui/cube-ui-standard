import { componentOptions } from '../../../utils'

export const Name = 'CubeIcon'
export const Options = componentOptions({
  name: Name,
  props: {
    type: String
  },
  computed: {
    rootClass(): string {
      return `cubeic-${this.type}`
    }
  }
})
