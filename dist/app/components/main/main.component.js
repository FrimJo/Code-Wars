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
let MainComponent = class MainComponent {
    constructor() {
        this.hidden = true;
    }
    ngAfterViewInit() {
        this.hidden = false;
    }
    ngOnDestroy() {
        this.hidden = true;
    }
};
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-main',
        templateUrl: 'main.component.html',
        styleUrls: ['main.component.css'],
        host: { '[@fadeAnimation]': 'true' },
        animations: [
            core_1.trigger('fadeAnimation', [
                core_1.state('*', core_1.style({})), core_1.transition('void => *', [core_1.style({})])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [])
], MainComponent);
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFpRyxlQUdqRyxDQUFDLENBSCtHO0FBZ0JoSDtJQUlDO1FBRlEsV0FBTSxHQUFHLElBQUksQ0FBQTtJQUVOLENBQUM7SUFFaEIsZUFBZTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDbkIsQ0FBQztBQUNGLENBQUM7QUExQkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUUsb0JBQW9CLENBQUU7UUFDbkMsSUFBSSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFO1FBQ3BDLFVBQVUsRUFBRTtZQUNYLGNBQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLFlBQUssQ0FBQyxHQUFHLEVBQUUsWUFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsaUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBRSxZQUFLLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQzthQUM3RCxDQUFDO1NBQ0Y7S0FDRCxDQUFDOztpQkFBQTtBQUVXLHFCQUFhLGdCQWF6QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHN0YXRlLCB0cmlnZ2VyLCBBZnRlclZpZXdJbml0ICB9XHRmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ215LW1haW4nLFxuXHR0ZW1wbGF0ZVVybDogJ21haW4uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJ21haW4uY29tcG9uZW50LmNzcycgXSxcblx0aG9zdDogeyAnW0BmYWRlQW5pbWF0aW9uXSc6ICd0cnVlJyB9LFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignZmFkZUFuaW1hdGlvbicsIFtcblx0XHRcdHN0YXRlKCcqJywgc3R5bGUoe30pKSwgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgWyBzdHlsZSh7fSkgXSlcblx0XHRdKVxuXHRdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBoaWRkZW4gPSB0cnVlXG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmhpZGRlbiA9IGZhbHNlXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWVcblx0fVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
