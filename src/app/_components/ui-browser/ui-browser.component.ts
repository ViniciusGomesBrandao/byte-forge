import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DraggModule } from '../../_directives/dragg/dragg.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TauriService } from '../../core/services';
import { HlmDialogComponent } from '../ui-dialog-helm/src/lib/hlm-dialog.component';
import { HlmDialogContentComponent } from '../ui-dialog-helm/src/lib/hlm-dialog-content.component';
import { HlmDialogDescriptionDirective } from '../ui-dialog-helm/src/lib/hlm-dialog-description.directive';
import { HlmDialogFooterComponent } from '../ui-dialog-helm/src/lib/hlm-dialog-footer.component';
import { HlmDialogHeaderComponent } from '../ui-dialog-helm/src/lib/hlm-dialog-header.component';
import { HlmDialogTitleDirective } from '../ui-dialog-helm/src/lib/hlm-dialog-title.directive';

@Component({
  selector: 'ui-browser',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective
  ],
  providers: [TauriService],
  templateUrl: './ui-browser.component.html',
  styleUrl: './ui-browser.component.scss'
})
export class UiBrowserComponent {
 
}
