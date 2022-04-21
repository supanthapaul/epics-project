const express = require('express')
const { Server } = require("socket.io");
var cors = require('cors')
require('dotenv').config()
const http = require('http');
let mongoose = require('mongoose');
const formatMessage = require('./utils/messages');
const {
	userJoin,
	getCurrentUser,
	userLeave,
	getRoomUsers
} = require('./utils/users');

let apiRoutes = require("./api-routes")
const app = express()
app.use(cors())
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { 
  cors: {    
    origin: "*",    
    methods: ["GET", "POST"]  
  }});
const port = 8000


// middlewares
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


// Use Api routes in the App
app.use('/api', apiRoutes)

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true });
var db = mongoose.connection;

// Added check for DB connection
if (!db)
	console.log("Error connecting db")
else
	console.log("Db connected successfully")

app.get('/', (req, res, next) => {
	res.json({
		message: 'API starting point'
	});
});

// Socket
const botName = 'MindPeace Bot';

// Run when client connects
io.on('connection', socket => {
	socket.on('joinRoom', ({ username, room, botMsg }) => {
		const user = userJoin(socket.id, username, room);

		socket.join(user.room);
		console.log(username + " joined room " + room);
		// Welcome current user
		socket.emit('message', formatMessage(botName, 'Welcome to MindPeace professional help! ' + botMsg));

		// Broadcast when a user connects
		socket.broadcast
			.to(user.room)
			.emit(
				'message',
				formatMessage(botName, `${user.username} has joined the chat`)
			);

		// Send users and room info
		io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room)
		});
	});

	// Listen for chatMessage
	socket.on('chatMessage', msg => {
		const user = getCurrentUser(socket.id);

		socket.to(user.room).emit('message', msg);
	});

	// Runs when client disconnects
	socket.on('disconnect', () => {
		const user = userLeave(socket.id);

		if (user) {
			io.to(user.room).emit(
				'message',
				formatMessage(botName, `${user.username} has left the chat`)
			);

			// Send users and room info
			io.to(user.room).emit('roomUsers', {
				room: user.room,
				users: getRoomUsers(user.room)
			});
		}
	});
});


server.listen(port, () => {
	console.log(`server listening at http://localhost:${port}`)
})