import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PlayerComponent } from './pages/player/player.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
 {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
     path: 'home',
     component: HomeComponent
    },
    {
      path: 'team',
      component: TeamsComponent
    },
    {
      path: 'player',
      component: PlayerComponent
    },
    {
      path: 'schedule',
      component: ScheduleComponent
    },
    {
      path: 'support',
      component: SupportComponent
    }
  ]

 }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
