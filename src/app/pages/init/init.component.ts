import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../core/services';


@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss'
})
export class InitComponent implements OnInit{
  constructor(
    private system: SystemService
  ){

  }

  ngOnInit(): void {
    // this.system.openBrowser("youtube.com");
  }
}
