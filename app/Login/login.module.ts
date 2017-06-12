import { NgModule } from '@angular/core';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {loginRegService} from './loginReg.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ModalModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [loginRegService],
  exports: [LoginComponent]
})
export class LoginModule {
}
