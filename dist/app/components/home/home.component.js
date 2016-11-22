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
    constructor(arenaService, socketService, ngZone) {
        this.arenaService = arenaService;
        this.socketService = socketService;
        this.ngZone = ngZone;
        this._width = 640;
        this._height = 480;
        this._bodies = [];
    }
    ngOnInit() {
        // Set up context
        this._canvas = this.canvasRef.nativeElement;
        this._context = this._canvas.getContext('2d');
        this.arenaService.join();
        this.socketService.getMessages('bodies').subscribe((bodies) => this._bodies = JSON.parse(bodies));
        this.socketService.getMessages('err').subscribe((err) => console.log(JSON.parse(err)));
        // Set up draw loop
        this._drawId = this.ngZone.runOutsideAngular(() => { return requestAnimationFrame(() => this._draw()); });
    }
    // Runs each frame
    _draw() {
        requestAnimationFrame(() => this._draw());
        // Clear screen for new draw
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        // Draw all available bodies
        this._bodies.map(body => this._drawRobotAt(body.position, '#FF0000'));
    }
    _drawRobotAt(position, color) {
        // Draw robot on position
        let circle = new Path2D();
        circle.arc(position.x, position.y, 20, 0, 2 * Math.PI);
        this._context.fillStyle = color;
        this._context.fill(circle);
    }
    ngOnDestroy() {
        this.arenaService.leave();
        cancelAnimationFrame(this._drawId);
        this._drawId = null;
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
    __metadata('design:paramtypes', [arena_service_1.ArenaService, socket_service_1.SocketService, core_1.NgZone])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUErRCxlQUMvRCxDQUFDLENBRDZFO0FBQzlFLGdDQUE2Qiw4QkFDN0IsQ0FBQyxDQUQwRDtBQUMzRCxpQ0FBK0IsK0JBRS9CLENBQUMsQ0FGNkQ7QUFVOUQ7SUFXSSxZQUNZLFlBQTBCLEVBQzFCLGFBQTRCLEVBQzVCLE1BQWM7UUFGZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmxCLFdBQU0sR0FBVyxHQUFHLENBQUE7UUFDcEIsWUFBTyxHQUFXLEdBQUcsQ0FBQTtRQUlyQixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBTWQsQ0FBQztJQUVSLFFBQVE7UUFFSixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWhELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM5QyxDQUFDLE1BQWMsS0FBSyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ3hELENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQzNDLENBQUMsR0FBVyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNoRCxDQUFBO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDNUcsQ0FBQztJQUVELGtCQUFrQjtJQUNWLEtBQUs7UUFDVCxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBRXpDLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkUsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUV6RSxDQUFDO0lBRU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLO1FBRWhDLHlCQUF5QjtRQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3RCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUN2QixDQUFDO0FBQ0wsQ0FBQztBQTlERztJQUFDLGdCQUFTLENBQUMsUUFBUSxDQUFDOztnREFBQTtBQVZ4QjtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDaEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNuQyxTQUFTLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtLQUVyQyxDQUFDOztpQkFBQTtBQUVXLHFCQUFhLGdCQWdFekIsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBBcmVuYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcmVuYS5zZXJ2aWNlJ1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9ICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBcdHN0eWxlVXJsczogWyAnaG9tZS5jb21wb25lbnQuY3NzJyBdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2NhbnZhcycpIGNhbnZhc1JlZjogRWxlbWVudFJlZlxuXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDY0MFxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyID0gNDgwXG4gICAgcHJpdmF0ZSBfY2FudmFzO1xuICAgIHByaXZhdGUgX2NvbnRleHQ7XG4gICAgcHJpdmF0ZSBfZHJhd0lkO1xuICAgIHByaXZhdGUgX2JvZGllcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXJlbmFTZXJ2aWNlOiBBcmVuYVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICAgICAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICAvLyBTZXQgdXAgY29udGV4dFxuICAgICAgICB0aGlzLl9jYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgXHR0aGlzLmFyZW5hU2VydmljZS5qb2luKClcblxuICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2UuZ2V0TWVzc2FnZXMoJ2JvZGllcycpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChib2RpZXM6IHN0cmluZykgPT4gdGhpcy5fYm9kaWVzID0gSlNPTi5wYXJzZShib2RpZXMpXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2UuZ2V0TWVzc2FnZXMoJ2VycicpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChlcnI6IHN0cmluZykgPT4gY29uc29sZS5sb2coSlNPTi5wYXJzZShlcnIpKVxuICAgICAgICApXG5cbiAgICAgICAgLy8gU2V0IHVwIGRyYXcgbG9vcFxuICAgICAgICB0aGlzLl9kcmF3SWQgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7IHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fZHJhdygpKSB9KVxuICAgIH1cblxuICAgIC8vIFJ1bnMgZWFjaCBmcmFtZVxuICAgIHByaXZhdGUgX2RyYXcoKXtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX2RyYXcoKSlcblxuICAgICAgICAvLyBDbGVhciBzY3JlZW4gZm9yIG5ldyBkcmF3XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gRHJhdyBhbGwgYXZhaWxhYmxlIGJvZGllc1xuICAgICAgICB0aGlzLl9ib2RpZXMubWFwKGJvZHkgPT4gdGhpcy5fZHJhd1JvYm90QXQoYm9keS5wb3NpdGlvbiwgJyNGRjAwMDAnKSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdSb2JvdEF0KHBvc2l0aW9uLCBjb2xvcikge1xuXG4gICAgICAgIC8vIERyYXcgcm9ib3Qgb24gcG9zaXRpb25cbiAgICAgICAgbGV0IGNpcmNsZSA9IG5ldyBQYXRoMkQoKVxuICAgICAgICBjaXJjbGUuYXJjKHBvc2l0aW9uLngscG9zaXRpb24ueSwyMCwwLDIqTWF0aC5QSSlcblxuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZmlsbChjaXJjbGUpXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgXHR0aGlzLmFyZW5hU2VydmljZS5sZWF2ZSgpXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2RyYXdJZClcbiAgICAgICAgdGhpcy5fZHJhd0lkID0gbnVsbFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
