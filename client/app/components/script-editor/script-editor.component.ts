import { Component, OnInit }	from '@angular/core';
import { ScriptSaverService }	from '../../services/script-saver.service';
import { BehaviorSubject }		from 'rxjs/BehaviorSubject';

/* Local class to contain a new save */
class SaveScript {
	
	constructor(
    public script: string) {}
}

@Component({
	moduleId: module.id,
	selector: 'my-script-editor',
	templateUrl: 'script-editor.component.html',
	styleUrls: [ 'script-editor.component.css' ],
	providers: [ScriptSaverService]
})

export class ScriptEditorComponent implements OnInit {
	
	private savedScripts = new BehaviorSubject<SaveScript>(new SaveScript('Loading script…'))
	private scriptText: string

	constructor(
   	private scriptSaverService: ScriptSaverService) {
		this.scriptText = this.savedScripts.getValue().script
    }

	// Push a save script into the stream.
	public saveScript(script: string): void {
		this.savedScripts.next(new SaveScript(script))
	}

	public keydown(event){
		
		if (event.ctrlKey || event.metaKey) {
	        switch (String.fromCharCode(event.which).toLowerCase()) {
	        case 's':
	            event.preventDefault()
	            this.save(script => {})
	            break
	        }
    	}	
	}

	public ngOnInit(): void {

		// Get the script from the server async, show loading while waiting
		this.scriptSaverService.load()
								.subscribe(
									script => this.scriptText = script,
				                    error  => console.log(error)
								)

		// Register auto save
		this.savedScripts
			.debounceTime(10000)        // wait for 10000ms pause in events
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.subscribe( savedScript => {
				this.scriptSaverService.save(savedScript.script)
										.subscribe()
			})
  	}

	public save(callback: (script:string)=>void){

  		let script = this.savedScripts.getValue().script
		this.scriptSaverService.save(script).subscribe( script => callback(script))			
  	}

	public ngOnDestroy() {

  		// Save the script on leaving the view
		this.save(script => {})
  	}
}