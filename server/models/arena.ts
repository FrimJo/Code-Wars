// Typescript imports
import Events = require('events')
import Robot = require('./robot')
import ArenaProxy = require('./arena_proxy')

// Javascript imports
const Physics = require('physicsjs')
const GameLoop = require('node-gameloop')

class Arena {
	
	private robotMap: { [id: string]: Robot; } = {}	
	private eventEmitter = new Events.EventEmitter()
	private _emiter;
	private _loopId
	private  _world
	
	constructor(){
		this._emiter = this.eventEmitter
		this._world = new Physics();

		// TODO:  Physics.util.ticker

		// Set up the physics world for this instance of arena
		Physics({
/*
			// set the timestep
			timestep: 1000.0 / 160,

			// maximum number of iterations per step
			maxIPF: 16,*/

			// set the integrator (may also be set with world.add())
			integrator: 'verlet'
		}, world => void {

			// use "world"
		})
	}



	public start(){


		this._loopId = GameLoop.setGameLoop((delta) => {

			// Step all robots
			Object.keys(this.robotMap).map( id => this.robotMap[id].run(delta) )

			// Step the physics world to now
			this._world.step(Date.now())

			let bodies = this._world.getBodies().map(body => {
				return {
					'radius': body.radius,
					'position': {
						'x': body.state.pos.x,
						'y': body.state.pos.y
					}
				}
			})


			// Send new positions to view
			this._emiter.emit('tick', bodies);

		}, 1000 / 30)

		console.log('Arena started, FIGHT! ' + this._loopId)
	}



	public stop(){
		
		// If we have a loopId, stop the game loop
		GameLoop.clearGameLoop(this._loopId);

	}

	public addRobot(id: string){
		console.log('addRobot')

		const body = Physics.body('circle', {
			x: 0, // x-coordinate
			y: 0, // y-coordinate
			vx: 0.0, // velocity in x-direction
			vy: 0.0, // velocity in y-direction
			radius: 20
		});

		this._world.add( body )

		try {
			
			// Create a new robot and add it to the map
			let arenaProxy = new ArenaProxy(this._world)
			this.robotMap[id] = new Robot(id, body, arenaProxy)
			console.log('added robot to dictionary')

			/*
			 * If the list now contains one robot and
			 * that on is the newly added on, start the arena
			 */
			if(Object.keys(this.robotMap).length == 1 && this.robotMap[id]) {
				this.start()
			}

		} catch(err) {

			// If adding the robot failed
			console.log('could not add robot')
			console.log(err)
			this._emiter.emit('err', err);

		}

	}

	public addTickListener(listener:(any) => void){

		// Add a tick listener
		this.eventEmitter.addListener('tick', listener)
	}

	public addErrorListener(listener:(any) => void){

		// Add a tick listener
		this.eventEmitter.addListener('err', listener)
	}

	public removeTickListener(listener){

		// Remove a tick listener
		this.eventEmitter.removeListener('tick', listener)
	}

	public removeRobot(id: string){

		// Remove a robot from the map
		console.log(Object.keys(this.robotMap).length)

		// Get the robot
		var robot = this.robotMap[id];

		// Get the robots body
		var body = robot.body

		//  Delete the robot from the arena
		delete this.robotMap[id]

		// Remove the body from the world
		this._world.removeBody(body)

		console.log(Object.keys(this.robotMap).length)

		// If the list is empty, stop the arena
		if(Object.keys(this.robotMap).length <= 0) {
			this.stop()
		}

	}
}

const arena:Arena = new Arena()

export function getInstance(): Arena {
	return arena
}