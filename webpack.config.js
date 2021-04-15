module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
  output: {
    filename: 'text-variants-tune.js',
    library: 'TextVariantsTune',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
