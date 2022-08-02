import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './agregar-proyecto/agregar-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  constructor(
    private datosProyectos: ProyectosService,
    private modalService: NgbModal
  ) {}

  @Input() authority!: string;
  public miProyectos: any;
  private registroActual!: string;

  ngOnInit(): void {
    this.datosProyectos.lista().subscribe((data) => {
      this.miProyectos = data;
    });
  }
  openDetalleModal(id: number): any {
    const modalRef = this.modalService.open(DetalleProyectoComponent, {
      size: 'lg',
      scrollable: true,
    });
    modalRef.componentInstance.id = id;
  }

  openAddFormModal() {
    const modalRef = this.modalService.open(AgregarProyectoComponent, {
      size: 'lg',
      scrollable: true,
    });

    modalRef.result.then((result) => {
      this.datosProyectos.crear(result).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  visitarUrl(id: number) {
    this.datosProyectos.detalle(id).subscribe((result) => {
      this.registroActual = result.imgUrl;
    });

    if (!this.registroActual || this.registroActual === '') {
      return alert(
        'Este proyecto no está en línea! podés consultar el código fuente ingresando a la opción Mas Detalles'
      );
    } else {
      return window.open(this.registroActual);
    }
  }

  openEditFormModal(id: number): any {
    //Abro el componente modal de editar elemento, pasandole el ID.

    const modalRef = this.modalService.open(EditarProyectoComponent, {
      size: 'lg',
      scrollable: true,
    });
    modalRef.componentInstance.id = id;

    // una vez que se cierra el modal con los datos nuevos, se pasan aca para ejecutar la llamada a la API

    modalRef.result.then((result) => {
      this.datosProyectos.editar(result, id).subscribe((data) => {
        this.cargarLista();
      });
    });
  }

  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosProyectos.borrar(id).subscribe((data) => {
        this.cargarLista();
      });
    }
  }

  cargarLista() {
    this.datosProyectos.lista().subscribe((data) => {
      this.miProyectos = data;
    });
  }
}
