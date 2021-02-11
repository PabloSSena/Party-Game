import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToUsPageRoutingModule } from './to-us-routing.module';

import { ToUsPage } from './to-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToUsPageRoutingModule
  ],
  declarations: [ToUsPage]
})
export class ToUsPageModule {}
