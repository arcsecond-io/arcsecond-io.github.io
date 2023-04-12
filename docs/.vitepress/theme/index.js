import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import ThemedImage from './ThemedImage.vue'
import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp (ctx) {
    const { app } = ctx
    app.component('ThemedImage', ThemedImage)
    DefaultTheme.enhanceApp(ctx)
  },

  setup () {
    const route = useRoute()
    const initZoom = () => {
      new mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }) // Should there be a new?
      // new mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
