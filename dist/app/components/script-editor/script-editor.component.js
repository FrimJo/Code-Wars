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
const script_saver_service_1 = require('../../services/script-saver.service');
const BehaviorSubject_1 = require('rxjs/BehaviorSubject');
/* Local class to contain a new save */
class SaveScript {
    constructor(script) {
        this.script = script;
    }
}
let ScriptEditorComponent = class ScriptEditorComponent {
    constructor(scriptSaverService) {
        this.scriptSaverService = scriptSaverService;
        this.savedScripts = new BehaviorSubject_1.BehaviorSubject(new SaveScript('Loading script…'));
        this.scriptText = this.savedScripts.getValue().script;
    }
    // Push a save script into the stream.
    saveScript(script) {
        this.savedScripts.next(new SaveScript(script));
    }
    keydown(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
                case 's':
                    event.preventDefault();
                    this.save(script => { });
                    break;
            }
        }
    }
    ngOnInit() {
        // Get the script from the server async, show loading while waiting
        this.scriptSaverService.load()
            .subscribe(script => this.scriptText = script, error => console.log(error));
        // Register auto save
        this.savedScripts
            .debounceTime(10000) // wait for 10000ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .subscribe(savedScript => {
            this.scriptSaverService.save(savedScript.script)
                .subscribe();
        });
    }
    save(callback) {
        let script = this.savedScripts.getValue().script;
        this.scriptSaverService.save(script).subscribe(script => callback(script));
    }
    ngOnDestroy() {
        // Save the script on leaving the view
        this.save(script => { });
    }
};
ScriptEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-script-editor',
        templateUrl: 'script-editor.component.html',
        styleUrls: ['script-editor.component.css'],
        providers: [script_saver_service_1.ScriptSaverService]
    }), 
    __metadata('design:paramtypes', [script_saver_service_1.ScriptSaverService])
], ScriptEditorComponent);
exports.ScriptEditorComponent = ScriptEditorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NjcmlwdC1lZGl0b3Ivc2NyaXB0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1Q0FBbUMscUNBQXFDLENBQUMsQ0FBQTtBQUN6RSxrQ0FBaUMsc0JBQXNCLENBQUMsQ0FBQTtBQUV4RCx1Q0FBdUM7QUFDdkM7SUFFQyxZQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztBQUM3QixDQUFDO0FBVUQ7SUFLQyxZQUNXLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSnpDLGlCQUFZLEdBQUcsSUFBSSxpQ0FBZSxDQUFhLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUt4RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFBO0lBQ25ELENBQUM7SUFFSixzQ0FBc0M7SUFDL0IsVUFBVSxDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQUs7UUFFbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELEtBQUssR0FBRztvQkFDSixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFLLENBQUMsQ0FBQyxDQUFBO29CQUN2QixLQUFLLENBQUE7WUFDVCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBRWQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDdkIsU0FBUyxDQUNULE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFDbkIsS0FBSyxJQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzNDLENBQUE7UUFFUCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVk7YUFDZixZQUFZLENBQUMsS0FBSyxDQUFDLENBQVEsbUNBQW1DO2FBQzlELG9CQUFvQixFQUFFLENBQUcsaURBQWlEO2FBQzFFLFNBQVMsQ0FBRSxXQUFXO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztpQkFDekMsU0FBUyxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDRixDQUFDO0lBRUksSUFBSSxDQUFDLFFBQStCO1FBRXhDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFBO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFFLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBRUksV0FBVztRQUVmLHNDQUFzQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFBSyxDQUFDLENBQUMsQ0FBQTtJQUN0QixDQUFDO0FBQ0osQ0FBQztBQWpFRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFFLDZCQUE2QixDQUFFO1FBQzVDLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO0tBQy9CLENBQUM7O3lCQUFBO0FBRVcsNkJBQXFCLHdCQXlEakMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zY3JpcHQtZWRpdG9yL3NjcmlwdC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfVx0ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JpcHRTYXZlclNlcnZpY2UgfVx0ZnJvbSAnLi4vLi4vc2VydmljZXMvc2NyaXB0LXNhdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH1cdFx0ZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG4vKiBMb2NhbCBjbGFzcyB0byBjb250YWluIGEgbmV3IHNhdmUgKi9cbmNsYXNzIFNhdmVTY3JpcHQge1xuXHRcblx0Y29uc3RydWN0b3IoXG4gICAgcHVibGljIHNjcmlwdDogc3RyaW5nKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdteS1zY3JpcHQtZWRpdG9yJyxcblx0dGVtcGxhdGVVcmw6ICdzY3JpcHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICdzY3JpcHQtZWRpdG9yLmNvbXBvbmVudC5jc3MnIF0sXG5cdHByb3ZpZGVyczogW1NjcmlwdFNhdmVyU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0cHJpdmF0ZSBzYXZlZFNjcmlwdHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNhdmVTY3JpcHQ+KG5ldyBTYXZlU2NyaXB0KCdMb2FkaW5nIHNjcmlwdOKApicpKVxuXHRwcml2YXRlIHNjcmlwdFRleHQ6IHN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKFxuICAgXHRwcml2YXRlIHNjcmlwdFNhdmVyU2VydmljZTogU2NyaXB0U2F2ZXJTZXJ2aWNlKSB7XG5cdFx0dGhpcy5zY3JpcHRUZXh0ID0gdGhpcy5zYXZlZFNjcmlwdHMuZ2V0VmFsdWUoKS5zY3JpcHRcbiAgICB9XG5cblx0Ly8gUHVzaCBhIHNhdmUgc2NyaXB0IGludG8gdGhlIHN0cmVhbS5cblx0cHVibGljIHNhdmVTY3JpcHQoc2NyaXB0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNhdmVkU2NyaXB0cy5uZXh0KG5ldyBTYXZlU2NyaXB0KHNjcmlwdCkpXG5cdH1cblxuXHRwdWJsaWMga2V5ZG93bihldmVudCl7XG5cdFx0XG5cdFx0aWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuXHQgICAgICAgIHN3aXRjaCAoU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkudG9Mb3dlckNhc2UoKSkge1xuXHQgICAgICAgIGNhc2UgJ3MnOlxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdCAgICAgICAgICAgIHRoaXMuc2F2ZShzY3JpcHQgPT4ge30pXG5cdCAgICAgICAgICAgIGJyZWFrXG5cdCAgICAgICAgfVxuICAgIFx0fVx0XG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cblx0XHQvLyBHZXQgdGhlIHNjcmlwdCBmcm9tIHRoZSBzZXJ2ZXIgYXN5bmMsIHNob3cgbG9hZGluZyB3aGlsZSB3YWl0aW5nXG5cdFx0dGhpcy5zY3JpcHRTYXZlclNlcnZpY2UubG9hZCgpXG5cdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRcdFx0XHRcdHNjcmlwdCA9PiB0aGlzLnNjcmlwdFRleHQgPSBzY3JpcHQsXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgZXJyb3IgID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0XHRcdFx0XHRcdClcblxuXHRcdC8vIFJlZ2lzdGVyIGF1dG8gc2F2ZVxuXHRcdHRoaXMuc2F2ZWRTY3JpcHRzXG5cdFx0XHQuZGVib3VuY2VUaW1lKDEwMDAwKSAgICAgICAgLy8gd2FpdCBmb3IgMTAwMDBtcyBwYXVzZSBpbiBldmVudHNcblx0XHRcdC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpICAgLy8gaWdub3JlIGlmIG5leHQgc2VhcmNoIHRlcm0gaXMgc2FtZSBhcyBwcmV2aW91c1xuXHRcdFx0LnN1YnNjcmliZSggc2F2ZWRTY3JpcHQgPT4ge1xuXHRcdFx0XHR0aGlzLnNjcmlwdFNhdmVyU2VydmljZS5zYXZlKHNhdmVkU2NyaXB0LnNjcmlwdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZSgpXG5cdFx0XHR9KVxuICBcdH1cblxuXHRwdWJsaWMgc2F2ZShjYWxsYmFjazogKHNjcmlwdDpzdHJpbmcpPT52b2lkKXtcblxuICBcdFx0bGV0IHNjcmlwdCA9IHRoaXMuc2F2ZWRTY3JpcHRzLmdldFZhbHVlKCkuc2NyaXB0XG5cdFx0dGhpcy5zY3JpcHRTYXZlclNlcnZpY2Uuc2F2ZShzY3JpcHQpLnN1YnNjcmliZSggc2NyaXB0ID0+IGNhbGxiYWNrKHNjcmlwdCkpXHRcdFx0XG4gIFx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblxuICBcdFx0Ly8gU2F2ZSB0aGUgc2NyaXB0IG9uIGxlYXZpbmcgdGhlIHZpZXdcblx0XHR0aGlzLnNhdmUoc2NyaXB0ID0+IHt9KVxuICBcdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
