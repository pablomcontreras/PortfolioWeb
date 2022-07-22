import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListaProductoComponent } from './productos/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';
import { RegistroComponent } from './users/registro/registro.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { EditorComponent } from './portfolio/editor/editor.component';

import { GuardService as guard} from './guards/guard.service';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'portfolio', component: PortfolioComponent},

  // productos: utilizamos canActivate
  {path: 'editor', component: EditorComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},

  {path: 'detalle/:id', component: DetalleProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component: NuevoProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'editar/:id', component: EditarProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},

  //user y admin
  {path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'usuario', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}},

  // rutas a login y registro
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  {path: '**', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }