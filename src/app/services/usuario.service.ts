import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment'
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

  /**
   *  Este método recibe por parametro el Username y el password,
   * Ademas debe enviar por la cabecera el Content-Type para que el CORS permita hacer la petición
   * El resultado se guardar en el LocalStorage (hash)
   * */
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

}
