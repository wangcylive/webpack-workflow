const fs = require('fs')
const join = require('path').join
const { exec } = require('child_process')
const path = require('path')

/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync (startPath) {
  let result = []

  function finder (path) {
    let files = fs.readdirSync(path)

    files.forEach((val, index) => {
      let fPath = join(path, val)
      let stats = fs.statSync(fPath)
      if(stats.isDirectory()) {
        finder(fPath)
      }
      if(stats.isFile()) {
        result.push(fPath)
      }
    })

  }

  finder(startPath)
  return result
}

function promiseExec (command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if(err) {
        reject(err)
        return
      }

      if(stderr) {
        reject(stderr)
        return
      }

      resolve(stdout)
    })
  })
}

async function cwebp (dirPath) {
  const images = findSync(dirPath).filter((item) => {
    return /\.(jpe?g|png)$/.test(item)
  })

  images.forEach(async (name) => {
    const result = await promiseExec(`cwebp ${name} -o ${name}.webp`)
    console.log(result)
  })
}

const dirPath = path.resolve(__dirname, '../src/image')

cwebp(dirPath)
