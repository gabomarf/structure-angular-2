import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Test } from '../../models/test';


@Injectable()
export class TestService {

	private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
	private heroesUrl = 'http://localhost:8080/formService';  // URL to web api

	constructor(private http: Http) { }

	getTest(): Promise<Test> {

 return new Promise((resolve, reject) => {
            this.http.get(this.heroesUrl+"/getTest" ).subscribe(
                res => {
                    console.log('Desde ServiceMethod');
                    console.log('================================================');
				console.log(res);
				console.log('================================================');
                    resolve(res.json());
                },
                error => {
                    console.log('error desde ServiceMethod');
                     console.log(error);

                    reject(error.json()); 
                }
                )
        })

  /*return this.http.get(this.heroesUrl+"/getTest")
               .toPromise()
               .then(response => response.json().data as Test)
               .catch(this.handleError);
               */
               
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}