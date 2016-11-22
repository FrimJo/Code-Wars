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
			if(socket.handshake.query) {
				console.log("Query: ", socket.handshake.query);
			}

	        /* Start listen for ticks */
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

	        })

	    })
	    console.log('socket.io initiated')
	}
}

const socketManager:SocketManager = new SocketManager()

export function init(server): SocketManager {
	socketManager.init(server)
	return socketManager
}