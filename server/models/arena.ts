import GameLoop = require('node-gameloop')
import Events = require('events')
import Robot = require('./robot')

class Arena {
	
	private robotMap: { [id: string]: Robot; } = {}	
	private eventEmitter = new Events.EventEmitter()
	private _loopId
	
	constructor(){}

	public start(){

		let emiter = this.eventEmitter

		this._loopId = GameLoop.setGameLoop((delta) => {

			// Step all robots
			Object.keys(this.robotMap).map( id => this.robotMap[id].run(delta) )

			// Send new positions to view
			emiter.emit('tick');

		}, 1000 / 30)

		console.log('Arena started, FIGHT! ' + this._loopId)
	}

	public stop(){
		
		// If we have a loopId, stop the game loop
		GameLoop.clearGameLoop(this._loopId);

	}

	public addRobot(id: string){
		console.log('addRobot')
		
		try {
			
			// Create a new robot and add it to the map
			this.robotMap[id] = new Robot(id)

			/*
			 * If the list now contains one robot and
			 * that on is the newly aded on, start the arena
			 */
			if(Object.keys(this.robotMap).length == 1 && this.robotMap[id]) {
				this.start()
			}

		} catch(err) {

			// If adding the robot failed
			console.log('could not add robot')
		}

	}

	public addTickListener(listener){

		// Add a tick listener
		this.eventEmitter.addListener('tick', listener)
	}

	public removeTickListener(listener){

		// Remove a tick listener
		this.eventEmitter.removeListener('tick', listener)
	}

	public removeRobot(id: string){

		// Remove a robot from the map
		console.log(Object.keys(this.robotMap).length)
		delete this.robotMap[id]
		console.log(Object.keys(this.robotMap).length)

		// If the list is empty, stop the arena
		if(Object.keys(this.robotMap).length <= 0) {
			this.stop()
		}

	}

	public getPosition() {

		// Map all positions in the robots to a list of positions
		let positions = Object.keys(this.robotMap).map( (id) => {

			let robot = this.robotMap[id]
			//console.log('robot.position.x: ' + robot.position.x + ', robot.position.y: ' + robot.position.y)
			return robot.position
		})

		//let positions = this.robotMap.map((robot) => return { x: robot.x, y: robot.y } )

		// Return them
		return positions
	}
}

const arena:Arena = new Arena()

export function getInstance(): Arena {
	return arena
}