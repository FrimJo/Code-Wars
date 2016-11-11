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
const auth0_service_1 = require('../../services/auth0.service');
let HeaderComponent = class HeaderComponent {
    constructor(auth0Service) {
        this.auth0Service = auth0Service;
        this.initialHeight = 300;
        this.hidden = true;
        this.height = function () {
            let height = this.initialHeight - document.body.scrollTop;
            return height < 0 ? 0 : height;
        };
        this.anchor = function () {
            return this.initialHeight - this.height();
        };
        this.opacity = function () {
            return ((this.height() / this.initialHeight) * 2) - 1;
        };
        this.scrollTop = function () {
            let scrollTop = document.body.scrollTop;
            return scrollTop > this.initialHeight ? this.initialHeight : scrollTop;
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.hidden = false;
    }
    ngOnDestroy() {
        this.hidden = true;
    }
    onScroll(event) { }
};
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-header',
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.css'],
        host: { '[@fadeAnimation]': 'true' },
        animations: [
            core_1.trigger('fadeAnimation', [
                core_1.state('*', core_1.style({})), core_1.transition('void => *', [core_1.style({})])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [auth0_service_1.Auth0Service])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFHTyxlQUNQLENBQUMsQ0FEcUI7QUFDdEIsZ0NBQTZCLDhCQUU3QixDQUFDLENBRjBEO0FBZTNEO0lBdUJFLFlBQ1UsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUF0QjVCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxJQUFJLENBQUE7UUFFYixXQUFNLEdBQUc7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO1lBQ3pELE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFFLENBQUMsR0FBRyxNQUFNLENBQUE7UUFDL0IsQ0FBQyxDQUFDO1FBRU0sV0FBTSxHQUFHO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzNDLENBQUMsQ0FBQTtRQUVPLFlBQU8sR0FBRztZQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFFLEdBQUUsQ0FBQyxDQUFBO1FBQ3ZELENBQUMsQ0FBQTtRQUVPLGNBQVMsR0FBRztZQUNsQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUN2QyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUE7UUFDeEUsQ0FBQyxDQUFBO0lBSUksQ0FBQztJQUVOLFFBQVEsS0FBVyxDQUFDO0lBRXBCLGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSyxJQUFTLENBQUM7QUFDMUIsQ0FBQztBQW5ERDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtRQUNwQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7UUFDcEMsVUFBVSxFQUFFO1lBQ1YsY0FBTyxDQUFDLGVBQWUsRUFBRTtnQkFDdkIsWUFBSyxDQUFDLEdBQUcsRUFBRSxZQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxpQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFFLFlBQUssQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO2FBQzlELENBQUM7U0FDSDtLQUNKLENBQUM7O21CQUFBO0FBRVcsdUJBQWUsa0JBc0MzQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQgLCBzdHlsZSwgc3RhdGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEF1dGgwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgwLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBcdHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgXHR0ZW1wbGF0ZVVybDogJ2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIFx0c3R5bGVVcmxzOiBbICdoZWFkZXIuY29tcG9uZW50LmNzcycgXSxcbiAgICBob3N0OiB7ICdbQGZhZGVBbmltYXRpb25dJzogJ3RydWUnIH0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgdHJpZ2dlcignZmFkZUFuaW1hdGlvbicsIFtcbiAgICAgICAgc3RhdGUoJyonLCBzdHlsZSh7fSkpLCB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbIHN0eWxlKHt9KSBdKVxuICAgICAgXSlcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3l7XG5cbiAgcHJpdmF0ZSBpbml0aWFsSGVpZ2h0ID0gMzAwO1xuICBwcml2YXRlIGhpZGRlbiA9IHRydWVcbiAgXG4gIHByaXZhdGUgaGVpZ2h0ID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5pbml0aWFsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICByZXR1cm4gaGVpZ2h0IDwgMD8gMCA6IGhlaWdodFxuICB9O1xuICBcbiAgcHJpdmF0ZSBhbmNob3IgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxIZWlnaHQgLSB0aGlzLmhlaWdodCgpXG4gIH1cblxuICBwcml2YXRlIG9wYWNpdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoKHRoaXMuaGVpZ2h0KCkgLyB0aGlzLmluaXRpYWxIZWlnaHQpICogMiApIC0xXG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgIHJldHVybiBzY3JvbGxUb3AgPiB0aGlzLmluaXRpYWxIZWlnaHQgPyB0aGlzLmluaXRpYWxIZWlnaHQgOiBzY3JvbGxUb3BcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDBTZXJ2aWNlOiBBdXRoMFNlcnZpY2VcbiAgICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gIH1cblxuICBvblNjcm9sbChldmVudCk6IHZvaWQge31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
