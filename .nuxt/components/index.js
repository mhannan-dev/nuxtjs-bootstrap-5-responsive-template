export { default as IncAboutPage } from '../..\\components\\inc\\AboutPage.vue'
export { default as IncAppFooter } from '../..\\components\\inc\\AppFooter.vue'
export { default as IncAppHeader } from '../..\\components\\inc\\AppHeader.vue'
export { default as IncAppSlider } from '../..\\components\\inc\\AppSlider.vue'
export { default as IncServicePage } from '../..\\components\\inc\\ServicePage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
