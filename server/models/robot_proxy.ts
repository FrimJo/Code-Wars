class RobotProxy {

    private _body

    constructor(body){
        console.log('creating proxy')
        this._body = body
        console.log('proxy finished')
    }

    public applyForce(force) {
        this._body.applyForce(force)
    }

    public get state() {
        return this._body.state
    }

    public get uid() {
        return this._body.uid
    }

}

export = RobotProxy