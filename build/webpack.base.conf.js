var path = require('path');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
    },
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json'},
      { test: /\.scss$/, loader: 'vue-style!css!resolve-url!sass?sourceMap' },
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=fonts/[name].[ext]?[hash:7]' },
      { test: /\.(png|jpg|gif|svg)$/,
        loader: 'url?limit=10000&name=[name].[ext]?[hash:7]' },
    ],
  },
  vue: {
    loaders: {
      js: 'eslint',
      scss: 'vue-style!css!resolve-url!sass?sourceMap',
    },
  },
};
