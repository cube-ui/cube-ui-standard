import { componentOptions } from '../../../utils'

const EVENT_CLICK = 'click'

export const Name = 'CubeButton'
export const Options = componentOptions({
  name: Name,
  props: {
    type: {
      type: String,
      default: 'button'
    },
    text: String,
    tip: String,
    icon: String,
    active: Boolean,
    disabled: Boolean,
    inline: Boolean,
    primary: Boolean,
    outline: Boolean,
    light: Boolean,
    link: Boolean
  },
  computed: {
    rootClass(): object {
      return {
        'cube-btn_active': this.active,
        'cube-btn_disabled': this.disabled,
        'cube-btn_inline': this.inline || this.link,
        'cube-btn_primary': this.primary,
        'cube-btn_outline': this.outline || this.light,
        'cube-btn_outline_primary': this.outline && this.primary,
        'cube-btn_light': this.light,
        'cube-btn_link': this.link,
        'cube-btn_link_primary': this.link && this.primary
      }
    }
  },
  methods: {
    handleClick(e: Event) {
      if (!this.disabled) {
        this.$emit(EVENT_CLICK, e)
      }
    }
  }
})
