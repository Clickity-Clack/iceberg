
var express = require('express')
var app = express()
var http = require('http')
var server = http.Server(app)
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

var socketio = require('socket.io')
var io = socketio(server)

io.on('connection', (socket) => {
  
  console.log(socket.id)
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Game is running on ${PORT}`)
})