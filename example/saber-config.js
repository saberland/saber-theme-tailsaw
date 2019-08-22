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
    },
    {
      resolve: 'saber-plugin-search'
    }
  ]
}
