import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// 鈹€鈹€ 鍏变韩瀵艰埅椤瑰畾涔夛紙閾炬帴鎸?locale 涓嶅悓锛?鈹€鈹€
const zhNav = [
  { text: 'LLM 鐩磋', link: '/zh/main' },
  { text: '绔炰簤鏍煎眬', link: '/zh/competition' },
  {
    text: 'Co-Cognition 鍏ㄦ櫙鍥?,
    items: [
      { text: '鍒嗙被瀛︽鏋?, link: '/zh/cocognition/' },
    ],
  },
  { text: '鍏充簬', link: '/zh/about' },
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

// 鈹€鈹€ 鍏变韩渚ц竟鏍?鈹€鈹€
const zhSidebar = [
  {
    text: 'LLM 涓庝汉绫荤洿瑙?,
    collapsed: false,
    items: [
      { text: '涓绘枃妗?, link: '/zh/main' },
      { text: '鎵ц鎽樿', link: '/zh/summary' },
      { text: '缁煎悎杈撳嚭', link: '/zh/synthesis' },
      { text: '璺ㄦ枃鍖栭檮褰?, link: '/zh/cross-cultural' },
      { text: '鎿嶄綔鍖栭檮褰?, link: '/zh/operationalization' },
      { text: '浜у搧鎸囧崡', link: '/zh/product-guide' },
    ],
  },
  {
    text: '鍚岃璇勫',
    collapsed: true,
    items: [
      { text: '鍒涙柊鎬ц瘎瀹?, link: '/en/peer-review' },
    ],
  },
  {
    text: '绔炰簤鏍煎眬鎺ㄦ紨',
    collapsed: true,
    items: [
      { text: 'v4 鎺ㄦ紨', link: '/zh/competition' },
    ],
  },
  {
    text: 'Co-Cognition 鍏ㄦ櫙鍥?,
    collapsed: true,
    items: [
      { text: '鍒嗙被瀛︽鏋?, link: '/zh/cocognition/' },
    ],
  },
  {
    text: '鍏充簬',
    collapsed: true,
    items: [
      { text: '椤圭洰璇存槑', link: '/zh/about' },
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
  description: 'LLM 脳 浜虹被璁ょ煡锛氭帰绱?AI 鐨勭洸鍖轰笌浜虹被鐨勪笉鍙浛浠ｆ€?,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Co-Cognition Lab' }],
    ['meta', { property: 'og:title', content: 'Co-Cognition Lab 鈥?LLM 脳 Human Cognition' }],
    ['meta', { property: 'og:description', content: 'Exploring the unknowns of AI and the irreplaceable nature of human cognition.' }],
  ],
  locales: {
    root: {
      label: '涓枃',
      lang: 'zh-CN',
      title: 'Co-Cognition Lab',
      description: 'LLM 脳 浜虹被璁ょ煡锛氭帰绱?AI 鐨勭洸鍖轰笌浜虹被鐨勪笉鍙浛浠ｆ€?,
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
      description: 'LLM 脳 Human Cognition: Exploring the Unknowns of AI',
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
      text: '鏈€鍚庢洿鏂?,
    },
    docFooter: {
      prev: '涓婁竴椤?,
      next: '涓嬩竴椤?,
    },
  },
  vite: { plugins: [pagefindPlugin()] },
  cleanUrls: true,
  lastUpdated: true,
})
