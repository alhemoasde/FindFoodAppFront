import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuarioRegistro.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  public usuarios : Usuario[] = [];

  UsuarioForm!:FormGroup;

  constructor(private usuarioService : UsuarioService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.UsuarioForm=this.fb.group({
      nombre:[''],
      correo:[''],
      telefono:[''],
      username:[''],
      password:[''],
      rol:['']
    })
    this.registrarUsuario();
  }

  registrarUsuario(){
    this.usuarioService.registrarUsuario(this.UsuarioForm.value).subscribe((respueta:any)=>{
    console.log(respueta);
    this.UsuarioForm.reset();
    })
  }

}
