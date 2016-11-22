"use strict";
// Typescript imports
const Events = require('events');
const Robot = require('./robot');
const ArenaProxy = require('./arena_proxy');
// Javascript imports
const Physics = require('physicsjs');
const GameLoop = require('node-gameloop');
class Arena {
    constructor() {
        this.robotMap = {};
        this.eventEmitter = new Events.EventEmitter();
        this._emiter = this.eventEmitter;
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
        }, world => void {});
    }
    start() {
        this._loopId = GameLoop.setGameLoop((delta) => {
            // Step all robots
            Object.keys(this.robotMap).map(id => this.robotMap[id].run(delta));
            // Step the physics world to now
            this._world.step(Date.now());
            let bodies = this._world.getBodies().map(body => {
                return {
                    'radius': body.radius,
                    'position': {
                        'x': body.state.pos.x,
                        'y': body.state.pos.y
                    }
                };
            });
            // Send new positions to view
            this._emiter.emit('tick', bodies);
        }, 1000 / 30);
        console.log('Arena started, FIGHT! ' + this._loopId);
    }
    stop() {
        // If we have a loopId, stop the game loop
        GameLoop.clearGameLoop(this._loopId);
    }
    addRobot(id) {
        console.log('addRobot');
        const body = Physics.body('circle', {
            x: 0,
            y: 0,
            vx: 0.0,
            vy: 0.0,
            radius: 20
        });
        this._world.add(body);
        try {
            // Create a new robot and add it to the map
            let arenaProxy = new ArenaProxy(this._world);
            this.robotMap[id] = new Robot(id, body, arenaProxy);
            console.log('added robot to dictionary');
            /*
             * If the list now contains one robot and
             * that on is the newly added on, start the arena
             */
            if (Object.keys(this.robotMap).length == 1 && this.robotMap[id]) {
                this.start();
            }
        }
        catch (err) {
            // If adding the robot failed
            console.log('could not add robot');
            console.log(err);
            this._emiter.emit('err', err);
        }
    }
    addTickListener(listener) {
        // Add a tick listener
        this.eventEmitter.addListener('tick', listener);
    }
    addErrorListener(listener) {
        // Add a tick listener
        this.eventEmitter.addListener('err', listener);
    }
    removeTickListener(listener) {
        // Remove a tick listener
        this.eventEmitter.removeListener('tick', listener);
    }
    removeRobot(id) {
        // Remove a robot from the map
        console.log(Object.keys(this.robotMap).length);
        // Get the robot
        var robot = this.robotMap[id];
        // Get the robots body
        var body = robot.body;
        //  Delete the robot from the arena
        delete this.robotMap[id];
        // Remove the body from the world
        this._world.removeBody(body);
        console.log(Object.keys(this.robotMap).length);
        // If the list is empty, stop the arena
        if (Object.keys(this.robotMap).length <= 0) {
            this.stop();
        }
    }
}
const arena = new Arena();
function getInstance() {
    return arena;
}
exports.getInstance = getInstance;

//# sourceMappingURL=data:application/json;base64,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QyxFQUFVO1FBRTVCLDhCQUE4QjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTlDLGdCQUFnQjtRQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLHNCQUFzQjtRQUN0QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBRXJCLG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFeEIsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFOUMsdUNBQXVDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNaLENBQUM7SUFFRixDQUFDO0FBQ0YsQ0FBQztBQUVELE1BQU0sS0FBSyxHQUFTLElBQUksS0FBSyxFQUFFLENBQUE7QUFFL0I7SUFDQyxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQ2IsQ0FBQztBQUZlLG1CQUFXLGNBRTFCLENBQUEiLCJmaWxlIjoibW9kZWxzL2FyZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVHlwZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgRXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJylcbmltcG9ydCBSb2JvdCA9IHJlcXVpcmUoJy4vcm9ib3QnKVxuaW1wb3J0IEFyZW5hUHJveHkgPSByZXF1aXJlKCcuL2FyZW5hX3Byb3h5JylcblxuLy8gSmF2YXNjcmlwdCBpbXBvcnRzXG5jb25zdCBQaHlzaWNzID0gcmVxdWlyZSgncGh5c2ljc2pzJylcbmNvbnN0IEdhbWVMb29wID0gcmVxdWlyZSgnbm9kZS1nYW1lbG9vcCcpXG5cbmNsYXNzIEFyZW5hIHtcblx0XG5cdHByaXZhdGUgcm9ib3RNYXA6IHsgW2lkOiBzdHJpbmddOiBSb2JvdDsgfSA9IHt9XHRcblx0cHJpdmF0ZSBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRzLkV2ZW50RW1pdHRlcigpXG5cdHByaXZhdGUgX2VtaXRlcjtcblx0cHJpdmF0ZSBfbG9vcElkXG5cdHByaXZhdGUgIF93b3JsZFxuXHRcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLl9lbWl0ZXIgPSB0aGlzLmV2ZW50RW1pdHRlclxuXHRcdHRoaXMuX3dvcmxkID0gbmV3IFBoeXNpY3MoKTtcblxuXHRcdC8vIFRPRE86ICBQaHlzaWNzLnV0aWwudGlja2VyXG5cblx0XHQvLyBTZXQgdXAgdGhlIHBoeXNpY3Mgd29ybGQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgYXJlbmFcblx0XHRQaHlzaWNzKHtcbi8qXG5cdFx0XHQvLyBzZXQgdGhlIHRpbWVzdGVwXG5cdFx0XHR0aW1lc3RlcDogMTAwMC4wIC8gMTYwLFxuXG5cdFx0XHQvLyBtYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHBlciBzdGVwXG5cdFx0XHRtYXhJUEY6IDE2LCovXG5cblx0XHRcdC8vIHNldCB0aGUgaW50ZWdyYXRvciAobWF5IGFsc28gYmUgc2V0IHdpdGggd29ybGQuYWRkKCkpXG5cdFx0XHRpbnRlZ3JhdG9yOiAndmVybGV0J1xuXHRcdH0sIHdvcmxkID0+IHZvaWQge1xuXG5cdFx0XHQvLyB1c2UgXCJ3b3JsZFwiXG5cdFx0fSlcblx0fVxuXG5cblxuXHRwdWJsaWMgc3RhcnQoKXtcblxuXG5cdFx0dGhpcy5fbG9vcElkID0gR2FtZUxvb3Auc2V0R2FtZUxvb3AoKGRlbHRhKSA9PiB7XG5cblx0XHRcdC8vIFN0ZXAgYWxsIHJvYm90c1xuXHRcdFx0T2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubWFwKCBpZCA9PiB0aGlzLnJvYm90TWFwW2lkXS5ydW4oZGVsdGEpIClcblxuXHRcdFx0Ly8gU3RlcCB0aGUgcGh5c2ljcyB3b3JsZCB0byBub3dcblx0XHRcdHRoaXMuX3dvcmxkLnN0ZXAoRGF0ZS5ub3coKSlcblxuXHRcdFx0bGV0IGJvZGllcyA9IHRoaXMuX3dvcmxkLmdldEJvZGllcygpLm1hcChib2R5ID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQncmFkaXVzJzogYm9keS5yYWRpdXMsXG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzoge1xuXHRcdFx0XHRcdFx0J3gnOiBib2R5LnN0YXRlLnBvcy54LFxuXHRcdFx0XHRcdFx0J3knOiBib2R5LnN0YXRlLnBvcy55XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cblx0XHRcdC8vIFNlbmQgbmV3IHBvc2l0aW9ucyB0byB2aWV3XG5cdFx0XHR0aGlzLl9lbWl0ZXIuZW1pdCgndGljaycsIGJvZGllcyk7XG5cblx0XHR9LCAxMDAwIC8gMzApXG5cblx0XHRjb25zb2xlLmxvZygnQXJlbmEgc3RhcnRlZCwgRklHSFQhICcgKyB0aGlzLl9sb29wSWQpXG5cdH1cblxuXG5cblx0cHVibGljIHN0b3AoKXtcblx0XHRcblx0XHQvLyBJZiB3ZSBoYXZlIGEgbG9vcElkLCBzdG9wIHRoZSBnYW1lIGxvb3Bcblx0XHRHYW1lTG9vcC5jbGVhckdhbWVMb29wKHRoaXMuX2xvb3BJZCk7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRSb2JvdChpZDogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZygnYWRkUm9ib3QnKVxuXG5cdFx0Y29uc3QgYm9keSA9IFBoeXNpY3MuYm9keSgnY2lyY2xlJywge1xuXHRcdFx0eDogMCwgLy8geC1jb29yZGluYXRlXG5cdFx0XHR5OiAwLCAvLyB5LWNvb3JkaW5hdGVcblx0XHRcdHZ4OiAwLjAsIC8vIHZlbG9jaXR5IGluIHgtZGlyZWN0aW9uXG5cdFx0XHR2eTogMC4wLCAvLyB2ZWxvY2l0eSBpbiB5LWRpcmVjdGlvblxuXHRcdFx0cmFkaXVzOiAyMFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5fd29ybGQuYWRkKCBib2R5IClcblxuXHRcdHRyeSB7XG5cdFx0XHRcblx0XHRcdC8vIENyZWF0ZSBhIG5ldyByb2JvdCBhbmQgYWRkIGl0IHRvIHRoZSBtYXBcblx0XHRcdGxldCBhcmVuYVByb3h5ID0gbmV3IEFyZW5hUHJveHkodGhpcy5fd29ybGQpXG5cdFx0XHR0aGlzLnJvYm90TWFwW2lkXSA9IG5ldyBSb2JvdChpZCwgYm9keSwgYXJlbmFQcm94eSlcblx0XHRcdGNvbnNvbGUubG9nKCdhZGRlZCByb2JvdCB0byBkaWN0aW9uYXJ5JylcblxuXHRcdFx0Lypcblx0XHRcdCAqIElmIHRoZSBsaXN0IG5vdyBjb250YWlucyBvbmUgcm9ib3QgYW5kXG5cdFx0XHQgKiB0aGF0IG9uIGlzIHRoZSBuZXdseSBhZGRlZCBvbiwgc3RhcnQgdGhlIGFyZW5hXG5cdFx0XHQgKi9cblx0XHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucm9ib3RNYXApLmxlbmd0aCA9PSAxICYmIHRoaXMucm9ib3RNYXBbaWRdKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQoKVxuXHRcdFx0fVxuXG5cdFx0fSBjYXRjaChlcnIpIHtcblxuXHRcdFx0Ly8gSWYgYWRkaW5nIHRoZSByb2JvdCBmYWlsZWRcblx0XHRcdGNvbnNvbGUubG9nKCdjb3VsZCBub3QgYWRkIHJvYm90Jylcblx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHRcdHRoaXMuX2VtaXRlci5lbWl0KCdlcnInLCBlcnIpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwdWJsaWMgYWRkVGlja0xpc3RlbmVyKGxpc3RlbmVyOihhbnkpID0+IHZvaWQpe1xuXG5cdFx0Ly8gQWRkIGEgdGljayBsaXN0ZW5lclxuXHRcdHRoaXMuZXZlbnRFbWl0dGVyLmFkZExpc3RlbmVyKCd0aWNrJywgbGlzdGVuZXIpXG5cdH1cblxuXHRwdWJsaWMgYWRkRXJyb3JMaXN0ZW5lcihsaXN0ZW5lcjooYW55KSA9PiB2b2lkKXtcblxuXHRcdC8vIEFkZCBhIHRpY2sgbGlzdGVuZXJcblx0XHR0aGlzLmV2ZW50RW1pdHRlci5hZGRMaXN0ZW5lcignZXJyJywgbGlzdGVuZXIpXG5cdH1cblxuXHRwdWJsaWMgcmVtb3ZlVGlja0xpc3RlbmVyKGxpc3RlbmVyKXtcblxuXHRcdC8vIFJlbW92ZSBhIHRpY2sgbGlzdGVuZXJcblx0XHR0aGlzLmV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcigndGljaycsIGxpc3RlbmVyKVxuXHR9XG5cblx0cHVibGljIHJlbW92ZVJvYm90KGlkOiBzdHJpbmcpe1xuXG5cdFx0Ly8gUmVtb3ZlIGEgcm9ib3QgZnJvbSB0aGUgbWFwXG5cdFx0Y29uc29sZS5sb2coT2JqZWN0LmtleXModGhpcy5yb2JvdE1hcCkubGVuZ3RoKVxuXG5cdFx0Ly8gR2V0IHRoZSByb2JvdFxuXHRcdHZhciByb2JvdCA9IHRoaXMucm9ib3RNYXBbaWRdO1xuXG5cdFx0Ly8gR2V0IHRoZSByb2JvdHMgYm9keVxuXHRcdHZhciBib2R5ID0gcm9ib3QuYm9keVxuXG5cdFx0Ly8gIERlbGV0ZSB0aGUgcm9ib3QgZnJvbSB0aGUgYXJlbmFcblx0XHRkZWxldGUgdGhpcy5yb2JvdE1hcFtpZF1cblxuXHRcdC8vIFJlbW92ZSB0aGUgYm9keSBmcm9tIHRoZSB3b3JsZFxuXHRcdHRoaXMuX3dvcmxkLnJlbW92ZUJvZHkoYm9keSlcblxuXHRcdGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHRoaXMucm9ib3RNYXApLmxlbmd0aClcblxuXHRcdC8vIElmIHRoZSBsaXN0IGlzIGVtcHR5LCBzdG9wIHRoZSBhcmVuYVxuXHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucm9ib3RNYXApLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHR0aGlzLnN0b3AoKVxuXHRcdH1cblxuXHR9XG59XG5cbmNvbnN0IGFyZW5hOkFyZW5hID0gbmV3IEFyZW5hKClcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlKCk6IEFyZW5hIHtcblx0cmV0dXJuIGFyZW5hXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
