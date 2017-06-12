import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {displayBooksRoutingModule} from './DisplayBooks/displayBooks-routing.module';
import {AppRoutingModule} from './app-routing.module';
import {MenuModule} from './Menu/menu.module';
import {displayBooksModule} from './DisplayBooks/displayBooks.module';
import {PostModule} from './Post/post.module';
import {LoginModule} from './Login/login.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MenuModule,
    displayBooksModule,
    PostModule,
    LoginModule,
    displayBooksRoutingModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
