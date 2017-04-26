import { Component, trigger, state, style, transition, animate, keyframes, OnInit } from '@angular/core';
import {getBooksService} from './displayBooks.service';
@Component({
  selector: 'bmb-displayBooks',
  templateUrl: './displayBooks.component.html',
  styleUrls:['displayBooks.component.scss'],
  animations: [
    trigger('FilterBox', [
      state('in', style({transform: 'translateX(4%)'})),
      state('out', style({transform: 'translateX(-110%)'})),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
    trigger('navIcon', [
      state('in', style({ transform: 'rotate(0deg)'})),
      state('out', style({ transform: 'rotate(180deg)'})),
      transition('in => out',  animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ])
  ]
})
export class displayBooksComponent {
  filterState:string = 'in';
  AllInOneData: any = [];
  OtherBooksData: any = [];
  TotalBooksData: any = [];
  toggleMenu() {
    this.filterState = this.filterState === 'out' ? 'in' : 'out';
  }

  constructor(private getBooksService: getBooksService) {}
  ngOnInit() {
    this.getBooksService.getAllinOne().subscribe(AllInOneData => {
      this.AllInOneData = AllInOneData,
      AllInOneData.forEach((key: any) => {
             this.TotalBooksData.push(key);

         })
      // this.TotalBooksData.push(AllInOneData),
      // console.log("asda " + JSON.stringify( AllInOneData))
    });
    this.getBooksService.getOtherBooks().subscribe(OtherBooksData => {
      this.OtherBooksData = OtherBooksData,
      OtherBooksData.forEach((key: any) => {
             this.TotalBooksData.push(key);
         })
    });



  }


}
