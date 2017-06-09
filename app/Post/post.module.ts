import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MaterialModule } from '@angular/material';
import {PostComponent} from './post.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:[FormsModule,
            CommonModule],
  declarations: [
      PostComponent
  ],
  exports: [PostComponent]
})
export class PostModule {}
