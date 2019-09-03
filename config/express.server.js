const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const app = express()

app.use(history({
  index: '/index.html'
}))
app.use(express.static(path.resolve(__dirname, '../dist')))

app.listen('3000', () => {
  console.log('http://localhost:3000')
})
