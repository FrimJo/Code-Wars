"use strict";
const Arena = require('./arena');
class SocketManager {
    constructor() {
        this.arena = Arena.getInstance();
    }
    init(server) {
        let arena = this.arena;
        this.io = require('socket.io')(server)
            .on('connection', function (socket) {
            console.log('a robot connected');
            /* Start listen for ticks */
            let tickListener = function () {
                // Get all positions of robots from arena
                let positions = arena.getPosition();
                socket.emit('positions', JSON.stringify(positions));
            };
            // Add listener for tick
            arena.addTickListener(tickListener);
            // On user disconnect
            socket.on('disconnectEvent', function () {
                console.log('robot disconnected');
                // Remove tick listener
                arena.removeTickListener(tickListener);
            });
        });
        console.log('socket.io initiated');
    }
}
const socketManager = new SocketManager();
function init(server) {
    socketManager.init(server);
    return socketManager;
}
exports.init = init;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zb2NrZXRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxLQUFLLFdBQVcsU0FBUyxDQUFDLENBQUE7QUFFakM7SUFLQztRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTTtRQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBUyxNQUFNO1lBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUVoQyw0QkFBNEI7WUFDNUIsSUFBSSxZQUFZLEdBQUc7Z0JBRXhCLHlDQUF5QztnQkFDbkMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7WUFDcEQsQ0FBQyxDQUFBO1lBRUQsd0JBQXdCO1lBQ3hCLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFbkMscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFFakMsdUJBQXVCO2dCQUN2QixLQUFLLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFMUMsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0FBQ0YsQ0FBQztBQUVELE1BQU0sYUFBYSxHQUFpQixJQUFJLGFBQWEsRUFBRSxDQUFBO0FBRXZELGNBQXFCLE1BQU07SUFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQixNQUFNLENBQUMsYUFBYSxDQUFBO0FBQ3JCLENBQUM7QUFIZSxZQUFJLE9BR25CLENBQUEiLCJmaWxlIjoibW9kZWxzL3NvY2tldF9tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFyZW5hID0gcmVxdWlyZSgnLi9hcmVuYScpXG5cbmNsYXNzIFNvY2tldE1hbmFnZXIge1xuXHRcblx0cHJpdmF0ZSBpb1xuXHRwcml2YXRlIGFyZW5hOiBBcmVuYVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYXJlbmEgPSBBcmVuYS5nZXRJbnN0YW5jZSgpXG5cdH1cblxuXHRpbml0KHNlcnZlcikge1xuXHRcdGxldCBhcmVuYSA9IHRoaXMuYXJlbmFcblx0XHRcblx0XHR0aGlzLmlvID0gcmVxdWlyZSgnc29ja2V0LmlvJykoc2VydmVyKVxuXHRcdC5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHNvY2tldCl7XG5cdFx0XG5cdCAgICAgICAgY29uc29sZS5sb2coJ2Egcm9ib3QgY29ubmVjdGVkJylcblxuXHQgICAgICAgIC8qIFN0YXJ0IGxpc3RlbiBmb3IgdGlja3MgKi9cblx0ICAgICAgICBsZXQgdGlja0xpc3RlbmVyID0gZnVuY3Rpb24oKXtcblxuXHRcdFx0XHQvLyBHZXQgYWxsIHBvc2l0aW9ucyBvZiByb2JvdHMgZnJvbSBhcmVuYVxuICAgICAgICBcdFx0bGV0IHBvc2l0aW9ucyA9IGFyZW5hLmdldFBvc2l0aW9uKClcbiAgICAgICAgXHRcdHNvY2tldC5lbWl0KCdwb3NpdGlvbnMnLCBKU09OLnN0cmluZ2lmeShwb3NpdGlvbnMpKVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIEFkZCBsaXN0ZW5lciBmb3IgdGlja1xuXHQgICAgICAgIGFyZW5hLmFkZFRpY2tMaXN0ZW5lcih0aWNrTGlzdGVuZXIpXG5cbiAgICAgICAgXHQvLyBPbiB1c2VyIGRpc2Nvbm5lY3Rcblx0ICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3RFdmVudCcsIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyb2JvdCBkaXNjb25uZWN0ZWQnKVxuXG5cdCAgICAgICAgICAgIC8vIFJlbW92ZSB0aWNrIGxpc3RlbmVyXG5cdCAgICAgICAgICAgIGFyZW5hLnJlbW92ZVRpY2tMaXN0ZW5lcih0aWNrTGlzdGVuZXIpXG5cblx0ICAgICAgICB9KVxuXG5cdCAgICB9KVxuXHQgICAgY29uc29sZS5sb2coJ3NvY2tldC5pbyBpbml0aWF0ZWQnKVxuXHR9XG59XG5cbmNvbnN0IHNvY2tldE1hbmFnZXI6U29ja2V0TWFuYWdlciA9IG5ldyBTb2NrZXRNYW5hZ2VyKClcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoc2VydmVyKTogU29ja2V0TWFuYWdlciB7XG5cdHNvY2tldE1hbmFnZXIuaW5pdChzZXJ2ZXIpXG5cdHJldHVybiBzb2NrZXRNYW5hZ2VyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
