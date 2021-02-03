import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruthPage } from './truth.page';

const routes: Routes = [
  {
    path: '',
    component: TruthPage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruthPageRoutingModule {}
