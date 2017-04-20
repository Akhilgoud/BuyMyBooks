import {HttpModule,Http,Response} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import { Books } from './book'
@Injectable()
export class BooksService {
  http: Http;
  returnCommentStatus:Object = [];
  posts_Url: string = 'http://booksstore.000webhostapp.com/services/insertCommonBookDetails';
  constructor(public _http: Http) {
     this.http = _http;
  }
  postCommonBookDetails(book:Books) {
     //ensure imports are included
      //import { Http, Response } from '@angular/http';
      //import 'rxjs/add/operator/map';
console.log(JSON.stringify(book));
     return this.http.post(this.posts_Url, book, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
     .map(res =>  res.json());
  }
}
