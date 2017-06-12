import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class loginRegService{
  constructor(private http: Http) {}
  private authorize = 'http://booksstore.000webhostapp.com/services/customerlogin';
  private registerUrl = 'http://booksstore.000webhostapp.com/services/insertcustomer';


  authorizeUser(email,pwd){
    return this.http.get(this.authorize + "?email=\"" + email + "\"&password=\"" + pwd + "\"" )
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  registerUser(obj){
    return this.http.post(this.registerUrl , obj )
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
