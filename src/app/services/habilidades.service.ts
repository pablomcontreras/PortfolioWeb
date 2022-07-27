import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../models/habilidades';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  baseURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]> {
    return  this.httpClient.get<Habilidades[]>(this.baseURL + 'api/habilidades/', cabecera);

  }

  public detalle(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.baseURL + `api/habilidades/${id}`, cabecera);
  }

  public crear(habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + '/editor/agregar/habilidades', habilidades, cabecera);
  }

  public editar(habilidades: Habilidades, id: number): Observable<any> {
    return this.httpClient.put<any>(this.baseURL + `/editor/editar/habilidades/${id}`, habilidades, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseURL + `/editor/borrar/habilidades/${id}`, cabecera);
  }
}