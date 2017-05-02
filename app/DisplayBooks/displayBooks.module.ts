import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MdIconModule} from '@angular/material';
// import {MdTooltipModule} from '@angular/material';
// import {MdSidenavModule} from '@angular/material';
import {displayBooksRoutingModule} from './displayBooks-routing.module';
import {displayBooksComponent} from './displayBooks.component';
import {getBooksService} from './displayBooks.service';

@NgModule({
  imports: [MaterialModule, CommonModule,displayBooksRoutingModule,BrowserAnimationsModule
  ],
  declarations: [
      displayBooksComponent
  ],
  exports: [displayBooksComponent],
  providers: [getBooksService]
})
export class displayBooksModule {}
