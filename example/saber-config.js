module.exports = {
  siteConfig: {
    title: 'Tailsaw'
  },
  theme: '../src',
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
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
    }
  ]
}
