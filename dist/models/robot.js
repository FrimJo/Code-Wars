"use strict";
const RobotProxy = require('./robot_proxy');
const path = '../users/';
const Physics = require('physicsjs');
class Robot {
    constructor(id, body, arenaProxy) {
        this.id = id;
        this._numActionsLeft = 2;
        this._body = body;
        console.log('new robot initiated');
        console.log('proxy created');
        let url = path + id;
        // Clears the cache of this robot
        delete require.cache[require.resolve(url)];
        console.log('deleted old cache');
        // Aquire the new file
        this._require = require(url);
        console.log('required new cache');
        if (!this._require) {
            throw 'No file detected';
        }
        else {
            console.log('Trying to initialized the new robot');
            try {
                // Initiate the robot with start values
                this._require.init(new RobotProxy(body), arenaProxy);
                // Test run the code
                this._require.run();
                console.log('code ran successfully ');
            }
            catch (err) {
                throw err;
            }
            console.log('Initialized the new robot');
        }
    }
    get body() {
        return this._body;
    }
    // Delta is the time passed since last tick
    run(delta) {
        // Reset actions
        this._numActionsLeft = 2;
        // Run script code
        this._require.run();
    }
    update() {
        this._numActionsLeft--;
    }
}
module.exports = Robot;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9yb2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLE1BQU0sSUFBSSxHQUFXLFdBQVcsQ0FBQTtBQUNoQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFcEM7SUFPQyxZQUFvQixFQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVU7UUFBNUIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUx0QixvQkFBZSxHQUFVLENBQUMsQ0FBQTtRQU1qQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUU1QixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBRW5CLGlDQUFpQztRQUNqQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUVoQyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBRWpDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFFbEIsTUFBTSxrQkFBa0IsQ0FBQTtRQUV6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7WUFFbEQsSUFBRyxDQUFDO2dCQUNILHVDQUF1QztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBRXBELG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtnQkFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQ3RDLENBQUM7WUFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sR0FBRyxDQUFBO1lBQ1YsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0lBQ0YsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQ0FBMkM7SUFDcEMsR0FBRyxDQUFDLEtBQUs7UUFFZixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUE7UUFFeEIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVPLE1BQU07UUFDYixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFFdkIsQ0FBQztBQUVGLENBQUM7QUFFRCxpQkFBUyxLQUFLLENBQUEiLCJmaWxlIjoibW9kZWxzL3JvYm90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm9ib3RQcm94eSA9IHJlcXVpcmUoJy4vcm9ib3RfcHJveHknKVxuY29uc3QgcGF0aDogc3RyaW5nID0gJy4uL3VzZXJzLydcbmNvbnN0IFBoeXNpY3MgPSByZXF1aXJlKCdwaHlzaWNzanMnKVxuXG5jbGFzcyBSb2JvdCB7XG5cblx0cHJpdmF0ZSBfbnVtQWN0aW9uc0xlZnQ6bnVtYmVyID0gMlxuXG5cdHByaXZhdGUgX3JlcXVpcmVcblx0cHJpdmF0ZSBfYm9keTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGlkOiBzdHJpbmcsIGJvZHksIGFyZW5hUHJveHkpe1xuXHRcdHRoaXMuX2JvZHkgPSBib2R5XG5cblx0XHRjb25zb2xlLmxvZygnbmV3IHJvYm90IGluaXRpYXRlZCcpXG5cblx0XHRjb25zb2xlLmxvZygncHJveHkgY3JlYXRlZCcpXG5cblx0XHRsZXQgdXJsID0gcGF0aCArIGlkXG5cblx0XHQvLyBDbGVhcnMgdGhlIGNhY2hlIG9mIHRoaXMgcm9ib3Rcblx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUodXJsKV1cblx0XHRjb25zb2xlLmxvZygnZGVsZXRlZCBvbGQgY2FjaGUnKVxuXG5cdFx0Ly8gQXF1aXJlIHRoZSBuZXcgZmlsZVxuXHRcdHRoaXMuX3JlcXVpcmUgPSByZXF1aXJlKHVybCk7XG5cdFx0Y29uc29sZS5sb2coJ3JlcXVpcmVkIG5ldyBjYWNoZScpXG5cblx0XHRpZighdGhpcy5fcmVxdWlyZSl7XG5cblx0XHRcdHRocm93ICdObyBmaWxlIGRldGVjdGVkJ1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS5sb2coJ1RyeWluZyB0byBpbml0aWFsaXplZCB0aGUgbmV3IHJvYm90JylcblxuXHRcdFx0dHJ5e1xuXHRcdFx0XHQvLyBJbml0aWF0ZSB0aGUgcm9ib3Qgd2l0aCBzdGFydCB2YWx1ZXNcblx0XHRcdFx0dGhpcy5fcmVxdWlyZS5pbml0KG5ldyBSb2JvdFByb3h5KGJvZHkpLCBhcmVuYVByb3h5KVxuXG5cdFx0XHRcdC8vIFRlc3QgcnVuIHRoZSBjb2RlXG5cdFx0XHRcdHRoaXMuX3JlcXVpcmUucnVuKClcblxuXHRcdFx0XHRjb25zb2xlLmxvZygnY29kZSByYW4gc3VjY2Vzc2Z1bGx5ICcpXG5cdFx0XHR9Y2F0Y2ggKGVycikge1xuXHRcdFx0XHR0aHJvdyBlcnJcblx0XHRcdH1cblxuXHRcdFx0Y29uc29sZS5sb2coJ0luaXRpYWxpemVkIHRoZSBuZXcgcm9ib3QnKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgYm9keSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYm9keTtcblx0fVxuXG5cdC8vIERlbHRhIGlzIHRoZSB0aW1lIHBhc3NlZCBzaW5jZSBsYXN0IHRpY2tcblx0cHVibGljIHJ1bihkZWx0YSl7XG5cblx0XHQvLyBSZXNldCBhY3Rpb25zXG5cdFx0dGhpcy5fbnVtQWN0aW9uc0xlZnQgPSAyXG5cblx0XHQvLyBSdW4gc2NyaXB0IGNvZGVcblx0XHR0aGlzLl9yZXF1aXJlLnJ1bigpXG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZSgpe1xuXHRcdHRoaXMuX251bUFjdGlvbnNMZWZ0LS1cblxuXHR9XG5cbn1cblxuZXhwb3J0ID0gUm9ib3QiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
