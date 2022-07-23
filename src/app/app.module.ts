
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

// módulos para el cliente http y los formularios

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { interceptorProvider } from './services/producto-interceptor.service';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { RegistroComponent } from './users/registro/registro.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { EditorComponent } from './portfolio/editor/editor.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilUsuarioComponent } from './portfolio/portfolio/perfil-usuario/perfil-usuario.component';
import { EducacionComponent } from './portfolio/portfolio/educacion/educacion.component';
import { ExperienciaComponent } from './portfolio/portfolio/experiencia/experiencia.component';
import { HabilidadesComponent } from './portfolio/portfolio/habilidades/habilidades.component';
import { ProyectosComponent } from './portfolio/portfolio/proyectos/proyectos.component';
import { FooterComponent } from './portfolio/portfolio/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegistroComponent,
    PortfolioComponent,
    EditorComponent,
    ContactoComponent,
    PerfilUsuarioComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }