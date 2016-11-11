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
let MyRobotComponent = class MyRobotComponent {
    constructor(auth0Service) {
        this.auth0Service = auth0Service;
    }
};
MyRobotComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-robot',
        templateUrl: 'my-robot.component.html',
        styleUrls: ['my-robot.component.css']
    }), 
    __metadata('design:paramtypes', [auth0_service_1.Auth0Service])
], MyRobotComponent);
exports.MyRobotComponent = MyRobotComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL215LXJvYm90L215LXJvYm90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTJCLGVBQzNCLENBQUMsQ0FEeUM7QUFDMUMsZ0NBQThCLDhCQUU5QixDQUFDLENBRjJEO0FBUzVEO0lBRUMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0FBQ25ELENBQUM7QUFWRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtLQUN2QyxDQUFDOztvQkFBQTtBQUVXLHdCQUFnQixtQkFHNUIsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9teS1yb2JvdC9teS1yb2JvdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfVx0XHRmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQXV0aDBTZXJ2aWNlIH1cdFx0ZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aDAuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbXktcm9ib3QnLFxuXHR0ZW1wbGF0ZVVybDogJ215LXJvYm90LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICdteS1yb2JvdC5jb21wb25lbnQuY3NzJyBdXG59KVxuXG5leHBvcnQgY2xhc3MgTXlSb2JvdENvbXBvbmVudCB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGgwU2VydmljZTogQXV0aDBTZXJ2aWNlKSB7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
