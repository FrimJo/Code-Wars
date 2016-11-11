import { Component, ElementRef, ViewChild, OnInit }	from '@angular/core'
import * as THREE from 'three'


//let Honeyloops = require('honeyloops')

@Component({
    moduleId: module.id,
    selector: 'my-webgl',
    templateUrl: 'webgl.component.html',
    styleUrls: [ 'webgl.component.css' ]
})

export class WebGLComponent implements OnInit {

    @ViewChild('div') _divRef: ElementRef

    private _width: number = 640
    private _height: number = 480

    //private isRunning = false;
    /*private drawLoop = Honeyloops.batch(() => {
        console.log('Honeyloops')

        if (this.isRunning) this.draw();
    })*/

    constructor() {}

    public ngOnInit(){
            //console.log(this._divRef)

        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera( 75, this._width / this._height, 0.1, 1000 );

        let renderer = new THREE.WebGLRenderer();

        renderer.setSize( this._width, this._height );
        this._divRef.nativeElement.appendChild( renderer.domElement );


    }

    /*public start() { this.isRunning = true; this.drawLoop() }
    public stop()  { this.isRunning = false }

    private draw(){}*/
}



