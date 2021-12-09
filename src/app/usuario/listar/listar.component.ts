import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  public usuarios : Usuario[] = [];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe((usuarios : any)=>{
      this.usuarios=usuarios;
      console.log(usuarios);
    })
  }

}
