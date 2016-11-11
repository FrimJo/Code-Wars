const path: string = '../users/'

class Robot {

	private _x: number = 120
	private _y: number = 120

	private _numActionsLeft:number = 2

	private _startPosition = {x: this._x, y: this._y}

	// Move sped equals distance traveled over one second, speed = 1 => 1px per second
	private _angularSpeed: number = 0

	// Rotate sped equals degrees turned over one second, speed = 1 => 1degree per second
	private _linearSpeed: number = 0

	// Direction is represented in degrees
	private _direction: number = 0

	private _radius: number = 0
	private _delta: number = 0

	private _require

	constructor(private id: string){
		console.log('new robot')
		let url = path + id

		// Clears the cache of this robot
		delete require.cache[require.resolve(url)]

		// Aquire the new file
		this._require = require(url);

		if(!this._require){

			throw 'No file detected'

		} else {

			// Initiate the robot with start values
			this._require.init(this)
		}
	}

	// Delta is the time pased since last tick
	public run(delta){

		// Reset actions
		this._numActionsLeft = 2

		// Run script code
		this._require.run(this)

		this._delta += delta

		let deltaPosition = this.calculatePosition()

		// Run the delta position through a rotation matrix based of direction

		this._x = this._startPosition.x + deltaPosition.x
		this._y = this._startPosition.y + deltaPosition.y

		//console.log('(robot)this.position.x: ' + this.position.x + ', this.position.y: ' + this.position.y)

	}

	private update(){
		this._numActionsLeft--

		console.log('update()')
		let angularSpeed = this._angularSpeed == 0 ? 1 : this._angularSpeed

		this._radius = this._linearSpeed / angularSpeed

		this._delta = 0

		this._startPosition = {x: this._x, y: this._y}

	}

	private calculatePosition() {

		let angle = this._angularSpeed * this._delta
		console.log(angle)
		let dx = this._radius - this._radius * Math.cos(angle)
		let dy = this._radius * Math.sin(angle)

		return {x: dx, y: dy}
	}

	public get position(){

		return {x: this._x, y: this._y}
	}

	public set position(position) {
		this._x = position.x
		this._y = position.y
	}

	private set direction(direction: number) {
		if (this._numActionsLeft <= 0) return

		direction = direction > 360.0? direction - 360.0 : direction
		this._direction = this.degreesToRadians(direction)
	}

	// Degrees per second
	public set angularSpeed(speed: number){
		if (this._numActionsLeft <= 0) return

		speed = speed > 360.0? speed - 360.0 : speed
		this._angularSpeed = this.degreesToRadians(speed)

		this.update()
	}

	public get angularSpeed() {
		return this._angularSpeed
	}

	// pixels per second
	public set linearSpeed(speed: number){
		this._linearSpeed = speed
		this.update()
	}

	public get linearSpeed() {
		return this._linearSpeed
	}

	private degreesToRadians(degree) {
		return degree * Math.PI / 180.0
	}
}

export = Robot