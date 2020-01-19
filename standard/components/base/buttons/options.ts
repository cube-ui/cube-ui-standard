import { componentOptions } from '../../../utils'

export const Name = 'CubeButtons'
export const Options = componentOptions({
  name: Name,
  props: {
    column: Boolean,
    bottom: Boolean,
    shadow: Boolean
  },
  computed: {
    rootClass(): object {
      return {
        'cube-btns_column': this.column,
        'cube-btns_bottom': this.bottom,
        'cube-btns_shadow': this.shadow
      }
    }
  }
})
