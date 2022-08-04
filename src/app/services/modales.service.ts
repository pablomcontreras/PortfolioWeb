import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacionComponent } from '../modals/modal-confirmacion/modal-confirmacion.component';

@Injectable({
  providedIn: 'root'
})
export class ModalesService {

  constructor(    private modalService: NgbModal
    ) { }
  
  confirmModal(mensaje: string) {
    //Abro el componente modal de editar elemento, pasandole el ID.

    const modalRef = this.modalService.open(ModalConfirmacionComponent,{
      animation: true,
      centered: true,
    });
    modalRef.componentInstance.mensaje = mensaje;

  }
}
