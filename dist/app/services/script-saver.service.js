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
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
let ScriptSaverService = class ScriptSaverService {
    constructor(http) {
        this.http = http;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        this.options = new http_1.RequestOptions({ headers: headers }); // Create a request option
    }
    save(script) {
        let profile = JSON.parse(localStorage.getItem("profile"));
        let user_id = profile.user_id;
        let url = 'http://localhost:3011/scripts/save';
        return this.http.post(url, JSON.stringify({ user_id: user_id, script: script }), this.options)
            .catch(this.handleError);
    }
    load() {
        let profile = JSON.parse(localStorage.getItem("profile"));
        let user_id = profile.user_id;
        let url = 'http://localhost:3011/scripts/load';
        return this.http.post(url, JSON.stringify({ user_id: user_id }), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res) {
        let body = res.json();
        return body.script || {};
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    }
};
ScriptSaverService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ScriptSaverService);
exports.ScriptSaverService = ScriptSaverService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zY3JpcHQtc2F2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQStCLGVBQy9CLENBQUMsQ0FENkM7QUFDOUMsdUJBQXdELGVBQ3hELENBQUMsQ0FEc0U7QUFDdkUsNkJBQTJCLGlCQUUzQixDQUFDLENBRjJDO0FBRzVDO0lBSUMsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBLENBQUMsK0JBQStCO1FBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQywwQkFBMEI7SUFDbkYsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFjO1FBRWxCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBRXpELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFFN0IsSUFBSSxHQUFHLEdBQUcsb0NBQW9DLENBQUE7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3ZGLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUk7UUFFSCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUV6RCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBRXZCLElBQUksR0FBRyxHQUFHLG9DQUFvQyxDQUFBO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDN0UsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUU3QixDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQWE7UUFDaEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUcsQ0FBQztJQUMzQixDQUFDO0lBQ08sV0FBVyxDQUFFLEtBQXFCO1FBRXpDLG9FQUFvRTtRQUNwRSxJQUFJLE1BQWMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxNQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9ELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNELENBQUM7UUFFRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztBQUNGLENBQUM7QUF0REQ7SUFBQyxpQkFBVSxFQUFFOztzQkFBQTtBQUNBLDBCQUFrQixxQkFxRDlCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3NjcmlwdC1zYXZlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JpcHRTYXZlclNlcnZpY2Uge1xuXG5cdHByaXZhdGUgb3B0aW9uczogUmVxdWVzdE9wdGlvbnNcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSAvLyAuLi4gU2V0IGNvbnRlbnQgdHlwZSB0byBKU09OXG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KSAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxuXHR9XG5cdFxuXHRzYXZlKHNjcmlwdDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRcblx0XHRsZXQgcHJvZmlsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9maWxlXCIpKVxuXG5cdFx0bGV0IHVzZXJfaWQgPSBwcm9maWxlLnVzZXJfaWRcblx0XHRcblx0XHRsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAxMS9zY3JpcHRzL3NhdmUnXG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeSh7dXNlcl9pZDogdXNlcl9pZCwgc2NyaXB0OiBzY3JpcHR9KSwgdGhpcy5vcHRpb25zKVxuXHRcdFx0XHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG5cdH1cblxuXHRsb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XG5cblx0XHRsZXQgcHJvZmlsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9maWxlXCIpKVxuXG5cdFx0bGV0IHVzZXJfaWQgPSBwcm9maWxlLnVzZXJfaWRcblx0XG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExL3NjcmlwdHMvbG9hZCdcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeSh7dXNlcl9pZDogdXNlcl9pZH0pLCB0aGlzLm9wdGlvbnMpXG5cdFx0XHRcdFx0XHQubWFwKHRoaXMuZXh0cmFjdERhdGEpXG5cdFx0XHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcblxuXHR9XG5cblx0cHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG5cdFx0bGV0IGJvZHkgPSByZXMuanNvbigpO1xuXHRcdHJldHVybiBib2R5LnNjcmlwdCB8fCB7IH07XG5cdH1cblx0cHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG5cblx0XHQvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuXHRcdGxldCBlcnJNc2c6IHN0cmluZztcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcblx0XHRcdGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cdFx0XHRlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
