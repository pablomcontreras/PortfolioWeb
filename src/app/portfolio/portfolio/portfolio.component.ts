import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService : TokenService,
              private router : Router ) { };


  isLogin = false;
  roles!: string[];
  authority!: string;


  ngOnInit(): void {  
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

    };


  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['home']);
  }


  }


