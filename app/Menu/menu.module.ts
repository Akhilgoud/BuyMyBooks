import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import 'hammerjs';
import {MenuComponent} from './menu.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
<<<<<<< HEAD
  imports: [MaterialModule,
            AccordionModule,
            MdIconModule,
            PostModule,
            displayBooksModule,
            FormsModule,
            RouterModule.forRoot([{path:'',component : displayBooksComponent },{path: 'post' , component : PostComponent }],{useHash : true})],
=======
  imports: [CommonModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot()
  ],
>>>>>>> 76ba3fa8fdaa388e3d91877882de2064369f8804
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
