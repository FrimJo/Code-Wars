import Arena = require('./arena')

class SocketManager {
	
	private io
	private arena

	constructor() {
		this.arena = Arena.getInstance()
	}

	init(server) {
		let arena = this.arena
		
		this.io = require('socket.io')(server)
		.on('connection', (socket) => {

	        console.log('a robot connected')
			let isServer = socket.handshake.query

			// If we got a qurey
			if (isServer != null) {

				console.log("Query: " + isServer)

                // Set up unique identification
                socket.userid = UUID()

                // If connected user is server
				if (isServer) {

				    // Set up the connection as a server connection
					this.setupServer(socket)
				} else {

                    // Set up the connection as a client connection
					this.setupClient(socket)
				}

                // Create data data object
                let data = {id: socket.userid}

                // Send onconnected message
                socket.emit('onconnected', data )

			}

			/*
	        let tickListener = function(bodies){

				// Get all bodies of robots from arena
				socket.emit('bodies', JSON.stringify(bodies))
	        }

	        let errorListener = function(err) {
				socket.emit('err', JSON.stringify(err.message))
			}

	        // Add listener
	        arena.addTickListener(tickListener)
			arena.addErrorListener(errorListener)

        	// On user disconnect
	        socket.on('disconnectEvent', () => {
	            console.log('robot disconnected')

	            // Remove tick listener
	            arena.removeTickListener(tickListener)

	        })*/

	    })
	    console.log('socket.io initiated')
	}

	private setupServer(server) {

	}

	private setupClient(client) {

	}
}

const socketManager:SocketManager = new SocketManager()

export function init(server): SocketManager {
	socketManager.init(server)
	return socketManager
}