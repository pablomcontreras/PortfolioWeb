import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  //baseURL = 'https://mi-portfolio-ap.rj.r.appspot.com/';
  //baseURL='http://127.0.0.1:3000/api/'
  baseURL = 'https://portfolio-backend-3qb9.onrender.com/api/'; //backend en internet

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.baseURL + 'proyectos/');
  }

  public detalle(id: string): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(
      this.baseURL + `proyectos/${id}`,
      cabecera
    );
  }

  public crear(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL + 'proyectos',
      proyectos,
      cabecera
    );
  }

  public editar(proyectos: Proyectos, id: string): Observable<any> {
    return this.httpClient.put<any>(
      this.baseURL + `proyectos/${id}`,
      proyectos,
      cabecera
    );
  }

  public borrar(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      this.baseURL + `proyectos/${id}`,
      cabecera
    );
  }
}
