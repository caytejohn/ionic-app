import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameappPage } from './gameapp.page';

const routes: Routes = [
  {
    path: '',
    component: GameappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameappPageRoutingModule {}
