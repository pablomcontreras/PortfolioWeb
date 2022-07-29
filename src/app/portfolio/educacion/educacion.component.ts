import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducacionService } from 'src/app/services/educacion.service';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  constructor(
    private datosEducacion: EducacionService,
    private modalService: NgbModal
  ) {
    this.cargarLista();
  }

  public miEducacion: any;

  @Input() authority!: string;

  ngOnInit(): void {}

  openAddFormModal() {
    const modalRef = this.modalService.open(AgregarEducacionComponent);

    modalRef.result.then((result) => {
      this.datosEducacion.crear(result).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  openEditFormModal(id: number): any {

    //Abro el componente modal de editar elemento, pasandole el ID.

    const modalRef = this.modalService.open(EditarEducacionComponent);
    modalRef.componentInstance.id = id;

    // una vez que se cierra el modal con los datos nuevos, se pasan aca para ejecutar la llamada a la API

    modalRef.result.then((result) => {
      this.datosEducacion.editar(result, id).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosEducacion.borrar(id).subscribe((data) => {
        this.cargarLista();
      });
    }
  }

  cargarLista() {
    this.datosEducacion.lista().subscribe((data) => {
      this.miEducacion = data;
    });
  }
}
