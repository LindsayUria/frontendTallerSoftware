import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PanelComponent } from './components/panel/panel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



=======
import { AddEventsComponent } from './components/add-events/add-events.component';
>>>>>>> 13a6324e1d3dde334fb5cc84957366f12973a37c

@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    PanelComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD


=======
    AddEventsComponent,
>>>>>>> 13a6324e1d3dde334fb5cc84957366f12973a37c

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< HEAD
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule


=======
    AppRoutingModule
>>>>>>> 13a6324e1d3dde334fb5cc84957366f12973a37c
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
