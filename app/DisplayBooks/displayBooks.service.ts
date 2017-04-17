
import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class getBooksService{
    constructor(private http: Http) {}
    private allInOneUrl = 'http://booksstore.000webhostapp.com/services/allinonedetails';
    private OtherBooksUrl = 'http://booksstore.000webhostapp.com/services/booksdetails';

    getAllinOne(){
         return this.http.get(this.allInOneUrl).map((response: Response) => <any[]>response.json())
                                            .do(
                                                 data => console.log(JSON.stringify(data))
                                                )
                                            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

getOtherBooks(){
     return this.http.get(this.OtherBooksUrl).map((response: Response) => <any[]>response.json())
                                        .do(
                                             data => console.log(JSON.stringify(data))
                                            )
                                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}


}
