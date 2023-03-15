//configuracion de aplicacion
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from "./Component/nav-bar/nav-bar-component/nav-bar.component";
import { NavMapComponent } from './Component/nav-Map/nav-map.component';
import { UserComponent } from './Component/user/user.component';
import { HomeComponent } from './Component/home/home.component';
import { ParametrosyPlantillasComponent } from './Component/parametrosy-plantillas/parametrosy-plantillas.component';
import { EjecuciondeFlujoComponent } from './Component/ejecucionde-flujo/ejecucionde-flujo.component';
import { GestiondeUsuariosComponent } from './Component/gestionde-usuarios/gestionde-usuarios.component';
import { CarguedeAchivosComponent } from './Component/carguede-achivos/carguede-achivos.component';
import { AuditoriaComponent } from './Component/auditoria/auditoria.component';
import { CargaPlantillaComponent } from './Component/carga_plantilla/carga-plantilla.component';
import { EditPlantillasComponent } from './Component/edit-plantillas/edit-plantillas.component';
import { EditUsuarioComponent } from './Component/edit-usuario/edit-usuario.component';
import { CreateUserComponent } from './Component/create-user/create-user.component';
import { LoginComponent } from './Component/login/login.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { DeactivadeGuard } from './guards/deactivade.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';



  const routes:Routes=[
      {path:"", redirectTo:"/login", pathMatch:"full"},
      {path:"login", component: LoginComponent},
      {path:"nav", component: NavBarComponent, canActivate:[PermissionsGuard], canDeactivate:[DeactivadeGuard], loadChildren:()=> import("./Component/nav-bar/customers-routing.module").then(m=>m.CustomersRoutingModule) },
      {path: '**', redirectTo:"login"},
  ];
   
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NavMapComponent,
        UserComponent,
        HomeComponent,
        ParametrosyPlantillasComponent,
        EjecuciondeFlujoComponent,
        GestiondeUsuariosComponent,
        CarguedeAchivosComponent,
        AuditoriaComponent,
        CargaPlantillaComponent,
        EditPlantillasComponent,
        EditUsuarioComponent,
        CreateUserComponent,
        LoginComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ]
})
export class AppModule { }
