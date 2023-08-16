const { createWebpackAliases } = require('./webpack.func');

module.exports = createWebpackAliases({
    '@': 'src',
    '@assets': 'assets'
});