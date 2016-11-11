import { Component, OnDestroy, style, animate, transition, state, trigger, AfterViewInit  }	from '@angular/core'


@Component({
	moduleId: module.id,
	selector: 'my-main',
	templateUrl: 'main.component.html',
	styleUrls: [ 'main.component.css' ],
	host: { '[@fadeAnimation]': 'true' },
	animations: [
		trigger('fadeAnimation', [
			state('*', style({})), transition('void => *', [ style({}) ])
		])
	]
})

export class MainComponent implements OnDestroy, AfterViewInit {

	private hidden = true

	constructor() {}

	ngAfterViewInit() {
		this.hidden = false
	}

	ngOnDestroy(): void {
		this.hidden = true
	}
}



