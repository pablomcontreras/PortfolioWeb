import { Component, OnInit , Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  
  @Input() id!: number;
  crearEducacionForm!: FormGroup;


  constructor( public activeModal: NgbActiveModal,    private formBuilder: FormBuilder, private miEducacion: EducacionService
    )
     {     this.createForm();
    }

    private createForm() {
      this.crearEducacionForm = this.formBuilder.group({
        curso: '',
        institucion:'',
        imgUrl:'',
        fechaDesde:'',
        fechaHasta:'',
        descripcion: '',
      });
    }
     submitForm() {
      this.activeModal.close(this.crearEducacionForm.value);
      this.miEducacion.crear(this.crearEducacionForm.value).subscribe();
      console.log("el modal mando: " , this.crearEducacionForm.value);
      window.location.replace("./#educacion");

    }
  ngOnInit(): void {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
