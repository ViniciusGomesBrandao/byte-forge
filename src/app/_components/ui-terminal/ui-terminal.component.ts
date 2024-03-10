import { Component, ElementRef, ViewChild } from '@angular/core';
import { DraggModule } from '../../_directives/dragg/dragg.module';
import { ResizeModule } from '../../_directives/resize/resize.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-terminal',
  standalone: true,
  imports: [DraggModule, ResizeModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ui-terminal.component.html',
  styleUrl: './ui-terminal.component.scss'
})
export class UiTerminalComponent {

  @ViewChild('resultContainer') resultContainer: ElementRef;

  public command: string = "";
  public commandResults: string[] = ["          teste", "teste"]
  public icon: string = "🌑";

  scrollToBottom() {
    this.resultContainer.nativeElement.scrollTop = this.resultContainer.nativeElement.scrollHeight;
  }

  newCommand(){
    this.commandResults.push(`${this.icon} ${this.command}`);
    this.command = "";
    this.scrollToBottom();
  }
}
