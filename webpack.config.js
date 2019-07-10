const path = require('path');

module.exports = {
  // set entry direction
  entry: path.join(__dirname, 'src', 'app.js'),
  // set output directory and name
  output: {
    // set the route
    path: path.join(__dirname, 'dist'),
    // set the compile file
    filename: 'app.bundle.js'
  },

  mode: process.env.NODE_ENV || 'development',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      }]
    }
}
