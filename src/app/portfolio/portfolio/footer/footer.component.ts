import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioService } from 'src/app/services/perfi-usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private datosPerfilUsuario : PerfilUsuarioService) { }
  public  miPerfilUsuario : any;


  ngOnInit(): void {
    this.datosPerfilUsuario.lista().subscribe(data => {
    
      this.miPerfilUsuario = data[0];
      console.log("this.miPerfilUsuario tiene:" , this.miPerfilUsuario);
  
    });
  }

}
