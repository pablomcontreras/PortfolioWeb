import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css'],
})
export class EditarProyectoComponent implements OnInit {
  @Input() id!: string;
  @Input() cargarLista!: any;
  editarProyectoForm!: FormGroup;
  datosActual!: any;
  imgPreview!: any;

  private createForm() {
    this.editarProyectoForm = this.formBuilder.group({
      titulo: '',
      img_url: '',
      descripcion: '',
      tecnologias: '',
      proyecto_url: '',
      sourcecode_url: '',
    });
  }
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private miProyecto: ProyectosService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    //  Levanto los datos del form clickeado:

    this.miProyecto.detalle(this.id).subscribe((data) => {
      this.datosActual = data;

      //una vez que se obtuvieron los datos del elemento seleccionado, los cargo en el formulario:

      this.actualizarForm();
    });

    this.editarProyectoForm.valueChanges.subscribe((selectedValue) => {
      this.imgPreview = selectedValue.img_url;
    });
  }

  submitEditForm() {
    this.activeModal.close(this.editarProyectoForm.value);
  }

  closeModal() {
    this.activeModal.close();
  }

  actualizarForm() {
    this.editarProyectoForm.setValue({
      titulo: this.datosActual.titulo,
      img_url: this.datosActual.img_url,
      descripcion: this.datosActual.descripcion,
      tecnologias: this.datosActual.tecnologias,
      proyecto_url: this.datosActual.proyecto_url,
      sourcecode_url: this.datosActual.sourcecode_url,
    });
  }

  actualizarPreview() {
    this.editarProyectoForm.valueChanges.subscribe((selectedValue) => {});
  }
}
