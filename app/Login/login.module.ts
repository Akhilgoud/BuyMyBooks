import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import 'hammerjs';
import {LoginComponent} from './login.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
