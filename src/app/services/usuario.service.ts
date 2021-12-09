import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment'
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

   baseUrl= environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  get headers(){
    return { headers: { 'Authorization' : this.getToken() }}
  }

 
  iniciarSesion(dato:any) {
    return this.http.post(`${this.baseUrl}/app/login`,dato,{headers: {'Content-Type': 'application/json'}}).pipe(
      tap((data:any) => {
        localStorage.setItem('hash',data.hash);
      }),
      map(res => res)
    )
  }


  verificarToken():Observable<boolean>{
     return this.http.get(`${this.baseUrl}/app/verificar`,this.headers)
     .pipe(
       map((respuesta:any) =>{
            return respuesta.ok
       }),
       catchError(err =>of(false))
     )
  }

  registrarUsuario(data:Usuario){
    return this.http.post(`${this.baseUrl}/app/user`, data,this.headers);
  }

  eliminarUsuario(data:Usuario){
    return this.http.delete(`${this.baseUrl}/app/usuario/`+data.username,this.headers);
  }

  listarUsuarios(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/app/usuarios`,this.headers);
  }

}
