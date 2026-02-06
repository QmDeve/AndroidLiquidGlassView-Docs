import DefaultTheme from 'vitepress/theme'
import MyProjects from './components/MyProjects.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyProjects', MyProjects)
  }
}