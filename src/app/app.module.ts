
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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PerfilUsuarioComponent } from './portfolio/perfil-usuario/perfil-usuario.component';
import { EducacionComponent } from './portfolio/educacion/educacion.component';
import { ExperienciaComponent } from './portfolio/experiencia/experiencia.component';
import { HabilidadesComponent } from './portfolio/habilidades/habilidades.component';
import { ProyectosComponent } from './portfolio/proyectos/proyectos.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarPerfilUsuarioComponent } from './portfolio/perfil-usuario/editar-perfil-usuario/editar-perfil-usuario.component';
import { AgregarEducacionComponent } from './portfolio/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './portfolio/educacion/editar-educacion/editar-educacion.component';
import { AgregarExperienciaComponent } from './portfolio/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './portfolio/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarHabilidadesComponent } from './portfolio/habilidades/agregar-habilidades/agregar-habilidades.component';
import { EditarHabilidadesComponent } from './portfolio/habilidades/editar-habilidades/editar-habilidades.component';
import { AgregarProyectoComponent } from './portfolio/proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './portfolio/proyectos/editar-proyecto/editar-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegistroComponent,
    PortfolioComponent,
    ContactoComponent,
    PerfilUsuarioComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    EditarPerfilUsuarioComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    AgregarHabilidadesComponent,
    EditarHabilidadesComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }