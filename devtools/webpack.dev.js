module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    module: {
      rules: require('./webpack.rules'),
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    plugins: require('./webpack.plugins'),
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
      alias: require('./webpack.alias'),
    },
    stats: 'errors-warnings',
    devtool: 'cheap-module-source-map',
    devServer: {
      open: true,
      historyApiFallback:true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
  };