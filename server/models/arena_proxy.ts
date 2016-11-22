class ArenaProxy {

    private _world

    constructor(world){
        console.log('creating proxy')
        this._world = world
        console.log('proxy finished')
    }

    public get allPositions(){
        return this._world.getBodies().map(body => {
            return {
                'uid': body.uid,
                'radius': body.radius,
                'position': {
                    'x': body.state.pos.x,
                    'y': body.state.pos.y
                }
            }
        })
    }

}

export = ArenaProxy