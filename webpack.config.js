const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/', // Customize the output directory as needed
          },
        },
      },
    ],
  },
};
