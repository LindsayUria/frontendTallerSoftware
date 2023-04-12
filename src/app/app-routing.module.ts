import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ViewPostsComponent } from './components/panel/view-posts/view-posts.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

const routes: Routes = [
  { path: 'add-posts',    component: AddPostsComponent},
  { path: 'add-events', component: AddEventsComponent},
  { path: 'inicio',       component:  InicioComponent },
  { path: 'panel',        component: PanelComponent},
  { path: 'view-posts', component: ViewPostsComponent},
  { path: 'view-posts', component: ViewPostsComponent},
  { path: 'user-panel', component: UserPanelComponent},
 // { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
