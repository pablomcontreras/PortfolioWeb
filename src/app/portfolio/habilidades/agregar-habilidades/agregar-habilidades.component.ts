import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css'],
})
export class AgregarHabilidadesComponent implements OnInit {
  @Input() id!: number;
  crearHabilidadesForm!: FormGroup;
  avanceTag!: string;
  estiloAvance!: String;
  incremento!: any;
  bandera?: number = 1;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.crearHabilidadesForm = this.formBuilder.group({
      titulo: '',
      avance: '',
    });
  }
  submitForm() {
    console.log('valores que envia el form: ', this.crearHabilidadesForm.value);
    this.activeModal.close(this.crearHabilidadesForm.value);
  }

  ngOnInit(): void {
    this.crearHabilidadesForm.valueChanges.subscribe((selectedValue) => {
      this.avanceTag = selectedValue.avance;
      this.setearStep();
      console.log('Valor de incremento: ', this.incremento);
    });
  }

  setearStep() {
    if (this.avanceTag == '85') {
      this.avanceTag = '90';
    }

    if (this.bandera == 1) {
      this.incremento = '15';
      if (parseInt(this.avanceTag) == 90) {
        this.bandera = 0;
      }
    }
    if (this.bandera == 0) {
      this.incremento = '5';
      if (parseInt(this.avanceTag) == 90) {
        this.bandera = 1;
      }
    }
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
