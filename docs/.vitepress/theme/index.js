import DefaultTheme from 'vitepress/theme'
import Projects from './components/Projects.vue'
import AdUnit from './components/AdUnit.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Projects', Projects)
    app.component('AdUnit', AdUnit)
  }
}