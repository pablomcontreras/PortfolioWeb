export class JwtModel {

  token!: string;
  user!: {
    _id: string,
    email: string,
    nombre: string,
    nombre_usuario: string,
    password: string,
    rol:string,
  }
}
