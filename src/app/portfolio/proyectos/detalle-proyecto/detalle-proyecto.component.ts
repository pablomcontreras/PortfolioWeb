import { Component, OnInit, Input } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css'],
})
export class DetalleProyectoComponent implements OnInit {
  @Input() id!: number;
  datosActual!: any;

  constructor(
    public activeModal: NgbActiveModal,
    private miProyecto: ProyectosService
  ) {}

  ngOnInit(): void {
    this.miProyecto.detalle(this.id).subscribe((data) => {
      this.datosActual = data;
    });
  }

  visitarSourceUrl(id: number) {
    if (this.datosActual.sourceCodeUrl === null) {
      return alert(
        'El codigo fuente de este proyecto es privado. Si estás interesado en consultarlo, por favor contactame.'
      );
    } else {
      return window.open(this.datosActual.sourceCodeUrl);
    }
  }

  visitarUrl(id: number) {
    if (this.datosActual.proyectoUrl === null) {
      return alert(
        'Este proyecto no se encuentra publicado, pero podés consultar el código fuente en esta sección'
      );
    } else {
      return window.open(this.datosActual.proyectoUrl);
    }
  }
}
