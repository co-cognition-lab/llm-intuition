import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './flow.js'

export default {
  extends: DefaultTheme,
} satisfies Theme