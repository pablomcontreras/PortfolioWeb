import { Component, OnInit, Input } from '@angular/core';

import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  constructor(private datosEducacion: EducacionService) {}

  public miEducacion: any;

  @Input() authority!: string;

  ngOnInit(): void {
    this.datosEducacion.lista().subscribe((data) => {
      this.miEducacion = data;
      console.log('this.miEducacion tiene:', this.miEducacion);
    });
  }
}
