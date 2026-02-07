---
layout: home

hero:
  name: "Android"
  text: "Liquid Glass Component Library"
  actions:
    - theme: brand
      text: Quick Start
      link: /getting-started
    - theme: brand
      text: GitHub
      link: https://github.com/QmDeve/AndroidLiquidGlassView
    - theme: alt
      text: Download Demo
      link: https://github.com/QmDeve/AndroidLiquidGlassView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: Liquid Glass Effects
    details: Refraction, dispersion effects, elastic effects, highlight effects, blur effects and more liquid glass visual effects.
  - title: Highly Customizable
    details: Supports adjusting corner radius, refraction height, refraction offset, dispersion parameters, blur radius, hue, hue visibility, drag and elastic effects, highlight effects etc.
  - title: Requirements
    details: Android API 33 + (Android 13), to get the full glass effect
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
    description: 'Android UI component library that provides real-time, dynamic Gaussian blur effects. It uses native C++ code for efficient blur processing and provides a set of blur UI components to enhance your application design',
    link: 'https://blurview.qmdeve.com',
    tags: ['Android Lib', 'BlurView', 'Components']
  },
  {
    title: 'Qm Authenticator',
    description: 'An open-source, secure, offline two-factor authentication (2FA) application developed for Android. It helps you add an extra layer of security to your online account',
    link: 'https://github.com/Rouneant/Qm-Authenticator-for-Android',
    tags: ['Android', 'Security', 'Material Design 3']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Star History

[![Star History](https://starchart.qmdeve.com/QmDeve/AndroidLiquidGlassView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/AndroidLiquidGlassView)

## Discuss
<a href="https://t.me/QmDeve" target="_blank">
  <img src="https://img.shields.io/badge/Telegram%20Group-@QmDeve-blue?style=for-the-badge&logo=telegram" style="border-radius: 8px;">
</a><br><a href="https://qm.qq.com/q/NBHRYhce4y" target="_blank">
  <img src="https://img.shields.io/badge/QQ%20Group-1054049593-blue?style=for-the-badge&logo=qq" style="border-radius: 8px;">
</a>

## License

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

## My Other Projects

<MyProjects :projects="projects" />