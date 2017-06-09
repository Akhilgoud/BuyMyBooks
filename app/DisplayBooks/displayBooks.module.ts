import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import {CommonModule} from '@angular/common';
import {MdIconModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

import {displayBooksComponent} from './displayBooks.component';
import {getBooksService} from './displayBooks.service';

@NgModule({
  imports: [MaterialModule, AccordionModule, MdIconModule, CommonModule, MdTooltipModule
  ],
  declarations: [
      displayBooksComponent
  ],
  exports: [displayBooksComponent],
  providers: [getBooksService]
})
export class displayBooksModule {}
