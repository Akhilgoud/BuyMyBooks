import { Component, ViewChild, ElementRef } from '@angular/core';
import { loginRegService } from './loginReg.service';


@Component({
  selector: 'login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
  exportAs: 'loginModal'
})
export class LoginComponent {
  logintab: boolean = true;
  emailId: string = "";
  password: string = "";
  userInfo: any;

  regObj: string = "";
  regUserName: string = "";
  regEmailId: string = "";
  regPasswordval: string = "";

  @ViewChild('mdModal') modal: ElementRef;
  constructor(private _loginRegService: loginRegService) {

  }

  showmodal = function () {
    this.modal.show();
  }
  hidemodal = function () {
    this.modal.hide();
  }

  LoginSuccess = function (result) {
    this.userLoggedin(result.data);
    console.log(result);
  }

  custlogin = function () {
    this._loginRegService.authorizeUser(this.emailId, this.password).subscribe(
      result => this.LoginSuccess(result)
    );
  }

  saveCustomer = function () {
    var obj = {} as any;
    obj.regUserName = this.regUserName;
    obj.regEmailId = this.regEmailId;
    obj.regPasswordval = this.regPasswordval;
    this._loginRegService.registerUser(obj).subscribe(
      result => this.LoginSuccess(result)
    );
  }

  userLoggedin = function (data) {
    if (data) {
      this.userInfo = data;
      console.log(data);
      this.modal.hide();
    }
  }


}
