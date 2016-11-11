import { Injectable }     from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ScriptSaverService {

	private options: RequestOptions

	constructor(private http: Http) {
		let headers = new Headers({ 'Content-Type': 'application/json' }) // ... Set content type to JSON
		this.options = new RequestOptions({ headers: headers }) // Create a request option
	}
	
	save(script: string): Observable<any> {
		
		let profile = JSON.parse(localStorage.getItem("profile"))

		let user_id = profile.user_id
		
		let url = 'http://localhost:3011/scripts/save'

		return this.http.post(url, JSON.stringify({user_id: user_id, script: script}), this.options)
						.catch(this.handleError)
	}

	load(): Observable<any> {

		let profile = JSON.parse(localStorage.getItem("profile"))

		let user_id = profile.user_id
	
        let url = 'http://localhost:3011/scripts/load'

        return this.http.post(url, JSON.stringify({user_id: user_id}), this.options)
						.map(this.extractData)
						.catch(this.handleError)

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
