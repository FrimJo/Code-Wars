"use strict";
let UUID = require('node-uuid');
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
            let isServer = socket.handshake.query.isServer;
            // If we got a query
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
                // Get the script object
                let script = {}, run = function (entity, tpf) { console.log('run'); }, setup = function (entity) { console.log('setup'); }; //Entity
                // Create data object
                let data = {
                    id: socket.userid,
                    script: JSON.stringify(script)
                };
                // Send onconnected message together with the data object
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
        // Set up listener for receive state
        server.on('state', stateJSON => {
            let state = JSON.parse(stateJSON);
            console.log('state received');
            console.log(state);
            // Pass the state forward to all connected clients.
        });
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

//# sourceMappingURL=data:application/json;base64,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LE1BQU0sQ0FBQyxhQUFhLENBQUE7QUFDckIsQ0FBQztBQUhlLFlBQUksT0FHbkIsQ0FBQSIsImZpbGUiOiJtb2RlbHMvc29ja2V0X21hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVVVJRCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpXG5pbXBvcnQgQXJlbmEgPSByZXF1aXJlKCcuL2FyZW5hJylcblxuY2xhc3MgU29ja2V0TWFuYWdlciB7XG5cdFxuXHRwcml2YXRlIGlvXG5cdHByaXZhdGUgYXJlbmFcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFyZW5hID0gQXJlbmEuZ2V0SW5zdGFuY2UoKVxuXHR9XG5cblx0aW5pdChzZXJ2ZXIpIHtcblx0XHRsZXQgYXJlbmEgPSB0aGlzLmFyZW5hXG5cdFx0XG5cdFx0dGhpcy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpKHNlcnZlcilcblx0XHQub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0KSA9PiB7XG5cblx0ICAgICAgICBjb25zb2xlLmxvZygnYSByb2JvdCBjb25uZWN0ZWQnKVxuXHRcdFx0bGV0IGlzU2VydmVyID0gc29ja2V0LmhhbmRzaGFrZS5xdWVyeS5pc1NlcnZlclxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgYSBxdWVyeVxuXHRcdFx0aWYgKGlzU2VydmVyICE9IG51bGwpIHtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlF1ZXJ5OiBcIiArIGlzU2VydmVyKVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHVwIHVuaXF1ZSBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgIHNvY2tldC51c2VyaWQgPSBVVUlEKClcblxuICAgICAgICAgICAgICAgIC8vIElmIGNvbm5lY3RlZCB1c2VyIGlzIHNlcnZlclxuXHRcdFx0XHRpZiAoaXNTZXJ2ZXIpIHtcblxuXHRcdFx0XHQgICAgLy8gU2V0IHVwIHRoZSBjb25uZWN0aW9uIGFzIGEgc2VydmVyIGNvbm5lY3Rpb25cblx0XHRcdFx0XHR0aGlzLnNldHVwU2VydmVyKHNvY2tldClcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB1cCB0aGUgY29ubmVjdGlvbiBhcyBhIGNsaWVudCBjb25uZWN0aW9uXG5cdFx0XHRcdFx0dGhpcy5zZXR1cENsaWVudChzb2NrZXQpXG5cdFx0XHRcdH1cblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc2NyaXB0IG9iamVjdFxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgcnVuID0gZnVuY3Rpb24oZW50aXR5OmFueSwgdHBmOm51bWJlcil7IGNvbnNvbGUubG9nKCdydW4nKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dXAgPSBmdW5jdGlvbihlbnRpdHk6YW55KXsgY29uc29sZS5sb2coJ3NldHVwJyk7IH07IC8vRW50aXR5XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBvYmplY3RcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdFx0ICAgIGlkOiBzb2NrZXQudXNlcmlkLFxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQ6IEpTT04uc3RyaW5naWZ5KHNjcmlwdClcblx0XHRcdFx0fVxuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBvbmNvbm5lY3RlZCBtZXNzYWdlIHRvZ2V0aGVyIHdpdGggdGhlIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ29uY29ubmVjdGVkJywgZGF0YSApXG5cblx0XHRcdH1cblxuXHRcdFx0Lypcblx0ICAgICAgICBsZXQgdGlja0xpc3RlbmVyID0gZnVuY3Rpb24oYm9kaWVzKXtcblxuXHRcdFx0XHQvLyBHZXQgYWxsIGJvZGllcyBvZiByb2JvdHMgZnJvbSBhcmVuYVxuXHRcdFx0XHRzb2NrZXQuZW1pdCgnYm9kaWVzJywgSlNPTi5zdHJpbmdpZnkoYm9kaWVzKSlcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBsZXQgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRzb2NrZXQuZW1pdCgnZXJyJywgSlNPTi5zdHJpbmdpZnkoZXJyLm1lc3NhZ2UpKVxuXHRcdFx0fVxuXG5cdCAgICAgICAgLy8gQWRkIGxpc3RlbmVyXG5cdCAgICAgICAgYXJlbmEuYWRkVGlja0xpc3RlbmVyKHRpY2tMaXN0ZW5lcilcblx0XHRcdGFyZW5hLmFkZEVycm9yTGlzdGVuZXIoZXJyb3JMaXN0ZW5lcilcblxuICAgICAgICBcdC8vIE9uIHVzZXIgZGlzY29ubmVjdFxuXHQgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdEV2ZW50JywgKCkgPT4ge1xuXHQgICAgICAgICAgICBjb25zb2xlLmxvZygncm9ib3QgZGlzY29ubmVjdGVkJylcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgdGljayBsaXN0ZW5lclxuXHQgICAgICAgICAgICBhcmVuYS5yZW1vdmVUaWNrTGlzdGVuZXIodGlja0xpc3RlbmVyKVxuXG5cdCAgICAgICAgfSkqL1xuXG5cdCAgICB9KVxuXHQgICAgY29uc29sZS5sb2coJ3NvY2tldC5pbyBpbml0aWF0ZWQnKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cFNlcnZlcihzZXJ2ZXIpIHtcblxuXHQgICAgLy8gU2V0IHVwIGxpc3RlbmVyIGZvciByZWNlaXZlIHN0YXRlXG4gICAgICAgIHNlcnZlci5vbignc3RhdGUnLCBzdGF0ZUpTT04gPT4ge1xuICAgICAgICAgICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZUpTT04pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUgcmVjZWl2ZWQnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG5cbiAgICAgICAgICAgIC8vIFBhc3MgdGhlIHN0YXRlIGZvcndhcmQgdG8gYWxsIGNvbm5lY3RlZCBjbGllbnRzLlxuICAgICAgICB9KVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cENsaWVudChjbGllbnQpIHtcblxuXHR9XG59XG5cbmNvbnN0IHNvY2tldE1hbmFnZXI6U29ja2V0TWFuYWdlciA9IG5ldyBTb2NrZXRNYW5hZ2VyKClcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2VydmVyKTogU29ja2V0TWFuYWdlciB7XG5cdHNvY2tldE1hbmFnZXIuaW5pdChzZXJ2ZXIpXG5cdHJldHVybiBzb2NrZXRNYW5hZ2VyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
