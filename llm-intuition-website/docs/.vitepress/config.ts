import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// ── 站点元数据 ──
const HOSTNAME = 'https://co-cognition.org'
const OG_IMAGE = '/og-image.jpg'
const OG_IMAGE_WIDTH = '1200'
const OG_IMAGE_HEIGHT = '630'

// ── 共享导航项定义（链接按 locale 不同） ──
const zhNav = [
  { text: 'LLM 直觉盲区', link: '/zh/llm-intuition' },
  { text: '竞争格局', link: '/zh/competition' },
  { text: 'Co-Cognition 全景图', link: '/zh/cocognition/' },
  { text: '危机认知', link: '/zh/crisis/' },
  { text: '关于', link: '/zh/about' },
]

const enNav = [
  { text: 'LLM Intuition', link: '/en/llm-intuition' },
  { text: 'Competition', link: '/en/competition' },
  { text: 'Co-Cognition Map', link: '/en/cocognition/' },
  { text: 'Crisis Cognition', link: '/en/crisis/' },
  { text: 'About', link: '/en/about' },
]

// ── 共享侧边栏 ──
const zhSidebar = [
  {
    text: 'LLM 与人类直觉',
    collapsed: false,
    items: [
      { text: '主文档', link: '/zh/llm-intuition' },
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
    text: '危机认知协作',
    collapsed: true,
    items: [
      { text: '项目说明', link: '/zh/crisis/' },
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
      { text: 'Main Document', link: '/en/llm-intuition' },
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
    text: 'Crisis Cognition',
    collapsed: true,
    items: [
      { text: 'Project Overview', link: '/en/crisis/' },
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

// ── 多语言 URL 映射表（用于 hreflang 注入） ──
const localePairs: Record<string, { zh: string; en: string }> = {
  'main': { zh: '/zh/llm-intuition', en: '/en/llm-intuition' },
  'summary': { zh: '/zh/summary', en: '/en/summary' },
  'synthesis': { zh: '/zh/synthesis', en: '/en/synthesis' },
  'cross-cultural': { zh: '/zh/cross-cultural', en: '/en/cross-cultural' },
  'operationalization': { zh: '/zh/operationalization', en: '/en/operationalization' },
  'product-guide': { zh: '/zh/product-guide', en: '/en/product-guide' },
  'competition': { zh: '/zh/competition', en: '/en/competition' },
  'cocognition/': { zh: '/zh/cocognition/', en: '/en/cocognition/' },
  'cocognition/index': { zh: '/zh/cocognition/', en: '/en/cocognition/' },
  'crisis/': { zh: '/zh/crisis/', en: '/en/crisis/' },
  'crisis/index': { zh: '/zh/crisis/', en: '/en/crisis/' },
  'about': { zh: '/zh/about', en: '/en/about' },
  'peer-review': { zh: '/en/peer-review', en: '/en/peer-review' },
}

function getLocaleUrls(pagePath: string): { zh: string; en: string } | null {
  const cleanPath = pagePath
    .replace(/\.md$/, '')
    .replace(/index$/, '')
    .replace(/^zh\//, '')
    .replace(/^en\//, '')

  const pair = localePairs[cleanPath]
  if (pair) return pair

  for (const [key, value] of Object.entries(localePairs)) {
    if (cleanPath === key || cleanPath.startsWith(key)) {
      return value
    }
  }

  return null
}

function getPageLocale(pagePath: string): 'zh' | 'en' {
  return pagePath.startsWith('zh/') ? 'zh' : 'en'
}

function buildUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path
  return HOSTNAME + cleanPath
}

export default defineConfig({
  title: 'Co-Cognition Lab',
  description: 'LLM × 人类认知：探索 AI 的盲区与人类的不可替代性',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Co-Cognition Lab' }],
    ['meta', { property: 'og:title', content: 'Co-Cognition Lab — LLM × Human Cognition' }],
    ['meta', { property: 'og:description', content: 'Exploring the unknowns of AI and the irreplaceable nature of human cognition.' }],
    ['meta', { property: 'og:image', content: HOSTNAME + OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: OG_IMAGE_WIDTH }],
    ['meta', { property: 'og:image:height', content: OG_IMAGE_HEIGHT }],
    ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
    ['meta', { property: 'og:image:alt', content: 'Co-Cognition Lab — LLM × Human Cognition' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@CoCognitionLab' }],
    ['meta', { name: 'twitter:creator', content: '@CoCognitionLab' }],
    ['meta', { name: 'twitter:title', content: 'Co-Cognition Lab — LLM × Human Cognition' }],
    ['meta', { name: 'twitter:description', content: 'Exploring the unknowns of AI and the irreplaceable nature of human cognition.' }],
    ['meta', { name: 'twitter:image', content: HOSTNAME + OG_IMAGE }],
    ['meta', { name: 'twitter:image:alt', content: 'Co-Cognition Lab — LLM × Human Cognition' }],
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Co-Cognition Lab',
      description: 'LLM × 人类认知：探索 AI 的盲区与人类的不可替代性',
      themeConfig: {
        nav: zhNav,
        sidebar: { '/zh/': zhSidebar },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一页', next: '下一页' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Co-Cognition Lab',
      description: 'LLM × Human Cognition: Exploring the Unknowns of AI',
      themeConfig: {
        nav: enNav,
        sidebar: { '/en/': enSidebar },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
      },
    },
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Co-Cognition Lab',
    search: { provider: 'pagefind' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/co-cognition-lab/llm-intuition' }],
    outline: { level: [2, 3] },
  },
  sitemap: {
    hostname: HOSTNAME,
    lastmodDateOnly: false,
    transformItems: (items) => {
      return items.map((item) => {
        const url = item.url || ''
        if (url === '/zh/' || url === '/zh/main' || url === '/en/' || url === '/en/main') {
          return { ...item, changefreq: 'weekly', priority: 1.0 }
        }
        if (url.endsWith('/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8 }
        }
        return { ...item, changefreq: 'monthly', priority: 0.6 }
      })
    },
  },
  transformPageData(pageData) {
    const { relativePath } = pageData
    const locale = getPageLocale(relativePath)
    const localeUrls = getLocaleUrls(relativePath)

    pageData.frontmatter.head ??= []

    if (localeUrls) {
      const zhUrl = buildUrl(localeUrls.zh)
      const enUrl = buildUrl(localeUrls.en)

      pageData.frontmatter.head.push(
        ['link', { rel: 'alternate', hreflang: 'zh', href: zhUrl }],
        ['link', { rel: 'alternate', hreflang: 'en', href: enUrl }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: zhUrl }],
        ['meta', { property: 'og:locale', content: locale === 'zh' ? 'zh_CN' : 'en_US' }],
        ['meta', { property: 'og:locale:alternate', content: locale === 'zh' ? 'en_US' : 'zh_CN' }],
      )
    } else {
      const pageUrl = buildUrl('/' + relativePath.replace(/\.md$/, '').replace(/index$/, ''))
      pageData.frontmatter.head.push(
        ['link', { rel: 'alternate', hreflang: locale, href: pageUrl }],
        ['meta', { property: 'og:locale', content: locale === 'zh' ? 'zh_CN' : 'en_US' }],
      )
    }

    const pageTitle = pageData.title || (locale === 'zh' ? 'Co-Cognition Lab' : 'Co-Cognition Lab')
    const pageDescription = pageData.frontmatter?.description
      || pageData.description
      || (locale === 'zh'
        ? 'LLM × 人类认知：探索 AI 的盲区与人类的不可替代性'
        : 'LLM × Human Cognition: Exploring the Unknowns of AI')
    const pageUrl = buildUrl('/' + relativePath.replace(/\.md$/, '').replace(/index$/, ''))

    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: pageUrl }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:url', content: pageUrl }],
    )
  },
  vite: { plugins: [pagefindPlugin()] },
  ignoreDeadLinks: ['/zh/silent-blocking', '/en/silent-blocking', '/zh/llm-intuition', '/en/llm-intuition'],
  cleanUrls: true,
  lastUpdated: true,
})
