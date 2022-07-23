import { Component, Input, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  constructor(private datosHabilidades: HabilidadesService) {}

  public miHabilidades: any;
  @Input() authority!: string;

  ngOnInit(): void {
    this.datosHabilidades.lista().subscribe((data) => {
      this.miHabilidades = data;
      console.log('this.miHabilidades tiene:', this.miHabilidades);
    });
  }
}
