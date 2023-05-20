import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}

  isLogin = false;
  roles!: any;
  authority!: string;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = JSON.parse(this.tokenService.getAuthorities());
      if (this.roles === 'ROLE_ADMIN') {
        this.authority = 'admin';
      } else {
        this.authority = 'user';
      }
    }

  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['home']);
  }
}
