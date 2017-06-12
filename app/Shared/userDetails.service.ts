import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {userDetailsModal} from './userDetails.modal';
@Injectable()
export class userDetailsService{

   userDetails : userDetailsModal ;
   setData(obj){
     this.userDetails.UserId = obj.UserId;
     this.userDetails.UserName = obj.Name;
     this.userDetails.PhoneNumber = obj.PhoneNumber;
     this.userDetails.EmailId = obj.EmailId;
   }


  constructor(private http: Http) {}
  private authorize = 'http://booksstore.000webhostapp.com/services/customerlogin';

  authorizeUser(email,pwd){
    return this.http.get(this.authorize + "?email=\"" + email + "\"&password=\"" + pwd + "\"" )
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
