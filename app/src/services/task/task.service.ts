import {Injectable, Injector} from '@angular/core';
// import {Storage} from '@ionic/storage';
import {Http} from '@angular/http'; 
// , Headers
import 'rxjs/add/operator/map';
 
/*
  Generated class for the Register provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TaskService {
  serverURL: any = null;
 
 constructor(public http: Http, public _injector:Injector) {
 }


 query() { 

    // var self = this;
    // return new Promise((resolve, reject) => {
    //   // We're using Angular Http provider to request the data,
    //   // then on the response it'll map the JSON data to a parsed JS object.
    //   // Next we process the data and resolve the promise with the new data.
    // //   var headers = self.setHeaders();
    //   console.log("Headers to apiURL " + self.apiurl);
    //    var headers = new Headers();
    //   headers.append('Authorization', 'Bearer ' + this.token);
    //   headers.append('Content-Type', 'application/json');

    //   this.http.get(self.apiurl, {headers:headers})
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       // we've got back the raw data, now generate the core schedule data
    //       // and save the data for later reference
    //       self.data = data;
    //       console.log("Agent Service retrieved data");
    //       console.log(data);
    //       resolve(data);
    //     },
    //     err => reject(err)
    //     );
    // });
 }
 post() { 
    //    return new Promise((resolve, reject) => {

    //   var headers = new Headers();
    //   headers.append('Authorization', 'Bearer ' + this.token);
    //   headers.append('Content-Type', 'application/json');
    //         console.log("apiURL " + self.apiurl);

    //   console.log("Headers");
    //   console.log(headers);
    //   this.http.post(self.apiurl, JSON.stringify(body), {headers: headers})
    //     .map(res => res.json())
    //     .subscribe(
    //       data => { // we've got back the raw data, now generate the core schedule data and save the data for later reference
    //         self.data = data;
    //         // $window.localStorage.gmatoken = data.token;
    //         if (data) {
    //           resolve(data);
    //         } else {
    //           console.log("Error - no data found");
    //           reject(data);
    //         }
    //       },
    //       err => reject(err)
    //     );
    // });
 }


static getHeaders() { 
    // generate headers for http authentication to server based on user token 

    var authHeaders:any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    };

    return authHeaders;
  }

}
 