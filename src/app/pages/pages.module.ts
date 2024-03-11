import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InitComponent } from './init/init.component';
import { UiTerminalComponent } from '../_components/ui-terminal/ui-terminal.component';
import { DraggModule } from '../_directives/dragg/dragg.module';
import { UiBrowserComponent } from '../_components/ui-browser/ui-browser.component';


@NgModule({
  declarations: [
    PagesComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiTerminalComponent,
    UiBrowserComponent,
    DraggModule
  ],
})
export class PagesModule { }
