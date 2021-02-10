import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path:'',
    redirectTo:'/menu',
    pathMatch:'full'
  },
  {
    path: 'truth',
    loadChildren: () => import('./pages/truth/truth.module').then( m => m.TruthPageModule)
  },
  {
    path: 'to-us',
    loadChildren: () => import('./pages/to-us/to-us.module').then( m => m.ToUsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
