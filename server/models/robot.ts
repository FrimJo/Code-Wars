const RobotProxy = require('./robot_proxy')
const path: string = '../users/'
const Physics = require('physicsjs')

class Robot {

	private _numActionsLeft:number = 2

	private _require
	private _body;

	constructor(private id: string, body, arenaProxy){
		this._body = body

		console.log('new robot initiated')

		console.log('proxy created')

		let url = path + id

		// Clears the cache of this robot
		delete require.cache[require.resolve(url)]
		console.log('deleted old cache')

		// Aquire the new file
		this._require = require(url);
		console.log('required new cache')

		if(!this._require){

			throw 'No file detected'

		} else {

			console.log('Trying to initialized the new robot')

			try{
				// Initiate the robot with start values
				this._require.init(new RobotProxy(body), arenaProxy)

				// Test run the code
				this._require.run()

				console.log('code ran successfully ')
			}catch (err) {
				throw err
			}

			console.log('Initialized the new robot')
		}
	}

	public get body() {
		return this._body;
	}

	// Delta is the time passed since last tick
	public run(delta){

		// Reset actions
		this._numActionsLeft = 2

		// Run script code
		this._require.run()
	}

	private update(){
		this._numActionsLeft--

	}

}

export = Robot