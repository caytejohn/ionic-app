import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameappPageRoutingModule } from './gameapp-routing.module';

import { GameappPage } from './gameapp.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameappPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [GameappPage],
})
export class GameappPageModule {}
