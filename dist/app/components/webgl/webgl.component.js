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
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, this._width / this._height, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(this._width, this._height);
        this._divRef.nativeElement.appendChild(renderer.domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dlYmdsL3dlYmdsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXlELGVBQ3pELENBQUMsQ0FEdUU7QUFDeEUsTUFBWSxLQUFLLFdBQU0sT0FLdkIsQ0FBQyxDQUw2QjtBQUc5Qix3Q0FBd0M7QUFTeEM7SUFPSSw0QkFBNEI7SUFDNUI7Ozs7UUFJSTtJQUVKO1FBVlEsV0FBTSxHQUFXLEdBQUcsQ0FBQTtRQUNwQixZQUFPLEdBQVcsR0FBRyxDQUFBO0lBU2QsQ0FBQztJQUVULFFBQVE7UUFDUCwyQkFBMkI7UUFFL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFFdEYsSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFekMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBR2xFLENBQUM7QUFNTCxDQUFDO0FBaENHO0lBQUMsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OytDQUFBO0FBVHJCO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFFLHFCQUFxQixDQUFFO0tBQ3ZDLENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBa0MxQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3dlYmdsL3dlYmdsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfVx0ZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5cbi8vbGV0IEhvbmV5bG9vcHMgPSByZXF1aXJlKCdob25leWxvb3BzJylcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LXdlYmdsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3dlYmdsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsgJ3dlYmdsLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWJHTENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdkaXYnKSBfZGl2UmVmOiBFbGVtZW50UmVmXG5cbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gNjQwXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSA0ODBcblxuICAgIC8vcHJpdmF0ZSBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAvKnByaXZhdGUgZHJhd0xvb3AgPSBIb25leWxvb3BzLmJhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0hvbmV5bG9vcHMnKVxuXG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZykgdGhpcy5kcmF3KCk7XG4gICAgfSkqL1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgcHVibGljIG5nT25Jbml0KCl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2RpdlJlZilcblxuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuICAgICAgICBsZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgdGhpcy5fd2lkdGggLyB0aGlzLl9oZWlnaHQsIDAuMSwgMTAwMCApO1xuXG4gICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCApO1xuICAgICAgICB0aGlzLl9kaXZSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG5cbiAgICB9XG5cbiAgICAvKnB1YmxpYyBzdGFydCgpIHsgdGhpcy5pc1J1bm5pbmcgPSB0cnVlOyB0aGlzLmRyYXdMb29wKCkgfVxuICAgIHB1YmxpYyBzdG9wKCkgIHsgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZSB9XG5cbiAgICBwcml2YXRlIGRyYXcoKXt9Ki9cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
