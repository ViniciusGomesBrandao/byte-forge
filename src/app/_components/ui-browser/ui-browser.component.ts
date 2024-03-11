import { Component, ElementRef, ViewChild } from '@angular/core';
import { DraggModule } from '../../_directives/dragg/dragg.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TauriService } from '../../core/services';
@Component({
  selector: 'ui-browser',
  standalone: true,
  imports: [DraggModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [TauriService],
  templateUrl: './ui-browser.component.html',
  styleUrl: './ui-browser.component.scss'
})
export class UiBrowserComponent {

}
