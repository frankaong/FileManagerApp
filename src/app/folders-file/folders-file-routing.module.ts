import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoldersFilePage } from './folders-file.page';

const routes: Routes = [
  {
    path: '',
    component: FoldersFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoldersFilePageRoutingModule {}
