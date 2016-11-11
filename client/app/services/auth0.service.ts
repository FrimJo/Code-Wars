import { Injectable }    from '@angular/core'
import { tokenNotExpired } from 'angular2-jwt'
import { Router, CanActivate } from '@angular/router'

declare const Auth0Lock: any

@Injectable()
export class Auth0Service implements CanActivate {

  lock = new Auth0Lock('uf2rDdZLhf8QADcwTvHPTmNjn3fMKmdE', 'code-wars.eu.auth0.com', {
    //closable: false,
    autoclose: true,
    //container: 'hiw-login-container',
    auth: {
      redirect: true //false
    },
    theme: {
      labeledSubmitButton: false,
      primaryColor: '#BA68C8'
      //logo: 'https://example.com/logo.png' // It has a recommended max height of 58px
    }, 
    socialButtonStyle: 'small'
  })

  constructor(public router: Router) {

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {

      this.lock.getProfile(authResult.idToken, (error, profile) => {

        if (error) {

          // Handle error
          return;
        }
        
        localStorage.setItem("profile", JSON.stringify(profile))
        localStorage.setItem("id_token", authResult.idToken)
        this.router.navigate(['/main/my-robot'])  
      
      })

    })
  }

	public login() {

    // Call the show method to display the widget.
    this.lock.show()
  }

  public logout() {

    // After navigation, remove items from localStorage
    localStorage.removeItem('profile')
    localStorage.removeItem('id_token')

    window.location.replace('/');
    }

	public authenticated() {
		return tokenNotExpired()
	}

  public canActivate() {
     
    /*
     * Check to see if a user has a valid JWT
     */
    if (tokenNotExpired()) {
       
      // If they do, return true and allow the user to load the home component
      return true;
    }

    // If not, then redirect them to the login page
    this.router.navigate(['log-in']);
    return false;
  }

}