import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AndroidLiquidGlassView",
  titleTemplate: "LiquidGlass Component Library for Android",
  description: "Android imitation of iOS 26 liquid glass effect, AndroidLiquidGlassView library has real refraction and dispersion effect",
  sitemap: {
    hostname: 'https://liquidglass.qmdeve.com'
  },
  head: [
    ['link', { rel: 'icon', href: '/hero.jpg' }],
    ['meta', { name: 'msvalidate.01', content: '3B3196CCE3689B59560B015D922104EE' }],
    ['meta', { name: 'google-site-verification', content: '2hFUKgXRhlWwjVnt_m5PN0IA00LaSYJBs0ZK1RjBzQY' }],
    ['script', { async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1263219814762561', crossorigin: 'anonymous' }]
  ],
  themeConfig: {
    logo: '/hero.jpg',
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/QmDeve/AndroidLiquidGlassView-Docs/edit/main/docs/:path'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/QmDeve/AndroidLiquidGlassView/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025-2026 <a href="https://github.com/QmDeve">Donny Yale</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QmDeve/AndroidLiquidGlassView' },
      { icon: 'telegram', link: 'https://t.me/QmDeve' }
    ],
  },

  locales: {
    root: {
      title: "AndroidLiquidGlassView",
      titleTemplate: "Android LiquidGlass Component Library ",
      description: "Android imitation of iOS 26 liquid glass effect, AndroidLiquidGlassView library has real refraction and dispersion effect",
      label: 'English',
      lang: 'en',
      themeConfig: {
        darkModeSwitchLabel: 'Themes',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/getting-started' },
          { text: 'Components',
            items: [
              { text: 'AndroidLiquidGlassView', link: '/quick-start/AndroidLiquidGlassView.md' }
            ]
          }
        ]
      }
    },
    zh: {
      title: "AndroidLiquidGlassView",
      titleTemplate: "Android 液态玻璃效果组件库",
      description: "Android 仿 iOS 26 液态玻璃效果，AndroidLiquidGlassView 库拥有真实的折射和色散效果",
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/QmDeve/AndroidLiquidGlassView' },
          { icon: 'qq', link: 'https://qm.qq.com/q/rZbCOqm4VO' },
          { icon: 'telegram', link: 'https://t.me/QmDeve' }
       ],
        darkModeSwitchLabel: '主题',
        nav: [
          { text: '首页', link: '/'},
          { text: '快速开始', link: '/zh/getting-started'},
          { text: '组件',
            items: [
              { text: 'AndroidLiquidGlassView', link: '/zh/quick-start/AndroidLiquidGlassView.md' }
            ]
          }
        ]
      }
    }
  }
})
