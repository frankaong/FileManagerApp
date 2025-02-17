import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs-file/create-file',
    pathMatch: 'full'
  },
  {
    path: 'create-file',
    loadChildren: () => import('./create-file/create-file.module').then( m => m.CreateFilePageModule)
  },
  {
    path: 'folders-file',
    loadChildren: () => import('./folders-file/folders-file.module').then( m => m.FoldersFilePageModule)
  },
  {
    path: 'tabs-file',
    loadChildren: () => import('./tabs-file/tabs-file.module').then( m => m.TabsFilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
