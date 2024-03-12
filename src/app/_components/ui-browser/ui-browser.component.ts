import { Component, ElementRef, ViewChild } from '@angular/core';
import { DraggModule } from '../../_directives/dragg/dragg.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  public linkUrl: string = "https://www.google.com";
  public link: SafeUrl;

  showBrowser: boolean = true;

  @ViewChild('browserContent') browser: ElementRef;

  constructor(private sanitizer: DomSanitizer){
    this.link = this.generateSafeLink(this.linkUrl)
  }


  generateSafeLink(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  updateLink(){
    this.link = this.generateSafeLink(this.linkUrl);
    
  }

}
