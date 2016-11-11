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
const arena_service_1 = require('../../services/arena.service');
const socket_service_1 = require('../../services/socket.service');
let HomeComponent = class HomeComponent {
    constructor(arenaService, socketService) {
        this.arenaService = arenaService;
        this.socketService = socketService;
        this._width = 640;
        this._height = 480;
    }
    ngOnInit() {
        // Set up context
        let canvas = this.canvasRef.nativeElement;
        let context = canvas.getContext('2d');
        // Save context
        this._context = context;
        this.arenaService.join();
        this.socketService.getMessages('positions').subscribe((message) => {
            // Clear screen for new draw
            context.clearRect(0, 0, canvas.width, canvas.height);
            let positions = JSON.parse(message);
            positions.map(position => this.drawRobotAt(position, '#FF0000'));
        });
    }
    drawRobotAt(position, color) {
        // Draw robot on position
        let circle = new Path2D();
        circle.arc(position.x, position.y, 20, 0, 2 * Math.PI);
        this._context.fillStyle = color;
        this._context.fill(circle);
    }
    ngOnDestroy() {
        this.arenaService.leave();
    }
};
__decorate([
    core_1.ViewChild('canvas'), 
    __metadata('design:type', core_1.ElementRef)
], HomeComponent.prototype, "canvasRef", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }), 
    __metadata('design:paramtypes', [arena_service_1.ArenaService, socket_service_1.SocketService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5RCxlQUN6RCxDQUFDLENBRHVFO0FBQ3hFLGdDQUE2Qiw4QkFDN0IsQ0FBQyxDQUQwRDtBQUMzRCxpQ0FBK0IsK0JBRS9CLENBQUMsQ0FGNkQ7QUFVOUQ7SUFRSSxZQUNZLFlBQTBCLEVBQzFCLGFBQTRCO1FBRDVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTmhDLFdBQU0sR0FBVyxHQUFHLENBQUE7UUFDcEIsWUFBTyxHQUFXLEdBQUcsQ0FBQTtJQU10QixDQUFDO0lBRVIsUUFBUTtRQUVKLGlCQUFpQjtRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQTtRQUN6QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXJDLGVBQWU7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUcxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDakQsQ0FBQyxPQUFlO1lBRVosNEJBQTRCO1lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ25DLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLO1FBRXZCLHlCQUF5QjtRQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzFCLENBQUM7QUFDTCxDQUFDO0FBOUNHO0lBQUMsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7O2dEQUFBO0FBVnhCO0lBQUMsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ25DLFNBQVMsRUFBRSxDQUFFLG9CQUFvQixDQUFFO0tBRXJDLENBQUM7O2lCQUFBO0FBRVcscUJBQWEsZ0JBZ0R6QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFyZW5hU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FyZW5hLnNlcnZpY2UnXG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gIGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIFx0c3R5bGVVcmxzOiBbICdob21lLmNvbXBvbmVudC5jc3MnIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnY2FudmFzJykgY2FudmFzUmVmOiBFbGVtZW50UmVmXG5cbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gNjQwXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSA0ODBcbiAgICBwcml2YXRlIF9jb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXJlbmFTZXJ2aWNlOiBBcmVuYVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZVxuICAgICAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICAvLyBTZXQgdXAgY29udGV4dFxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgLy8gU2F2ZSBjb250ZXh0XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0XG5cblxuICAgIFx0dGhpcy5hcmVuYVNlcnZpY2Uuam9pbigpXG4gICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5nZXRNZXNzYWdlcygncG9zaXRpb25zJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgc2NyZWVuIGZvciBuZXcgZHJhd1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gSlNPTi5wYXJzZShtZXNzYWdlKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5tYXAocG9zaXRpb24gPT4gdGhpcy5kcmF3Um9ib3RBdChwb3NpdGlvbiwgJyNGRjAwMDAnKSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhd1JvYm90QXQocG9zaXRpb24sIGNvbG9yKSB7XG5cbiAgICAgICAgLy8gRHJhdyByb2JvdCBvbiBwb3NpdGlvblxuICAgICAgICBsZXQgY2lyY2xlID0gbmV3IFBhdGgyRCgpXG4gICAgICAgIGNpcmNsZS5hcmMocG9zaXRpb24ueCxwb3NpdGlvbi55LDIwLDAsMipNYXRoLlBJKVxuXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsKGNpcmNsZSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICBcdHRoaXMuYXJlbmFTZXJ2aWNlLmxlYXZlKClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
