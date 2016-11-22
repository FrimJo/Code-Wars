"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const THREE = require('three');
//let Honeyloops = require('honeyloops')
let WebGLComponent = class WebGLComponent {
    //private isRunning = false;
    /*private drawLoop = Honeyloops.batch(() => {
        console.log('Honeyloops')

        if (this.isRunning) this.draw();
    })*/
    constructor() {
        this._width = 640;
        this._height = 480;
    }
    ngOnInit() {
        //console.log(this._divRef)
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this._width / this._height, 0.1, 1000);
        this.camera.position.z = 5;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this._width, this._height);
        this._divRef.nativeElement.appendChild(this.renderer.domElement);
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.render(0);
    }
    render(delta) {
        requestAnimationFrame(this.render);
        this.renderer.render(this.scene, this.camera);
    }
};
__decorate([
    core_1.ViewChild('div'), 
    __metadata('design:type', core_1.ElementRef)
], WebGLComponent.prototype, "_divRef", void 0);
WebGLComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-webgl',
        templateUrl: 'webgl.component.html',
        styleUrls: ['webgl.component.css']
    }), 
    __metadata('design:paramtypes', [])
], WebGLComponent);
exports.WebGLComponent = WebGLComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dlYmdsL3dlYmdsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXlELGVBQ3pELENBQUMsQ0FEdUU7QUFDeEUsTUFBWSxLQUFLLFdBQU0sT0FLdkIsQ0FBQyxDQUw2QjtBQUc5Qix3Q0FBd0M7QUFTeEM7SUFZSSw0QkFBNEI7SUFDNUI7Ozs7UUFJSTtJQUVKO1FBZlEsV0FBTSxHQUFXLEdBQUcsQ0FBQTtRQUNwQixZQUFPLEdBQVcsR0FBRyxDQUFBO0lBY2QsQ0FBQztJQUVULFFBQVE7UUFDUCwyQkFBMkI7UUFFL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBRSxDQUFBO1FBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUUsQ0FBQTtRQUVsRSxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQTtRQUMvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBRSxDQUFBO1FBQ2pFLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUE7UUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUE7UUFHdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQUs7UUFDaEIscUJBQXFCLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO0lBQ25ELENBQUM7QUFNTCxDQUFDO0FBbERHO0lBQUMsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OytDQUFBO0FBVHJCO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFFLHFCQUFxQixDQUFFO0tBQ3ZDLENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBb0QxQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3dlYmdsL3dlYmdsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfVx0ZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5cbi8vbGV0IEhvbmV5bG9vcHMgPSByZXF1aXJlKCdob25leWxvb3BzJylcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LXdlYmdsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3dlYmdsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsgJ3dlYmdsLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWJHTENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdkaXYnKSBfZGl2UmVmOiBFbGVtZW50UmVmXG5cbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gNjQwXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSA0ODBcblxuXG4gICAgcHJpdmF0ZSBzY2VuZTpUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGNhbWVyYTpUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYTtcbiAgICBwcml2YXRlIHJlbmRlcmVyOlRIUkVFLldlYkdMUmVuZGVyZXI7XG5cbiAgICAvL3ByaXZhdGUgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgLypwcml2YXRlIGRyYXdMb29wID0gSG9uZXlsb29wcy5iYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIb25leWxvb3BzJylcblxuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHRoaXMuZHJhdygpO1xuICAgIH0pKi9cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9kaXZSZWYpXG5cbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgdGhpcy5fd2lkdGggLyB0aGlzLl9oZWlnaHQsIDAuMSwgMTAwMCApXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKClcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQgKVxuICAgICAgICB0aGlzLl9kaXZSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50IClcblxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKVxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDBmZjAwIH0gKVxuICAgICAgICBsZXQgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKCBjdWJlIClcblxuXG4gICAgICAgIHRoaXMucmVuZGVyKDApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoZGVsdGEpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlbmRlciApXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApXG4gICAgfVxuXG4gICAgLypwdWJsaWMgc3RhcnQoKSB7IHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTsgdGhpcy5kcmF3TG9vcCgpIH1cbiAgICBwdWJsaWMgc3RvcCgpICB7IHRoaXMuaXNSdW5uaW5nID0gZmFsc2UgfVxuXG4gICAgcHJpdmF0ZSBkcmF3KCl7fSovXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
