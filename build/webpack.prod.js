const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path")
module.exports = merge(common, {
    mode: 'production',
    entry: path.resolve(__dirname, "../packages/index.js"),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist/packages"),
        library: {
            name: 'vueUIComponents',
            type: 'umd',
            umdNamedDefine: true
        },

    },
    externals:{
        'vue': 'Vue',
    },
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
          minChunks:2
        },
      },
    devtool: 'hidden-source-map',
})