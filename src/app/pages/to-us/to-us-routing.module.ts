import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToUsPage } from './to-us.page';

const routes: Routes = [
  {
    path: '',
    component: ToUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToUsPageRoutingModule {}
