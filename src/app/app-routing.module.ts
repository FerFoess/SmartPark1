import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AdministradorComponent } from './Componentes/administrador/administrador.component';
import { AjustesComponent } from './Componentes/ajustes/ajustes.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { NotificacionesComponent } from './Componentes/notificaciones/notificaciones.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'ajustes',component:AjustesComponent},
  {path:'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'noti',component:NotificacionesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
