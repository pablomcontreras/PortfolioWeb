import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service'



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor( private datosExperiencia: ExperienciaService ) {}

  public miExperiencia: any;
  isLogin = false;
  roles!: string[];
  @Input() authority!: string;

  ngOnInit(): void {

    this.datosExperiencia.lista().subscribe((data) => {
      this.miExperiencia = data;
      console.log('this.miExperiencia tiene:', this.miExperiencia);
    });
  }

  borrar(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.datosExperiencia.borrar(id).subscribe();
window.location.href = "/#experiencia";
    }}


}
