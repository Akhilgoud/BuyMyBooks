import {HttpModule,Http,Response} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import { Books } from './book'
//import { Observable } from 'rxjs/Rx';
@Injectable()
export class BooksService {
  http: Http;
  returnCommentStatus:Object = [];
  posts_Url: string = 'http://booksstore.000webhostapp.com/services/insertCommonBookDetails';
  getpostIdUrl : string = 'http://booksstore.000webhostapp.com/services/getPostId';
  demoUrl : string = 'http://booksstore.000webhostapp.com/services/insertBookDetails';
  updateImagePathUrl : string = 'http://booksstore.000webhostapp.com/services/updateImagePath'
  constructor(public _http: Http) {
     this.http = _http;
  }

updateImagePath(imagepathservar : Object[])
{
  console.log(JSON.stringify(imagepathservar));
   return this.http.post(this.updateImagePathUrl, imagepathservar, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
}

  postCommonBookDetails(book:Books) {
     //ensure imports are included
      //import { Http, Response } from '@angular/http';
      //import 'rxjs/add/operator/map';
console.log(JSON.stringify(book));
     return this.http.post(this.demoUrl, book, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
  }

  upload(fileToUpload: any, postid : int) {
      let input:FormData = new FormData();
console.log(fileToUpload);
     Object.defineProperty(fileToUpload, 'name', {
  writable: true});
  fileToUpload.name = postid;
  console.log(fileToUpload);
  input.append("file1", fileToUpload,fileToUpload.name);
  //http://localhost:8080/imageupload/api/upload.php
//  https://booksstore.000webhostapp.com/upload.php
          return this.http.post("http://localhost:8080/imageupload/api/upload.php",input );
  }
/*
  getPostId(){
       return this.http.get(this.getpostIdUrl).map((response: Response) => <any[]>response.json())
                                          .do(
                                               data => console.log(JSON.stringify(data))
                                              )
                                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
*/
}
