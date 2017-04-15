import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import {MdIconModule} from '@angular/material';
import {MenuComponent} from './menu.component';
import {PostModule} from '../Post/post.module'
import {PostComponent} from '../Post/post.component'
@NgModule({
  imports: [MaterialModule,
            AccordionModule,
            MdIconModule,
            PostModule,
            RouterModule.forRoot([{path: 'post' , component : PostComponent }],{useHash : true})],
  declarations: [
      MenuComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
