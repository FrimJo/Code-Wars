"use strict";
const GameLoop = require('node-gameloop');
const Events = require('events');
const Robot = require('./robot');
class Arena {
    constructor() {
        this.robotMap = {};
        this.eventEmitter = new Events.EventEmitter();
    }
    start() {
        let emiter = this.eventEmitter;
        this._loopId = GameLoop.setGameLoop((delta) => {
            // Step all robots
            Object.keys(this.robotMap).map(id => this.robotMap[id].run(delta));
            // Send new positions to view
            emiter.emit('tick');
        }, 1000 / 30);
        console.log('Arena started, FIGHT! ' + this._loopId);
    }
    stop() {
        // If we have a loopId, stop the game loop
        GameLoop.clearGameLoop(this._loopId);
    }
    addRobot(id) {
        console.log('addRobot');
        try {
            // Create a new robot and add it to the map
            this.robotMap[id] = new Robot(id);
            /*
             * If the list now contains one robot and
             * that on is the newly aded on, start the arena
             */
            if (Object.keys(this.robotMap).length == 1 && this.robotMap[id]) {
                this.start();
            }
        }
        catch (err) {
            // If adding the robot failed
            console.log('could not add robot');
        }
    }
    addTickListener(listener) {
        // Add a tick listener
        this.eventEmitter.addListener('tick', listener);
    }
    removeTickListener(listener) {
        // Remove a tick listener
        this.eventEmitter.removeListener('tick', listener);
    }
    removeRobot(id) {
        // Remove a robot from the map
        console.log(Object.keys(this.robotMap).length);
        delete this.robotMap[id];
        console.log(Object.keys(this.robotMap).length);
        // If the list is empty, stop the arena
        if (Object.keys(this.robotMap).length <= 0) {
            this.stop();
        }
    }
    getPosition() {
        // Map all positions in the robots to a list of positions
        let positions = Object.keys(this.robotMap).map((id) => {
            let robot = this.robotMap[id];
            //console.log('robot.position.x: ' + robot.position.x + ', robot.position.y: ' + robot.position.y)
            return robot.position;
        });
        //let positions = this.robotMap.map((robot) => return { x: robot.x, y: robot.y } )
        // Return them
        return positions;
    }
}
const arena = new Arena();
function getInstance() {
    return arena;
}
exports.getInstance = getInstance;

//# sourceMappingURL=data:application/json;base64,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QUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNaLENBQUM7SUFFRixDQUFDO0lBRU0sV0FBVztRQUVqQix5REFBeUQ7UUFDekQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRTtZQUVsRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzdCLGtHQUFrRztZQUNsRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUVGLGtGQUFrRjtRQUVsRixjQUFjO1FBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQTtJQUNqQixDQUFDO0FBQ0YsQ0FBQztBQUVELE1BQU0sS0FBSyxHQUFTLElBQUksS0FBSyxFQUFFLENBQUE7QUFFL0I7SUFDQyxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQ2IsQ0FBQztBQUZlLG1CQUFXLGNBRTFCLENBQUEiLCJmaWxlIjoibW9kZWxzL2FyZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVMb29wID0gcmVxdWlyZSgnbm9kZS1nYW1lbG9vcCcpXG5pbXBvcnQgRXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJylcbmltcG9ydCBSb2JvdCA9IHJlcXVpcmUoJy4vcm9ib3QnKVxuXG5jbGFzcyBBcmVuYSB7XG5cdFxuXHRwcml2YXRlIHJvYm90TWFwOiB7IFtpZDogc3RyaW5nXTogUm9ib3Q7IH0gPSB7fVx0XG5cdHByaXZhdGUgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50cy5FdmVudEVtaXR0ZXIoKVxuXHRwcml2YXRlIF9sb29wSWRcblx0XG5cdGNvbnN0cnVjdG9yKCl7fVxuXG5cdHB1YmxpYyBzdGFydCgpe1xuXG5cdFx0bGV0IGVtaXRlciA9IHRoaXMuZXZlbnRFbWl0dGVyXG5cblx0XHR0aGlzLl9sb29wSWQgPSBHYW1lTG9vcC5zZXRHYW1lTG9vcCgoZGVsdGEpID0+IHtcblxuXHRcdFx0Ly8gU3RlcCBhbGwgcm9ib3RzXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLnJvYm90TWFwKS5tYXAoIGlkID0+IHRoaXMucm9ib3RNYXBbaWRdLnJ1bihkZWx0YSkgKVxuXG5cdFx0XHQvLyBTZW5kIG5ldyBwb3NpdGlvbnMgdG8gdmlld1xuXHRcdFx0ZW1pdGVyLmVtaXQoJ3RpY2snKTtcblxuXHRcdH0sIDEwMDAgLyAzMClcblxuXHRcdGNvbnNvbGUubG9nKCdBcmVuYSBzdGFydGVkLCBGSUdIVCEgJyArIHRoaXMuX2xvb3BJZClcblx0fVxuXG5cdHB1YmxpYyBzdG9wKCl7XG5cdFx0XG5cdFx0Ly8gSWYgd2UgaGF2ZSBhIGxvb3BJZCwgc3RvcCB0aGUgZ2FtZSBsb29wXG5cdFx0R2FtZUxvb3AuY2xlYXJHYW1lTG9vcCh0aGlzLl9sb29wSWQpO1xuXG5cdH1cblxuXHRwdWJsaWMgYWRkUm9ib3QoaWQ6IHN0cmluZyl7XG5cdFx0Y29uc29sZS5sb2coJ2FkZFJvYm90Jylcblx0XHRcblx0XHR0cnkge1xuXHRcdFx0XG5cdFx0XHQvLyBDcmVhdGUgYSBuZXcgcm9ib3QgYW5kIGFkZCBpdCB0byB0aGUgbWFwXG5cdFx0XHR0aGlzLnJvYm90TWFwW2lkXSA9IG5ldyBSb2JvdChpZClcblxuXHRcdFx0Lypcblx0XHRcdCAqIElmIHRoZSBsaXN0IG5vdyBjb250YWlucyBvbmUgcm9ib3QgYW5kXG5cdFx0XHQgKiB0aGF0IG9uIGlzIHRoZSBuZXdseSBhZGVkIG9uLCBzdGFydCB0aGUgYXJlbmFcblx0XHRcdCAqL1xuXHRcdFx0aWYoT2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubGVuZ3RoID09IDEgJiYgdGhpcy5yb2JvdE1hcFtpZF0pIHtcblx0XHRcdFx0dGhpcy5zdGFydCgpXG5cdFx0XHR9XG5cblx0XHR9IGNhdGNoKGVycikge1xuXG5cdFx0XHQvLyBJZiBhZGRpbmcgdGhlIHJvYm90IGZhaWxlZFxuXHRcdFx0Y29uc29sZS5sb2coJ2NvdWxkIG5vdCBhZGQgcm9ib3QnKVxuXHRcdH1cblxuXHR9XG5cblx0cHVibGljIGFkZFRpY2tMaXN0ZW5lcihsaXN0ZW5lcil7XG5cblx0XHQvLyBBZGQgYSB0aWNrIGxpc3RlbmVyXG5cdFx0dGhpcy5ldmVudEVtaXR0ZXIuYWRkTGlzdGVuZXIoJ3RpY2snLCBsaXN0ZW5lcilcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVUaWNrTGlzdGVuZXIobGlzdGVuZXIpe1xuXG5cdFx0Ly8gUmVtb3ZlIGEgdGljayBsaXN0ZW5lclxuXHRcdHRoaXMuZXZlbnRFbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCd0aWNrJywgbGlzdGVuZXIpXG5cdH1cblxuXHRwdWJsaWMgcmVtb3ZlUm9ib3QoaWQ6IHN0cmluZyl7XG5cblx0XHQvLyBSZW1vdmUgYSByb2JvdCBmcm9tIHRoZSBtYXBcblx0XHRjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh0aGlzLnJvYm90TWFwKS5sZW5ndGgpXG5cdFx0ZGVsZXRlIHRoaXMucm9ib3RNYXBbaWRdXG5cdFx0Y29uc29sZS5sb2coT2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubGVuZ3RoKVxuXG5cdFx0Ly8gSWYgdGhlIGxpc3QgaXMgZW1wdHksIHN0b3AgdGhlIGFyZW5hXG5cdFx0aWYoT2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubGVuZ3RoIDw9IDApIHtcblx0XHRcdHRoaXMuc3RvcCgpXG5cdFx0fVxuXG5cdH1cblxuXHRwdWJsaWMgZ2V0UG9zaXRpb24oKSB7XG5cblx0XHQvLyBNYXAgYWxsIHBvc2l0aW9ucyBpbiB0aGUgcm9ib3RzIHRvIGEgbGlzdCBvZiBwb3NpdGlvbnNcblx0XHRsZXQgcG9zaXRpb25zID0gT2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubWFwKCAoaWQpID0+IHtcblxuXHRcdFx0bGV0IHJvYm90ID0gdGhpcy5yb2JvdE1hcFtpZF1cblx0XHRcdC8vY29uc29sZS5sb2coJ3JvYm90LnBvc2l0aW9uLng6ICcgKyByb2JvdC5wb3NpdGlvbi54ICsgJywgcm9ib3QucG9zaXRpb24ueTogJyArIHJvYm90LnBvc2l0aW9uLnkpXG5cdFx0XHRyZXR1cm4gcm9ib3QucG9zaXRpb25cblx0XHR9KVxuXG5cdFx0Ly9sZXQgcG9zaXRpb25zID0gdGhpcy5yb2JvdE1hcC5tYXAoKHJvYm90KSA9PiByZXR1cm4geyB4OiByb2JvdC54LCB5OiByb2JvdC55IH0gKVxuXG5cdFx0Ly8gUmV0dXJuIHRoZW1cblx0XHRyZXR1cm4gcG9zaXRpb25zXG5cdH1cbn1cblxuY29uc3QgYXJlbmE6QXJlbmEgPSBuZXcgQXJlbmEoKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKTogQXJlbmEge1xuXHRyZXR1cm4gYXJlbmFcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
