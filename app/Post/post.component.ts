import { Component ,OnInit,Input} from '@angular/core';
import { Books} from './book'
import { BooksService} from './book.service'
@Component({
  selector : 'post-books',
  templateUrl : './post.component.html',
  styleUrls : ['post.component.scss'],
  providers : [ BooksService]
})
export class PostComponent implements OnInit{
  constructor(private _BookService : BooksService){}
  @Input() book:Books;
  responseStatus:Object= [];
  status:boolean ;

  submitPost()
  {
      console.log (' Data Posting to server have a preview : ' );
      console.log ( JSON.stringify(this.book));
      this._BookService.postCommonBookDetails(this.book).subscribe(
        data => console.log(this.responseStatus = data),
        err => console.log(err),
        () => 'Request Completed'
      );
  }

  ngOnInit() {
     this.book = new Books();
  }
}
