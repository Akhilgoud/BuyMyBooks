import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';

import { AppComponent } from './app.component';
import {MenuModule} from './Menu/menu.module';

@NgModule({
  imports: [
    BrowserModule,
    MenuModule,
    MaterialModule.forRoot(), 
    AccordionModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent  
  ]
})
export class AppModule {}
