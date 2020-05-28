/**
 * 实现http服务的基本原理
 */
const http = require('http')

const server = http.createServer((req, res) => {
  console.log("req===", req)
  res.writeHead(200)
  res.end('hello nodejs')
})

server.listen(3000, () => {
  console.log('server started at port 3000')
})
