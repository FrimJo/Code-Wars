import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LogInComponent }		from '../components/log-in/log-in.component'
import { HomeComponent }		from '../components/home/home.component'
import { MainComponent }		from '../components/main/main.component'
import { MyRobotComponent }		from '../components/my-robot/my-robot.component'
import { Auth0Service }			from '../services/auth0.service'
import { WebGLComponent }		from '../components/webgl/webgl.component'

const routes: Routes = [
  	{ path: '', redirectTo: '/log-in', pathMatch: 'full' },
  	{ path: 'log-in', component: LogInComponent },
  	{
	    path: 'main',
	    component: MainComponent,
	    children: [
			{ path: '', component: HomeComponent },
			{ path: 'my-robot', component: MyRobotComponent },
			{ path: 'webgl', component: WebGLComponent }
	    ],
	    canActivate: [Auth0Service]
	  }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }