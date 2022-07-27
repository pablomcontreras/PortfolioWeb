import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { EducacionComponent } from '../educacion.component';


@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent implements OnInit {
  @Input() id!: number;
  myForm2!: FormGroup;
  datosActual!: any;

  private createForm() {
    this.myForm2 = this.formBuilder.group({
      curso: '',
      institucion: '',
      imgUrl: '',
      fechaDesde: '',
      fechaHasta: '',
      descripcion: '',
    });
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private miEducacion: EducacionService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {

    this.miEducacion.detalle(this.id).subscribe((data) => {
      this.datosActual = data;
      //una vez que se obtuvieron los datos del elemento seleccionado, los cargo en el formulario:
      this.actualizarForm();
    });
  }

  submitEditForm() {
    this.activeModal.close(this.myForm2.value);
    this.miEducacion.editar(this.myForm2.value, this.id).subscribe();
window.location.reload()  }

  closeModal() {
    this.activeModal.close();
  }

  actualizarForm() {
    this.myForm2.setValue({
      curso: this.datosActual.curso,
      institucion: this.datosActual.institucion,
      imgUrl: this.datosActual.imgUrl,
      fechaDesde: this.datosActual.fechaDesde,
      fechaHasta: this.datosActual.fechaHasta,
      descripcion: this.datosActual.descripcion,
    });
  }
}
