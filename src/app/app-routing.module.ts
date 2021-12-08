import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarUsuarioComponent } from './usuario/registrar/registrar.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { EliminarUsuarioComponent} from './usuario/eliminar/eliminar.component';
import { ListarUsuarioComponent} from './usuario/listar/listar.component';
import { CrearDonacionComponent} from './donacion/crear/crear.component';
import { ActualizarDonacionComponent} from './donacion/actualizar/actualizar.component';
import { SeleccionarDonacionComponent} from './donacion/seleccionar/seleccionar.component';
import { CancelarDonacionComponent} from './donacion/cancelar/cancelar.component';
import { FinalizarDonacionComponent} from './donacion/finalizar/finalizar.component';
import { EliminarDonacionComponent} from './donacion/eliminar/eliminar.component';
import { ListarDonacionComponent} from './donacion/listar/listar.component';



const routes: Routes = [
  {
    path:'',
    component: EntrarComponent,
    pathMatch:'full'
  },
  {
    path:'registrar',
    component: RegistrarUsuarioComponent,
  },
  {
    path:'inicio',
    component: InicioComponent,
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'actualizarDonacion',
    component: ActualizarDonacionComponent
  },
  {
    path:'cancelarDonacion',
    component: CancelarDonacionComponent
  },
  {
    path:'crearDonacion',
    component: CrearDonacionComponent
  },
  {
    path:'eliminarDonacion',
    component: EliminarDonacionComponent
  },
  {
    path:'finalizarDonacion',
    component: FinalizarDonacionComponent
  },
  {
    path:'listarDonacion',
    component: ListarDonacionComponent
  },
  {
    path:'seleccionarDonacion',
    component: SeleccionarDonacionComponent
  },
  {
    path:'eliminarUsuario',
    component: EliminarUsuarioComponent
  },
  {
    path:'listarUsuario',
    component: ListarUsuarioComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
