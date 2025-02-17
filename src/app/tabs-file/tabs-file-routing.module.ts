import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsFilePage } from './tabs-file.page';

const routes: Routes = [
  {
    path: '',
    component: TabsFilePage, 
    children: [
      {
        path: 'create-file',
        loadChildren: () => import('../create-file/create-file.module').then( m => m.CreateFilePageModule)
      },
      {
        path: 'folders-file',
        loadChildren: () => import('../folders-file/folders-file.module').then( m => m.FoldersFilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsFilePageRoutingModule {}
