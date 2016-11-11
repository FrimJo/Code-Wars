import express = require('express')
import path = require('path')
import bodyParser = require('body-parser')
import ScriptManager = require('./models/script_manager')
import SocketManager = require('./models/socket_manager')
import Arena = require('./models/arena')

// Set up App ======================
const app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/'));

// Set up Server ======================
const server = app.listen(3011, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('This express app is listening on port:' + port)
})

// Set up Other ======================
const socketManager = SocketManager.init(server)
const arena = Arena.getInstance()

// Set up Routs ======================
app.post('/scripts/save', function(req, res){
	
	console.log('POST: /scripts/save')

	let user_id = req.body['user_id']
	let script = req.body['script']

	if(user_id && script){

		// Save script to file
		ScriptManager.saveScript(user_id, script)
		res.sendStatus(200)
		return
	}
	res.status(500).json({ error: 'could not save script' })

})

app.post('/scripts/remove', function(req, res){
	console.log('POST: /scripts/remove')
	res.sendStatus(200)
})

app.post('/scripts/load', function(req, res){

	console.log('POST: /scripts/load')

	let user_id = req.body['user_id']

	// If a user_id was provided
	if(user_id){

		// Get script from file
		let script: string = ScriptManager.getScript(user_id)

		// If we found a script for provided user_id
		if(script){

			// Send respond to client containing script
			res.status(200).send(JSON.stringify({script: script}))
			return
		}
	}

	res.status(500).json({ error: 'could not load script' })

})

app.post('/arenas/join', function(req, res){
	
	console.log('POST: /arenas/join')

	let user_id = req.body['user_id']
	
	// If a user_id was provided
	if(user_id){

		// Add the robot to an arean
		arena.addRobot(user_id)
		res.sendStatus(200)
		return

	}
	res.status(500).json({ error: 'could not add robot' })
})

app.post('/arenas/leave', function(req, res){
	
	console.log('POST: /arenas/leave')

	let user_id = req.body['user_id']
	
	// If a user_id was provided
	if(user_id){

		// Remove the robot from an arean
		arena.removeRobot(user_id)
		res.sendStatus(200)
		return
	}
	res.status(500).json({ error: 'could not remove robot' })
})

app.get('/reset.css', (req: express.Request, res: express.Response) => {
	console.log('reset.css delivered')
    res.sendFile(path.resolve(__dirname, 'reset.css'))
})

app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

