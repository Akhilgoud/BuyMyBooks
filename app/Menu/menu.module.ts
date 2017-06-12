import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import 'hammerjs';
import {MenuComponent} from './menu.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [CommonModule,
    FormsModule,
    RouterModule,
     ModalModule.forRoot()
  ],
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
