import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custompreload.service';


const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./website/website.module').then( m => m.WebsiteModule),
  data: {
     preload: true
  }
},
{
  path: '**',
  component: NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
