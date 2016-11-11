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
let ArenaService = class ArenaService {
    constructor(http) {
        this.http = http;
    }
    join() {
        let profile = JSON.parse(localStorage.getItem("profile"));
        let user_id = profile.user_id;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://localhost:3011/arenas/join';
        let body = JSON.stringify({ user_id: user_id });
        let resp = this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
    }
    leave() {
        let profile = JSON.parse(localStorage.getItem("profile"));
        let user_id = profile.user_id;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://localhost:3011/arenas/leave';
        let body = JSON.stringify({ user_id: user_id });
        let resp = this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
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
ArenaService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ArenaService);
exports.ArenaService = ArenaService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hcmVuYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBK0IsZUFDL0IsQ0FBQyxDQUQ2QztBQUM5Qyx1QkFBd0QsZUFDeEQsQ0FBQyxDQURzRTtBQUN2RSw2QkFBMkIsaUJBRTNCLENBQUMsQ0FGMkM7QUFHNUM7SUFFQyxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFakMsSUFBSTtRQUNILElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFFN0IsSUFBSSxPQUFPLEdBQU8sSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBLENBQUMsK0JBQStCO1FBQy9GLElBQUksT0FBTyxHQUFPLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUMsMEJBQTBCO1FBRTNGLElBQUksR0FBRyxHQUFHLG1DQUFtQyxDQUFBO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTtRQUU3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2QixTQUFTLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDekQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUU3QixJQUFJLE9BQU8sR0FBTyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUEsQ0FBQywrQkFBK0I7UUFDL0YsSUFBSSxPQUFPLEdBQU8sSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQywwQkFBMEI7UUFFM0YsSUFBSSxHQUFHLEdBQUcsb0NBQW9DLENBQUE7UUFDOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1FBRTdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZCLFNBQVMsRUFBRSxDQUFBO0lBRWIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFhO1FBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFHLENBQUM7SUFDM0IsQ0FBQztJQUNPLFdBQVcsQ0FBRSxLQUFxQjtRQUV6QyxvRUFBb0U7UUFDcEUsSUFBSSxNQUFjLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGVBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sTUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzRCxDQUFDO1FBRUQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7QUFDRixDQUFDO0FBeEREO0lBQUMsaUJBQVUsRUFBRTs7Z0JBQUE7QUFDQSxvQkFBWSxlQXVEeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYXJlbmEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXJlbmFTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe31cblxuXHRqb2luKCl7XG5cdFx0bGV0IHByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZmlsZVwiKSlcblx0XHRsZXQgdXNlcl9pZCA9IHByb2ZpbGUudXNlcl9pZFxuXG5cdFx0bGV0IGhlYWRlcnMgICAgID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cbiAgICAgICAgbGV0IG9wdGlvbnMgICAgID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KSAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxuXHRcdFxuXHRcdGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExL2FyZW5hcy9qb2luJ1xuXHRcdGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3VzZXJfaWQ6IHVzZXJfaWR9KVxuXHRcdFxuXHRcdGxldCByZXNwID0gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKVxuXHRcdFx0Lm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG5cdFx0XHQuc3Vic2NyaWJlKClcblx0fVxuXG5cdGxlYXZlKCl7XG5cdFx0bGV0IHByb2ZpbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZmlsZVwiKSlcblx0XHRsZXQgdXNlcl9pZCA9IHByb2ZpbGUudXNlcl9pZFxuXG5cdFx0bGV0IGhlYWRlcnMgICAgID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIC8vIC4uLiBTZXQgY29udGVudCB0eXBlIHRvIEpTT05cbiAgICAgICAgbGV0IG9wdGlvbnMgICAgID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KSAvLyBDcmVhdGUgYSByZXF1ZXN0IG9wdGlvblxuXHRcdFxuXHRcdGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDExL2FyZW5hcy9sZWF2ZSdcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt1c2VyX2lkOiB1c2VyX2lkfSlcblx0XHRcblx0XHRsZXQgcmVzcCA9IHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucylcblx0XHQubWFwKHRoaXMuZXh0cmFjdERhdGEpXG5cdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG5cdFx0LnN1YnNjcmliZSgpXG5cdFx0XG5cdH1cblxuXHRwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcblx0XHRsZXQgYm9keSA9IHJlcy5qc29uKCk7XG5cdFx0cmV0dXJuIGJvZHkuc2NyaXB0IHx8IHsgfTtcblx0fVxuXHRwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcblxuXHRcdC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG5cdFx0bGV0IGVyck1zZzogc3RyaW5nO1xuXHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG5cdFx0XHRjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xuXHRcdFx0Y29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcblx0XHRcdGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
