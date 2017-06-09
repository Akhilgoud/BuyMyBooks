import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import {MdIconModule} from '@angular/material';
import {MenuComponent} from './menu.component';
import {PostModule} from '../Post/post.module'
import {PostComponent} from '../Post/post.component'
import {displayBooksModule} from '../DisplayBooks/displayBooks.module';
import {displayBooksComponent} from '../DisplayBooks/displayBooks.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [MaterialModule,
            AccordionModule,
            MdIconModule,
            PostModule,
            displayBooksModule,
            FormsModule,
            RouterModule.forRoot([{path:'',component : displayBooksComponent },{path: 'post' , component : PostComponent }],{useHash : true})],
  declarations: [
      MenuComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
