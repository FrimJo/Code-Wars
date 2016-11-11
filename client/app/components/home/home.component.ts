import { Component, ElementRef, ViewChild, OnInit } from '@angular/core'
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
    private _context;

    constructor(
        private arenaService: ArenaService,
        private socketService: SocketService
        ) {}

    ngOnInit() {

        // Set up context
        let canvas = this.canvasRef.nativeElement
        let context = canvas.getContext('2d')

        // Save context
        this._context = context


    	this.arenaService.join()
        this.socketService.getMessages('positions').subscribe(
            (message: string) => {

                // Clear screen for new draw
                context.clearRect(0, 0, canvas.width, canvas.height);

                let positions = JSON.parse(message)
                positions.map(position => this.drawRobotAt(position, '#FF0000'))
            })
    }

    drawRobotAt(position, color) {

        // Draw robot on position
        let circle = new Path2D()
        circle.arc(position.x,position.y,20,0,2*Math.PI)

        this._context.fillStyle = color
        this._context.fill(circle)
    }

    ngOnDestroy() {
    	this.arenaService.leave()
    }
}