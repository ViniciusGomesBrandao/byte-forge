import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "init",
    pathMatch: "full"
  },
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "init",
        component: InitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
