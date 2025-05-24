module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
  static: './dist',
  hot: true,
}
}
