import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ViewPostsComponent } from './components/panel/view-posts/view-posts.component';
import { PermisosRutasService } from './core/permisosRutas/permisos-rutas.service';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';

import { SesionComponent } from './layout/publico/sesion/sesion.component';


const routes: Routes = [
  { path: 'add-posts',    component: AddPostsComponent},
  { path: 'add-events', component: AddEventsComponent},
  { path: 'inicio',       component:  InicioComponent },
  { path: 'panel',        component: PanelComponent},
  { path: 'view-posts', component: ViewPostsComponent},
  {
    path:'sinsesion',component:SesionComponent,loadChildren:()=>import('./modules/login/login.module').then(m=>m.loginModule)
  },
  {
    path:'sesion',component:ContenidoComponent,canActivate:[PermisosRutasService],loadChildren:()=>import('./modules/principal/principal.module').then(m=>m.principalModule)
  },
  {
    path:"**",redirectTo:'sinsesion/login'
  }];
 // { path: '', redirectTo: '/inicio', pathMatch: 'full' },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
