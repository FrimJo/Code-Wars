"use strict";
class Controller {
    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.socket.on('event', function () {
        });
    }
    isConnected() {
        return this.socket.connected;
    }
    disconnect() {
        this.socket.disconnect();
    }
}
module.exports = Controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQU1DLFlBQVksTUFBTTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1FBRXhCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVELFVBQVU7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3pCLENBQUM7QUFDRixDQUFDO0FBRUQsaUJBQVMsVUFBVSxDQUFBIiwiZmlsZSI6Im1vZGVscy9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWwgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdXRpbCcpXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuXHRwcml2YXRlIHNvY2tldDtcblx0cHJpdmF0ZSBmaWxlO1xuXHRwdWJsaWMgaWQ6IG51bWJlclxuXHRcblxuXHRjb25zdHJ1Y3Rvcihzb2NrZXQpe1xuXHRcdHRoaXMuc29ja2V0ID0gc29ja2V0XG5cdFx0dGhpcy5pZCA9IHNvY2tldC5pZFxuXG5cdFx0dGhpcy5zb2NrZXQub24oJ2V2ZW50JywgZnVuY3Rpb24oKXtcblxuXHRcdH0pXG5cdH1cblxuXHRpc0Nvbm5lY3RlZCgpOiBib29sZWFue1xuXHRcdHJldHVybiB0aGlzLnNvY2tldC5jb25uZWN0ZWRcblx0fVxuXG5cdGRpc2Nvbm5lY3QoKTogdm9pZHtcblx0XHR0aGlzLnNvY2tldC5kaXNjb25uZWN0KClcblx0fVxufVxuXG5leHBvcnQgPSBDb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
