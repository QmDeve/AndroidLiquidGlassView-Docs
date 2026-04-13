import DefaultTheme from 'vitepress/theme'
import Projects from './components/Projects.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Projects', Projects)
  }
}