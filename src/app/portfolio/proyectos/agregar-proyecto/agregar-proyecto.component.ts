import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css'],
})
export class AgregarProyectoComponent implements OnInit {
  @Input() id!: string;
  @Input() cargarLista!: any;
  crearProyectoForm!: FormGroup;
  datosActual!: any;
  imgPreview!: any;

  private createForm() {
    this.crearProyectoForm = this.formBuilder.group({
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
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.crearProyectoForm.valueChanges.subscribe((selectedValue) => {
      this.imgPreview = selectedValue.img_url;
    });
  }

  submitForm() {
    this.activeModal.close(this.crearProyectoForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
