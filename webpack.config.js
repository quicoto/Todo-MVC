const path = require('path');

let mode = 'production';

if (process.env.NODE_ENV === 'development') {
  mode = 'development';
}

module.exports = {
  mode,
  entry: [
    './src/app.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
