module.exports = {
  title: 'Hello, Welcome to  My Blog',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  searchMaxSuggestions: 10,
  lastUpdated: '最后更新时间',
  repo: 'yookoo/yookoo.github.io',
  repoLabel: '查看源码',
  docsDir: 'docs',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们改善此页面！',
  smoothScroll: true,
  themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '教程', link: '/guide/' },
        { text: 'rising-waves', link: 'https://yookoo.github.io/rising-waves/#/' },
        
      ]
    },
  plugins: {
      "vuepress-plugin-auto-sidebar": {},
      "@vuepress/active-header-links": true,
      "@vuepress/back-to-top": true
    }
}
