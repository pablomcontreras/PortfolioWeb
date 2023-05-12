import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilUsuario } from '../models/PerfilUsuario';
const cabecera = {
  headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PerfilUsuarioService {
  //baseURL = 'https://mi-portfolio-ap.rj.r.appspot.com';
  //baseURL = 'http://127.0.0.1:3000/api/';
  baseURL = 'https://portfolio-backend-3qb9.onrender.com'; //backend en internet

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<PerfilUsuario[]> {
    return this.httpClient.get<PerfilUsuario[]>(
      this.baseURL + 'perfilusuario/',
      cabecera
    );
  }

  public detalle(id: number): Observable<PerfilUsuario> {
    return this.httpClient.get<PerfilUsuario>(
      this.baseURL + `perfilusuario/${id}`,
      cabecera
    );
  }

  public crear(perfilUsuario: PerfilUsuario): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL + 'perfilusuario/',
      perfilUsuario,
      cabecera
    );
  }

  public editar(perfilUsuario: PerfilUsuario, id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.baseURL + `perfilusuario/${id}`,
      perfilUsuario,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.baseURL + `perfilUsuario/${id}`,
      cabecera
    );
  }
}
