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
  constructor(private datosEducacion: EducacionService, private modalService: NgbModal) {}

  public miEducacion: any;

  @Input() authority!: string;


  ngOnInit(): void {
    this.datosEducacion.lista().subscribe((data) => {
      this.miEducacion = data;
    });
  }

  openAddFormModal() {
    const modalRef = this.modalService.open(AgregarEducacionComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openEditFormModal(id: number) {
    const modalRef = this.modalService.open(EditarEducacionComponent);
    modalRef.componentInstance.id = id; 
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosEducacion.borrar(id).subscribe();
window.location.reload();

    }}

}
