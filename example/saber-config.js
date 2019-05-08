module.exports = {
  siteConfig: {
    title: 'Tailsaw'
  },
  theme: '../src',
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  themeConfig: {
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ]
  }
}
