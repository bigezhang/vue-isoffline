const buble = require('rollup-plugin-buble')
const pkg = require('./package.json')

module.exports = {
  input: 'src/index.js',
  name: 'vue-isoffline',
  output: {
    file: pkg.main,
    format: 'umd'
  },
  useStrict: false,
  plugins: [buble()]
}
