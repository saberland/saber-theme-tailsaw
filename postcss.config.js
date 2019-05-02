const { join } = require('path')

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
    require('postcss-nested'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        join(__dirname, './src/**/*.vue'),
        join(__dirname, './src/**/*.js')
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ''
        )
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        )
      },
      whitelist: [],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    })
  ]
}
