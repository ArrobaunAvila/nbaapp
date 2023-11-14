import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { ContextAppComponent } from './components/context-app/context-app.component';
import { ContextGlobalComponent } from './components/context-global/context-global.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderRenderComponent } from './components/header-render/header-render.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SupportComponent } from './pages/support/support.component';

@NgModule({
  declarations: [
     ContextAppComponent,
     ContextGlobalComponent,
     HeaderRenderComponent,
     LayoutComponent,
     HomeComponent,
     PlayerComponent,
     TeamsComponent,
     ScheduleComponent,
     SupportComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
