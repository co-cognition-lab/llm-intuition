import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// ── 共享导航项定义（链接按 locale 不同） ──
const zhNav = [
  { text: 'LLM 直觉', link: '/zh/main' },
  { text: '竞争格局', link: '/zh/competition' },
  {
    text: 'Co-Cognition 全景图',
    items: [
      { text: '分类学框架', link: '/zh/cocognition/' },
    ],
  },
  { text: '关于', link: '/zh/about' },
]

const enNav = [
  { text: 'LLM Intuition', link: '/en/main' },
  { text: 'Competition', link: '/en/competition' },
  {
    text: 'Co-Cognition Map',
    items: [
      { text: 'Taxonomy', link: '/en/cocognition/' },
    ],
  },
  { text: 'About', link: '/en/about' },
]

// ── 共享侧边栏 ──
const zhSidebar = [
  {
    text: 'LLM 与人类直觉',
    collapsed: false,
    items: [
      { text: '主文档', link: '/zh/main' },
      { text: '执行摘要', link: '/zh/summary' },
      { text: '综合输出', link: '/zh/synthesis' },
      { text: '跨文化附录', link: '/zh/cross-cultural' },
      { text: '操作化附录', link: '/zh/operationalization' },
      { text: '产品指南', link: '/zh/product-guide' },
    ],
  },
  {
    text: '同行评审',
    collapsed: true,
    items: [
      { text: '创新性评审', link: '/en/peer-review' },
    ],
  },
  {
    text: '竞争格局推演',
    collapsed: true,
    items: [
      { text: 'v4 推演', link: '/zh/competition' },
    ],
  },
  {
    text: 'Co-Cognition 全景图',
    collapsed: true,
    items: [
      { text: '分类学框架', link: '/zh/cocognition/' },
    ],
  },
  {
    text: '关于',
    collapsed: true,
    items: [
      { text: '项目说明', link: '/zh/about' },
    ],
  },
]

const enSidebar = [
  {
    text: 'LLM & Human Intuition',
    collapsed: false,
    items: [
      { text: 'Main Document', link: '/en/main' },
      { text: 'Executive Summary', link: '/en/summary' },
      { text: 'Synthesis', link: '/en/synthesis' },
      { text: 'Cross-Cultural', link: '/en/cross-cultural' },
      { text: 'Operationalization', link: '/en/operationalization' },
      { text: 'Product Guide', link: '/en/product-guide' },
    ],
  },
  {
    text: 'Peer Review',
    collapsed: true,
    items: [
      { text: 'Innovation Review', link: '/en/peer-review' },
    ],
  },
  {
    text: 'Competition Landscape',
    collapsed: true,
    items: [
      { text: 'v4 Projection', link: '/en/competition' },
    ],
  },
  {
    text: 'Co-Cognition Map',
    collapsed: true,
    items: [
      { text: 'Taxonomy Framework', link: '/en/cocognition/' },
    ],
  },
  {
    text: 'About',
    collapsed: true,
    items: [
      { text: 'Project Overview', link: '/en/about' },
    ],
  },
]

export default defineConfig({
  title: 'Co-Cognition Lab',
  titleTemplate: ':title | Co-Cognition Lab',
  description: 'LLM × 人类认知：探索 AI 的盲区与人类的不可替代性',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Co-Cognition Lab' }],
    ['meta', { property: 'og:title', content: 'Co-Cognition Lab — LLM × Human Cognition' }],
    ['meta', { property: 'og:description', content: 'Exploring the unknowns of AI and the irreplaceable nature of human cognition.' }],
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Co-Cognition Lab',
      description: 'LLM × 人类认知：探索 AI 的盲区与人类的不可替代性',
      themeConfig: {
        nav: zhNav,
        sidebar: {
          '/zh/': zhSidebar,
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Co-Cognition Lab',
      description: 'LLM × Human Cognition: Exploring the Unknowns of AI',
      themeConfig: {
        nav: enNav,
        sidebar: {
          '/en/': enSidebar,
        },
      },
    },
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Co-Cognition Lab',
    search: { provider: 'pagefind' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/co-cognition-lab/llm-intuition' }],
    outline: { level: [2, 3] },
    lastUpdated: {
      text: '最后更新',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
  vite: { plugins: [pagefindPlugin()] },
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
})
