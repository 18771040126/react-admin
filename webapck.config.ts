const path = require('path')

const resolve = (relatedPath: string) => {
  return path.join(__dirname, relatedPath)
}
module.exports = {
  entry: {
    client: resolve('./src/index.tsx'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@/': path.join(__dirname, './src'),
    },
  },
  module: {
    rules: [{}],
  },
}
