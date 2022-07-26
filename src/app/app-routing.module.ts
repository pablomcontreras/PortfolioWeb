import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';
import { RegistroComponent } from './users/registro/registro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GuardService as guard} from './guards/guard.service';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contacto', component: ContactoComponent},

  // productos: utilizamos canActivate

  // {path: 'detalle/:id', component: DetalleProductoComponent,
  // canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  // {path: 'nuevo', component: NuevoProductoComponent,
  // canActivate: [guard], data: { expectedRol: ['admin']}},
  // {path: 'editar/:id', component: EditarProductoComponent,
  // canActivate: [guard], data: { expectedRol: ['admin']}},

  //user y admin
  {path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'usuario', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}},

  // rutas a login y registro
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  {path: '**', redirectTo: 'portfolio', pathMatch: 'full'}
]; 



@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})

],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }



