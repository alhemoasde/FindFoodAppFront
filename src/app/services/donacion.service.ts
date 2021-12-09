import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donacion } from '../models/donacion.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  baseUrl= environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  get headers(){
    return { headers: { 'Authorization' : this.getToken()}}
  }

  listarDonacion(){
    return this.http.get<Donacion[]>(`${this.baseUrl}/app/donaciones`,this.headers);
  }

  listarDonante(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/app/donantes`,this.headers);
  }

  listarBeneficiario(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/app/beneficiarios`,this.headers);
  }

  crearDonacion(data:Donacion){
    return this.http.post(`${this.baseUrl}/app/donacion`, data,this.headers);
  }

  seleccionarDonacion(data:Donacion){
    return this.http.post(`${this.baseUrl}/app/donacion/select`, data,this.headers);
  }

  finalizarDonacion(data:Donacion){
    return this.http.post(`${this.baseUrl}/app/donacion/finish`, data,this.headers);
  }

}
