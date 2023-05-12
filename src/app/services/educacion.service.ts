import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

const cabecera = {
  headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  //baseURL = 'https://mi-portfolio-ap.rj.r.appspot.com';
  //baseURL = 'http://127.0.0.1:3000/api/';
  baseURL = 'https://portfolio-backend-3qb9.onrender.com/api/'; //backend en internet

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(
      this.baseURL + 'educacion/',
      cabecera
    );
  }

  public detalle(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(
      this.baseURL + `educacion/${id}`,
      cabecera
    );
  }

  public crear(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL + 'educacion',
      educacion,
      cabecera
    );
  }

  public editar(educacion: Educacion, id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.baseURL + `educacion/${id}`,
      educacion,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.baseURL + `educacion/${id}`,
      cabecera
    );
  }
}
