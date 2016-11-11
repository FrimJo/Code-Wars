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
require('brace');
require('brace/theme/monokai');
require('brace/mode/javascript');
let AceEditorDirective = class AceEditorDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.textChanged = new core_1.EventEmitter();
        this.editorRef = new core_1.EventEmitter();
        const el = elementRef.nativeElement;
        el.classList.add('editor');
        this.editor = ace.edit(el);
        setTimeout(() => {
            this.editorRef.next(this.editor);
        });
        this.editor.on('change', () => {
            const newVal = this.editor.getValue();
            if (newVal === this.oldVal)
                return;
            if (typeof this.oldVal !== 'undefined') {
                this.textChanged.next(newVal);
            }
            this.oldVal = newVal;
        });
    }
    set options(value) {
        this.editor.setOptions(value || {});
    }
    set readOnly(value) {
        this._readOnly = value;
        this.editor.setReadOnly(value);
    }
    set theme(value) {
        this._theme = value;
        this.editor.setTheme(`ace/theme/${value}`);
    }
    set mode(value) {
        this._mode = value;
        this.editor.getSession().setMode(`ace/mode/${value}`);
    }
    set text(value) {
        if (value === this.oldVal)
            return;
        this.editor.setValue(value);
        this.editor.clearSelection();
        this.editor.focus();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], AceEditorDirective.prototype, "options", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], AceEditorDirective.prototype, "readOnly", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], AceEditorDirective.prototype, "theme", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], AceEditorDirective.prototype, "mode", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], AceEditorDirective.prototype, "text", null);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], AceEditorDirective.prototype, "textChanged", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], AceEditorDirective.prototype, "editorRef", void 0);
AceEditorDirective = __decorate([
    core_1.Directive({
        selector: '[ace-editor]'
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], AceEditorDirective);
exports.AceEditorDirective = AceEditorDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL2FjZS1lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBbUUsZUFBZSxDQUFDLENBQUE7QUFFbkYsUUFBTyxPQUFPLENBQUMsQ0FBQTtBQUNmLFFBQU8scUJBQXFCLENBQUMsQ0FBQTtBQUM3QixRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFPL0I7SUFxQ0UsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhoQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUd2QyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFDbEMsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUEvQ1EsSUFBSSxPQUFPLENBQUMsS0FBSztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVRLElBQUksUUFBUSxDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVRLElBQUksS0FBSyxDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFUSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRVEsSUFBSSxJQUFJLENBQUMsS0FBSztRQUNyQixFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztBQXdCSCxDQUFDO0FBaERDO0lBQUMsWUFBSyxFQUFFOzs7aURBQUE7QUFJUjtJQUFDLFlBQUssRUFBRTs7O2tEQUFBO0FBS1I7SUFBQyxZQUFLLEVBQUU7OzsrQ0FBQTtBQUtSO0lBQUMsWUFBSyxFQUFFOzs7OENBQUE7QUFLUjtJQUFDLFlBQUssRUFBRTs7OzhDQUFBO0FBT1I7SUFBQyxhQUFNLEVBQUU7O3VEQUFBO0FBQ1Q7SUFBQyxhQUFNLEVBQUU7O3FEQUFBO0FBdkNYO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO0tBQ3pCLENBQUM7O3NCQUFBO0FBRVcsMEJBQWtCLHFCQXdEOUIsQ0FBQSIsImZpbGUiOiJhcHAvZGlyZWN0aXZlcy9hY2UtZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAnYnJhY2UnO1xuaW1wb3J0ICdicmFjZS90aGVtZS9tb25va2FpJztcbmltcG9ydCAnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JztcbmRlY2xhcmUgdmFyIGFjZTogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWNlLWVkaXRvcl0nXG59KVxuXG5leHBvcnQgY2xhc3MgQWNlRWRpdG9yRGlyZWN0aXZlIHtcbiAgX3JlYWRPbmx5OiBhbnk7XG4gIF90aGVtZTogYW55O1xuICBfbW9kZTogYW55O1xuXG4gIGVkaXRvcjogYW55O1xuICBvbGRWYWw6IGFueTtcblxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyh2YWx1ZSkge1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnModmFsdWUgfHwge30pO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJlYWRPbmx5KHZhbHVlKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSB2YWx1ZTtcbiAgICB0aGlzLmVkaXRvci5zZXRSZWFkT25seSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdGhlbWUodmFsdWUpIHtcbiAgICB0aGlzLl90aGVtZSA9IHZhbHVlO1xuICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt2YWx1ZX1gKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBtb2RlKHZhbHVlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKGBhY2UvbW9kZS8ke3ZhbHVlfWApO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHRleHQodmFsdWUpIHtcbiAgICBpZih2YWx1ZSA9PT0gdGhpcy5vbGRWYWwpIHJldHVybjtcbiAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5lZGl0b3IuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgQE91dHB1dCgpIHRleHRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZWRpdG9yUmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xuXG4gICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdChlbCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yUmVmLm5leHQodGhpcy5lZGl0b3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICBpZihuZXdWYWwgPT09IHRoaXMub2xkVmFsKSByZXR1cm47XG4gICAgICBpZih0eXBlb2YgdGhpcy5vbGRWYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMudGV4dENoYW5nZWQubmV4dChuZXdWYWwpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbGRWYWwgPSBuZXdWYWw7XG4gICAgfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
