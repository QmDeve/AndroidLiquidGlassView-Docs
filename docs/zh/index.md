---
layout: home

hero:
  name: "Android"
  text: "液态玻璃组件库"
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/getting-started
    - theme: brand
      text: GitHub
      link: https://github.com/QmDeve/AndroidLiquidGlassView
    - theme: alt
      text: 下载 Demo
      link: https://github.com/QmDeve/AndroidLiquidGlassView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: 液态玻璃效果
    details: 折射、色散效果、弹性效果、高光效果、模糊效果等多种液态玻璃视觉效果。
  - title: 高度可定制
    details: 支持调整圆角半径、折射高度、折射偏移、色散参数、模糊半径、色调、色调可见度、拖动与弹性效果、高光效果等
  - title: 要求
    details: Android API 33 +（Android 13），以获得完整的玻璃效果
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/QmDeve.png',
    name: 'Donny Yale',
    title: 'Creator',
    org: 'QmDeve',
    orgLink: 'https://qmdeve.com',
    links: [
      { icon: 'github', link: 'https://github.com/QmDeve' },
      { icon: 'gmail', link: 'mailto:donny@qmdeve.com' },
      { icon: 'telegram', link: 'https://t.me/donny_yale' },
      { icon: 'qq', link: 'https://qm.qq.com/q/l2ahC820iQ' },
      { icon: 'twitter', link: 'https://x.com/qmdeve' }
    ]
  },
  {
    avatar: 'https://www.github.com/Mrtrne.png',
    name: 'Mrtrne'
  }
]

const projects = [
  {
    title: 'QmBlurView',
    description: 'Android Ui 组件库，提供实时动态高斯模糊效果。它使用原生 C++ 代码进行高效的模糊处理，并提供一套模糊 UI 组件，以增强您的应用设计',
    link: 'https://blurview.qmdeve.com',
    tags: ['Android Lib', 'BlurView', 'Components']
  },
  {
    title: 'Qm Authenticator',
    description: '一个开源的、安全的、离线的双因素认证（2FA）应用程序，专为 Android 开发。它帮助您为在线账户添加额外的安全层',
    link: 'https://github.com/Rouneant/Qm-Authenticator-for-Android',
    tags: ['Android', 'Security', 'Material Design 3']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Star History

[![Star History](https://starchart.qmdeve.com/QmDeve/AndroidLiquidGlassView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/AndroidLiquidGlassView)

## 交流讨论
<a href="https://t.me/QmDeve" target="_blank">
  <img src="https://img.shields.io/badge/Telegram%20Group-@QmDeve-blue?style=for-the-badge&logo=telegram" style="border-radius: 8px;">
</a><br><a href="https://qm.qq.com/q/NBHRYhce4y" target="_blank">
  <img src="https://img.shields.io/badge/QQ%20Group-1058551673-blue?style=for-the-badge&logo=qq" style="border-radius: 8px;">
</a>

## 开源许可证

```
Copyright ©️ 2025-2026 Donny Yale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


## 我的其他项目

<MyProjects :projects="projects" />