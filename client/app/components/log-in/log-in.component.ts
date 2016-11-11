import {Component, style, animate, transition, state, trigger, OnDestroy, AfterViewInit}    from '@angular/core'
import { Router } from '@angular/router'
import { Auth0Service } from '../../services/auth0.service'

@Component({
	moduleId: module.id,
  	selector: 'my-log-in',
  	templateUrl: 'log-in.component.html',
  	styleUrls: [ 'log-in.component.css' ],
  	host: { '[@fadeAnimation]': 'true' },
  	animations: [
    	trigger('fadeAnimation', [
      		state('*', style({})), transition('void => *', [ style({}) ])
    	])
  	]
})

export class LogInComponent implements OnDestroy, AfterViewInit {

	private hidden = true 

	constructor(
		private auth0Service: Auth0Service,
		private router: Router
	) {
		console.log('LogInComponent')
		if(auth0Service.authenticated()){
			this.router.navigate(['/main/my-robot'])
		}
	}	
	
	ngAfterViewInit() {
		this.hidden = false
	}

	ngOnDestroy(): void {
		this.hidden = true
	}

}



