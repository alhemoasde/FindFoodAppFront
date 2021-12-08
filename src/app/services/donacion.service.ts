import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donacion } from '../models/donacion.model';

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
    return { headers: { 'Authorization' : this.getToken() }}
  }

  listarDonacion(){
    return this.http.get<Donacion[]>(`${this.baseUrl}/app/donaciones`,this.headers)
  }
}
