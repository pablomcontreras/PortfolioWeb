import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  //baseURL = 'https://mi-portfolio-ap.rj.r.appspot.com';
  // baseURL = 'http://127.0.0.1:3000/api/';
  baseURL = 'https://portfolio-backend-3qb9.onrender.com/api/'; //backend en internet

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(
      this.baseURL + 'experiencia/',
      cabecera
    );
  }

  public detalle(id: string): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(
      this.baseURL + `experiencia/${id}`,
      cabecera
    );
  }

  public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL + 'experiencia',
      experiencia,
      cabecera
    );
  }

  public editar(experiencia: Experiencia, id: string): Observable<any> {
    return this.httpClient.put<any>(
      this.baseURL + `experiencia/${id}`,
      experiencia,
      cabecera
    );
  }

  public borrar(id: string): Observable<any> {
    // console.log("se llamo a borrar en el experiencia service con los siguientes parametros ", this.baseURL + `editor/experiencia/${id}`, cabecera);

    return this.httpClient.delete<any>(
      this.baseURL + `experiencia/${id}`,
      cabecera
    );
  }
}
