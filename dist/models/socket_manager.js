"use strict";
const Arena = require('./arena');
class SocketManager {
    constructor() {
        this.arena = Arena.getInstance();
    }
    init(server) {
        let arena = this.arena;
        this.io = require('socket.io')(server)
            .on('connection', (socket) => {
            console.log('a robot connected');
            let isServer = socket.handshake.query;
            // If we got a qurey
            if (isServer != null) {
                console.log("Query: " + isServer);
                // Set up unique identification
                socket.userid = UUID();
                // If connected user is server
                if (isServer) {
                    // Set up the connection as a server connection
                    this.setupServer(socket);
                }
                else {
                    // Set up the connection as a client connection
                    this.setupClient(socket);
                }
                // Create data data object
                let data = { id: socket.userid };
                // Send onconnected message
                socket.emit('onconnected', data);
            }
            /*
            let tickListener = function(bodies){

                // Get all bodies of robots from arena
                socket.emit('bodies', JSON.stringify(bodies))
            }

            let errorListener = function(err) {
                socket.emit('err', JSON.stringify(err.message))
            }

            // Add listener
            arena.addTickListener(tickListener)
            arena.addErrorListener(errorListener)

            // On user disconnect
            socket.on('disconnectEvent', () => {
                console.log('robot disconnected')

                // Remove tick listener
                arena.removeTickListener(tickListener)

            })*/
        });
        console.log('socket.io initiated');
    }
    setupServer(server) {
    }
    setupClient(client) {
    }
}
const socketManager = new SocketManager();
function init(server) {
    socketManager.init(server);
    return socketManager;
}
exports.init = init;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zb2NrZXRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxLQUFLLFdBQVcsU0FBUyxDQUFDLENBQUE7QUFFakM7SUFLQztRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTTtRQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNO1lBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUN0QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtZQUVyQyxvQkFBb0I7WUFDcEIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFBO2dCQUVyQiwrQkFBK0I7Z0JBQy9CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUE7Z0JBRXRCLDhCQUE4QjtnQkFDMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFFWCwrQ0FBK0M7b0JBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBRVEsK0NBQStDO29CQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN6QixDQUFDO2dCQUVXLDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLEdBQUcsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFBO2dCQUU5QiwyQkFBMkI7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBRSxDQUFBO1lBRTlDLENBQUM7WUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFzQlU7UUFFUixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQU07SUFFMUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxNQUFNO0lBRTFCLENBQUM7QUFDRixDQUFDO0FBRUQsTUFBTSxhQUFhLEdBQWlCLElBQUksYUFBYSxFQUFFLENBQUE7QUFFdkQsY0FBcUIsTUFBTTtJQUMxQixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUE7QUFDckIsQ0FBQztBQUhlLFlBQUksT0FHbkIsQ0FBQSIsImZpbGUiOiJtb2RlbHMvc29ja2V0X21hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJlbmEgPSByZXF1aXJlKCcuL2FyZW5hJylcblxuY2xhc3MgU29ja2V0TWFuYWdlciB7XG5cdFxuXHRwcml2YXRlIGlvXG5cdHByaXZhdGUgYXJlbmFcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFyZW5hID0gQXJlbmEuZ2V0SW5zdGFuY2UoKVxuXHR9XG5cblx0aW5pdChzZXJ2ZXIpIHtcblx0XHRsZXQgYXJlbmEgPSB0aGlzLmFyZW5hXG5cdFx0XG5cdFx0dGhpcy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpKHNlcnZlcilcblx0XHQub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0KSA9PiB7XG5cblx0ICAgICAgICBjb25zb2xlLmxvZygnYSByb2JvdCBjb25uZWN0ZWQnKVxuXHRcdFx0bGV0IGlzU2VydmVyID0gc29ja2V0LmhhbmRzaGFrZS5xdWVyeVxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgYSBxdXJleVxuXHRcdFx0aWYgKGlzU2VydmVyICE9IG51bGwpIHtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlF1ZXJ5OiBcIiArIGlzU2VydmVyKVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHVwIHVuaXF1ZSBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgIHNvY2tldC51c2VyaWQgPSBVVUlEKClcblxuICAgICAgICAgICAgICAgIC8vIElmIGNvbm5lY3RlZCB1c2VyIGlzIHNlcnZlclxuXHRcdFx0XHRpZiAoaXNTZXJ2ZXIpIHtcblxuXHRcdFx0XHQgICAgLy8gU2V0IHVwIHRoZSBjb25uZWN0aW9uIGFzIGEgc2VydmVyIGNvbm5lY3Rpb25cblx0XHRcdFx0XHR0aGlzLnNldHVwU2VydmVyKHNvY2tldClcblx0XHRcdFx0fSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdXAgdGhlIGNvbm5lY3Rpb24gYXMgYSBjbGllbnQgY29ubmVjdGlvblxuXHRcdFx0XHRcdHRoaXMuc2V0dXBDbGllbnQoc29ja2V0KVxuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge2lkOiBzb2NrZXQudXNlcmlkfVxuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBvbmNvbm5lY3RlZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ29uY29ubmVjdGVkJywgZGF0YSApXG5cblx0XHRcdH1cblxuXHRcdFx0Lypcblx0ICAgICAgICBsZXQgdGlja0xpc3RlbmVyID0gZnVuY3Rpb24oYm9kaWVzKXtcblxuXHRcdFx0XHQvLyBHZXQgYWxsIGJvZGllcyBvZiByb2JvdHMgZnJvbSBhcmVuYVxuXHRcdFx0XHRzb2NrZXQuZW1pdCgnYm9kaWVzJywgSlNPTi5zdHJpbmdpZnkoYm9kaWVzKSlcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBsZXQgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRzb2NrZXQuZW1pdCgnZXJyJywgSlNPTi5zdHJpbmdpZnkoZXJyLm1lc3NhZ2UpKVxuXHRcdFx0fVxuXG5cdCAgICAgICAgLy8gQWRkIGxpc3RlbmVyXG5cdCAgICAgICAgYXJlbmEuYWRkVGlja0xpc3RlbmVyKHRpY2tMaXN0ZW5lcilcblx0XHRcdGFyZW5hLmFkZEVycm9yTGlzdGVuZXIoZXJyb3JMaXN0ZW5lcilcblxuICAgICAgICBcdC8vIE9uIHVzZXIgZGlzY29ubmVjdFxuXHQgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdEV2ZW50JywgKCkgPT4ge1xuXHQgICAgICAgICAgICBjb25zb2xlLmxvZygncm9ib3QgZGlzY29ubmVjdGVkJylcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgdGljayBsaXN0ZW5lclxuXHQgICAgICAgICAgICBhcmVuYS5yZW1vdmVUaWNrTGlzdGVuZXIodGlja0xpc3RlbmVyKVxuXG5cdCAgICAgICAgfSkqL1xuXG5cdCAgICB9KVxuXHQgICAgY29uc29sZS5sb2coJ3NvY2tldC5pbyBpbml0aWF0ZWQnKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cFNlcnZlcihzZXJ2ZXIpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cENsaWVudChjbGllbnQpIHtcblxuXHR9XG59XG5cbmNvbnN0IHNvY2tldE1hbmFnZXI6U29ja2V0TWFuYWdlciA9IG5ldyBTb2NrZXRNYW5hZ2VyKClcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2VydmVyKTogU29ja2V0TWFuYWdlciB7XG5cdHNvY2tldE1hbmFnZXIuaW5pdChzZXJ2ZXIpXG5cdHJldHVybiBzb2NrZXRNYW5hZ2VyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
