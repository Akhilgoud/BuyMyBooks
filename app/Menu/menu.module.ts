import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import {MdIconModule} from '@angular/material';
import {MenuComponent} from './menu.component';

@NgModule({
  imports: [MaterialModule, AccordionModule, MdIconModule
  ],
  declarations: [
      MenuComponent
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
