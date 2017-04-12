import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';

import {MdIconModule} from '@angular/material';
import {displayBooksComponent} from './displayBooks.component';

@NgModule({
  imports: [MaterialModule, AccordionModule, MdIconModule
  ],
  declarations: [
      displayBooksComponent
  ],
  exports: [displayBooksComponent]
})
export class displayBooksModule {}
