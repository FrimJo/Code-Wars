import Util = require('../utilities/util')

class Controller {
	private socket;
	private file;
	public id: number
	

	constructor(socket){
		this.socket = socket
		this.id = socket.id

		this.socket.on('event', function(){

		})
	}

	isConnected(): boolean{
		return this.socket.connected
	}

	disconnect(): void{
		this.socket.disconnect()
	}
}

export = Controller