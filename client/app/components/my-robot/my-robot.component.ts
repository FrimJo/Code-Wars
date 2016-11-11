import { Component }		from '@angular/core'
import { Auth0Service }		from '../../services/auth0.service'

@Component({
	moduleId: module.id,
	selector: 'my-robot',
	templateUrl: 'my-robot.component.html',
	styleUrls: [ 'my-robot.component.css' ]
})

export class MyRobotComponent {
	
	constructor(private auth0Service: Auth0Service) {}
}