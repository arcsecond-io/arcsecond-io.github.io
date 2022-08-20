import DefaultTheme from 'vitepress/theme'
import ThemedImage from './ThemedImage.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThemedImage', ThemedImage)
  }
}
