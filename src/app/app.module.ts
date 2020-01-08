import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NacimientoComponent } from './nacimiento/nacimiento.component';
import { NacimientoService } from './servicio/nacimiento.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NacimientoPostComponent } from './nacimiento-post/nacimiento-post.component';
import { Routes, RouterModule } from '@angular/router';

import { AdopcionComponent } from './adopcion/adopcion.component';
import { AdopcionService } from './servicio/adopcion.service';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'nacimiento', component: NacimientoComponent },
  { path: 'nacimientopost', component: NacimientoPostComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NacimientoComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NacimientoPostComponent,
    AdopcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NacimientoService,
    AdopcionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
