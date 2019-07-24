const path = require('path')
const { isProduction } = require('./env-conf')

console.log('path', process.env.NODE_ENV)

const assetsPath = 'assets'

function getAssetsPath (mode, pathname) {
  return path.join(isProduction(mode) ? assetsPath : '', pathname)
}

module.exports = {
  assets: 'assets',
  getAssetsPath,
}
