const path = require('path')
const del = require('del')

del.sync(path.resolve(__dirname, '../dist'))
