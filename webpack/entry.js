const path = require('path')
const findSync = require('./findPathSync')

const entryPath = findSync('./src/main')

const entry = {}

entryPath.forEach(item => {
  const filename = item.split(path.sep).pop()
  const name = filename.substring(0, filename.lastIndexOf('.'))
  entry[ name ] = './' + item
})

module.exports = entry
