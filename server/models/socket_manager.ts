import Arena = require('./arena')

class SocketManager {
	
	private io
	private arena: Arena

	constructor() {
		this.arena = Arena.getInstance()
	}

	init(server) {
		let arena = this.arena
		
		this.io = require('socket.io')(server)
		.on('connection', function(socket){
		
	        console.log('a robot connected')

	        /* Start listen for ticks */
	        let tickListener = function(){

				// Get all positions of robots from arena
        		let positions = arena.getPosition()
        		socket.emit('positions', JSON.stringify(positions))
	        }

	        // Add listener for tick
	        arena.addTickListener(tickListener)

        	// On user disconnect
	        socket.on('disconnectEvent', function(){
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