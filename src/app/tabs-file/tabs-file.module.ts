import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsFilePageRoutingModule } from './tabs-file-routing.module';

import { TabsFilePage } from './tabs-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsFilePageRoutingModule
  ],
  declarations: [TabsFilePage]
})
export class TabsFilePageModule {}
