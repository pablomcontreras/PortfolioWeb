import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../models/habilidades';

const cabecera = {
  headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  //baseURL = 'https://mi-portfolio-ap.rj.r.appspot.com';
  baseURL = 'http://127.0.0.1:3000/api/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(
      this.baseURL + 'habilidades/',
      cabecera
    );
  }

  public detalle(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(
      this.baseURL + `habilidades/${id}`,
      cabecera
    );
  }

  public crear(habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(
      this.baseURL + 'habilidades',
      habilidades,
      cabecera
    );
  }

  public editar(habilidades: Habilidades, id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.baseURL + `habilidades/${id}`,
      habilidades,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.baseURL + `habilidades/${id}`,
      cabecera
    );
  }
}
