import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css'],
})
export class DetalleProyectoComponent implements OnInit {
  @Input() _id!: string;
  datosActual!: any;
  cargado: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private miProyecto: ProyectosService
  ) {}

  ngOnInit(): void {
    this.miProyecto.detalle(this._id).subscribe((data) => {
      this.datosActual = data;
      this.cargado = true;
    });
  }

  visitarSourceUrl(id: string) {
    if (
      this.datosActual.sourcecode_url === null ||
      this.datosActual.sourcecode_url === ''
    ) {
      return Swal.fire({
        title: 'Ups!',
        text: 'El codigo fuente de este proyecto es privado. Si estás interesado en consultarlo, por favor contactame.',
        icon: 'info',
        confirmButtonText: 'Volver',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success',
        },
      });
    } else {
      return window.open(this.datosActual.sourcecode_url);
    }
  }

  visitarUrl(id: string) {
    if (
      this.datosActual.proyecto_url === null ||
      this.datosActual.proyecto_url === ''
    ) {
      return Swal.fire({
        title: 'Ups!',
        text: 'Este proyecto no está en línea! podés consultar el código fuente en esta sección.',
        icon: 'warning',
        confirmButtonText: 'Volver',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success',
        },
      });
    } else {
      return window.open(this.datosActual.proyecto_url);
    }
  }
}
