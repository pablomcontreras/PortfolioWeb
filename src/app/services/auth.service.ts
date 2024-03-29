import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';

const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authURL = 'https://portfolio-backend-3qb9.onrender.com/api/login/';

  constructor(private httpClient: HttpClient) {}

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(
      this.authURL,
      usuario,
      cabecera
    );
  }
}
