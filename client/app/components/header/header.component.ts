import {
    Component , style, state, transition, trigger, OnInit, AfterViewInit,
    OnDestroy
} from '@angular/core'
import { Auth0Service } from '../../services/auth0.service'

@Component({
	moduleId: module.id,
  	selector: 'my-header',
  	templateUrl: 'header.component.html',
  	styleUrls: [ 'header.component.css' ],
    host: { '[@fadeAnimation]': 'true' },
    animations: [
      trigger('fadeAnimation', [
        state('*', style({})), transition('void => *', [ style({}) ])
      ])
    ]
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy{

  private initialHeight = 300;
  private hidden = true
  
  private height = function(){
    let height = this.initialHeight - document.body.scrollTop
    return height < 0? 0 : height
  };
  
  private anchor = function(){
    return this.initialHeight - this.height()
  }

  private opacity = function(){
    return ((this.height() / this.initialHeight) * 2 ) -1
  }

  private scrollTop = function() {
    let scrollTop = document.body.scrollTop
    return scrollTop > this.initialHeight ? this.initialHeight : scrollTop
  }

  constructor(
    private auth0Service: Auth0Service
    ) {}

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.hidden = false
  }

  ngOnDestroy(): void {
    this.hidden = true
  }

  onScroll(event): void {}
}
