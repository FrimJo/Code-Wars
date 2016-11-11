import { Injectable }     from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ArenaService {

	constructor(private http: Http){}

	join(){
		let profile = JSON.parse(localStorage.getItem("profile"))
		let user_id = profile.user_id

		let headers     = new Headers({ 'Content-Type': 'application/json' }) // ... Set content type to JSON
        let options     = new RequestOptions({ headers: headers }) // Create a request option
		
		let url = 'http://localhost:3011/arenas/join'
		let body = JSON.stringify({user_id: user_id})
		
		let resp = this.http.post(url, body, options)
			.map(this.extractData)
			.catch(this.handleError)
			.subscribe()
	}

	leave(){
		let profile = JSON.parse(localStorage.getItem("profile"))
		let user_id = profile.user_id

		let headers     = new Headers({ 'Content-Type': 'application/json' }) // ... Set content type to JSON
        let options     = new RequestOptions({ headers: headers }) // Create a request option
		
		let url = 'http://localhost:3011/arenas/leave'
		let body = JSON.stringify({user_id: user_id})
		
		let resp = this.http.post(url, body, options)
		.map(this.extractData)
		.catch(this.handleError)
		.subscribe()
		
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.script || { };
	}
	private handleError (error: Response | any) {

		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		return Observable.throw(errMsg);
	}
}