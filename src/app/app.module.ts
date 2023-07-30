import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './Componentes/institucional/institucional.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './Componentes/administrador/administrador.component';
import { AjustesComponent } from './Componentes/ajustes/ajustes.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { NotificacionesComponent } from './Componentes/notificaciones/notificaciones.component';
import { PInicioComponent } from './Componentes/inicio/p-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InstitucionalComponent,
    HomeComponent,
    AdministradorComponent,
    AjustesComponent,
    LoginComponent,
    RegistroComponent,
    NotificacionesComponent,
    PInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
