import { Component, OnInit, Input } from '@angular/core';
import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  public miPerfilUsuario: any;

  @Input() authority!: string;

  constructor(private datosPerfilUsuario: PerfilUsuarioService) {}

  ngOnInit(): void {
    this.datosPerfilUsuario.lista().subscribe((data) => {
      this.miPerfilUsuario = data[0];
      console.log('this.miPerfilUsuario tiene:', this.miPerfilUsuario);
    });
  }
}
