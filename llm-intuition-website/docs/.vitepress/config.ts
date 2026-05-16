import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  title: 'LLM 与人类直觉',
  titleTemplate: ':title | co-cognition.org/lab',
  description: '探索 LLM 与人类直觉的关系——互补地图、三条铁律、四个不推进',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'co-cognition.org/lab' }],
  ],
  locales: {
    root: { label: '中文', lang: 'zh-CN', link: '/zh/' },
    en: { label: 'English', lang: 'en-US', link: '/en/' },
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'co-cognition.org/lab',
    search: { provider: 'pagefind' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/co-cognition-lab/llm-intuition' }],
  },
  vite: { plugins: [pagefindPlugin()] },
  cleanUrls: true,
  lastUpdated: true,
})
