import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggDirective } from './dragg.directive';



@NgModule({
  declarations: [
    DraggDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggDirective
  ]
})
export class DraggModule { }
