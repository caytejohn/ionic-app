import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gameapp',
    pathMatch: 'full',
  },
  {
    path: 'gameapp',
    loadChildren: () =>
      import('./gameapp/gameapp.module').then((m) => m.GameappPageModule),
  },
  {
    path: 'game/:id',
    loadChildren: () =>
      import('./gamedetails/gamedetails.module').then(
        (m) => m.GamedetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
