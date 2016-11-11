// OTHERS =======================
import '../extensions/rxjs-extensions'
//import '../extensions/gl-matrix.extention'
import { AUTH_PROVIDERS } from 'angular2-jwt'

// DIRECTIVES =======================
import { AceEditorDirective } from '../directives/ace-editor.directive'
//import { AceEditorComponent } from '../components/ace-editor/ace-editor.component'

// MODULES =======================
import { BrowserModule } 	from '@angular/platform-browser'
import { NgModule }      	from '@angular/core'
import { HttpModule }		from '@angular/http'
import { AppRoutingModule } from './app-routing.module'

// SERVICES =======================
import { SocketService }	from '../services/socket.service'
import { Auth0Service }		from '../services/auth0.service'
import { ScriptSaverService } from '../services/script-saver.service'
import { ArenaService } from '../services/arena.service'

// COMPONENTS =======================
import { AppComponent }		from '../components/app/app.component'
import { LogInComponent }	from '../components/log-in/log-in.component'
import { MainComponent }		from '../components/main/main.component'
import { HomeComponent }		from '../components/home/home.component'
import { HeaderComponent }		from '../components/header/header.component'
import { MyRobotComponent }		from '../components/my-robot/my-robot.component'
import { ScriptEditorComponent }		from '../components/script-editor/script-editor.component'
import { WebGLComponent }		from '../components/webgl/webgl.component'


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		LogInComponent,
		MainComponent,
		HomeComponent,
		HeaderComponent,
		MyRobotComponent,
		ScriptEditorComponent,
		AceEditorDirective,
		WebGLComponent
		//AceEditorComponent,
		
	],
	providers: [
		ScriptSaverService,
		SocketService,
		Auth0Service,
		ArenaService,
		//AceEditorDirective,
		...AUTH_PROVIDERS
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }