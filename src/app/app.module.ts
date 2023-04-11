import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // importa FormsModule
import { AppComponent } from './app.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PanelComponent } from './components/panel/panel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ViewPostsComponent } from './components/panel/view-posts/view-posts.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SesionComponent } from './layout/publico/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    PanelComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    AddEventsComponent,
    ViewPostsComponent,
    ImageSliderComponent,
    SesionComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
