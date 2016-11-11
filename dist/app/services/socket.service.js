"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const Observable_1 = require('rxjs/Observable');
const io = require('socket.io-client');
let SocketService = class SocketService {
    constructor() {
        this.port = 3011;
        this.socket = io('http://localhost:' + this.port);
        console.log('socket.service initiated for port ' + this.port);
    }
    getId() {
        return this.socket.id;
    }
    sendMessage(event, message) {
        this.socket.emit(event, message);
    }
    getMessages(event) {
        //console.log('getMessages')
        let observable = new Observable_1.Observable(observer => {
            //console.log('observer')
            this.socket.on(event, (data) => {
                //console.log('data')
                observer.next(data);
            });
            return () => {
                //console.log('this.socket.disconnect()')
                this.socket.disconnect();
            };
        });
        //console.log('return')
        return observable;
    }
};
SocketService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], SocketService);
exports.SocketService = SocketService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDZCQUEyQixpQkFFM0IsQ0FBQyxDQUYyQztBQUU1QyxNQUFZLEVBQUUsV0FBTSxrQkFDcEIsQ0FBQyxDQURxQztBQUl0QztJQUlFO1FBSFEsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNwQixXQUFNLEdBQVcsRUFBRSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUkxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRUQsS0FBSztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFFZiw0QkFBNEI7UUFDNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFFBQVE7WUFDdEMseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7Z0JBQ3pCLHFCQUFxQjtnQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQztnQkFDTCx5Q0FBeUM7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDMUIsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRix1QkFBdUI7UUFDdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQW5DRDtJQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0FBQ0EscUJBQWEsZ0JBa0N6QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnXG5cbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgU29ja2V0ID0gU29ja2V0SU9DbGllbnQuU29ja2V0O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XG4gIHByaXZhdGUgcG9ydDogbnVtYmVyID0gMzAxMTtcbiAgcHJpdmF0ZSBzb2NrZXQ6U29ja2V0ICA9IGlvKCdodHRwOi8vbG9jYWxob3N0OicgKyB0aGlzLnBvcnQpXG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnc29ja2V0LnNlcnZpY2UgaW5pdGlhdGVkIGZvciBwb3J0ICcgKyB0aGlzLnBvcnQpXG4gIH1cbiAgXG4gIGdldElkKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkXG4gIH1cblxuICBzZW5kTWVzc2FnZShldmVudCwgbWVzc2FnZSl7XG4gICAgdGhpcy5zb2NrZXQuZW1pdChldmVudCwgbWVzc2FnZSkgIFxuICB9XG4gIFxuICBnZXRNZXNzYWdlcyhldmVudCkge1xuXG4gICAgLy9jb25zb2xlLmxvZygnZ2V0TWVzc2FnZXMnKVxuICAgIGxldCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZygnb2JzZXJ2ZXInKVxuICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIChkYXRhKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2RhdGEnKVxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpXG4gICAgICB9KVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpJylcbiAgICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpXG4gICAgICB9XG4gICAgfSkgICAgIFxuICAgIC8vY29uc29sZS5sb2coJ3JldHVybicpXG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH0gXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
