import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NacimientoComponent } from '../app/nacimiento/nacimiento-list/nacimiento.component';
import { NacimientoService } from './servicio/nacimiento.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NacimientoPostComponent } from '../app/nacimiento/nacimiento-post/nacimiento-post.component';
import { Routes, RouterModule } from '@angular/router';

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
    NacimientoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NacimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
