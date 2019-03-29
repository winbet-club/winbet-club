const path = require('path');
const include = path.resolve(__dirname, '../src');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.gif', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
        include
      },
      {
        test: /\.(gif|svg|woff|woff2)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        include
      },
    ]
  }
};

