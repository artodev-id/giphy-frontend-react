module.exports = {
    mode: 'production',
    entry: ['./src/index.tsx'],
    module: {
      rules: require('./webpack.rules'),
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      clean: true,
    },
    plugins: [...require('./webpack.plugins')],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
      alias: {
        // Custom Aliases
        ...require('./webpack.alias'),
      },
    },
    stats: 'errors-warnings',
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    optimization: {
      minimize: true,
      sideEffects: true,
      concatenateModules: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 0,
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
          }
        },
      },
    },
  };