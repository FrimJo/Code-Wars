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
const log_in_component_1 = require('../components/log-in/log-in.component');
const home_component_1 = require('../components/home/home.component');
const main_component_1 = require('../components/main/main.component');
const my_robot_component_1 = require('../components/my-robot/my-robot.component');
const auth0_service_1 = require('../services/auth0.service');
const webgl_component_1 = require('../components/webgl/webgl.component');
const routes = [
    { path: '', redirectTo: '/log-in', pathMatch: 'full' },
    { path: 'log-in', component: log_in_component_1.LogInComponent },
    {
        path: 'main',
        component: main_component_1.MainComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'my-robot', component: my_robot_component_1.MyRobotComponent },
            { path: 'webgl', component: webgl_component_1.WebGLComponent }
        ],
        canActivate: [auth0_service_1.Auth0Service]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFDLGVBQ3JDLENBQUMsQ0FEbUQ7QUFDcEQseUJBQXFDLGlCQUNyQyxDQUFDLENBRHFEO0FBQ3RELG1DQUFnQyx1Q0FDaEMsQ0FBQyxDQURzRTtBQUN2RSxpQ0FBK0IsbUNBQy9CLENBQUMsQ0FEaUU7QUFDbEUsaUNBQStCLG1DQUMvQixDQUFDLENBRGlFO0FBQ2xFLHFDQUFrQywyQ0FDbEMsQ0FBQyxDQUQ0RTtBQUM3RSxnQ0FBK0IsMkJBQy9CLENBQUMsQ0FEeUQ7QUFDMUQsa0NBQWdDLHFDQUVoQyxDQUFDLENBRm9FO0FBRXJFLE1BQU0sTUFBTSxHQUFXO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQ0FBYyxFQUFFO0lBQzdDO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ1osRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1NBQ3pDO1FBQ0QsV0FBVyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUM1QjtDQUNILENBQUE7QUFPRDtBQUFnQyxDQUFDO0FBTGpDO0lBQUMsZUFBUSxDQUFDO1FBQ1QsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDekMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUN6QixDQUFDOztvQkFBQTtBQUVXLHdCQUFnQixtQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FwcC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgTG9nSW5Db21wb25lbnQgfVx0XHRmcm9tICcuLi9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50J1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9XHRcdGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCdcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfVx0XHRmcm9tICcuLi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQnXG5pbXBvcnQgeyBNeVJvYm90Q29tcG9uZW50IH1cdFx0ZnJvbSAnLi4vY29tcG9uZW50cy9teS1yb2JvdC9teS1yb2JvdC5jb21wb25lbnQnXG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfVx0XHRcdGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwLnNlcnZpY2UnXG5pbXBvcnQgeyBXZWJHTENvbXBvbmVudCB9XHRcdGZyb20gJy4uL2NvbXBvbmVudHMvd2ViZ2wvd2ViZ2wuY29tcG9uZW50J1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgXHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZy1pbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIFx0eyBwYXRoOiAnbG9nLWluJywgY29tcG9uZW50OiBMb2dJbkNvbXBvbmVudCB9LFxuICBcdHtcblx0ICAgIHBhdGg6ICdtYWluJyxcblx0ICAgIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCxcblx0ICAgIGNoaWxkcmVuOiBbXG5cdFx0XHR7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcblx0XHRcdHsgcGF0aDogJ215LXJvYm90JywgY29tcG9uZW50OiBNeVJvYm90Q29tcG9uZW50IH0sXG5cdFx0XHR7IHBhdGg6ICd3ZWJnbCcsIGNvbXBvbmVudDogV2ViR0xDb21wb25lbnQgfVxuXHQgICAgXSxcblx0ICAgIGNhbkFjdGl2YXRlOiBbQXV0aDBTZXJ2aWNlXVxuXHQgIH1cbl1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIF0sXG5cdGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
