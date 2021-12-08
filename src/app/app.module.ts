import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' // Cliente HTTP
import { ReactiveFormsModule } from '@angular/forms'; // Formularios reactivos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumoComponent } from './consumo/consumo/consumo.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ListarUsuarioComponent } from './usuario/listar/listar.component';
import { RegistrarUsuarioComponent } from './usuario/registrar/registrar.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { EliminarUsuarioComponent } from './usuario/eliminar/eliminar.component';
import { CrearDonacionComponent } from './donacion/crear/crear.component';
import { SeleccionarDonacionComponent } from './donacion/seleccionar/seleccionar.component';
import { CancelarDonacionComponent } from './donacion/cancelar/cancelar.component';
import { ActualizarDonacionComponent } from './donacion/actualizar/actualizar.component';
import { FinalizarDonacionComponent } from './donacion/finalizar/finalizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumoComponent,
    InicioComponent,
    ListarUsuarioComponent,
    RegistrarUsuarioComponent,
    EntrarComponent,
    EliminarUsuarioComponent,
    CrearDonacionComponent,
    SeleccionarDonacionComponent,
    CancelarDonacionComponent,
    ActualizarDonacionComponent,
    FinalizarDonacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //Para utilizar el formulario reactivo (FormGroup)
    HttpClientModule //Para utilizar el HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
