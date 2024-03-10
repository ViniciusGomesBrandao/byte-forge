import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InitComponent } from './init/init.component';
import { UiTerminalComponent } from '../_components/ui-terminal/ui-terminal.component';
import { DraggModule } from '../_directives/dragg/dragg.module';


@NgModule({
  declarations: [
    PagesComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiTerminalComponent,
    DraggModule
  ]
})
export class PagesModule { }
