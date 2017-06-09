import { Component,Input,ViewChild,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Books} from './book';
import { BooksService} from './book.service';
@Component({
  selector : 'post-books',
  templateUrl : './post.component.html',
  styleUrls : ['post.component.scss'],
  providers : [ BooksService]
})
export class PostComponent{
  constructor(private _BookService : BooksService){}
  @Input() book:Books;
  @ViewChild("fileInput") fileInput;
 imagepathvar : any = {postid: null,imagepath : ''};
  responseStatus:Object= [];
  PostId : Object = [];
  status:boolean ;
  path:string;
  showAllinOnediv:boolean = false;
  showBookdiv : boolean = false;

/*updateImagePath(): void {
  console.log ('Update Image Path' );
  console.log ( JSON.stringify(this.imagePath));
  this._BookService.postCommonBookDetails(this.book).subscribe(
    data => {console.log(this.responseStatus = data);
            this.addFile(); } ,
    err => console.log(err),
    () => 'Request Completed'
  );
}
*/
  addFile(postid : int): void {
    console.log('add file');
      let fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
          let fileToUpload = fi.files[0];
          this._BookService
              .upload(fileToUpload,postid)
              .subscribe(res => {
                  console.log(res);
                  this.path = "C:/Users/yeddulav/Desktop/upload folder/".concat(res._body,".jpg")
                  console.log(this.path);
                  this.imagepathvar.postid = res._body;
                  this.imagepathvar.imagepath  =  this.path;
                  this._BookService.updateImagePath(this.imagepathvar).subscribe(
                    data => {this.responseStatus = console.log(data);
                    } ,
                    err => console.log(err),
                    () => 'Request Completed'
            )


                  });
      }
  }

  changeFun(value:string)
  {
    if ( value == "ALLINONE")
    {
      this.showAllinOnediv = true;
      this.showBookdiv = false;
    }
    else if (value == "BOOK")
    {
      this.showAllinOnediv = false;
      this.showBookdiv = true;
    }
    else{
      alert("other else");
    }
  }
  submitPost()
  {
      console.log (' Data Posting to server have a preview : ' );
      console.log ( JSON.stringify(this.book));
      this._BookService.postCommonBookDetails(this.book).subscribe(
        data => {this.responseStatus = data;
        var obj = JSON.parse(this.responseStatus._body);
        console.log(obj.outo);
        this.addFile(obj.outo);
        } ,
        err => console.log(err),
        () => 'Request Completed'
)
}
ngOnInit() {
   this.book = new Books();
}
}
