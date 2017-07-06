var http = require('http')
var port = process.env['PORT']
var chalk = require('chalk')

var server = http.createServer(function (req, res) {
  var body = {
    data: 'test'
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(body))
  res.end()
})

server.on('listening', function () {
  console.log('Listening on port ' + chalk.yellow(port))
})

server.on('request', function (req, res) {
  console.log(chalk.green(req.method), req.url)
})

server.listen(port)
