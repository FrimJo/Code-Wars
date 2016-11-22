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


    private scene:THREE.Scene;
    private camera:THREE.PerspectiveCamera;
    private renderer:THREE.WebGLRenderer;

    //private isRunning = false;
    /*private drawLoop = Honeyloops.batch(() => {
        console.log('Honeyloops')

        if (this.isRunning) this.draw();
    })*/

    constructor() {}

    public ngOnInit(){
            //console.log(this._divRef)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, this._width / this._height, 0.1, 1000 )
        this.camera.position.z = 5

        this.renderer = new THREE.WebGLRenderer()

        this.renderer.setSize( this._width, this._height )
        this._divRef.nativeElement.appendChild( this.renderer.domElement )

        let geometry = new THREE.BoxGeometry( 1, 1, 1 )
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        let cube = new THREE.Mesh( geometry, material )

        this.scene.add( cube )


        this.render(0)
    }

    private render(delta) {
        requestAnimationFrame( this.render )
        this.renderer.render( this.scene, this.camera )
    }

    /*public start() { this.isRunning = true; this.drawLoop() }
    public stop()  { this.isRunning = false }

    private draw(){}*/
}



