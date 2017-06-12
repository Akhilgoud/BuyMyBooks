import { Component, ViewChild, ElementRef } from '@angular/core';
import {LoginComponent} from '../Login/login.component';
@Component({
  selector: 'bmb-menu',
  templateUrl: './menu.component.html',
  styleUrls:['menu.component.scss']
})
export class MenuComponent {
 @ViewChild('loginRegModal') loginRegModal : ElementRef;

  openModal = function(bool){
    if(bool) {
      this.loginRegModal.showmodal();
    } else {
      this.loginRegModal.hidemodal();
    }
  }


}
