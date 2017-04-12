import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';


@Component({
    selector: 'bmb-displayBooks',
    templateUrl: './displayBooks.component.html',
    styleUrls:['displayBooks.component.scss'],
    animations: [
   trigger('FilterBox', [
     state('in', style({transform: 'translateX(4%)'})),
     state('out', style({transform: 'translateX(-110%)'})),
     transition('in => out', animate('400ms ease-out')),
     transition('out => in', animate('400ms ease-in'))
   ]),
   trigger('navIcon', [
            state('in', style({ transform: 'rotate(0deg)'})),
            state('out', style({ transform: 'rotate(180deg)'})),
            transition('in => out',  animate('200ms ease-in')),
            transition('out => in', animate('200ms ease-out'))
        ])
 ]
})
export class displayBooksComponent {
  filterState:string = 'in';
  toggleMenu() {
this.filterState = this.filterState === 'out' ? 'in' : 'out';
   }
}
