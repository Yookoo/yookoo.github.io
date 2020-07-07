module.exports = {
  title: 'Hello, Welcome to  My Blog',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
      logo: '/logo.png',
    },
  plugins: {
      "vuepress-plugin-auto-sidebar": {},
      '@vuepress/active-header-links': true,
       "@vuepress/back-to-top": true
    }
}
