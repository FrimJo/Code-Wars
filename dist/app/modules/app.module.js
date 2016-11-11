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
// OTHERS =======================
require('../extensions/rxjs-extensions');
//import '../extensions/gl-matrix.extention'
const angular2_jwt_1 = require('angular2-jwt');
// DIRECTIVES =======================
const ace_editor_directive_1 = require('../directives/ace-editor.directive');
//import { AceEditorComponent } from '../components/ace-editor/ace-editor.component'
// MODULES =======================
const platform_browser_1 = require('@angular/platform-browser');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const app_routing_module_1 = require('./app-routing.module');
// SERVICES =======================
const socket_service_1 = require('../services/socket.service');
const auth0_service_1 = require('../services/auth0.service');
const script_saver_service_1 = require('../services/script-saver.service');
const arena_service_1 = require('../services/arena.service');
// COMPONENTS =======================
const app_component_1 = require('../components/app/app.component');
const log_in_component_1 = require('../components/log-in/log-in.component');
const main_component_1 = require('../components/main/main.component');
const home_component_1 = require('../components/home/home.component');
const header_component_1 = require('../components/header/header.component');
const my_robot_component_1 = require('../components/my-robot/my-robot.component');
const script_editor_component_1 = require('../components/script-editor/script-editor.component');
const webgl_component_1 = require('../components/webgl/webgl.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            log_in_component_1.LogInComponent,
            main_component_1.MainComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            my_robot_component_1.MyRobotComponent,
            script_editor_component_1.ScriptEditorComponent,
            ace_editor_directive_1.AceEditorDirective,
            webgl_component_1.WebGLComponent
        ],
        providers: [
            script_saver_service_1.ScriptSaverService,
            socket_service_1.SocketService,
            auth0_service_1.Auth0Service,
            arena_service_1.ArenaService,
            //AceEditorDirective,
            ...angular2_jwt_1.AUTH_PROVIDERS
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxRQUFPLCtCQUVQLENBQUMsQ0FGcUM7QUFDdEMsNENBQTRDO0FBQzVDLCtCQUErQixjQUcvQixDQUFDLENBSDRDO0FBRTdDLHFDQUFxQztBQUNyQyx1Q0FBbUMsb0NBSW5DLENBQUMsQ0FKc0U7QUFDdkUsb0ZBQW9GO0FBRXBGLGtDQUFrQztBQUNsQyxtQ0FBK0IsMkJBQy9CLENBQUMsQ0FEeUQ7QUFDMUQsdUJBQStCLGVBQy9CLENBQUMsQ0FENkM7QUFDOUMsdUJBQTRCLGVBQzVCLENBQUMsQ0FEMEM7QUFDM0MscUNBQWlDLHNCQUdqQyxDQUFDLENBSHNEO0FBRXZELG1DQUFtQztBQUNuQyxpQ0FBOEIsNEJBQzlCLENBQUMsQ0FEeUQ7QUFDMUQsZ0NBQThCLDJCQUM5QixDQUFDLENBRHdEO0FBQ3pELHVDQUFtQyxrQ0FDbkMsQ0FBQyxDQURvRTtBQUNyRSxnQ0FBNkIsMkJBRzdCLENBQUMsQ0FIdUQ7QUFFeEQscUNBQXFDO0FBQ3JDLGdDQUE4QixpQ0FDOUIsQ0FBQyxDQUQ4RDtBQUMvRCxtQ0FBK0IsdUNBQy9CLENBQUMsQ0FEcUU7QUFDdEUsaUNBQStCLG1DQUMvQixDQUFDLENBRGlFO0FBQ2xFLGlDQUErQixtQ0FDL0IsQ0FBQyxDQURpRTtBQUNsRSxtQ0FBaUMsdUNBQ2pDLENBQUMsQ0FEdUU7QUFDeEUscUNBQWtDLDJDQUNsQyxDQUFDLENBRDRFO0FBQzdFLDBDQUF1QyxxREFDdkMsQ0FBQyxDQUQyRjtBQUM1RixrQ0FBZ0MscUNBR2hDLENBQUMsQ0FIb0U7QUFpQ3JFO0FBQXlCLENBQUM7QUE5QjFCO0lBQUMsZUFBUSxDQUFDO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsZ0NBQWE7WUFDYixxQ0FBZ0I7WUFDaEIsaUJBQVU7U0FDVjtRQUNELFlBQVksRUFBRTtZQUNiLDRCQUFZO1lBQ1osaUNBQWM7WUFDZCw4QkFBYTtZQUNiLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixxQ0FBZ0I7WUFDaEIsK0NBQXFCO1lBQ3JCLHlDQUFrQjtZQUNsQixnQ0FBYztTQUdkO1FBQ0QsU0FBUyxFQUFFO1lBQ1YseUNBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsNEJBQVk7WUFDWiw0QkFBWTtZQUNaLHFCQUFxQjtZQUNyQixHQUFHLDZCQUFjO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtLQUMzQixDQUFDOzthQUFBO0FBRVcsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPVEhFUlMgPT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi4vZXh0ZW5zaW9ucy9yeGpzLWV4dGVuc2lvbnMnXG4vL2ltcG9ydCAnLi4vZXh0ZW5zaW9ucy9nbC1tYXRyaXguZXh0ZW50aW9uJ1xuaW1wb3J0IHsgQVVUSF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi1qd3QnXG5cbi8vIERJUkVDVElWRVMgPT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7IEFjZUVkaXRvckRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWNlLWVkaXRvci5kaXJlY3RpdmUnXG4vL2ltcG9ydCB7IEFjZUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWNlLWVkaXRvci9hY2UtZWRpdG9yLmNvbXBvbmVudCdcblxuLy8gTU9EVUxFUyA9PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IFx0ZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBcdGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH1cdFx0ZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSdcblxuLy8gU0VSVklDRVMgPT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfVx0ZnJvbSAnLi4vc2VydmljZXMvc29ja2V0LnNlcnZpY2UnXG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfVx0XHRmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU2NyaXB0U2F2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0LXNhdmVyLnNlcnZpY2UnXG5pbXBvcnQgeyBBcmVuYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcmVuYS5zZXJ2aWNlJ1xuXG4vLyBDT01QT05FTlRTID09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfVx0XHRmcm9tICcuLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTG9nSW5Db21wb25lbnQgfVx0ZnJvbSAnLi4vY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudCdcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfVx0XHRmcm9tICcuLi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQnXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH1cdFx0ZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50J1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH1cdFx0ZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IE15Um9ib3RDb21wb25lbnQgfVx0XHRmcm9tICcuLi9jb21wb25lbnRzL215LXJvYm90L215LXJvYm90LmNvbXBvbmVudCdcbmltcG9ydCB7IFNjcmlwdEVkaXRvckNvbXBvbmVudCB9XHRcdGZyb20gJy4uL2NvbXBvbmVudHMvc2NyaXB0LWVkaXRvci9zY3JpcHQtZWRpdG9yLmNvbXBvbmVudCdcbmltcG9ydCB7IFdlYkdMQ29tcG9uZW50IH1cdFx0ZnJvbSAnLi4vY29tcG9uZW50cy93ZWJnbC93ZWJnbC5jb21wb25lbnQnXG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0QXBwUm91dGluZ01vZHVsZSxcblx0XHRIdHRwTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFwcENvbXBvbmVudCxcblx0XHRMb2dJbkNvbXBvbmVudCxcblx0XHRNYWluQ29tcG9uZW50LFxuXHRcdEhvbWVDb21wb25lbnQsXG5cdFx0SGVhZGVyQ29tcG9uZW50LFxuXHRcdE15Um9ib3RDb21wb25lbnQsXG5cdFx0U2NyaXB0RWRpdG9yQ29tcG9uZW50LFxuXHRcdEFjZUVkaXRvckRpcmVjdGl2ZSxcblx0XHRXZWJHTENvbXBvbmVudFxuXHRcdC8vQWNlRWRpdG9yQ29tcG9uZW50LFxuXHRcdFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTY3JpcHRTYXZlclNlcnZpY2UsXG5cdFx0U29ja2V0U2VydmljZSxcblx0XHRBdXRoMFNlcnZpY2UsXG5cdFx0QXJlbmFTZXJ2aWNlLFxuXHRcdC8vQWNlRWRpdG9yRGlyZWN0aXZlLFxuXHRcdC4uLkFVVEhfUFJPVklERVJTXG5cdF0sXG5cdGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
