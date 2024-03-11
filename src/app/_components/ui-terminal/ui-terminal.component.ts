import { Component, ElementRef, ViewChild } from '@angular/core';
import { DraggModule } from '../../_directives/dragg/dragg.module';
import { ResizeModule } from '../../_directives/resize/resize.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TauriService } from '../../core/services';
@Component({
  selector: 'ui-terminal',
  standalone: true,
  imports: [DraggModule, ResizeModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [TauriService],
  templateUrl: './ui-terminal.component.html',
  styleUrl: './ui-terminal.component.scss'
})
export class UiTerminalComponent {
  constructor(private tauri: TauriService) {

  }

  @ViewChild('inputCommand') inputCommand: ElementRef;
  @ViewChild('resultContainer') resultContainer: ElementRef;

  public command: string = "";
  public commandResults: string[] = []
  public icon: string = "👽";

  scrollToBottom() {
    this.resultContainer.nativeElement.scrollTop = this.resultContainer.nativeElement.scrollHeight;
  }

  newCommand() {
    if (this.command != "") {
      if (this.command != "clear") {
        this.commandResults.push(`${this.icon} ${this.command}`);
        this.tauri.exec_command(this.command).then(async (r) => {
          const result = String(r);
          await Promise.all(result.split("\r\n").map((rowResult: string) => {
            
            this.commandResults.push(rowResult)
            console.log(rowResult)
          }))
          console.log("s")
          setTimeout(() => {
            this.scrollToBottom();
          }, 1)
          
        })
      } else {
        this.commandResults = []
      }
      this.command = "";
    }
  }

  setFocus() {
    this.inputCommand.nativeElement.focus();
  }
}
