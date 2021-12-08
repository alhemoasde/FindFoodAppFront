import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  //formulario
  loginForm!: FormGroup;

  //FB, para construir el formulario
  constructor(private fb: FormBuilder, private serviceUsuario: UsuarioService, private router: Router) { }

  //Inicializar y contruir el fomulario
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password: ['',Validators.required]
    })
  }

  entrar(){
    console.log(this.loginForm)
    if(this.loginForm.status=="VALID"){
      this.serviceUsuario.iniciarSesion(this.loginForm.value).subscribe(data => {
        this.router.navigateByUrl("inicio")
      })
    }else{
      alert("Hay campos vacios")
    }
    
  }

}
