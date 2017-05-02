import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { displayBooksComponent }    from './displayBooks.component';


const displayBooksRoutes: Routes = [
  { path: 'home',  component: displayBooksComponent },
  // { path: 'hero/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(displayBooksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class displayBooksRoutingModule { }
