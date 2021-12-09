import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    //Pendiente validar el paso de parametros.
    this.elimiarUsuario(null);
  }

  elimiarUsuario(data : any){
    this.usuarioService.eliminarUsuario(data.value).subscribe((respueta:any)=>{
      console.log(respueta);
    })
  }

}
