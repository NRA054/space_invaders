const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/space_invaders.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};
