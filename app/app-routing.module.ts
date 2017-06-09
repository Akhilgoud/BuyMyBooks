import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {PostComponent} from './Post/post.component';
import {LoginComponent} from './Login/login.component';

export const appRoutes:Routes = [
  { path: 'PostBook', component: PostComponent},
  { path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
