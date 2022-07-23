import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


//importo los modelos

import { PerfilUsuario } from 'src/app/models/PerfilUsuario';
import { Educacion } from 'src/app/models/educacion';
import { Experiencia } from 'src/app/models/experiencia';
import { Proyectos } from 'src/app/models/proyectos';
import { Habilidades } from 'src/app/models/habilidades';

//Importo los servicios

import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService : TokenService,
              private datosPerfilUsuario : PerfilUsuarioService,
              private datosEducacion : EducacionService,
              private datosExperiencia : ExperienciaService,
              private datosHabilidades : HabilidadesService,
              private datosProyectos : ProyectosService,
              private router : Router ) { };

  public  miPerfilUsuario : any;
  public miEducacion : any;
  public miExperiencia : any;
  public miHabilidades : any;
  public miProyectos : any;
  isLogin = false;
  roles!: string[];
  authority!: string;




  ngOnInit(): void {
   
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    };

  this.datosPerfilUsuario.lista().subscribe(data => {
    
    this.miPerfilUsuario = data[0];
    console.log("this.miPerfilUsuario tiene:" , this.miPerfilUsuario);

  });

  this.datosEducacion.lista().subscribe(data => {
    
    this.miEducacion = data;
    console.log("this.miEducacion tiene:" , this.miEducacion);

  });

  this.datosExperiencia.lista().subscribe(data => {
    
    this.miExperiencia = data;
    console.log("this.miExperiencia tiene:" , this.miExperiencia);

  });

  this.datosHabilidades.lista().subscribe(data => {
    
    this.miHabilidades = data;
    console.log("this.miHabilidades tiene:" , this.miHabilidades);

  });

  this.datosProyectos.lista().subscribe(data => {
    
    this.miProyectos = data;
    console.log("this.miProyectos tiene:" , this.miProyectos);

  });
  



    };


  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['home']);
  }


  }


