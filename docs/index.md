---
layout: home

hero:
  name: "Android"
  text: "Liquid Glass Component Library"
  actions:
    - theme: brand
      text: Quick Start
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/QmDeve/AndroidLiquidGlassView

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
    name: 'Donny Yang',
    title: 'Creator',
    org: 'QmDeve',
    orgLink: 'https://qmdeve.com',
    links: [
      { icon: 'github', link: 'https://github.com/QmDeve' },
      { icon: 'gmail', link: 'mailto:donny@qmdeve.com' },
      { icon: 'telegram', link: 'https://t.me/donny_yang' },
      { icon: 'twitter', link: 'https://x.com/qmdeve' }
    ]
  },
  {
    avatar: 'https://www.github.com/Mrtrne.png',
    name: 'Mrtrne'
  }
]
</script>

<VPTeamMembers size="small" :members />

## License

```
Copyright ©️ 2025-2026 Donny Yang

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