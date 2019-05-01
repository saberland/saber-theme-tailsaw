const { join } = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

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
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['js', 'vue']
        }
      ]
    })
  ]
}
