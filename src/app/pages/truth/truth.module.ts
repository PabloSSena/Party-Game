import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruthPageRoutingModule } from './truth-routing.module';

import { TruthPage } from './truth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruthPageRoutingModule
  ],
  declarations: [TruthPage]
})
export class TruthPageModule {}
