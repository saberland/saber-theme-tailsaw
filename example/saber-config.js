module.exports = {
  siteConfig: {
    title: 'Tailsaw'
  },
  theme: '../src',
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
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
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-critical'
    }
  ]
}
