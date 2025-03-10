import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms'; // importa FormsModule
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
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SelectInterestComponent } from './components/edit-profile/select-interest/select-interest.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    EditProfileComponent,
    SelectInterestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    MatSnackBarModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
