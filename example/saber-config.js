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
    route: ['about', 'blog', 'contact']
  },
  markdown: {
    highlighter: 'prism'
  },
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        paginationOptions: {
          perPage: 2
        }
      }
    },
    {
      resolve: 'saber-plugin-critical'
    }
  ]
}
