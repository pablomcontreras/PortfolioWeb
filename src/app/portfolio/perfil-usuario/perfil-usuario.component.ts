import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';
import { EditarPerfilUsuarioComponent } from './editar-perfil-usuario/editar-perfil-usuario.component';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  public miPerfilUsuario: any;

  @Input() authority!: string;

  constructor(private datosPerfilUsuario: PerfilUsuarioService,
    private modalService: NgbModal) {}

  ngOnInit(): void {

    this.cargarLista();

    }
  

  openEditFormModal(id: number): any {

    //Abro el componente modal de editar elemento, pasandole el ID.

    const modalRef = this.modalService.open(EditarPerfilUsuarioComponent);
    modalRef.componentInstance.id = id;

    // una vez que se cierra el modal con los datos nuevos, se pasan aca para ejecutar la llamada a la API

    modalRef.result.then((result) => {
      this.datosPerfilUsuario.editar(result, id).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  cargarLista() {
    this.datosPerfilUsuario.lista().subscribe((data) => {
      this.miPerfilUsuario = data[0];
    });
  }

}
