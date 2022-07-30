import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarExperienciaComponent } from './agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './editar-experiencia/editar-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor( private datosExperiencia: ExperienciaService,
    private modalService: NgbModal ) {}

  public miExperiencia: any;
  @Input() authority!: string;

  ngOnInit(): void {

    this.cargarLista();

  }

  openAddFormModal() {
    const modalRef = this.modalService.open(AgregarExperienciaComponent);

    modalRef.result.then((result) => {
      this.datosExperiencia.crear(result).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  openEditFormModal(id: number): any {

    //Abro el componente modal de editar elemento, pasandole el ID.

    const modalRef = this.modalService.open(EditarExperienciaComponent);
    modalRef.componentInstance.id = id;

    // una vez que se cierra el modal con los datos nuevos, se pasan aca para ejecutar la llamada a la API

    modalRef.result.then((result) => {
      this.datosExperiencia.editar(result, id).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosExperiencia.borrar(id).subscribe((data) => {
        this.cargarLista();
      });
    }
  }

  cargarLista() {
    this.datosExperiencia.lista().subscribe((data) => {
      this.miExperiencia = data;
    });
  }
}
