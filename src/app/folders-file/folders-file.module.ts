import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoldersFilePageRoutingModule } from './folders-file-routing.module';

import { FoldersFilePage } from './folders-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoldersFilePageRoutingModule
  ],
  declarations: [FoldersFilePage]
})
export class FoldersFilePageModule {}
