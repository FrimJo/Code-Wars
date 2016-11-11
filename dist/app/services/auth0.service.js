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
const angular2_jwt_1 = require('angular2-jwt');
const router_1 = require('@angular/router');
let Auth0Service = class Auth0Service {
    constructor(router) {
        this.router = router;
        this.lock = new Auth0Lock('uf2rDdZLhf8QADcwTvHPTmNjn3fMKmdE', 'code-wars.eu.auth0.com', {
            //closable: false,
            autoclose: true,
            //container: 'hiw-login-container',
            auth: {
                redirect: true //false
            },
            theme: {
                labeledSubmitButton: false,
                primaryColor: '#BA68C8'
            },
            socialButtonStyle: 'small'
        });
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    return;
                }
                localStorage.setItem("profile", JSON.stringify(profile));
                localStorage.setItem("id_token", authResult.idToken);
                this.router.navigate(['/main/my-robot']);
            });
        });
    }
    login() {
        // Call the show method to display the widget.
        this.lock.show();
    }
    logout() {
        // After navigation, remove items from localStorage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        window.location.replace('/');
    }
    authenticated() {
        return angular2_jwt_1.tokenNotExpired();
    }
    canActivate() {
        /*
         * Check to see if a user has a valid JWT
         */
        if (angular2_jwt_1.tokenNotExpired()) {
            // If they do, return true and allow the user to load the home component
            return true;
        }
        // If not, then redirect them to the login page
        this.router.navigate(['log-in']);
        return false;
    }
};
Auth0Service = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [router_1.Router])
], Auth0Service);
exports.Auth0Service = Auth0Service;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBOEIsZUFDOUIsQ0FBQyxDQUQ0QztBQUM3QywrQkFBZ0MsY0FDaEMsQ0FBQyxDQUQ2QztBQUM5Qyx5QkFBb0MsaUJBRXBDLENBQUMsQ0FGb0Q7QUFLckQ7SUFpQkUsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmakMsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHdCQUF3QixFQUFFO1lBQ2pGLGtCQUFrQjtZQUNsQixTQUFTLEVBQUUsSUFBSTtZQUNmLG1DQUFtQztZQUNuQyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFlBQVksRUFBRSxTQUFTO2FBRXhCO1lBQ0QsaUJBQWlCLEVBQUUsT0FBTztTQUMzQixDQUFDLENBQUE7UUFJQSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVTtZQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU87Z0JBRXRELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRVYsZUFBZTtvQkFDZixNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7WUFFMUMsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSyxLQUFLO1FBRVQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU07UUFFWCxtREFBbUQ7UUFDbkQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNsQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRW5DLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRyxhQUFhO1FBQ25CLE1BQU0sQ0FBQyw4QkFBZSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVPLFdBQVc7UUFFaEI7O1dBRUc7UUFDSCxFQUFFLENBQUMsQ0FBQyw4QkFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXRCLHdFQUF3RTtZQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELCtDQUErQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFFSCxDQUFDO0FBM0VEO0lBQUMsaUJBQVUsRUFBRTs7Z0JBQUE7QUFDQSxvQkFBWSxlQTBFeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgdG9rZW5Ob3RFeHBpcmVkIH0gZnJvbSAnYW5ndWxhcjItand0J1xuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuZGVjbGFyZSBjb25zdCBBdXRoMExvY2s6IGFueVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aDBTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCd1ZjJyRGRaTGhmOFFBRGN3VHZIUFRtTmpuM2ZNS21kRScsICdjb2RlLXdhcnMuZXUuYXV0aDAuY29tJywge1xuICAgIC8vY2xvc2FibGU6IGZhbHNlLFxuICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAvL2NvbnRhaW5lcjogJ2hpdy1sb2dpbi1jb250YWluZXInLFxuICAgIGF1dGg6IHtcbiAgICAgIHJlZGlyZWN0OiB0cnVlIC8vZmFsc2VcbiAgICB9LFxuICAgIHRoZW1lOiB7XG4gICAgICBsYWJlbGVkU3VibWl0QnV0dG9uOiBmYWxzZSxcbiAgICAgIHByaW1hcnlDb2xvcjogJyNCQTY4QzgnXG4gICAgICAvL2xvZ286ICdodHRwczovL2V4YW1wbGUuY29tL2xvZ28ucG5nJyAvLyBJdCBoYXMgYSByZWNvbW1lbmRlZCBtYXggaGVpZ2h0IG9mIDU4cHhcbiAgICB9LCBcbiAgICBzb2NpYWxCdXR0b25TdHlsZTogJ3NtYWxsJ1xuICB9KVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgLy8gQWRkIGNhbGxiYWNrIGZvciBsb2NrIGBhdXRoZW50aWNhdGVkYCBldmVudFxuICAgIHRoaXMubG9jay5vbihcImF1dGhlbnRpY2F0ZWRcIiwgKGF1dGhSZXN1bHQpID0+IHtcblxuICAgICAgdGhpcy5sb2NrLmdldFByb2ZpbGUoYXV0aFJlc3VsdC5pZFRva2VuLCAoZXJyb3IsIHByb2ZpbGUpID0+IHtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcblxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9maWxlXCIsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkX3Rva2VuXCIsIGF1dGhSZXN1bHQuaWRUb2tlbilcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWFpbi9teS1yb2JvdCddKSAgXG4gICAgICBcbiAgICAgIH0pXG5cbiAgICB9KVxuICB9XG5cblx0cHVibGljIGxvZ2luKCkge1xuXG4gICAgLy8gQ2FsbCB0aGUgc2hvdyBtZXRob2QgdG8gZGlzcGxheSB0aGUgd2lkZ2V0LlxuICAgIHRoaXMubG9jay5zaG93KClcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG5cbiAgICAvLyBBZnRlciBuYXZpZ2F0aW9uLCByZW1vdmUgaXRlbXMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJylcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gICAgfVxuXG5cdHB1YmxpYyBhdXRoZW50aWNhdGVkKCkge1xuXHRcdHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKVxuXHR9XG5cbiAgcHVibGljIGNhbkFjdGl2YXRlKCkge1xuICAgICBcbiAgICAvKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiBhIHVzZXIgaGFzIGEgdmFsaWQgSldUXG4gICAgICovXG4gICAgaWYgKHRva2VuTm90RXhwaXJlZCgpKSB7XG4gICAgICAgXG4gICAgICAvLyBJZiB0aGV5IGRvLCByZXR1cm4gdHJ1ZSBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gbG9hZCB0aGUgaG9tZSBjb21wb25lbnRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIElmIG5vdCwgdGhlbiByZWRpcmVjdCB0aGVtIHRvIHRoZSBsb2dpbiBwYWdlXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2ctaW4nXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
