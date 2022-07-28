import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'autoprefixer';
import { EducacionService } from 'src/app/services/educacion.service';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  constructor(private datosEducacion: EducacionService, private modalService: NgbModal) { this.cargarLista();}

  public miEducacion: any;

  @Input() authority!: string;


  ngOnInit(): void {

   
}

  openAddFormModal() {
    const modalRef = this.modalService.open(AgregarEducacionComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
      this.cargarLista();
    }).catch((error) => {
    });
  }

  openEditFormModal(id: number) {
    const modalRef = this.modalService.open(EditarEducacionComponent);
    modalRef.componentInstance.id = id; 

    
    modalRef.result.then((result) => {
      console.log(result);
      this.cargarLista();
    }).catch((error) => {
    });
  }


  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosEducacion.borrar(id).subscribe(data => {
        this.cargarLista();
      });
      

    }}

    cargarLista(){
      this.datosEducacion.lista().subscribe((data) => {
        this.miEducacion = data;
      });
    }
    

}
