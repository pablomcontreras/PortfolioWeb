import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';

@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css'],
})
export class EditarPerfilUsuarioComponent implements OnInit {
  @Input() id!: string;
  @Input() cargarLista!: any;
  editarPerfilUsuarioForm!: FormGroup;
  datosActual!: any;
  imgPreview!: any;

  private createForm() {
    this.editarPerfilUsuarioForm = this.formBuilder.group({
      nombre: '',
      cargo: '',
      intro: '',
      img_url: '',
      portada_url: '',
    });
  }
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private miPerfilUsuario: PerfilUsuarioService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    //  Levanto los datos del form clickeado:

    this.miPerfilUsuario.detalle(this.id).subscribe((data) => {
      this.datosActual = data;

      //una vez que se obtuvieron los datos del elemento seleccionado, los cargo en el formulario:

      this.actualizarForm();
    });

    this.editarPerfilUsuarioForm.valueChanges.subscribe((selectedValue) => {
      this.imgPreview = selectedValue.img_url;
    });
  }

  submitEditForm() {
    this.activeModal.close(this.editarPerfilUsuarioForm.value);
    //     this.miEducacion.editar(this.editarEducacionForm.value, this._id).subscribe(data => {
    // //aca hay que recargar la lista
    //   });
  }

  closeModal() {
    this.activeModal.close();
  }

  actualizarForm() {
    this.editarPerfilUsuarioForm.setValue({
      nombre: this.datosActual.nombre,
      cargo: this.datosActual.cargo,
      intro: this.datosActual.intro,
      img_url: this.datosActual.img_url,
      portada_url: this.datosActual.portada_url,
    });
  }

  actualizarPreview() {
    this.editarPerfilUsuarioForm.valueChanges.subscribe((selectedValue) => {});
  }
}
