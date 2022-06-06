module.exports = [{
  name: 'umd.dev',
  entry: './src/index.js',
  output: {
    library: 'GT',
    libraryTarget: 'umd',
    filename: 'gt.dev.js'
  },
  devtool: 'source-map'
}]
