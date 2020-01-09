import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

//Importar Locales
import localeSv from '@angular/common/locales/es-SV';

  // registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeSv, 'es');

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
;

import { AdopcionComponent } from './adopcion/adopcion.component';
import { AdopcionService } from './servicio/adopcion.service';

import { DefuncionPostComponent } from './defuncion/defuncion-post/defuncion-post.component';
import { DefuncionListComponent } from './defuncion/defuncion-list/defuncion-list.component';

import { MatrimonioListComponent } from './matrimonio/matrimonio-list/matrimonio-list.component';
import { MatrimonioService } from './servicio/matrimonio.service';
import { MatrimonioPostComponent } from './matrimonio/matrimonio-post/matrimonio-post.component';
import { DefuncionService } from './servicio/defuncion.service';


const routes: Routes = [
  { path: 'nacimiento', component: NacimientoComponent },
  { path: 'nacimientopost', component: NacimientoPostComponent },

  { path: 'defuncion', component: DefuncionListComponent },
  { path: 'defuncionpost', component: DefuncionPostComponent },

  { path: 'matrimonio', component: MatrimonioListComponent },
  { path: 'matrimoniopost', component: MatrimonioPostComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    NacimientoComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NacimientoPostComponent,
    AdopcionComponent,
    DefuncionPostComponent,
    DefuncionListComponent,
    MatrimonioListComponent,
    MatrimonioPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],


  providers: [{ provide: LOCALE_ID, useValue: 'es' }, 
              NacimientoService,
              MatrimonioService,
              AdopcionService,
              DefuncionService],

  bootstrap: [AppComponent]
})
export class AppModule { }
