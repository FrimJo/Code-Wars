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
const router_1 = require('@angular/router');
const auth0_service_1 = require('../../services/auth0.service');
let LogInComponent = class LogInComponent {
    constructor(auth0Service, router) {
        this.auth0Service = auth0Service;
        this.router = router;
        this.hidden = true;
        console.log('LogInComponent');
        if (auth0Service.authenticated()) {
            this.router.navigate(['/main/my-robot']);
        }
    }
    ngAfterViewInit() {
        this.hidden = false;
    }
    ngOnDestroy() {
        this.hidden = true;
    }
};
LogInComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-log-in',
        templateUrl: 'log-in.component.html',
        styleUrls: ['log-in.component.css'],
        host: { '[@fadeAnimation]': 'true' },
        animations: [
            core_1.trigger('fadeAnimation', [
                core_1.state('*', core_1.style({})), core_1.transition('void => *', [core_1.style({})])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [auth0_service_1.Auth0Service, router_1.Router])
], LogInComponent);
exports.LogInComponent = LogInComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBaUcsZUFDakcsQ0FBQyxDQUQrRztBQUNoSCx5QkFBdUIsaUJBQ3ZCLENBQUMsQ0FEdUM7QUFDeEMsZ0NBQTZCLDhCQUU3QixDQUFDLENBRjBEO0FBZTNEO0lBSUMsWUFDUyxZQUEwQixFQUMxQixNQUFjO1FBRGQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpmLFdBQU0sR0FBRyxJQUFJLENBQUE7UUFNcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7UUFDekMsQ0FBQztJQUNGLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNuQixDQUFDO0FBRUYsQ0FBQztBQW5DRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtRQUNyQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7UUFDcEMsVUFBVSxFQUFFO1lBQ1YsY0FBTyxDQUFDLGVBQWUsRUFBRTtnQkFDdEIsWUFBSyxDQUFDLEdBQUcsRUFBRSxZQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxpQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFFLFlBQUssQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO2FBQy9ELENBQUM7U0FDSDtLQUNILENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBc0IxQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBzdGF0ZSwgdHJpZ2dlciwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0fSAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgQXV0aDBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aDAuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIFx0c2VsZWN0b3I6ICdteS1sb2ctaW4nLFxuICBcdHRlbXBsYXRlVXJsOiAnbG9nLWluLmNvbXBvbmVudC5odG1sJyxcbiAgXHRzdHlsZVVybHM6IFsgJ2xvZy1pbi5jb21wb25lbnQuY3NzJyBdLFxuICBcdGhvc3Q6IHsgJ1tAZmFkZUFuaW1hdGlvbl0nOiAndHJ1ZScgfSxcbiAgXHRhbmltYXRpb25zOiBbXG4gICAgXHR0cmlnZ2VyKCdmYWRlQW5pbWF0aW9uJywgW1xuICAgICAgXHRcdHN0YXRlKCcqJywgc3R5bGUoe30pKSwgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgWyBzdHlsZSh7fSkgXSlcbiAgICBcdF0pXG4gIFx0XVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ0luQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuXHRwcml2YXRlIGhpZGRlbiA9IHRydWUgXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhdXRoMFNlcnZpY2U6IEF1dGgwU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge1xuXHRcdGNvbnNvbGUubG9nKCdMb2dJbkNvbXBvbmVudCcpXG5cdFx0aWYoYXV0aDBTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQoKSl7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYWluL215LXJvYm90J10pXG5cdFx0fVxuXHR9XHRcblx0XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmhpZGRlbiA9IGZhbHNlXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWVcblx0fVxuXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
