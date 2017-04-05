import {Injectable, Injector} from '@angular/core';
// import {Storage} from '@ionic/storage';
import {Http, Headers} from '@angular/http'; 
// , Headers
import 'rxjs/add/operator/map';
 
/*
  Generated class for the Register provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TaskService {
  serverURL: any = 'https://teamlistchat.herokuapp.com';
  // serverURL: any = 'http://localhost:3000'; // for development testing 

 constructor(public http: Http, public _injector:Injector) {
 }


 query() { 
      // query all tasks 
      var targetURL = this.serverURL + '/api/task';
      var headers:any = new Headers();
      headers.append('Content-Type', 'application/json');

      // return an observable that can be subscribed to for result or error 
      return this.http.get(targetURL,  {headers: headers}) 
        .map(res => res.json());
 }
 post(body:any) { 

      var targetURL = this.serverURL + '/api/task';
      var headers:any = new Headers();
      headers.append('Content-Type', 'application/json');

      // return an observable that can be subscribed to for result or error 
      return this.http.post(targetURL, JSON.stringify(body), {headers: headers}) 
        .map(res => res.json());
    
 } 
 


}
 