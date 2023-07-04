const path = require('path');

module.exports = {
  mode: 'development',
  entry: './leadmanager/frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'leadmanager/frontend/static/frontend'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
},
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
