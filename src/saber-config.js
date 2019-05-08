module.exports = {
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
