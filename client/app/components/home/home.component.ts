import {Component, ElementRef, ViewChild, OnInit, NgZone} from '@angular/core'
import { ArenaService } from '../../services/arena.service'
import { SocketService }  from '../../services/socket.service'

@Component({
	moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
  	styleUrls: [ 'home.component.css' ]

})

export class HomeComponent implements OnInit {

    @ViewChild('canvas') canvasRef: ElementRef

    private _width: number = 640
    private _height: number = 480
    private _canvas;
    private _context;
    private _drawId;
    private _bodies = [];

    constructor(
        private arenaService: ArenaService,
        private socketService: SocketService,
        private ngZone: NgZone
        ) {}

    ngOnInit() {

        // Set up context
        this._canvas = this.canvasRef.nativeElement
        this._context = this._canvas.getContext('2d')

    	this.arenaService.join()

        this.socketService.getMessages('bodies').subscribe(
            (bodies: string) => this._bodies = JSON.parse(bodies)
        )

        this.socketService.getMessages('err').subscribe(
            (err: string) => console.log(JSON.parse(err))
        )

        // Set up draw loop
        this._drawId = this.ngZone.runOutsideAngular(() => { return requestAnimationFrame(() => this._draw()) })
    }

    // Runs each frame
    private _draw(){
        requestAnimationFrame(() => this._draw())

        // Clear screen for new draw
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

        // Draw all available bodies
        this._bodies.map(body => this._drawRobotAt(body.position, '#FF0000'))

    }

    private _drawRobotAt(position, color) {

        // Draw robot on position
        let circle = new Path2D()
        circle.arc(position.x,position.y,20,0,2*Math.PI)

        this._context.fillStyle = color
        this._context.fill(circle)
    }

    ngOnDestroy() {
    	this.arenaService.leave()
        cancelAnimationFrame(this._drawId)
        this._drawId = null
    }
}