import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent implements OnInit {
  @Input() id!: string;
  @Input() cargarLista!: any;
  @Input() fromParent!: any;
  editarEducacionForm!: FormGroup;
  datosActual!: any;
  imgPreview!: any;

  private createForm() {
    this.editarEducacionForm = this.formBuilder.group({
      curso: '',
      institucion: '',
      img_url: '',
      fecha_desde: '',
      fecha_hasta: '',
      descripcion: '',
    });
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private miEducacion: EducacionService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    //  Levanto los datos del form clickeado:

    this.miEducacion.detalle(this.id).subscribe((data) => {
      this.datosActual = data;

      //una vez que se obtuvieron los datos del elemento seleccionado, los cargo en el formulario:

      this.actualizarForm();
    });

    this.editarEducacionForm.valueChanges.subscribe((selectedValue) => {
      this.imgPreview = selectedValue.img_url;
    });
  }

  submitEditForm() {
    this.activeModal.close(this.editarEducacionForm.value);
  }

  closeModal() {
    this.activeModal.close();
  }

  actualizarForm() {
    this.editarEducacionForm.setValue({
      curso: this.datosActual.curso,
      institucion: this.datosActual.institucion,
      img_url: this.datosActual.img_url,
      fecha_desde: this.datosActual.fecha_desde,
      fecha_hasta: this.datosActual.fecha_hasta,
      descripcion: this.datosActual.descripcion,
    });
  }

  actualizarPreview() {
    this.editarEducacionForm.valueChanges.subscribe((selectedValue) => {});
  }
}
