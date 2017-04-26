import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {PostComponent} from './post.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports:[FormsModule],
  declarations: [
      PostComponent
  ],
  exports: [PostComponent]
})
export class PostModule {}
