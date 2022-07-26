import { Component, OnInit, Input } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  constructor(private datosProyectos: ProyectosService) {}

  public miProyectos: any;

  @Input() authority!: string;

  ngOnInit(): void {
    this.datosProyectos.lista().subscribe((data) => {
      this.miProyectos = data;
      console.log('this.miProyectos tiene:', this.miProyectos);
    });
  }
}
