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
            if (socket.handshake.query) {
                console.log("Query: ", socket.handshake.query);
            }
            /* Start listen for ticks */
            let tickListener = function (bodies) {
                // Get all bodies of robots from arena
                socket.emit('bodies', JSON.stringify(bodies));
            };
            let errorListener = function (err) {
                socket.emit('err', JSON.stringify(err.message));
            };
            // Add listener
            arena.addTickListener(tickListener);
            arena.addErrorListener(errorListener);
            // On user disconnect
            socket.on('disconnectEvent', () => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zb2NrZXRfbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTyxLQUFLLFdBQVcsU0FBUyxDQUFDLENBQUE7QUFFakM7SUFLQztRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTTtRQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNO1lBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUVLLDRCQUE0QjtZQUM1QixJQUFJLFlBQVksR0FBRyxVQUFTLE1BQU07Z0JBRXZDLHNDQUFzQztnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3hDLENBQUMsQ0FBQTtZQUVELElBQUksYUFBYSxHQUFHLFVBQVMsR0FBRztnQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxDQUFDLENBQUE7WUFFSyxlQUFlO1lBQ2YsS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN6QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUE7WUFFL0IscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFFakMsdUJBQXVCO2dCQUN2QixLQUFLLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFMUMsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0FBQ0YsQ0FBQztBQUVELE1BQU0sYUFBYSxHQUFpQixJQUFJLGFBQWEsRUFBRSxDQUFBO0FBRXZELGNBQXFCLE1BQU07SUFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQixNQUFNLENBQUMsYUFBYSxDQUFBO0FBQ3JCLENBQUM7QUFIZSxZQUFJLE9BR25CLENBQUEiLCJmaWxlIjoibW9kZWxzL3NvY2tldF9tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFyZW5hID0gcmVxdWlyZSgnLi9hcmVuYScpXG5cbmNsYXNzIFNvY2tldE1hbmFnZXIge1xuXHRcblx0cHJpdmF0ZSBpb1xuXHRwcml2YXRlIGFyZW5hXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hcmVuYSA9IEFyZW5hLmdldEluc3RhbmNlKClcblx0fVxuXG5cdGluaXQoc2VydmVyKSB7XG5cdFx0bGV0IGFyZW5hID0gdGhpcy5hcmVuYVxuXHRcdFxuXHRcdHRoaXMuaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShzZXJ2ZXIpXG5cdFx0Lm9uKCdjb25uZWN0aW9uJywgKHNvY2tldCkgPT4ge1xuXHRcdFxuXHQgICAgICAgIGNvbnNvbGUubG9nKCdhIHJvYm90IGNvbm5lY3RlZCcpXG5cdFx0XHRpZihzb2NrZXQuaGFuZHNoYWtlLnF1ZXJ5KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUXVlcnk6IFwiLCBzb2NrZXQuaGFuZHNoYWtlLnF1ZXJ5KTtcblx0XHRcdH1cblxuXHQgICAgICAgIC8qIFN0YXJ0IGxpc3RlbiBmb3IgdGlja3MgKi9cblx0ICAgICAgICBsZXQgdGlja0xpc3RlbmVyID0gZnVuY3Rpb24oYm9kaWVzKXtcblxuXHRcdFx0XHQvLyBHZXQgYWxsIGJvZGllcyBvZiByb2JvdHMgZnJvbSBhcmVuYVxuXHRcdFx0XHRzb2NrZXQuZW1pdCgnYm9kaWVzJywgSlNPTi5zdHJpbmdpZnkoYm9kaWVzKSlcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBsZXQgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHRzb2NrZXQuZW1pdCgnZXJyJywgSlNPTi5zdHJpbmdpZnkoZXJyLm1lc3NhZ2UpKVxuXHRcdFx0fVxuXG5cdCAgICAgICAgLy8gQWRkIGxpc3RlbmVyXG5cdCAgICAgICAgYXJlbmEuYWRkVGlja0xpc3RlbmVyKHRpY2tMaXN0ZW5lcilcblx0XHRcdGFyZW5hLmFkZEVycm9yTGlzdGVuZXIoZXJyb3JMaXN0ZW5lcilcblxuICAgICAgICBcdC8vIE9uIHVzZXIgZGlzY29ubmVjdFxuXHQgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdEV2ZW50JywgKCkgPT4ge1xuXHQgICAgICAgICAgICBjb25zb2xlLmxvZygncm9ib3QgZGlzY29ubmVjdGVkJylcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgdGljayBsaXN0ZW5lclxuXHQgICAgICAgICAgICBhcmVuYS5yZW1vdmVUaWNrTGlzdGVuZXIodGlja0xpc3RlbmVyKVxuXG5cdCAgICAgICAgfSlcblxuXHQgICAgfSlcblx0ICAgIGNvbnNvbGUubG9nKCdzb2NrZXQuaW8gaW5pdGlhdGVkJylcblx0fVxufVxuXG5jb25zdCBzb2NrZXRNYW5hZ2VyOlNvY2tldE1hbmFnZXIgPSBuZXcgU29ja2V0TWFuYWdlcigpXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHNlcnZlcik6IFNvY2tldE1hbmFnZXIge1xuXHRzb2NrZXRNYW5hZ2VyLmluaXQoc2VydmVyKVxuXHRyZXR1cm4gc29ja2V0TWFuYWdlclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
