import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  constructor(private datosProyectos: ProyectosService,
    private modalService: NgbModal) {}

  public miProyectos: any;

  @Input() authority!: string;

  ngOnInit(): void {
    this.datosProyectos.lista().subscribe((data) => {
      this.miProyectos = data;
    });
  }
  openDetalleModal(id: number): any {

    const modalRef = this.modalService.open(DetalleProyectoComponent, { size: 'lg', scrollable:true });
    modalRef.componentInstance.id = id;

  }
}
