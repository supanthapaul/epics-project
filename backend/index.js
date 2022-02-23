const express = require('express')
var cors = require('cors')
require('dotenv').config()
let mongoose = require('mongoose');

let apiRoutes = require("./api-routes")
const app = express()
const port = 8000


// middlewares
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
app.use(cors())
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

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

app.listen(port, () => {
	console.log(`server listening at http://localhost:${port}`)
})