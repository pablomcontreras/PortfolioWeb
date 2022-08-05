import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from './contacto/contacto.component';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  
  isLogin = false;
  roles!: string[];
  authority!: string;




  constructor(private tokenService: TokenService, private router: Router,  
       private modalService: NgbModal, private scroller: ViewportScroller
    ) {}



  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

   

  }

  navegarA(anchor:string) {
    this.scroller.setOffset([0,80]);
    this.scroller.scrollToAnchor(anchor)
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['portfolio']);
    window.location.reload();
  }

  openContactoModal() {
    const modalRef = this.modalService.open(ContactoComponent, {
      size: 'lg',
      scrollable: true,
    });

    modalRef.result.then((result) => {alert("mensaje enviado con exito")
      });
    ;
  }
  

  




}
