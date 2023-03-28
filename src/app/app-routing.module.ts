import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { InicioComponent } from './components/inicio/inicio.component';
const routes: Routes = [
  { path: 'add-posts',    component: AddPostsComponent},

  { path: 'inicio',       component:  InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
