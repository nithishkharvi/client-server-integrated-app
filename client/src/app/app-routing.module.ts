import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
